// noinspection ES6MissingAwait

import type {Location} from "vscode-languageserver";
import type {ReferenceParams} from "vscode-languageserver-protocol";
import {inRange} from "@creatures-lsp/extension-util";
import {parseCatalogue} from "@creatures-lsp/caos-kt/catalogue-core";
import {type CreaturesDocument, isCatalogueDocument} from "../document.js";
import {getCatalogueNameReferences} from "../caos/references/references.catalogue.js";

export async function getRawCatalogueLocations(
    params: ReferenceParams,
    workspaceUri: string,
    document: CreaturesDocument<any>
): Promise<Location[]> {
    
    if (!isCatalogueDocument(document)) {
        return [];
    }
    
    const {text} = document;
    
    const {line, character} = params.position;
    
    const parseResult = parseCatalogue(text);
    
    const tagNameElement = parseResult
        .catalogueEntries
        .map(e => e.catalogueNameParserItem)
        .find((e) => {
            const range = e?.textRange;
            return range != null && inRange(range, line, character);
        });
    
    if (tagNameElement == null) {
        return [];
    }
    
    const tagName = tagNameElement.value;
    
    return getCatalogueNameReferences(workspaceUri, tagName);
}