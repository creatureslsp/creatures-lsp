import { parseCaosNear, getCaos2PrayComments, } from "@creatureslsp/caos-kt/caos-parser";
import { getCaosCursorPosition, cancelComplete, inQuotes } from "@creatureslsp/caos-kt/caos-cursor-data";
import { CAOS2_COMMENT_TYPE_ID } from "./constants.js";
import { getCommands } from "./commands.js";
import { Is } from "./is-util.js";
import { getCaos2PrayCompletions } from "./completion/caos2/completions.caos2.js";
import { getBitflagsOptionsProvider } from "./completion/completions.bitflags.js";
import { getValuesListCompletions } from "./completion/completions.values-list-values.js";
import { getCommandCompletions, getDumbCompletionItems } from "./completion/completion.command.js";
import { getSubroutineCompletions } from "./completion/completions.subroutines.js";
import { getCommandBeneathCursor } from "./cursor-data.js";
export * from "./completion/completion.namedVariables.js";
export * from "./completion/completion.journal.js";
export * from "./completion/completion.catalogue.js";
export const COMMAND_TYPE__COMMAND = 0;
export const COMMAND_TYPE__RVALUE = 1;
export const COMMAND_TYPE__LVALUE = 2;
export function createEmptyCompletionList() {
    return {
        isIncomplete: true,
        items: []
    };
}
/**
 * Get list of completion items for a given position in a CAOS document
 * @param thisFileName
 * @param variant
 * @param text
 * @param position
 * @param completionSettings
 * @param opts
 * @param cursorPointer passes back cursor to calling method
 */
export async function getCompletionItems(thisFileName, variant, text, position, opts, completionSettings = null, cursorPointer) {
    let cursor;
    const parseResult = typeof text === "string" ? parseCaosNear(variant, text, position.line, Math.max(position.character - 1, 0), opts?.incomplete ?? true) : text;
    cursor = getCaosCursorPosition(parseResult, position.line, Math.max(position.character - 1, 0), opts?.incomplete ?? true, true);
    if (cursorPointer) {
        cursorPointer.cursor = cursor;
    }
    return await getCompletionItemsWithParseResult(thisFileName, parseResult, cursor, position, opts, completionSettings);
}
/**
 * Get list of completion items for a given position in a CAOS document
 * @param thisFileName
 * @param parseResult
 * @param cursor
 * @param position
 * @param completionSettings
 * @param opts
 */
export async function getCompletionItemsWithParseResult(thisFileName, parseResult, cursor, position, opts, completionSettings = null) {
    const emptyCompletionList = createEmptyCompletionList();
    if (cursor == null) {
        return emptyCompletionList;
    }
    const variant = parseResult.variant;
    const text = parseResult.originalText;
    const commandString = cursor.command?.command?.toLowerCase();
    // Get subroutine names if any near cursor
    if (commandString === "gsub") {
        const subroutines = getSubroutineCompletions(variant, text, cursor);
        return {
            isIncomplete: false,
            items: subroutines
        };
    }
    let caos2Comments = getCaos2PrayCommentsSafe(text, cursor);
    let items = await getInitialCompletionItemsSafe(thisFileName, variant, cursor, caos2Comments, completionSettings, opts);
    if (items == null) {
        return emptyCompletionList;
    }
    const hasClosestItemAndCommand = cursor.command != null && cursor.closestItem != null;
    // String completion
    const canDoStringCompletions = hasClosestItemAndCommand && opts?.getStringCompletions != null;
    if (canDoStringCompletions && !addStringCompletionsSafe(parseResult, cursor, position, opts, items)) {
        return emptyCompletionList;
    }
    // Bitflag Completion
    if (!addBitflagCompletionsSafe(cursor, items)) {
        return emptyCompletionList;
    }
    return {
        isIncomplete: true,
        items: items
    };
}
/**
 * Gets all completion items for a given position in a file
 * @param thisFileName
 * @param variant
 * @param commands
 * @param positionData
 * @param options
 * @param settings
 * @param caos2Comments
 */
async function getInitialCompletionItems(thisFileName, variant, commands, positionData, options, settings = null, caos2Comments = []) {
    if (positionData.previousTokens.length === 0 && (positionData.beforeText ?? "").trim().length === 0) {
        return [];
    }
    const closestItem = positionData.closestItem;
    let raw;
    if (closestItem && cancelComplete(positionData.closestItem, positionData.line, positionData.character)) {
        return [];
    }
    if (closestItem && closestItem.actualType === CAOS2_COMMENT_TYPE_ID) {
        raw = await getCaos2PrayCompletionsSafe(thisFileName, variant, positionData, caos2Comments, closestItem, options);
    }
    else if (closestItem && inQuotes(closestItem, positionData.line, positionData.character + 1)) {
        raw = getValuesListCompletions(positionData, { line: positionData.line, character: positionData.character }, true);
    }
    else {
        raw = (settings?.dumbMode === true) ?
            getDumbCompletionItems(variant, commands, settings) :
            getCommandCompletions(settings, variant, commands, positionData);
        raw = raw.filter(item => item.data?.command?.startsWith("_CD_") !== true);
    }
    return raw;
}
function getOriginalText(text) {
    if (text == null) {
        return null;
    }
    if (typeof text === "string") {
        return text;
    }
    else if (Is.parseResult(text)) {
        return text.originalText;
    }
    else if (typeof text["text"] !== "undefined") {
        return text.text;
    }
    else {
        return null;
    }
}
function addStringCompletionsSafe(parseResult, cursor, position, opts, items) {
    try {
        if (opts.getStringCompletions == null) {
            console.log("Get string completions is null");
            return true;
        }
        const commandCall = getCommandBeneathCursor(parseResult.variant, parseResult.commandCalls, position, false);
        if (!commandCall) {
            return true;
        }
        if (commandCall.commandString.toUpperCase() !== cursor.command.command.toUpperCase()) {
            console.error("Drill down command returned command different from cursor; Expected: " + cursor.command.command + "; Found: " + commandCall.commandString.toUpperCase());
        }
        const stringCompletions = opts.getStringCompletions(cursor, commandCall) ?? [];
        items.push(...stringCompletions);
        return true;
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to CAOS string completions; " + error);
        return false;
    }
}
function addBitflagCompletionsSafe(cursor, items) {
    try {
        const bitflagsCompletions = getBitflagsOptionsProvider(cursor);
        if (bitflagsCompletions) {
            items.splice(0, items.length);
            items.push(...bitflagsCompletions);
        }
        return true;
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to get bitflag completions: " + error);
        return false;
    }
}
async function getCaos2PrayCompletionsSafe(thisFileName, variant, position, caos2Comments, closestItem, options) {
    try {
        return await getCaos2PrayCompletions(thisFileName, variant, caos2Comments, closestItem, position.line, position.character, options);
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to get CAOS2Pray completions; " + error);
        return [];
    }
}
function getCaos2PrayCommentsSafe(text, cursor) {
    try {
        if (Is.caos2Comment(cursor.closestItem)) {
            const originalText = getOriginalText(text);
            // Minimum length = 4 = <*#aa b|*#a=b
            if (originalText != null && originalText.length >= 5) {
                return getCaos2PrayComments(originalText);
            }
        }
    }
    catch (e) {
        console.error("Failed to get CAOS2 comments; ", e instanceof Error ? e.message : e);
    }
    return [];
}
async function getInitialCompletionItemsSafe(thisFileName, variant, cursor, caos2Comments, completionSettings, opts) {
    try {
        // Get all normal completions for cursor position
        return await getInitialCompletionItems(thisFileName, variant, getCommands(variant), cursor, opts, completionSettings, caos2Comments);
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to general CAOS completions; " + error);
        return null;
    }
}
