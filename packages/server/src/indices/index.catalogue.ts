// noinspection JSUnusedGlobalSymbols

import type {DocumentUri, Range} from "vscode-languageserver";
import {type Nullable, rangesIntersect, toVsRange} from "@creatureslsp/extension-util";
import {parseCatalogue} from "@creatureslsp/catalogue/core";
import {clearCatalogueEntries, indexCatalogueEntry} from "./index.catalogue.entries.js";
import {getWorkspaceUriForFile} from "../workspace-folders.js";
import {type CreaturesDocument, isCatalogueDocument, unpackDocument, type UriLike} from "../document.js";
import {isIndexingPaused} from "./index.file.js";
import {Log} from "../ConnLogger.js";

export async function indexCatalogue(workspaceUri: DocumentUri, documentOrUri: CreaturesDocument<any> | UriLike, range?: Nullable<Range>) {
    
    if (isIndexingPaused()) {
        return false;
    }
    const document = await unpackDocument(documentOrUri);
    if (!isCatalogueDocument(document)) {
        Log.e("Cannot index non-catalogue document with Catalogue indexer; " + documentOrUri);
        return
    }
    
    const {text} = document;
    
    if (text == null) {
        Log.e("Failed to read text for Catalogue file: " + document.documentUri + "; Text returned NULL");
        return false;
    }
    
    const workspaceUriString: DocumentUri = workspaceUri ?? getWorkspaceUriForFile(document.documentUri);
    
    if (range == null) {
        clearCatalogueIndicesForDocument(workspaceUri, document.documentUri, range);
    }
    
    const result = parseCatalogue(text);
    
    const check = range == null ? ((_: Range) => true) : ((r: Range) => {
        return rangesIntersect(range, toVsRange(r))
    });
    
    for (const entry of result.catalogueEntries) {
        if (check(entry.textRange)) {
            indexCatalogueEntry(workspaceUriString, document.documentUri, entry);
        }
    }
}

function clearCatalogueIndicesForDocument(workspaceUri: DocumentUri, documentUri: DocumentUri, range?: Nullable<Range>) {
    
    if (isIndexingPaused()) {
        return false;
    }
    
    clearCatalogueEntries(workspaceUri, documentUri, range)
}