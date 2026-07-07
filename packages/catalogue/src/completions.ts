// noinspection SpellCheckingInspection
import {isVsCode, inflect, INFLECT_SPLITTER, multiCase, Nullable} from "@creatures-lsp/extension-util"
import {
    type CatalogueParseResult,
    parseCatalogue
} from "@creatures-lsp/caos-kt/catalogue-core";

import {
    type CatalogueCursorData,
    getCatalogueCursor,
} from "@creatures-lsp/caos-kt/catalogue-cursor";

import {
    CompletionItem,
    CompletionItemKind,
    CompletionList,
    InsertTextFormat,
    InsertTextMode,
    Position
} from "vscode-languageserver-types";
import {Range} from "vscode-languageserver";
import {appendAgentHelpCompletion} from "./completion/completions.agent-help.js";
import {appendKeywordCompletions} from "./completion/completions.keywords.js";
import {isSublime} from "@creatures-lsp/extension-util/dist/lsp-runner.js";

export function createEmptyCompletionList(): CompletionList {
    return {
        isIncomplete: true,
        items: []
    }
}


/**
 * Get list of completion items for a given position in a CAOS document
 * @param text
 * @param position
 * @param cursorPointer passes back cursor to calling method
 */
export async function getCatalogueCompletionItems(
    text: string | CatalogueParseResult,
    position: Position,
    cursorPointer?: { cursor: Nullable<CatalogueCursorData> },
): Promise<CompletionList> {
    
    const emptyCompletionList = createEmptyCompletionList()
    
    let parseResult = typeof text === "string"
        ? parseCatalogue(text)
        : (<CatalogueParseResult>text);
    
    let cursor: Nullable<CatalogueCursorData> = null;
    try {
        cursor = getCatalogueCursor(
            parseResult,
            position.line,
            Math.max(position.character - 1, 0),
        )
    } catch (e) {
        const error = e instanceof Error ? e.message +"\n" + e.stack : e;
        console.error("Failed to get catalogue cursor; ", error, "\nJSON: " + JSON.stringify(parseResult, null, 2));
    }
    
    if (cursor == null) {
        return emptyCompletionList;
    }
    
    if (cursorPointer) {
        cursorPointer.cursor = cursor
    }
    
    let completionItems: CompletionItem[] = [];
    
    appendAgentHelpCompletion(cursor, completionItems);
    
    appendKeywordCompletions(cursor, parseResult.parserItems, completionItems);

    if (isSublime()) {
        completionItems = completionItems.map(it => {
            return {
                ...it,
                filterText: it.filterText?.split(INFLECT_SPLITTER).shift() ?? it.filterText
            }
        })
    }
// Get all normal completions for cursor position
    try {
        return <CompletionList>{
            isIncomplete: true,
            items: completionItems
        };
    } catch (e) {
        if (e instanceof Error) {
            console.error("Get catalogue completion items failed: " + e.message + "\n" + e.stack);
        } else {
            console.error("Get Catalogue completion items failed: " + e);
        }
        return emptyCompletionList;
    }
    
}


export function createCompletionItem(completion: string, range: Range) {
    const edit = range != null ? {range, newText: completion} : null;
    return <CompletionItem>{
        label: completion,
        kind: CompletionItemKind.Variable,
        filterText: '\"' + completion + INFLECT_SPLITTER + inflect(completion) + " " + (multiCase(completion)) + "\"",
        insertText: completion,
        insertTextFormat: InsertTextFormat.PlainText,
        insertTextMode: InsertTextMode.asIs,
        preselect: false,
        sortText: '0__0' + completion,
        textEdit: edit
    };
}

