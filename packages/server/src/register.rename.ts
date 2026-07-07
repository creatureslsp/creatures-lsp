import {connection} from "./connection.vscode.js";
import type {PrepareRenameParams, RenameParams, WorkspaceEdit} from "vscode-languageserver";
import {type Nullable} from "@creatures-lsp/caos-kt";
import {caosInitLib} from "@creatures-lsp/caos-kt/caos-init-lib";
import {getCaosCursorPositionFromRawText} from "@creatures-lsp/caos-kt/caos-cursor-data";
import {isCaosDocument, isCatalogueDocument, unpackDocument} from "./document.js";
import {renameInCaosDocument} from "./rename/rename.caos.js";
import {renameInCatalogueDocument} from "./rename/rename.catalogue.js";
import type {Range} from "vscode-languageserver-protocol";
import type {ParseTreeItem} from "@creatures-lsp/extension-util";
import {getCatalogueNameUnderCursor} from "./catalogue/catalogue.util.js";
import {resumeIndex} from "./indices/index.file.js";
import {offsetRenameRange} from "@creatures-lsp/extension-util/dist/get-workspace-edits.js";

/**
 * Registers an LSP formatting function if needed
 * @param init
 */
export function registerRenameProvider(init: boolean) {
    
    if (!init) {
        return
    }
    
    connection.onPrepareRename(onPrepareRename)
    return connection.onRenameRequest(onRename)
}

type PrepareRenameResponse = Range | {
    range: Range;
    placeholder: string;
} | {
    defaultBehavior: boolean;
} | undefined | null;


async function onPrepareRename(params: PrepareRenameParams): Promise<PrepareRenameResponse> {
    const document = await unpackDocument(params.textDocument.uri);
    
    if (document == null) {
        return null;
    }
    
    const {line, character} = params.position;
    
    let closestItem: Nullable<ParseTreeItem<any>> = null;
    if (isCaosDocument(document)) {
        caosInitLib();
        const {variant, text} = document;
        closestItem = getCaosCursorPositionFromRawText(variant, text, line, character, true)
            ?.closestItem as ParseTreeItem<any>
    } else if (isCatalogueDocument(document)) {
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

async function onRename(params: RenameParams): Promise<Nullable<WorkspaceEdit>> {
    
    // pauseIndex();
    
    const documentUri = params.textDocument.uri;
    
    const position = params.position;
    
    const document = await unpackDocument(documentUri);
    
    if (document == null) {
        await resumeIndex();
        return null;
    }
    
    const newText = params.newName;
    let out: Nullable<WorkspaceEdit>;
    if (isCaosDocument(document)) {
        caosInitLib();
        out = renameInCaosDocument(document, position, newText);
    } else if (isCatalogueDocument(document)) {
        out = renameInCatalogueDocument(document, position, newText);
    }
    
    setTimeout(resumeIndex, 400);
    return out;
}