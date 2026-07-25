import {updateRecentCommandsInDocument} from "./completions-cache.js";
import {indexCaosFile} from "../indices/index.caos.js";
import {DidChangeTextDocumentParams, TextDocumentChangeEvent} from "vscode-languageserver";
import {TextDocument} from "vscode-languageserver-textdocument";
import {validateDocument, nextDocumentVersionId} from "../validate.js";
import {formatUriForRead, trimFileSchemePrefix} from "@creatures-lsp/extension-util";
import {getDocuments} from "../documents.js";
import {DocumentContentChange} from "../types.js";
import {caosInitLib} from "./caos-init-lib.js";
import {Log} from "../ConnLogger.js";

export async function onCaosFileChange(change: TextDocumentChangeEvent<TextDocument>) {
    caosInitLib();
    
    const documentUri = trimFileSchemePrefix(formatUriForRead(change.document.uri));
    
    // noinspection JSIgnoredPromiseFromCall
    await updateRecentCommandsInDocument(null, documentUri, change.document.getText(), true);
    
    // noinspection JSIgnoredPromiseFromCall
    const nextVersionId =  nextDocumentVersionId(change.document.languageId, change.document.uri);
    await validateDocument(change.document, nextVersionId)
        .catch(e => {
            Log.e(`Failed to validate CAOS document in onCaosFileChange; ${e}`);
        });
    
    await indexCaosFile(null, documentUri);
}

const noOp = () => {
};

export function onCaosFileChangeIncremental(changeEvent: DidChangeTextDocumentParams) {
    
    const documentUri = trimFileSchemePrefix(formatUriForRead(changeEvent.textDocument.uri));
    const document = getDocuments()
        .get(documentUri);
    if (document == null) {
        return;
    }
    // noinspection JSIgnoredPromiseFromCall
    updateRecentCommandsInDocument(null, documentUri, document.getText(), true);
    
    // noinspection JSIgnoredPromiseFromCall
    changeEvent.contentChanges.forEach(async (c: unknown) => {
        const change = c as DocumentContentChange
        await validateDocument(documentUri, changeEvent.textDocument.version, change.range)
            .catch(e => {
                Log.e(`Failed to validate CAOS document in onCaosFileChangeIncremental(); ${e}`);
            })
        await indexCaosFile(null, documentUri, change.range);
    });
}

