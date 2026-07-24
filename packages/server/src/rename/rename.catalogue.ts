import type {Nullable} from "@creatures-lsp/caos-kt";
import {parseCatalogue} from "@creatures-lsp/caos-kt/catalogue-core";
import type {DocumentUri, Position, TextEdit, WorkspaceEdit} from "vscode-languageserver";
import {getCatalogueLocations} from "../indices/index.catalogue.entries.js";
import {isVsCode, getWorkspaceEdits, inRange} from "@creatures-lsp/extension-util";
import {getCaosCatalogueLocations} from "../indices/index.caos.catalogue-usages.js";
import type {CatalogueDocument} from "../catalogue/catalogue.document.js";
import {getWorkspaceUriForFile} from "../workspace-folders.js";
import {offsetRenameRange} from "@creatures-lsp/extension-util";
import {pushInto} from "@creatures-lsp/extension-util/array-util";


export function renameInCatalogueDocument(
    document: CatalogueDocument,
    position: Position,
    newTagName: string,
): Nullable<WorkspaceEdit> {
    
    const workspaceUri = getWorkspaceUriForFile(document.documentUri);
    
    const parseResult = parseCatalogue(document.text);
    
    const {line, character} = position;
    
    const tag = parseResult
        .catalogueEntries
        .find(entry => {
            if (entry.catalogueNameParserItem == null) {
                return false
            }
            return inRange(entry.catalogueNameParserItem.textRange, line, character, false, true)
        });
    
    if (tag == null) {
        return null;
    }
    
    const oldTagName: Nullable<string> = tag.catalogueNameParserItem?.value;
    
    if (oldTagName == null) {
        return null;
    }
    
    const out = renameCatalogueInCatalogueAndCaosFiles(workspaceUri, oldTagName, newTagName) ?? {changes: {}};
    
    if (out.changes == null) {
        out.changes = {};
    }
    
    if (isVsCode()) {
        if (typeof out.changes[document.documentUri] !== "undefined") {
            const {line, character} = position;
            out.changes[document.documentUri] = out.changes[document.documentUri]
                .filter(it => !inRange(it.range, line, character));
        }
    } else {
        const thisEdit: TextEdit = {
            newText: "\"" + newTagName + "\"",
            range: offsetRenameRange(tag.catalogueNameParserItem!.textRange)
        } satisfies TextEdit
        
        pushInto(
            out.changes,
            document.documentUri,
            thisEdit,
            edit => edit != null
        );
    }
    
    return out;
}

export function renameCatalogueInCatalogueAndCaosFiles(
    workspaceUri: DocumentUri,
    oldTag: string,
    newTag: string
): Nullable<WorkspaceEdit> {
    
    const catalogueFileLocations = getCatalogueLocations(
        workspaceUri,
        oldTag,
    );
    
    const caosCatalogueTagUsages = getCaosCatalogueLocations(
        workspaceUri,
        oldTag
    );
    
    const locations = catalogueFileLocations
        .concat(...caosCatalogueTagUsages);
    
    if (locations.length === 0) {
        return null;
    }
    
    return getWorkspaceEdits(locations, "\"" + newTag + "\"");
}