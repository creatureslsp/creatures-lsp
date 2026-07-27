// noinspection SpellCheckingInspection
import {type Nullable} from "@creatureslsp/extension-util";

import type {GameVariant,} from "@creatureslsp/caos-kt";

import type {Commands,} from "@creatureslsp/caos-kt/caos-libs";

import {type CaosParseResult, getCaos2PrayComments, parseCaosNear,} from "@creatureslsp/caos-kt/caos-parser";

import type {Caos2Comment} from "@creatureslsp/caos-kt/caos-core";

import type {CaosCompletionOptions, CaosCompletionSettings} from "@creatureslsp/caos-kt/caos-completion";

import {
    cancelComplete,
    type CaosCursorData,
    getCaosCursorPosition,
    inQuotes
} from "@creatureslsp/caos-kt/caos-cursor-data";
import type {CompletionItem, CompletionList, Position} from "vscode-languageserver-types";
import {CAOS2_COMMENT_TYPE_ID} from "./constants.js";
import {getCommands} from "./commands.js";
import {Is} from "./is-util.js";
import {getCaos2PrayCompletions} from "./completion/caos2/completions.caos2.js";
import {getBitflagsOptionsProvider} from "./completion/completions.bitflags.js";
import {getValuesListCompletions} from "./completion/completions.values-list-values.js";
import {getCommandCompletions, getDumbCompletionItems} from "./completion/completion.command.js";
import {getSubroutineCompletions} from "./completion/completions.subroutines.js";
import {getCommandBeneathCursor} from "./cursor-data.js";

export type {
    CaosCompletionSettings,
    CaosCompletionOptions,
} from "@creatureslsp/caos-kt/caos-completion"

export * from "./completion/completion.namedVariables.js";
export * from "./completion/completion.journal.js";
export * from "./completion/completion.catalogue.js";

export type NamedVarPrefix = "game" | "eame" | "name" | "mame";

export const COMMAND_TYPE__COMMAND = 0;
export const COMMAND_TYPE__RVALUE = 1;
export const COMMAND_TYPE__LVALUE = 2;


export type VariantIndexed<T> = {
    [variant in GameVariant]: T;
}

export type VariantArray<T> = VariantIndexed<T[]>;

export function createEmptyCompletionList(): CompletionList {
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
export async function getCompletionItems(
    thisFileName: string,
    variant: GameVariant,
    text: string | CaosParseResult,
    position: Position,
    opts: CaosCompletionOptions,
    completionSettings: Nullable<CaosCompletionSettings> = null,
    cursorPointer?: { cursor: Nullable<CaosCursorData> },
): Promise<CompletionList> {
    
    let cursor: Nullable<CaosCursorData>;
    
    const parseResult = typeof text === "string" ? parseCaosNear(
        variant,
        text,
        position.line,
        position.character,// Math.max(position.character - 1, 0),
        opts?.incomplete ?? true,
    ) : text as CaosParseResult;
    
    cursor = getCaosCursorPosition(
        parseResult,
        position.line,
        position.character,// Math.max(position.character - 1, 0),
        opts?.incomplete ?? true,
        true,
    );
    
    if (cursorPointer) {
        cursorPointer.cursor = cursor;
    }
    
    return await getCompletionItemsWithParseResult(
        thisFileName,
        parseResult,
        cursor,
        position,
        opts,
        completionSettings,
    )
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
export async function getCompletionItemsWithParseResult(
    thisFileName: string,
    parseResult: CaosParseResult,
    cursor: Nullable<CaosCursorData>,
    position: Position,
    opts: CaosCompletionOptions,
    completionSettings: Nullable<CaosCompletionSettings> = null,
): Promise<CompletionList> {
    
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
    
    let caos2Comments: Caos2Comment[] = getCaos2PrayCommentsSafe(text, cursor);
    
    let items: Nullable<CompletionItem[]> = await getInitialCompletionItemsSafe(
        thisFileName,
        variant,
        cursor,
        caos2Comments,
        completionSettings,
        opts
    )
    
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
    
    return <CompletionList>{
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
async function getInitialCompletionItems(
    thisFileName: string,
    variant: GameVariant,
    commands: Commands,
    positionData: CaosCursorData,
    options: CaosCompletionOptions,
    settings: Nullable<CaosCompletionSettings> = null,
    caos2Comments: Caos2Comment[] = [],
): Promise<CompletionItem[]> {
    
    if (positionData.previousTokens.length === 0 && (positionData.beforeText ?? "").trim().length === 0) {
        return [];
    }
    
    const closestItem = positionData.closestItem;
    
    let raw: CompletionItem[];
    if (closestItem && cancelComplete(positionData.closestItem!!, positionData.line, positionData.character)) {
        return [];
    }
    if (closestItem && closestItem.actualType === CAOS2_COMMENT_TYPE_ID) {
        raw = await getCaos2PrayCompletionsSafe(
            thisFileName,
            variant,
            positionData,
            caos2Comments,
            closestItem as Caos2Comment,
            options,
        )
    } else if (closestItem && inQuotes(closestItem, positionData.line, positionData.character)) {
        raw = getValuesListCompletions(
            positionData,
            {line: positionData.line, character: positionData.character},
            true
        );
    } else {
        raw = (settings?.dumbMode === true) ?
            getDumbCompletionItems(variant, commands, settings) :
            getCommandCompletions(settings, variant, commands, positionData);
        raw = raw.filter(item => item.data?.command?.startsWith("_CD_") !== true);
        
    }
    return raw;
}


function getOriginalText(text: string | CaosParseResult | unknown | null | undefined): Nullable<string> {
    if (text == null) {
        return null;
    }
    if (typeof text === "string") {
        return text;
    } else if (Is.parseResult(text)) {
        return (<CaosParseResult>text).originalText;
    } else if (typeof (<any>text)["text"] !== "undefined") {
        return (<any>text).text;
    } else {
        return null;
    }
}

function addStringCompletionsSafe(
    parseResult: CaosParseResult,
    cursor: CaosCursorData,
    position: Position,
    opts: CaosCompletionOptions,
    items: CompletionItem[],
): boolean {
    try {
        
        if (opts.getStringCompletions == null) {
            console.log("Get string completions is null");
            return true;
        }
    
        const commandCall = getCommandBeneathCursor(
            parseResult.variant,
            parseResult.commandCalls,
            position,
            false
        );
        
        if (!commandCall) {
            return true;
        }
        
        if (commandCall.commandString.toUpperCase() !== cursor.command!.command.toUpperCase()) {
            console.error("Drill down command returned command different from cursor; Expected: " + cursor.command!.command + "; Found: " + commandCall.commandString.toUpperCase());
        }
        
        const stringCompletions = opts.getStringCompletions(cursor, commandCall) ?? [];
        items.push(...stringCompletions);
        return true;
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to CAOS string completions; " + error);
        return false;
    }
}

function addBitflagCompletionsSafe(
    cursor: CaosCursorData,
    items: CompletionItem[],
): boolean {
    try {
        const bitflagsCompletions = getBitflagsOptionsProvider(cursor);
        if (bitflagsCompletions) {
            items.splice(0, items.length);
            items.push(...bitflagsCompletions);
        }
        return true;
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to get bitflag completions: " + error);
        return false
    }
}


async function getCaos2PrayCompletionsSafe(
    thisFileName: string,
    variant: GameVariant,
    position: Position,
    caos2Comments: Caos2Comment[],
    closestItem: Caos2Comment,
    options: CaosCompletionOptions,
): Promise<CompletionItem[]> {
    try {
        return await getCaos2PrayCompletions(
            thisFileName,
            variant,
            caos2Comments,
            closestItem,
            position.line,
            position.character,
            options,
        );
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to get CAOS2Pray completions; " + error);
        return [];
    }
}


function getCaos2PrayCommentsSafe(
    text: string,
    cursor: CaosCursorData,
): Caos2Comment[] {
    try {
        if (Is.caos2Comment(cursor.closestItem)) {
            const originalText = getOriginalText(text);
            // Minimum length = 4 = <*#aa b|*#a=b
            if (originalText != null && originalText.length >= 5) {
                return getCaos2PrayComments(originalText);
            }
        }
    } catch (e) {
        console.error("Failed to get CAOS2 comments; ", e instanceof Error ? e.message : e);
    }
    return [];
}

async function getInitialCompletionItemsSafe(
    thisFileName: string,
    variant: GameVariant,
    cursor: CaosCursorData,
    caos2Comments: Caos2Comment[],
    completionSettings: Nullable<CaosCompletionSettings>,
    opts: CaosCompletionOptions,
): Promise<Nullable<CompletionItem[]>> {
    try {
        // Get all normal completions for cursor position
        return await getInitialCompletionItems(
            thisFileName,
            variant,
            getCommands(variant),
            cursor!!,
            opts,
            completionSettings,
            caos2Comments
        );
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to general CAOS completions; " + error);
        return null
    }
}