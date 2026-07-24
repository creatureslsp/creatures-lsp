import type {CompletionItem, CompletionList, TextDocumentPositionParams} from "vscode-languageserver";
import {CATALOGUE_LANGUAGE_ID} from "./catalogue/settings.js";
import {createEmptyCompletionList} from "@creatures-lsp/caos-util";
import {getCaosCompletionItemsForDocument} from "./caos/caos.completions.js";
import {connection} from "./connection.vscode.js";
import {unpackDocument} from "./document.js";
import {CAOS_LANGUAGE_ID} from "./caos/settings.js";
import {getCatalogueCompletionItems} from "@creatures-lsp/catalogue";
import {caosInitLib} from "./caos/caos-init-lib.mjs";
import {Log} from "./ConnLogger.js";


/**
 * Register an LSP server callback for getting completion items
 */
export function registerCompletionProvider(init: boolean = true) {
    if (!init) {
        return;
    }
    
    connection.onCompletion(async (params: TextDocumentPositionParams) => {
        try {
            return getCompletionsForDocument(params)
        } catch(e) {
            const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
            Log.e(`Failed to get completion items; ${error}`);
        }
    });


// This handler resolves additional information for the item selected in
// the completion list.
    connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
        return item;
    });
}

export async function getCompletionsForDocument(params: TextDocumentPositionParams): Promise<CompletionList> {
    
    const documentUri = params.textDocument.uri;
    const document = await unpackDocument(documentUri);
    
    if (document == null) {
        return createEmptyCompletionList();
    }
    
    const text = document.text;
    const position = params.position;
    
    switch (document.languageId) {
        case CAOS_LANGUAGE_ID:
            caosInitLib();
            return getCaosCompletionItemsForDocument(documentUri, text, position);
        case CATALOGUE_LANGUAGE_ID:
            return getCatalogueCompletionItems(text, position);
        default:
            return createEmptyCompletionList();
    }
}