/* eslint-disable eqeqeq */
import type {GameVariant,} from "@creatures-lsp/caos-kt";
import type {CommandCall} from "@creatures-lsp/caos-kt/caos-parser";
import {inRange, type Nullable, sortTextRanges} from "@creatures-lsp/extension-util";
import {Position} from "vscode-languageserver-types";
import {Is} from "./is-util.js";
export * from "@creatures-lsp/caos-kt/caos-cursor-data";


function flattenCommands(call: CommandCall): CommandCall[] {
    if (!Is.commandCall(call)) {
        return [];
    }
    return [call, ...call.arguments.filter(Is.commandCall).flatMap(flattenCommands)];
}


export function getCommandBeneathCursor(
    variant: GameVariant,
    commandCalls: CommandCall[],
    position: Position,
    inTokenOnly: boolean,
): Nullable<CommandCall> {
    
    
    const containingCommands =  commandCalls
        .filter(call => inRange(call.textRange, position.line, Math.max(position.character, 0), false, true))
    const parentCommandCalls = containingCommands
        .flatMap(flattenCommands)
        .sort((a,b) => sortTextRanges(a.textRange, b.textRange));
    const call = parentCommandCalls
        .pop();
    
    if (!call) {
        return null;
    }
    
    if (!inTokenOnly || inRange(call.tokenTextRange, position.line, position.character)) {
        return call;
    }
    return null;
    //
    // for (const call of commandCalls) {
    //     if (call.textRange.end.line < position.line) {
    //         continue;
    //     }
    //     const actualCommand = drillDown(variant, position, call);
    //     // eslint-disable-next-line eqeqeq
    //     if (actualCommand != null) {
    //         if (inTokenOnly && !inRange(actualCommand.tokenTextRange, position.line, position.character)) {
    //             return null;
    //         }
    //         return actualCommand
    //     }
    // }
    // return null;
}
