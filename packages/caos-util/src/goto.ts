import {Definition, LocationLink, Range} from "vscode-languageserver-types";
import {RangeWithIndex, inRange, toVsRange, repack} from "@bedalton/extension-util"
import {collectors, CommandCall, GameVariant, ParseResult} from "./caos-util";
import {getCursorPosition} from "./cursor-data";
import {Is} from "./is-util";

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
            return null;
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
            return null;
        }
        const offsets = scriptOffsets(
            text as string
        );
        const scriptRange = offsets.find(offset => inRange(offset, line, character, true, true));
    
        if (scriptRange == null) {
            return null;
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
        return null;
    }
    
    const commandCalls = parseResult.commandCalls
    
    if (commandCalls.length === 0) {
        return null;
    }
    
    const cursor = getCursorPosition(
        parseResult,
        line,
        character,
        false,
        false
    );
    
    if (cursor == null) {
        return null;
    }
    
    const command = cursor.command?.command;
    if (command == null) {
        return null;
    }
    
    const closestItemText = cursor.closestItem?.text?.trim() ?? '';
    if (closestItemText.length === 0) {
        return null;
    }
    switch (command) {
        case 'SUBR':
            const subroutine = parseResult.commandCalls.find(c => c.command?.command === 'SUBR' && inRange(c.textRange, line, character, false, true));
            if (subroutine == null) {
                return null;
            }
            return getSubroutineUsage(documentUri, parseResult, subroutine, subroutine?.arguments[0]?.text ?? "");
        case 'GSUB':
            return getSubroutineDefinition(documentUri, parseResult, closestItemText);
        default:
            return null;
    }
}


export function getSubroutineDefinition(documentUri: string, parserResult: ParseResult, name: string): Definition | LocationLink[] | undefined | null {
    if (name.length < 1) {
        return null;
    }
    
    let result = parserResult.commandCalls
        .find(c => c.command.command == "SUBR" && c.arguments.length > 0 && c.arguments[0].text === name);
    
    // Fallback to lowercase names if none were found with exact case
    if (result == null) {
        console.log("No result found for case sensitive match")
        name = name.toLowerCase();
        result = parserResult.commandCalls
            .find(c => c.command.command == "SUBR" && c.arguments.length > 0 && c.arguments[0].text.toLowerCase() === name);
    }
    if (result == null) {
        console.log("No result found for case-insensitive match")
        return null;
    }
    const range = <RangeWithIndex>repack(result.arguments[0]?.textRange ?? result.textRange)
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
        return null;
    }
    
    let result = parserResult.commandCalls
        .filter(c => c.command.command == "GSUB" && c.arguments.length > 0 && c.arguments[0].text === name);
    
    // Fallback to lowercase names if none were found with exact case
    if (result.length < 1) {
        name = name.toLowerCase();
        result = parserResult.commandCalls
            .filter(c => c.command.command == "GSUB" && c.arguments.length > 0 && c.arguments[0].text.toLowerCase() === name);
    }
    if (result.length < 1) {
        return null;
    }
    const originSelectionRange = toVsRange(commandCall.arguments[0]?.textRange ?? commandCall.textRange, true);
    return result.map(gsub => {
        return <LocationLink>{
            targetUri: documentUri,
            targetSelectionRange: toVsRange(gsub.textRange),
            targetRange: toVsRange(gsub.arguments[0]?.textRange ?? gsub.textRange),
            originSelectionRange
        };
    });
}