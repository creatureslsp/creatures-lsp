import {Position} from "vscode-languageserver";
import {inRange, Nullable} from "@creatures-lsp/extension-util";
import {drillDown} from "./drillDown.js";
import type {
    Argument,
    CommandCall,
} from "@creatures-lsp/caos-kt/caos-parser";
import {
    type CaosCursorData,
    getCaosCursorPosition,
} from "@creatures-lsp/caos-kt/caos-cursor-data";
import type {
    CaosParseResult,
} from "@creatures-lsp/caos-kt/caos-parser";
import type {
    CaosParserItem
} from "@creatures-lsp/caos-kt/caos-core";

import {Is} from "./is-util.js";

export function getCommandCallPositionalDataFromParseResult(
    parseResult: CaosParseResult,
    position: Position,
): Nullable<CommandCallPositionalData> {
    
    const {line, character} = position;
    
    let cursor: Nullable<CaosCursorData> = getCaosCursorPosition(parseResult, line, character, true);
    
    if (cursor == null) {
        return null;
    }
    
    const topLevelCommandCall = parseResult.commandCalls
        .filter(call => inRange(call.textRange, line, character))
        .sort((a, b) => b.textRange.startIndex - a.textRange.startIndex)
        .pop();
    
    if (topLevelCommandCall == null) {
        return null;
    }
    
    const commandCall = drillDown(parseResult.variant, position, topLevelCommandCall)
        ?? topLevelCommandCall;
    
    const closestItem = cursor.closestItem;
    
    const argumentIndex = commandCall
        .arguments
        .findIndex((a: Argument) => inRange(a.textRange, line, character, false, true));
    
    let argument: Nullable<Argument> = null;
    
    if (argumentIndex >= 0 && argumentIndex < (commandCall.arguments?.length ?? 0)) {
        argument = commandCall.arguments[argumentIndex];
    }
    return {
        commandCall,
        argumentIndex,
        closestItem,
        argument,
    } satisfies CommandCallPositionalData
    
}


export interface CommandCallPositionalData {
    readonly commandCall: CommandCall;
    readonly argumentIndex: Nullable<number>;
    readonly argument: Nullable<Argument>;
    readonly closestItem: Nullable<CaosParserItem>;
}