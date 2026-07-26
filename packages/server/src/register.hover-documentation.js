import { connection } from "./connection.vscode.js";
import { getCaosHoverDocumentation } from "./caos/caos.hover-documentation.js";
import { isCaosDocument, unpackDocument } from "./document.js";
import { caosInitLib } from "./caos/caos-init-lib.js";
import { Log } from "./ConnLogger.js";
/**
 * Register hover doc creator/getter
 */
export function registerHoverDocumentationProvider(use) {
    if (!use) {
        return;
    }
    return connection.onHover(onHoverCallback);
}
async function onHoverCallback(params) {
    try {
        return await _onHoverCallback(params);
    }
    catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to get hover documentation; ${error}`);
        return null;
    }
}
async function _onHoverCallback(params) {
    const uri = params.textDocument.uri;
    const document = await unpackDocument(uri);
    if (document == null) {
        return null;
    }
    if (isCaosDocument(document)) {
        caosInitLib();
        return getCaosHoverDocumentation(document.text, document.settings, params.position);
    }
    // if (isCatalogueDocument(document)) {
    //
    // }
}
