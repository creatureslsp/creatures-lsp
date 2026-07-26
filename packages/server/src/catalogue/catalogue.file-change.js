import { indexCatalogue } from "../indices/index.catalogue.js";
import { getWorkspaceUriForFile } from "../workspace-folders.js";
import { nextDocumentVersionId, validateDocument } from "../validate.js";
import { formatUriForRead, trimFileSchemePrefix } from "@creatureslsp/extension-util";
import { isCatalogueDocument, unpackDocument } from "../document.js";
import { Log } from "../ConnLogger.js";
export async function onCatalogueFileChange(change) {
    const fileUri = trimFileSchemePrefix(formatUriForRead(change.document.uri));
    const workspaceUri = getWorkspaceUriForFile(fileUri);
    const document = await unpackDocument(fileUri);
    if (document == null) {
        return;
    }
    indexCatalogue(workspaceUri, document, null)
        .then();
    const version = nextDocumentVersionId(document.languageId, document.documentUri);
    validateDocument(document, version)
        .then()
        .catch(e => {
        Log.e(`Failed to validate Catalogue Document in onCatalogueFileChange; ${e}`);
    });
}
export async function onCatalogueFileChangeIncremental(changeEvent) {
    const fileUri = trimFileSchemePrefix(formatUriForRead(changeEvent.textDocument.uri));
    const workspaceUri = getWorkspaceUriForFile(fileUri);
    const document = await unpackDocument(fileUri);
    if (!isCatalogueDocument(document)) {
        Log.e("Cannot index non-catalogue document with Catalogue indexer; " + changeEvent.textDocument.uri);
        return;
    }
    changeEvent.contentChanges.forEach((c) => {
        const change = c;
        indexCatalogue(workspaceUri, document, change.range)
            .then();
        validateDocument(document, changeEvent.textDocument.version, change.range)
            .then()
            .catch(e => {
            Log.e(`Failed to validate Catalogue document in changeEvent.contentChanges; ${e}`);
        });
    });
}
