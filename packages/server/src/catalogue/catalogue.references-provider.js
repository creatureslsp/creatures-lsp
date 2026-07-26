// noinspection ES6MissingAwait
import { inRange } from "@creatureslsp/extension-util";
import { parseCatalogue } from "@creatureslsp/catalogue/core";
import { isCatalogueDocument } from "../document.js";
import { getCatalogueNameReferences } from "../caos/references/references.catalogue.js";
export async function getRawCatalogueLocations(params, workspaceUri, document) {
    if (!isCatalogueDocument(document)) {
        return [];
    }
    const { text } = document;
    const { line, character } = params.position;
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
