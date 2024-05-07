import {DocumentUri, Range} from "vscode-languageserver";
import {IndexedItemLocation} from "./indices";
import {Nullable, rangesIntersect} from "@bedalton/extension-util";
import {getFiles} from "../files";
import {indexCaosFile} from "./index.caos";


export function indexFilterDoNotDelete(documentUri: DocumentUri, range : Nullable<Range>): (location: IndexedItemLocation) => boolean {
    return (location) => {
        const should = shouldDelete(documentUri, range, location);
        if (should) {
            if (location.documentUri.toLowerCase() != documentUri.toLowerCase()) {
                throw new Error("Should not delete location in another file")
            }
            console.log("Should delete " + location.text +
                " in " + location.documentUri +
                " @ " + location.range.start.line + ":" + location.range.start.character
            );
        } else {
            console.log("Should NOT delete " + location.text +
                " in " + location.documentUri +
                " @ " + location.range.start.line + ":" + location.range.start.character
            );
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

const didInitIndex:string[] = [];

export async function initIndices(workspaceUri: DocumentUri) {
    if (didInitIndex.indexOf(workspaceUri) >= 0) {
        return;
    }
    didInitIndex.push(workspaceUri);
    const files = await getFiles(workspaceUri, ["cos"]);
    for (const file of files) {
        await indexCaosFile(workspaceUri, file);
    }
}