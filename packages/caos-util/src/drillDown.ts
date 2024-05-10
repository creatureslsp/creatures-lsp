import {CommandCall, GameVariant} from "./caos-util";
import {Hover, Position} from "vscode-languageserver-types";
import {Nullable, RangeWithIndex} from "@bedalton/extension-util/src/types";
import {toVsRange} from "@bedalton/extension-util";
import {formatCaosDocumentation} from "./documentation-formattter";
import {Is} from "./is-util";

/**
 * Drill down into the command call to find its closest command and get its hover information
 * @param variant
 * @param position
 * @param commandCall
 */
export function drillDown(variant: GameVariant, position: Position, commandCall: CommandCall): Nullable<CommandCall> {
    if (commandCall == null) {
        return undefined;
    }
    
    if (!inRange(commandCall.textRange, position)) {
        return undefined;
    }
    
    if (inRange(commandCall.tokenTextRange, position)) {
        return commandCall;
    }
    
    for (const argument of commandCall.commandArguments) {
        if (argument == null) {
            continue;
        }
        
        if (!inRange(argument.textRange, position)) {
            continue;
        }
        
        if (!Is.commandCall(argument)) {
            return commandCall;
        }
        
        // console.log("Checking Argument: " + argument.text)
        return drillDown(variant, position, <CommandCall>argument) ?? commandCall;
    }
    return undefined;
}


/**
 * Checks that a position is in range
 * @param position
 * @param range
 */
function inRange(range: RangeWithIndex, position: Position): boolean {
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
