/* eslint-disable eqeqeq */
// noinspection JSUnusedGlobalSymbols

import {Hover, Position} from "vscode-languageserver-types";
import {GameVariant} from "@creatures-lsp/caos-kt";
import {
    caosCommandDefinitionFromCommandCall,
    type CaosParseResult,
    CommandCall
} from "@creatures-lsp/caos-kt/caos-parser";
import {inRange, Nullable, toVsRange} from "@creatures-lsp/extension-util";
import {formatCaosDocumentation} from "./documentation-formattter.js";
import {getCommandBeneathCursor} from "./cursor-data.js";
import {getCaosCursorPosition, getCaosCursorPositionFromRawText} from "@creatures-lsp/caos-kt/caos-cursor-data";
import {Is} from "./is-util.js";

// /**
//  * Gets the hover information as close to the position as possible, drilling down through all child command calls
//  * @param variant
//  * @param position
//  * @param commandCalls
//  */
// export function getHoverItem(variant: GameVariant, position: Position, commandCalls: CommandCall[]): Nullable<Hover> {
//     const commandCall = getCommandBeneathCursor(
//         variant,
//         commandCalls,
//         position,
//         true,
//     );
//     if (commandCall == null) {
//         return null;
//     }
//     const actualCommand = caosCommandDefinitionFromCommandCall(variant, commandCall);
//     if (!actualCommand) {
//         return null;
//     }
//     return <Hover>{
//         range: toVsRange(commandCall.tokenTextRange),
//         contents: {
//             kind: 'markdown',
//             value: formatCaosDocumentation(variant, actualCommand)
//         }
//     };
// }

/**
 * Gets the hover information as close to the position as possible, drilling down through all child command calls
 * @param variant
 * @param text
 * @param position
 */
export function getHoverItem(variant: GameVariant, text: string|CaosParseResult, position: Position): Nullable<Hover> {
    const {line, character} = position;
    const cursor = typeof text === "string"
        ? getCaosCursorPositionFromRawText(variant, text, line, character, true, false)
        : getCaosCursorPosition(text as CaosParseResult, line, character, false);
    
    if (cursor == null || cursor.command == null || cursor.closestItem == null) {
        return null;
    }
    
    const closestItem = cursor.closestItem;
    
    if (!Is.commandToken(closestItem)) {
        return null;
    }
    
    if (!inRange(closestItem.textRange, line, character, false)) {
        return null;
    }
    
    const command = cursor.command;
    
    return <Hover>{
        range: toVsRange(closestItem.textRange),
        contents: {
            kind: 'markdown',
            value: formatCaosDocumentation(variant, command)
        }
    };
}