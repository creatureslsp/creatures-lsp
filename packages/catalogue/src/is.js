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
export var IsCatalogue;
(function (IsCatalogue) {
    function parseResult(result) {
        if (result == null) {
            return false;
        }
        return !(result.catalogueEntries == null || !Array.isArray(result.catalogueEntries) ||
            result.parserItems == null || !Array.isArray(result.parserItems));
    }
    IsCatalogue.parseResult = parseResult;
    function parserItem(item) {
        if (item == null) {
            return false;
        }
        if (typeof item !== "object") {
            return false;
        }
        return typeof item["text"] === "string"
            && typeof item["textRange"] === "object"
            && typeof item["itemType"] === "number";
    }
    IsCatalogue.parserItem = parserItem;
    function keyword(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.TAG_KEYWORD ||
            item.itemType === CatalogueParserItemTypes.ARRAY_KEYWORD;
    }
    IsCatalogue.keyword = keyword;
    function tagKeyword(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.TAG_KEYWORD;
    }
    IsCatalogue.tagKeyword = tagKeyword;
    function arrayKeyword(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.ARRAY_KEYWORD;
    }
    IsCatalogue.arrayKeyword = arrayKeyword;
    function overrideKeyword(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.OVERRIDE_KEYWORD;
    }
    IsCatalogue.overrideKeyword = overrideKeyword;
    function arrayCount(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.ARRAY_COUNT;
    }
    IsCatalogue.arrayCount = arrayCount;
    function string(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.STRING;
    }
    IsCatalogue.string = string;
    function int(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.INT;
    }
    IsCatalogue.int = int;
    function float(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.FLOAT;
    }
    IsCatalogue.float = float;
    function comment(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.COMMENT;
    }
    IsCatalogue.comment = comment;
    function errorChar(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.ERROR_CHAR;
    }
    IsCatalogue.errorChar = errorChar;
    function newline(item) {
        if (!parserItem(item)) {
            return false;
        }
        return item.itemType === CatalogueParserItemTypes.NEWLINE;
    }
    IsCatalogue.newline = newline;
})(IsCatalogue || (IsCatalogue = {}));
