// noinspection SpellCheckingInspection
import {Nullable} from "@bedalton/extension-util"
import {collectors, Commands, CursorData, GameVariant, ParseResult, ParserItem} from "./caos-util";
import {CompletionItem, CompletionList, Position} from "vscode-languageserver-types";
import {CAOS2_COMMENT_TYPE_ID} from "./constants";
import {getCommands} from "./commands";
import {Is} from "./is-util";
import {getCaos2PrayCompletions} from "./completion/caos2/completions.caos2";
import {getBitflagsOptionsProvider} from "./completion/completions.bitflags";
import {getNamedVariableCompletionItems, getValuesListCompletions} from "./completion/completions.values-list-values";
import {getCommandCompletions, getDumbCompletionItems} from "./completion/completion.command";
import {getSubroutineCompletions} from "./completion/completions.subroutines";
import Caos2Comment = ParserItem.Caos2Comment;

const getCaos2PrayComments = collectors.getCaos2PrayComments;
const {cancelComplete, getCursorPositionFromRawText, inQuotes} = collectors;

export type NamedVarPrefix = 'game' | 'eame' | 'name' | 'mame';

export const COMMAND_TYPE__COMMAND = 0;
export const COMMAND_TYPE__RVALUE = 1;
export const COMMAND_TYPE__LVALUE = 2;


export type VariantIndexed<T> = {
    [variant in GameVariant]: T;
}

export type VariantArray<T> = VariantIndexed<T[]>;


export type CompletionSettings = {
    readonly parameterInlayHints?: boolean;
    readonly usePlaceholders?: boolean;
    readonly dumbMode?: boolean,
    readonly minimumParameterCount?: number
}


/**
 * Optional parameters for getCompletionItems
 * @see getCompletionItems
 */
export type CompletionOptions = {
    readonly cursorPointer?: { cursorData?: Nullable<CursorData>; commandString?: Nullable<string>; };
    readonly getNamedVariableKeys?: (prefix: NamedVarPrefix, definedOnly: boolean) => string[];
    readonly parseNear?: boolean;
    readonly keepGoing?: () => boolean;
    readonly incomplete: boolean;
    readonly directory: string;
    readonly getFiles: (extensions?: Nullable<string[]>) => Promise<string[]>
}


export function createEmptyCompletionList(): CompletionList {
    return {
        isIncomplete: true,
        items: []
    }
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
    text: string | ParseResult,
    position: Position,
    opts: CompletionOptions,
    completionSettings: Nullable<CompletionSettings> = undefined,
    cursorPointer?: {cursor: Nullable<CursorData>},
): Promise<CompletionList> {
    
    const emptyCompletionList = createEmptyCompletionList()
    
    let cursor: Nullable<CursorData>;
    if (typeof text === 'string') {
        cursor = getCursorPositionFromRawText(
            variant,
            text,
            position.line,
            Math.max(position.character - 1, 0),
            opts?.parseNear ?? true,
            opts?.incomplete ?? true,
            opts?.keepGoing
        );
    } else {
        cursor = collectors.getCursorPosition(
            text,
            position.line,
            Math.max(position.character - 1, 0),
            opts?.incomplete ?? true
        )
    }
    
    if (cursor == null) {
        return emptyCompletionList;
    }
    
    if (cursorPointer) {
        cursorPointer.cursor = cursor
    }
    
    const commandString = cursor?.command?.command?.toLowerCase();
    
    // Get subroutine names if any near cursor
    if (commandString === 'gsub') {
        const subroutines = getSubroutineCompletions(variant, text, cursor);
        return {
            isIncomplete: false,
            items: subroutines
        };
    }
    
    let caos2Comments: Caos2Comment[] = []
    try {
        if (Is.caos2Comment(cursor.closestItem)) {
            const originalText = getOriginalText(text);
            // Minumum length = 4 = <*#aa b|*#a=b
            if (originalText != null && originalText.length >= 5) {
                caos2Comments = getCaos2PrayComments(originalText);
            }
        }
    } catch (e) {
        console.error("Failed to get CAOS2 comments; ", e instanceof Error ? e.message : e);
    }

// Get all normal completions for cursor position
    try {
        let items = await getCompletionItemsWithCursorData(
            thisFileName,
            variant,
            getCommands(variant),
            cursor!!,
            opts,
            completionSettings,
            caos2Comments
        );
        
        // If C2e, get named variable completions if any or needed
        if (opts?.getNamedVariableKeys != null) {
            if (isNamedVariableCommand(variant, commandString)) {
                const namedVariableCompletions = getNamedVariableCompletionItems(opts.getNamedVariableKeys, cursor.closestItem, commandString, false);
                items = [...namedVariableCompletions, ...items];
            }
        }
        
        const bitflagsCompletions = getBitflagsOptionsProvider(cursor);
        
        if (bitflagsCompletions) {
            items = bitflagsCompletions;
        }
        
        return <CompletionList>{
            isIncomplete: true,
            items: items
        };
    } catch (e) {
        if (e instanceof Error) {
            console.error("CompletionItems failed: " + e.message + "\n" + e.stack);
        } else {
            console.error("GetCompletionItems failed: " + e);
        }
        return emptyCompletionList;
    }
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
export async function getCompletionItemsWithCursorData(
    thisFileName: string,
    variant: GameVariant,
    commands: Commands,
    positionData: CursorData,
    options: CompletionOptions,
    settings: Nullable<CompletionSettings> = undefined,
    caos2Comments: Caos2Comment[] = [],
): Promise<CompletionItem[]> {
    
    if (positionData.previousTokens.length === 0 && (positionData.beforeText ?? '').trim().length === 0) {
        return [];
    }
    
    const closestItem = positionData.closestItem
    
    let raw: CompletionItem[];
    if (closestItem && cancelComplete(positionData.closestItem!!, positionData.line, positionData.character)) {
        return [];
    }
    if (closestItem && closestItem.actualType === CAOS2_COMMENT_TYPE_ID) {
        raw = await getCaos2PrayCompletions(
            thisFileName,
            variant,
            caos2Comments,
            closestItem as Caos2Comment,
            positionData.line,
            positionData.character,
            options,
        );
    } else if (closestItem && inQuotes(closestItem, positionData.line, positionData.character + 1)) {
        raw = getValuesListCompletions(
            positionData,
            {line: positionData.line, character: positionData.character},
            true
        );
    } else {
        raw = (settings?.dumbMode === true) ?
            getDumbCompletionItems(variant, commands, settings) :
            getCommandCompletions(settings, variant, commands, positionData);
  
        raw = raw.filter(item => item.data?.command?.startsWith('_CD_') !== true);
        
    }
    return raw;
}


function getOriginalText(text: string | ParseResult | unknown | null | undefined): Nullable<string> {
    if (text == null) {
        return undefined;
    }
    if (typeof text === 'string') {
        return text
    } else if (Is.parseResult(text)) {
        return text.originalText;
    } else {
        return undefined;
    }
}

function isNamedVariableCommand(variant: GameVariant, commandString: Nullable<string>): commandString is NamedVarPrefix {
    if (variant == 'C1' || variant == 'C2') {
        return false;
    }
    if (!commandString) {
        return false;
    }
    commandString = commandString.toUpperCase();
    return commandString === "GAME" || commandString === "EAME" || commandString === "NAME" || commandString === "MAME";
}


