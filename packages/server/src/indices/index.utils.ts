import type {DocumentUri, Range} from "vscode-languageserver";
import type {IndexedItemLocation} from "./indices.js";
import {type Nullable, rangesIntersect} from "@creatures-lsp/extension-util";


export function indexFilterDoNotDelete(documentUri: DocumentUri, range : Nullable<Range>): (location: IndexedItemLocation) => boolean {
    return (location) => {
        const should = shouldDelete(documentUri, range, location);
        if (should) {
            if (location.documentUri.toLowerCase() != documentUri.toLowerCase()) {
                throw new Error("Should not delete location in another file")
            }
        }
        return !should;
    }
}

export function indexFilterShouldDelete(documentUri: DocumentUri, range : Nullable<Range>): (location: IndexedItemLocation) => boolean {
    return (location) => {
        return shouldDelete(documentUri, range, location);
    }
}

export function shouldDelete(documentUri: DocumentUri, range: Nullable<Range>, location: IndexedItemLocation): boolean {
    if (documentUri.toLowerCase() !== location.documentUri.toLowerCase()) {
        // Do not delete locations for documents other than this one
        return false;
    }
    
    if (range == null) {
        return true;
    }
   
    return rangesIntersect(range, location.range);
}
