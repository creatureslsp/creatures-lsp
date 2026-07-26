import {connection} from "./connection.vscode.js";
import type {RenameFilesParams, WorkspaceEdit} from "vscode-languageserver";
import {toFileUri, WorkspaceChanges} from "@creatureslsp/extension-util";
import {renameFileOrFolder} from "./rename/rename-file.js";

/**
 * Registers an LSP formatting function if needed
 * @param init
 */
export function registerFileRenameProvider(init: boolean) {
    if (!init) {
        return
    }
    return connection.workspace.onWillRenameFiles(onWillRenameFiles)
}

async function onWillRenameFiles(params: RenameFilesParams): Promise<WorkspaceEdit|null> {
    
    const edits: WorkspaceChanges = {};
    
    for (const file of params.files) {
        await renameFileOrFolder(file.oldUri, file.newUri, edits);
    }
    
    const out: WorkspaceChanges = {};
    
    for (const uri in edits) {
        out[toFileUri(uri)] = edits[uri];
    }
    
    return {
        changes: out
    } satisfies WorkspaceEdit
}