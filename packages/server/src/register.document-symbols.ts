import {connection} from "./connection.vscode.js";
import type {SemanticTokensParams} from "vscode-languageserver";
import {unpackDocument} from "./document.js";
import {CAOS_LANGUAGE_ID} from "./caos/settings.js";
import type {CaosDocument} from "./caos/caos.document.js";
import {CATALOGUE_LANGUAGE_ID} from "./catalogue/settings.js";
import type {DocumentSymbol} from "vscode-languageserver-types";
import {getCatalogueDocumentSymbolsInDocument} from "./catalogue/catalogue.document-symbols.js";
import {CatalogueDocument} from "./catalogue/catalogue.document.js";
import {getCaosDocumentSymbolsInDocument} from "./caos/caos.document-symbols.js";
import {caosInitLib} from "./caos/caos-init-lib.mjs";
import {Log} from "./ConnLogger.js";


/**
 * Initialize semantic token highlighter if needed
 * @param use
 */
export function registerDocumentSymbolsProvider(use: boolean) {
    if (!use) {
        return;
    }
// ADD semantic highlighting
    return connection.onDocumentSymbol(onDocumentSymbol);
}

async function onDocumentSymbol(params: SemanticTokensParams, token: any): Promise<DocumentSymbol[]> {
    try {
        return await _onDocumentSymbol(params, token);
    } catch(e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to validate document; ${error}`);
        return [];
    }
}

async function _onDocumentSymbol(params: SemanticTokensParams, token: any): Promise<DocumentSymbol[]> {
    const uri = params.textDocument.uri;
    const document = await unpackDocument(uri);
    
    if (document == null) {
        return [];
    }
    const {text, languageId} = document
    
    switch(languageId) {
        case CAOS_LANGUAGE_ID:
            caosInitLib();
            return getCaosDocumentSymbolsInDocument(document as CaosDocument);
        case CATALOGUE_LANGUAGE_ID:
            return getCatalogueDocumentSymbolsInDocument(document as CatalogueDocument);
        default:
            return [];
    }
}