/* eslint-disable eqeqeq */
// noinspection JSUnusedGlobalSymbols

import {Hover, Position} from "vscode-languageserver-types";
import {GameVariant, CommandCall} from "./caos-util";
import {formatCaosDocumentation} from "./documentation-formattter";
import {Nullable, RangeWithIndex, toVsRange} from "@bedalton/extension-util";

/**
 * Checks that a position is in range
 * @param position
 * @param range
 */
function inRange(position: Position, range: RangeWithIndex): boolean {
    if (position.line < range.start.line!) {
        return false;
    }
    if (position.line > range.end.line!) {
        return false;
    }
    
    if (position.line == range.start.line) {
        if (position.character < (range.start.character! - 1)) {
            return false;
        }
    }
    if (position.line == range.end.line) {
        if (position.character > range.end.character!) {
            return false;
        }
    }
    return true;
}

/**
 * Drill down into the command call to find its closest command and get its hover information
 * @param variant
 * @param position
 * @param commandCall
 */
function drillDown(variant: GameVariant, position: Position, commandCall: CommandCall): Nullable<Hover> {
    if (commandCall == null) {
        return null;
    }
    
    if (!inRange(position, commandCall.textRange)) {
        // console.log("Position: " + JSON.stringify(position) + "; Is not in Range: " + JSON.stringify(repack(commandCall.textRange)))
        return null;
    }
    // console.log("Command call " + commandCall.command.command + " contains position: " + JSON.stringify(position) + " in Range: " + JSON.stringify(repack(commandCall.textRange)));
    if (inRange(position, commandCall.tokenTextRange)) {
        // console.log("Position in command tokens: " + commandCall.command.command  +'; Position: ' + JSON.stringify(position) + "; Range" + JSON.stringify(repack(commandCall.tokenTextRange)));
        return <Hover> {
            range: toVsRange(commandCall.tokenTextRange),
            contents: {
                kind: 'markdown',
                value: formatCaosDocumentation(variant, commandCall.command)
            }
        };
    } else {
        // console.log("Not in command token range: " + JSON.stringify(position) + "; Range" + JSON.stringify(repack(commandCall.tokenTextRange)));
    }
    for (const argument of commandCall.arguments) {
        if (argument == null) {
            continue;
        }
        if (argument.hasOwnProperty('arguments')) {
            // console.log("Checking Argument: " + argument.text)
            const drilled = drillDown(variant, position, <CommandCall>argument);
            if (drilled) {
                return drilled;
            }
        } else if (inRange(position, argument.textRange)) {
            // let typeName = getValueTypeName(argument.parameter.typeId);
            // if (typeName?.charAt(0) != '[') {
            //     typeName = '(' + typeName + ')'
            // }
            // return <Hover>{
            //     range: toVsRange(argument.textRange),
            //     contents: {
            //         kind: 'plaintext',
            //         value: `Parameter: ${argument.parameter.name} ${typeName}`
            //     }
            // };
        }
    }
    return null;
}


/**
 * Gets the hover information as close to the position as possible, drilling down through all child command calls
 * @param variant
 * @param position
 * @param commandCalls
 */
export function getHoverItem(variant: GameVariant, position: Position, commandCalls: CommandCall[]): Nullable<Hover> {
    for (const call of commandCalls) {
        const hover = drillDown(variant, position, call);
        // eslint-disable-next-line eqeqeq
        if (hover != null) {
            return hover;
        }
    }
    return null;
}