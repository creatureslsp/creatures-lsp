import type {DocumentUri, Range} from "vscode-languageserver";
import * as path from "path";
import {clearCaosDocumentIndices, indexCaosFile} from "./index.caos.js";
import {indexCatalogue} from "./index.catalogue.js";
import {formatUriForRead, trimFileSchemePrefix} from "@creatures-lsp/extension-util";
import {clearCatalogueEntries} from "./index.catalogue.entries.js";
import {getWorkspaceUriForFile} from "../workspace-folders.js";
import {isFileURINaive} from "../files.js";
import type {Nullable} from "../types.js";

let _indexingPaused = false;
const _pending: string[] = [];
const _pendingClear: string[] = [];

export function isIndexingPaused() {
    return _indexingPaused;
}

export function pauseIndex() {
    _indexingPaused = true;
}

export async function resumeIndex() {
    if (_pendingClear.length) {
        for (const file of _pendingClear) {
            clearIndexForFile(file);
        }
        _pendingClear.splice(0);
    }
    
    if (_pending.length) {
        for (const file of _pending) {
            
            const workspaceUri = getWorkspaceUriForFile(file);
            await indexFile(workspaceUri, file);
        }
        _pending.splice(0);
    }
}

export async function indexFile(workspaceUri: DocumentUri, documentUri: DocumentUri, range?: Nullable<Range>) {
    if (isIndexingPaused()) {
        if (_pending.indexOf(documentUri) < 0) {
            _pending.push(documentUri);
        }
        return;
    }
    
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    
    if (!isFileURINaive(documentUri)) {
        return
    }
    
    let extension = path.extname(documentUri)
        ?.toLowerCase();
    if (extension && extension.length > 1 && extension[0] === ".") {
        extension = extension.substring(1);
    }
    switch (extension.toLowerCase()) {
        case "cos":
        case "caos":
            await indexCaosFile(workspaceUri, documentUri, range);
            break;
        case "catalogue":
            await indexCatalogue(workspaceUri, documentUri, range);
            break;
        default:
            // NO_OP
            break
    }
}

export function clearIndexForFile(documentUri: DocumentUri) {
    
    if (_indexingPaused) {
        if (_pendingClear.indexOf(documentUri) < 0) {
            _pendingClear.push(documentUri);
        }
        return;
    }
    const workspaceUri = getWorkspaceUriForFile(documentUri);
    clearCaosDocumentIndices(workspaceUri, documentUri);
    clearCatalogueEntries(workspaceUri, documentUri);
}