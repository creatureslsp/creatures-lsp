/* eslint-disable eqeqeq */
// noinspection JSUnusedGlobalSymbols

import {Hover, Position} from "vscode-languageserver-types";
import {CommandCall, GameVariant} from "./caos-util";
import {inRange, Nullable, RangeWithIndex, toVsRange} from "@bedalton/extension-util";
import {drillDown} from "./drillDown";
import {formatCaosDocumentation} from "./documentation-formattter";

/**
 * Gets the hover information as close to the position as possible, drilling down through all child command calls
 * @param variant
 * @param position
 * @param commandCalls
 */
export function getHoverItem(variant: GameVariant, position: Position, commandCalls: CommandCall[]): Nullable<Hover> {
    for (const call of commandCalls) {
        const actualCommand = drillDown(variant, position, call);
        // eslint-disable-next-line eqeqeq
        if (actualCommand != null) {
            if (!inRange(actualCommand.tokenTextRange, position.line, position.character)) {
                return null;
            }
            // console.log("Position in command tokens: " + commandCall.command.command  +'; Position: ' + JSON.stringify(position) + "; Range" + JSON.stringify(repack(commandCall.tokenTextRange)));
            return <Hover> {
                range: toVsRange(actualCommand.tokenTextRange),
                contents: {
                    kind: 'markdown',
                    value: formatCaosDocumentation(variant, actualCommand.command)
                }
            };
        }
    }
    return undefined;
}