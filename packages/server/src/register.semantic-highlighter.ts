import {connection} from './connection.vscode.js';
import type {SemanticTokens, SemanticTokensParams} from "vscode-languageserver";
import {unpackDocument} from "./document.js";
import {CAOS_LANGUAGE_ID} from "./caos/settings.js";
import {CATALOGUE_LANGUAGE_ID} from "./catalogue/settings.js";
import type {CaosDocument} from "./caos/caos.document.js";
import {getCaosDocumentSemanticTokens} from "@creatures-lsp/caos-util";
import {caosInitLib} from "./caos/caos-init-lib.mjs";
import {Log} from "./ConnLogger.js";


const emptySemanticTokensResult = {
    data: []
} satisfies SemanticTokens;

/**
 * Initialize semantic token highlighter if needed
 * @param use
 */
export function registerSemanticTokenHighlighter(use: boolean) {
    if (!use) {
        return;
    }
// ADD semantic highlighting
    return connection.languages.semanticTokens.on(onSemanticTokens);
}


async function onSemanticTokens(params: SemanticTokensParams, token: any): Promise<SemanticTokens> {
    try {
        return await _onSemanticTokens(params, token);
    } catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to get semantic tokens; ${error}`);
        return {
            data: []
        } satisfies SemanticTokens
    }
}

async function _onSemanticTokens(params: SemanticTokensParams, token: any): Promise<SemanticTokens> {
    const uri = params.textDocument.uri;
    const document = await unpackDocument(uri);
    if (document == null) {
        return emptySemanticTokensResult;
    }
    const {text, languageId} = document
    
    switch(languageId) {
        case CAOS_LANGUAGE_ID:
            caosInitLib();
            return getCaosDocumentSemanticTokens((document as CaosDocument).variant ?? "DS", text, token);
        case CATALOGUE_LANGUAGE_ID:
            // try {
            //     return getCatalogueDocumentSemanticTokens(text, token);
            // } catch (e) {
            //     const error = e instanceof Error ? e.message + "\n" + e.stack : e;
            //     console.error("Failed to get catalogue semantic tokens; ", error);
            //     return emptySemanticTokensResult;
            // }
        default:
            return emptySemanticTokensResult;
    }
}
