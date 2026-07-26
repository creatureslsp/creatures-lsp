// noinspection JSUnusedGlobalSymbols
import { rangesIntersect, toVsRange } from "@creatureslsp/extension-util";
import { parseCatalogue } from "@creatureslsp/catalogue/core";
import { clearCatalogueEntries, indexCatalogueEntry } from "./index.catalogue.entries.js";
import { getWorkspaceUriForFile } from "../workspace-folders.js";
import { isCatalogueDocument, unpackDocument } from "../document.js";
import { isIndexingPaused } from "./index.file.js";
import { Log } from "../ConnLogger.js";
export async function indexCatalogue(workspaceUri, documentOrUri, range) {
    if (isIndexingPaused()) {
        return false;
    }
    const document = await unpackDocument(documentOrUri);
    if (!isCatalogueDocument(document)) {
        Log.e("Cannot index non-catalogue document with Catalogue indexer; " + documentOrUri);
        return;
    }
    const { text } = document;
    if (text == null) {
        Log.e("Failed to read text for Catalogue file: " + document.documentUri + "; Text returned NULL");
        return false;
    }
    const workspaceUriString = workspaceUri ?? getWorkspaceUriForFile(document.documentUri);
    if (range == null) {
        clearCatalogueIndicesForDocument(workspaceUri, document.documentUri, range);
    }
    const result = parseCatalogue(text);
    const check = range == null ? ((_) => true) : ((r) => {
        return rangesIntersect(range, toVsRange(r));
    });
    for (const entry of result.catalogueEntries) {
        if (check(entry.textRange)) {
            indexCatalogueEntry(workspaceUriString, document.documentUri, entry);
        }
    }
}
function clearCatalogueIndicesForDocument(workspaceUri, documentUri, range) {
    if (isIndexingPaused()) {
        return false;
    }
    clearCatalogueEntries(workspaceUri, documentUri, range);
}
