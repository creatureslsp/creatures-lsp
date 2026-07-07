export const CatalogueSemanticTokensTypes = {
    CATALOGUE_START: "catalogue-start",
    OVERRIDE: "operator",
    TAG_NAME: "class",
    STRING: "string",
    NUMBER: "number",
}

const tokenTypes = [
    CatalogueSemanticTokensTypes.CATALOGUE_START,
    CatalogueSemanticTokensTypes.OVERRIDE,
    CatalogueSemanticTokensTypes.TAG_NAME,
    CatalogueSemanticTokensTypes.STRING,
    CatalogueSemanticTokensTypes.NUMBER
];

export const CatalogueSemanticTokenModifiers = {
    TAG: "tag-keyword",
    ARRAY: "array-keyword",
    INT: "int",
    FLOAT: "float",
    AGENT_HELP: "agent-help",
    STRING_VALUE: "value",
    ARRAY_COUNT: "array-count",
}

const tokenModifiers = [
    CatalogueSemanticTokenModifiers.TAG,
    CatalogueSemanticTokenModifiers.ARRAY,
    CatalogueSemanticTokenModifiers.INT,
    CatalogueSemanticTokenModifiers.FLOAT,
    CatalogueSemanticTokenModifiers.AGENT_HELP,
    CatalogueSemanticTokenModifiers.STRING_VALUE,
    CatalogueSemanticTokenModifiers.ARRAY_COUNT,
];

const legendMap:{[id: string]: number} = {};
const modifierMap:{[id: string]: number} = {};

export const catalogueSemanticLegend = {
    tokenTypes,
    tokenModifiers
}

tokenTypes.forEach((item, i) => legendMap[item] = i);

tokenModifiers.forEach((item, i) => modifierMap[item] = i);

export const CatalogueSemanticTokensMap = {
    legendMap,
    modifierMap
}