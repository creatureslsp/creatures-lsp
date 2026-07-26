import { parseCatalogue } from "@creatureslsp/catalogue/core";
import { inRange } from "@creatureslsp/extension-util";
export function getCatalogueNameUnderCursor(data, line, character) {
    if (typeof data === "string") {
        data = parseCatalogue(data);
    }
    if (data == null) {
        console.error("Catalogue Parse result is null");
        return null;
    }
    return data
        .catalogueEntries
        .filter(e => {
        return e.catalogueNameParserItem != null &&
            inRange(e.catalogueNameParserItem.textRange, line, character);
    })
        ?.pop()
        ?.catalogueNameParserItem;
}
