import { connection } from "./connection.vscode.js";
import { toFileUri } from "@creatureslsp/extension-util";
import { renameFileOrFolder } from "./rename/rename-file.js";
/**
 * Registers an LSP formatting function if needed
 * @param init
 */
export function registerFileRenameProvider(init) {
    if (!init) {
        return;
    }
    return connection.workspace.onWillRenameFiles(onWillRenameFiles);
}
async function onWillRenameFiles(params) {
    const edits = {};
    for (const file of params.files) {
        await renameFileOrFolder(file.oldUri, file.newUri, edits);
    }
    const out = {};
    for (const uri in edits) {
        out[toFileUri(uri)] = edits[uri];
    }
    return {
        changes: out
    };
}
