import { connection } from './connection.vscode.js';
import { unpackDocument } from "./document.js";
import { CAOS_LANGUAGE_ID } from "./caos/settings.js";
import { CATALOGUE_LANGUAGE_ID } from "./catalogue/settings.js";
import { getCaosDocumentSemanticTokens } from "@creatureslsp/caos";
import { caosInitLib } from "./caos/caos-init-lib.js";
import { Log } from "./ConnLogger.js";
const emptySemanticTokensResult = {
    data: []
};
/**
 * Initialize semantic token highlighter if needed
 * @param use
 */
export function registerSemanticTokenHighlighter(use) {
    if (!use) {
        return;
    }
    // ADD semantic highlighting
    return connection.languages.semanticTokens.on(onSemanticTokens);
}
async function onSemanticTokens(params, token) {
    try {
        return await _onSemanticTokens(params, token);
    }
    catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to get semantic tokens; ${error}`);
        return {
            data: []
        };
    }
}
async function _onSemanticTokens(params, token) {
    const uri = params.textDocument.uri;
    const document = await unpackDocument(uri);
    if (document == null) {
        return emptySemanticTokensResult;
    }
    const { text, languageId } = document;
    switch (languageId) {
        case CAOS_LANGUAGE_ID:
            caosInitLib();
            return getCaosDocumentSemanticTokens(document.variant ?? "DS", text, token);
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
