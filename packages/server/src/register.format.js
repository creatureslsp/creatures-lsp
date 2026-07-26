import { connection } from "./connection.vscode.js";
import { caosInitLib } from "./caos/caos-init-lib.js";
import { formatCaosDocument } from "./caos/caos.format.js";
import { isCaosDocument, isCatalogueDocument, unpackDocument } from "./document.js";
import { formatCatalogueDocument } from "./catalogue/catalogue.format.js";
import { Log } from "./ConnLogger.js";
/**
 * Registers an LSP formatting function if needed
 * @param init
 */
export function registerFormattingProvider(init) {
    if (!init) {
        return;
    }
    return connection.onDocumentFormatting(onFormatCallback);
}
async function onFormatCallback(params) {
    try {
        return await _onFormatCallback(params);
    }
    catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to format; ${error}`);
    }
}
async function _onFormatCallback(params) {
    const uri = params.textDocument.uri;
    const document = await unpackDocument(uri);
    if (document == null) {
        return [];
    }
    if (isCaosDocument(document)) {
        caosInitLib();
        return formatCaosDocument(params, document);
    }
    if (isCatalogueDocument(document)) {
        return formatCatalogueDocument(params, document);
    }
}
