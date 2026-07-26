import { connection } from "./connection.vscode.js";
import { caosInitLib } from "./caos/caos-init-lib.js";
import { getCaosCursorPositionFromRawText } from "@creatureslsp/caos/cursor-data";
import { isCaosDocument, isCatalogueDocument, unpackDocument } from "./document.js";
import { renameInCaosDocument } from "./rename/rename.caos.js";
import { renameInCatalogueDocument } from "./rename/rename.catalogue.js";
import { getCatalogueNameUnderCursor } from "./catalogue/catalogue.util.js";
import { resumeIndex } from "./indices/index.file.js";
import { offsetRenameRange } from "@creatureslsp/extension-util/get-workspace-edits";
/**
 * Registers an LSP formatting function if needed
 * @param init
 */
export function registerRenameProvider(init) {
    if (!init) {
        return;
    }
    connection.onPrepareRename(onPrepareRename);
    return connection.onRenameRequest(onRename);
}
async function onPrepareRename(params) {
    const document = await unpackDocument(params.textDocument.uri);
    if (document == null) {
        return null;
    }
    const { line, character } = params.position;
    let closestItem = null;
    if (isCaosDocument(document)) {
        caosInitLib();
        const { variant, text } = document;
        closestItem = getCaosCursorPositionFromRawText(variant, text, line, character, true)
            ?.closestItem;
    }
    else if (isCatalogueDocument(document)) {
        closestItem = getCatalogueNameUnderCursor(document.text, line, character);
    }
    if (closestItem == null) {
        return null;
    }
    return {
        range: offsetRenameRange(closestItem.textRange),
        placeholder: closestItem.value + ""
    };
}
async function onRename(params) {
    // pauseIndex();
    const documentUri = params.textDocument.uri;
    const position = params.position;
    const document = await unpackDocument(documentUri);
    if (document == null) {
        await resumeIndex();
        return null;
    }
    const newText = params.newName;
    let out;
    if (isCaosDocument(document)) {
        caosInitLib();
        out = renameInCaosDocument(document, position, newText);
    }
    else if (isCatalogueDocument(document)) {
        out = renameInCatalogueDocument(document, position, newText);
    }
    setTimeout(resumeIndex, 400);
    return out;
}
