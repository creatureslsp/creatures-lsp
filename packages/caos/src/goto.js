import { inRange, toVsRange } from "@creatureslsp/extension-util";
import { parseCaosTokens, caosScriptOffsets, parseCaosWithin } from "@creatureslsp/caos-kt/caos-parser";
import { getCaosCursorPosition, } from "@creatureslsp/caos-kt/caos-cursor-data";
import { Is } from "./is-util.js";
export function getGotoInformation(documentUri, variant, text, line, character) {
    let parseResult;
    if (Is.parseResult(text) && text.scripts.length > 0) {
        const script = text.scripts.find(script => script != null && inRange(script.textRange, line, character));
        if (script == null) {
            return null;
        }
        parseResult = parseCaosTokens(variant, text.originalText, script.items);
    }
    else {
        if (Is.parseResult(text)) {
            text = text.originalText;
        }
        else if (typeof text !== 'string') {
            return null;
        }
        const offsets = caosScriptOffsets(text);
        const scriptRange = offsets.find(offset => inRange(offset, line, character, true, true));
        if (scriptRange == null) {
            return null;
        }
        parseResult = parseCaosWithin(variant, text, scriptRange.start.line, scriptRange.start.character, scriptRange.end.line, scriptRange.end.character);
    }
    if (parseResult == null) {
        return null;
    }
    const commandCalls = parseResult.commandCalls;
    if (commandCalls.length === 0) {
        return null;
    }
    const cursor = getCaosCursorPosition(parseResult, line, character, true);
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
        case "SUBR":
            const subroutine = parseResult.commandCalls.find(c => c.commandString === 'SUBR' && inRange(c.textRange, line, character, false, true));
            if (subroutine == null) {
                return [];
            }
            return getSubroutineUsage(documentUri, parseResult, subroutine, subroutine?.arguments[0]?.text ?? "");
        case "GSUB":
            return getSubroutineDefinition(documentUri, parseResult, closestItemText);
        default:
            return null;
    }
}
export function getSubroutineDefinition(documentUri, parserResult, name) {
    if (name.length < 1) {
        return null;
    }
    let result = parserResult.commandCalls
        .find(c => c.commandString == "SUBR" && c.arguments.length > 0 && c.arguments[0].text === name);
    // Fallback to lowercase names if none were found with exact case
    if (result == null) {
        name = name.toLowerCase();
        result = parserResult.commandCalls
            .find(c => c.commandString == "SUBR" && c.arguments.length > 0 && c.arguments[0].text.toLowerCase() === name);
    }
    if (result == null) {
        return null;
    }
    const range = result.arguments[0]?.textRange ?? result.textRange;
    return {
        uri: documentUri,
        range: toVsRange(range)
    };
}
export function getSubroutineUsage(documentUri, parserResult, commandCall, name) {
    if (name.length < 1) {
        return null;
    }
    let result = parserResult.commandCalls
        .filter(c => c.commandString == "GSUB" && c.arguments.length > 0 && c.arguments[0].text === name);
    // Fallback to lowercase names if none were found with exact case
    if (result.length < 1) {
        name = name.toLowerCase();
        result = parserResult.commandCalls
            .filter(c => c.commandString == "GSUB" && c.arguments.length > 0 && c.arguments[0].text.toLowerCase() === name);
    }
    if (result.length < 1) {
        return null;
    }
    const originSelectionRange = toVsRange(commandCall.arguments[0]?.textRange ?? commandCall.textRange, true);
    return result.map(gsub => {
        return {
            targetUri: documentUri,
            targetSelectionRange: toVsRange(gsub.textRange),
            targetRange: toVsRange(gsub.arguments[0]?.textRange ?? gsub.textRange),
            originSelectionRange
        };
    });
}
export function isInCaosCatalogueKey(commandCall, closestItem) {
    if (commandCall == null) {
        return false;
    }
    if (closestItem == null) {
        return false;
    }
    if (!Is.c2eStringVal(closestItem)) {
        return false;
    }
    const args = commandCall.arguments;
    if (args.length === 0) {
        return false;
    }
    if (args[0].textRange.start.line !== closestItem.textRange.start.line) {
        return false;
    }
    if (args[0].textRange.start.character !== closestItem.textRange.start.character) {
        return false;
    }
    return true;
}
