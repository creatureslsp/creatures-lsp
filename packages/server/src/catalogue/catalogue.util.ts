import {type CatalogueParseResult, type CatalogueParserItem, parseCatalogue} from "@creatureslsp/catalogue/core";
import {type Nullable} from "@creatureslsp/catalogue";
import {inRange} from "@creatureslsp/extension-util";


export function getCatalogueNameUnderCursor(
    data: string | CatalogueParseResult,
    line: number,
    character: number
): Nullable<CatalogueParserItem> {
    
    if (typeof data === "string") {
        data = parseCatalogue(data);
    }
    
    if (data == null) {
        console.error("Catalogue Parse result is null");
        return null;
    }
    
    return data
        .catalogueEntries
        .filter (e => {
            return e.catalogueNameParserItem != null &&
                inRange(e.catalogueNameParserItem!.textRange, line, character)
        })
        ?.pop()
        ?.catalogueNameParserItem;
}