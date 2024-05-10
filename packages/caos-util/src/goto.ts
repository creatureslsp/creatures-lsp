import {Definition, LocationLink, Range} from "vscode-languageserver-types";
import {inRange, RangeWithIndex, repack, toVsRange} from "@bedalton/extension-util"
import {collectors, CommandCall, CursorData, GameVariant, ParseResult} from "./caos-util";
import {getCursorPosition} from "./cursor-data";
import {Is} from "./is-util";
import {Nullable} from "@bedalton/extension-util/src/types";

const {scriptOffsets, parseCaosWithin} = collectors;
const parseTokens = collectors.parseTokens;


export function getGotoInformation(
    documentUri: string,
    variant: GameVariant,
    text: string | ParseResult | unknown,
    line: number,
    character: number
): Definition | LocationLink[] | undefined | null {
    let parseResult: ParseResult
    if (Is.parseResult(text) && text.scripts.length > 0) {
        const script = text.scripts.find(script => script != null && inRange(script.textRange, line, character))
        if (script == null) {
            return undefined;
        }
        parseResult = parseTokens(
            variant,
            text.originalText,
            script.items
        )
    } else {
        if (Is.parseResult(text)) {
            text = text.originalText
        } else if (typeof text !== 'string') {
            return undefined;
        }
        const offsets = scriptOffsets(
            text as string
        );
        const scriptRange = offsets.find(offset => inRange(offset, line, character, true, true));
        
        if (scriptRange == null) {
            return undefined;
        }
        parseResult = parseCaosWithin(
            variant,
            text as string,
            scriptRange.start.line,
            scriptRange.start.character,
            scriptRange.end.line,
            scriptRange.end.character
        )
    }
    
    if (parseResult == null) {
        return undefined;
    }
    
    const commandCalls = parseResult.commandCalls
    
    if (commandCalls.length === 0) {
        return undefined;
    }
    
    const cursor: Nullable<CursorData> = getCursorPosition(
        parseResult,
        line,
        character,
        false,
        false
    );
    
    if (cursor == null) {
        return undefined;
    }
    
    const command = cursor.command?.command;
    if (command == null) {
        return undefined;
    }
    
    const closestItemText = cursor.closestItem?.text?.trim() ?? '';
    if (closestItemText.length === 0) {
        return undefined;
    }
    switch (command) {
        case "SUBR":
            const subroutine = parseResult.commandCalls.find(c => c.command?.command === 'SUBR' && inRange(c.textRange, line, character, false, true));
            if (subroutine == null) {
                return undefined;
            }
            return getSubroutineUsage(documentUri, parseResult, subroutine, subroutine?.commandArguments[0]?.text ?? "");
        case "GSUB":
            return getSubroutineDefinition(documentUri, parseResult, closestItemText);
        default:
            return undefined;
    }
}


export function getSubroutineDefinition(documentUri: string, parserResult: ParseResult, name: string): Definition | LocationLink[] | undefined | null {
    if (name.length < 1) {
        return undefined;
    }
    
    let result = parserResult.commandCalls
        .find(c => c.command.command == "SUBR" && c.commandArguments.length > 0 && c.commandArguments[0].text === name);
    
    // Fallback to lowercase names if none were found with exact case
    if (result == null) {
        console.log("No result found for case sensitive match")
        name = name.toLowerCase();
        result = parserResult.commandCalls
            .find(c => c.command.command == "SUBR" && c.commandArguments.length > 0 && c.commandArguments[0].text.toLowerCase() === name);
    }
    if (result == null) {
        console.log("No result found for case-insensitive match")
        return undefined;
    }
    const range = <RangeWithIndex>repack(result.commandArguments[0]?.textRange ?? result.textRange)
    return <Definition>{
        uri: documentUri,
        range: <Range>{
            start: range.start!!,
            end: range.end!!
        }
    }
}

export function getSubroutineUsage(documentUri: string, parserResult: ParseResult, commandCall: CommandCall, name: string): Definition | LocationLink[] | undefined | null {
    if (name.length < 1) {
        return undefined;
    }
    
    let result = parserResult.commandCalls
        .filter(c => c.command.command == "GSUB" && c.commandArguments.length > 0 && c.commandArguments[0].text === name);
    
    // Fallback to lowercase names if none were found with exact case
    if (result.length < 1) {
        name = name.toLowerCase();
        result = parserResult.commandCalls
            .filter(c => c.command.command == "GSUB" && c.commandArguments.length > 0 && c.commandArguments[0].text.toLowerCase() === name);
    }
    if (result.length < 1) {
        return undefined;
    }
    const originSelectionRange = toVsRange(commandCall.commandArguments[0]?.textRange ?? commandCall.textRange, true);
    return result.map(gsub => {
        return <LocationLink>{
            targetUri: documentUri,
            targetSelectionRange: toVsRange(gsub.textRange),
            targetRange: toVsRange(gsub.commandArguments[0]?.textRange ?? gsub.textRange),
            originSelectionRange
        };
    });
}