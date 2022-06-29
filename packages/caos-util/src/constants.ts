// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection

export const INT_TYPE_ID = 1;
export const FLOAT_TYPE_ID = 2;
export const TOKEN_TYPE_ID = 3;
export const STRING_TYPE_ID = 4;
export const VARIABLE_TYPE_ID = 6;
export const COMMAND_TYPE_ID = 8;
export const C1_STRING_TYPE_ID = 9;
export const BYTE_STRING_TYPE_ID = 10;
export const AGENT_TYPE_ID = 11;
export const ANY_TYPE_ID = 13;
export const CONDITION_TYPE_ID = 15;
export const DECIMAL_TYPE_ID = 16;
export const ANIMATION_TYPE_ID = 17;
export const HEXADECIMAL_TYPE_ID = 18;
export const NULL_TYPE_ID = 0;
export const PICT_DIMENSION_TYPE_ID = 19;
export const UNKNOWN_TYPE_ID = -1;
export const EQ_OP_TYPE_ID = -2;
export const EQ_JOIN_TYPE_ID = -3;
export const MONACO_PLACEHOLDER = -4;
export const COMMENT_TYPE_ID = -5;
export const CAOS2_COMMENT_TYPE_ID = -6;

export const COMMAND_TYPE_COMMAND_ID = 0;
export const COMMAND_TYPE_RVALUE_ID = 1;
export const COMMAND_TYPE_LVALUE_ID = 2;

export const ERROR_TYPE_GENERAL = 0;
export const ERROR_TYPE_TYPE_ERROR = 1;
export const ERROR_TYPE_INCOMPLETE_COMMAND_ERROR = 2;
export const ERROR_TYPE_OUT_OF_VARIANT = 3;
export const ERROR_TYPE_UNTERMINATED_CONTROL_STATEMENT = 4;
export const ERROR_TYPE_UNEXPECTED_CONTROL_TERMINATOR = 5;

/**
 * Converts 4-letter CAOS words to int and CAOS word ints back into strings
 * @param token
 */
export function tok(token: string | number): string|number {
    if (typeof token === 'number') {
        return String.fromCharCode((token >> 24) & 0xFF) + String.fromCharCode((token >> 16) & 0xFF) + String.fromCharCode((token >> 8) & 0xFF) + String.fromCharCode(token & 0xFF);
    } else { // noinspection SuspiciousTypeOfGuard
        if (typeof token === 'string') {
            token = token.toLowerCase();
            return (token.charCodeAt(0) << 24) | (token.charCodeAt(1) << 16) | (token.charCodeAt(2) << 8) | token.charCodeAt(3);
        } else {
            throw Error("Could not tok(" + (typeof token) + "); Value of: " + JSON.stringify(token));
        }
    }
}


export const FLOAT_PARSER_TYPE = tok('flot');
export const INT_PARSER_TYPE = tok('int_');
export const BINARY_PARSER_TYPE = tok('bina');
export const CHAR_PARSER_TYPE = tok('char');
export const BYTE_STRING_PARSER_TYPE = tok('byte');
export const QUOTE_STRING_PARSER_TYPE = tok('qstr');
export const BRACKET_STRING_PARSER_TYPE = tok('bstr');
export const TOKEN_PARSER_TYPE = tok('tokn');
export const COMMAND_TOKEN_PARSER_TYPE = tok('cmnd');
export const INDEXED_VAR_PARSER_TYPE = tok("var_");
export const EQ_OP_PARSER_TYPE = tok('eqop');
export const EQ_JOIN_PARSER_TYPE = tok('eqjn');
export const PICT_DIMENSION_PARSER_TYPE = tok('pict');
export const ERROR_PARSER_TYPE = tok('errr');
export const PLACEHOLDER_TYPE = tok('plch');
export const COMMENT_TYPE = tok('****');
export const CAOS2_COMMENT_TYPE = tok('*###');