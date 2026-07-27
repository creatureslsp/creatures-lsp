export const SemanticTokensTypes = {
    COMMAND_TOKEN: "command",
    RVALUE_TOKEN: "rvalue",
    LVALUE_TOKEN: "lvalue",
    STRING_TOKEN: "string",
    TOKEN_TOKEN: "token",
    VARIABLE_TOKEN: "variable",
    UNKNOWN_TYPE: "unknown-type",
    SUBROUTINE_NAME_TOKEN:"subroutine-name",
    DDE_PICT_TOKEN:"dde-pict-token",
    EQ_OP_TOKEN:'eqOp',
    EQ_JOIN_TOKEN:'eqJoin',
    PLACEHOLDER_TEXT: "placeholder-text",
    CAOS2PRAY_TAG: "caos2pray-tag",
    CAOS2PRAY_COMMAND: "caos2pray-command",
    CAOS2PRAY_HASH: "caos2pray-hash",
    STRING_ESCAPE_CHARACTER: "string-escape-character",
    NUMBER: "number",
}

const tokenTypes = [
    SemanticTokensTypes.COMMAND_TOKEN,
    SemanticTokensTypes.RVALUE_TOKEN,
    SemanticTokensTypes.LVALUE_TOKEN,
    SemanticTokensTypes.STRING_TOKEN,
    SemanticTokensTypes.TOKEN_TOKEN,
    SemanticTokensTypes.VARIABLE_TOKEN,
    SemanticTokensTypes.UNKNOWN_TYPE,
    SemanticTokensTypes.SUBROUTINE_NAME_TOKEN,
    SemanticTokensTypes.PLACEHOLDER_TEXT,
    SemanticTokensTypes.DDE_PICT_TOKEN,
    SemanticTokensTypes.EQ_OP_TOKEN,
    SemanticTokensTypes.EQ_JOIN_TOKEN,
    SemanticTokensTypes.PLACEHOLDER_TEXT,
    SemanticTokensTypes.CAOS2PRAY_TAG,
    SemanticTokensTypes.CAOS2PRAY_COMMAND,
    SemanticTokensTypes.CAOS2PRAY_HASH,
    SemanticTokensTypes.STRING_ESCAPE_CHARACTER,
    SemanticTokensTypes.NUMBER,
];

export const SemanticTokenModifiers = {
    C1_STRING_MODIFIER_TOKEN: "c1-string",
    QUOTE_STRING_MODIFIER_TOKEN: "quote-string",
    BYTE_STRING_MODIFIER_TOKEN: "byte-string",
    TOKEN_FOUND_MODIFIER_TOKEN: "found",
    TOKEN_NOT_FOUND_MODIFIER_TOKEN: "not-found",
    VAXX_MODIFIER_TOKEN: "vaxx",
    OVXX_MODIFIER_TOKEN: "ovxx",
    MVXX_MODIFIER_TOKEN: "mvxx",
    RETURNS_NUMBER: 'returns-number',
    RETURNS_STRING: 'returns-string',
    RETURNS_INT: 'returns-int',
    RETURNS_FLOAT: 'returns-float',
    RETURNS_VARIABLE: 'returns-variable',
    RETURNS_AGENT: 'returns-agent',
    AGENT_CONSTRUCTOR: 'agent-constructor',
    COMMAND_PREFIX: 'command-prefix',
    COMMAND_SUFFIX: 'command-suffix',
    CAOS2PRAY_OFFICIAL: 'official',
}

const tokenModifiers = [
    "",
    SemanticTokenModifiers.C1_STRING_MODIFIER_TOKEN,
    SemanticTokenModifiers.QUOTE_STRING_MODIFIER_TOKEN,
    SemanticTokenModifiers.BYTE_STRING_MODIFIER_TOKEN,
    SemanticTokenModifiers.TOKEN_FOUND_MODIFIER_TOKEN,
    SemanticTokenModifiers.TOKEN_NOT_FOUND_MODIFIER_TOKEN,
    SemanticTokenModifiers.VAXX_MODIFIER_TOKEN,
    SemanticTokenModifiers.OVXX_MODIFIER_TOKEN,
    SemanticTokenModifiers.MVXX_MODIFIER_TOKEN,
    SemanticTokenModifiers.RETURNS_NUMBER,
    SemanticTokenModifiers.RETURNS_STRING,
    SemanticTokenModifiers.RETURNS_INT,
    SemanticTokenModifiers.RETURNS_FLOAT,
    SemanticTokenModifiers.RETURNS_VARIABLE,
    SemanticTokenModifiers.RETURNS_AGENT,
    SemanticTokenModifiers.AGENT_CONSTRUCTOR,
    SemanticTokenModifiers.COMMAND_PREFIX,
    SemanticTokenModifiers.COMMAND_SUFFIX,
    SemanticTokenModifiers.CAOS2PRAY_OFFICIAL,
];
const legendMap:{[id: string]: number} = {};
const modifierMap:{[id: string]: number} = {};

export const semanticLegend = {
    tokenTypes,
    tokenModifiers
}

tokenTypes.forEach((item, i) => legendMap[item] = i);

tokenModifiers.forEach((item, i) => modifierMap[item] = i);

export const SemanticTokensMap = {
    legendMap,
    modifierMap
}