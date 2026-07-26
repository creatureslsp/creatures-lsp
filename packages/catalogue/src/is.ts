import type {
    CatalogueArrayKeyword,
    CatalogueComment,
    CatalogueErrorChar,
    CatalogueFloatValue,
    CatalogueIntValue,
    CatalogueNewline,
    CatalogueOverrideKeyword,
    CatalogueParseResult,
    CatalogueParserItem,
    CatalogueStringValue,
    CatalogueTagKeyword
} from "@creatureslsp/caos-kt/catalogue-core";

import type {Nullable} from "@creatureslsp/extension-util";

export const CatalogueParserItemTypes = {
    TAG_KEYWORD: 1,
    ARRAY_KEYWORD: 2,
    OVERRIDE_KEYWORD: 3,
    STRING: 5,
    INT: 6,
    FLOAT: 7,
    ARRAY_COUNT: 8,
    COMMENT: 9,
    ERROR_CHAR: 10,
    NEWLINE: 11,
};

export namespace IsCatalogue {
    
    export function parseResult(result: Nullable<any>): result is CatalogueParseResult & NonNullable<CatalogueParseResult> {
        if (result == null) {
            return false;
        }
        return !(
            result.catalogueEntries == null || !Array.isArray(result.catalogueEntries) ||
            result.parserItems == null || !Array.isArray(result.parserItems)
        );
    }
    
    export function parserItem(item: any): item is CatalogueParserItem {
        if (item == null) {
            return false;
        }
        if (typeof item !== "object") {
            return false;
        }
        return typeof item["text"] === "string"
            && typeof item["textRange"] === "object"
            && typeof item["itemType"] === "number"
    }
    
    
    export function keyword(item: any): item is CatalogueParserItem {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.TAG_KEYWORD ||
            item.itemType === CatalogueParserItemTypes.ARRAY_KEYWORD;
    }
    
    export function tagKeyword(item: any): item is CatalogueTagKeyword {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.TAG_KEYWORD
    }
    
    export function arrayKeyword(item: any): item is CatalogueArrayKeyword {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.ARRAY_KEYWORD
    }
    
    export function overrideKeyword(item: any): item is CatalogueOverrideKeyword {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.OVERRIDE_KEYWORD
    }
    
    export function arrayCount(item: any): item is CatalogueIntValue {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.ARRAY_COUNT;
    }
    
    export function string(item: any): item is CatalogueStringValue {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.STRING
    }
    
    export function int(item: any): item is CatalogueIntValue {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.INT
    }
    
    export function float(item: any): item is CatalogueFloatValue {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.FLOAT;
    }
    
    export function comment(item: any): item is CatalogueComment {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.COMMENT
    }
    
    export function errorChar(item: any): item is CatalogueErrorChar {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.ERROR_CHAR
    }
    
    export function newline(item: any): item is CatalogueNewline {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.NEWLINE
    }
}