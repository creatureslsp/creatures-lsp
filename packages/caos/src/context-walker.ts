// noinspection JSUnusedGlobalSymbols

import type {
    CommandCall,
    CaosParseResult,
} from "@creatureslsp/caos-kt/caos-parser";

import type {
    AutocompleteHint,
    BinaryVal,
    ByteString,
    C1eStringVal,
    C2eStringVal,
    Caos2Comment,
    CharVal,
    CommandToken,
    DdePictVal,
    EqJoinVal,
    EqOpVal,
    FloatVal,
    IndexedVarVal,
    IntVal,
    TokenVal,
    Comment,
    CaosParserItem,
    ListBrace
} from "@creatureslsp/caos-kt/caos-core";

export declare interface ICaosContextListener {
    onIndexedVar(token: IndexedVarVal): void;
    
    onInt(token: IntVal): void;
    
    onBinary(token: BinaryVal): void;
    
    onChar(token: CharVal): void;
    
    onFloat(token: FloatVal): void;
    
    onByteString(token: ByteString): void;
    
    onC1eString(token: C1eStringVal): void;
    
    onC2eString(token: C2eStringVal): void;
    
    onAnyString(token: C2eStringVal | C1eStringVal): void;
    
    onPictDimension(token: DdePictVal): void;
    
    onCommandToken(token: CommandToken): void;
    
    onToken(token: TokenVal): void;
    
    onEqOp(token: EqOpVal): void;
    
    onEqJoin(token: EqJoinVal): void;
    
    onCommandCall(call: CommandCall): void;
    
    onPlaceholderText(token: AutocompleteHint): void;
    
    onComment(token: Comment): void
    
    onCaos2Comment(token: Caos2Comment): void;
    
    onListBrace?: (token: ListBrace) => void;
}

import {
    BINARY_PARSER_TYPE,
    BRACKET_STRING_PARSER_TYPE,
    BYTE_STRING_PARSER_TYPE,
    CAOS2_COMMENT_TYPE,
    CHAR_PARSER_TYPE,
    COMMAND_TOKEN_PARSER_TYPE,
    COMMENT_TYPE,
    EQ_JOIN_PARSER_TYPE,
    EQ_OP_PARSER_TYPE,
    ERROR_PARSER_TYPE,
    FLOAT_PARSER_TYPE,
    INDEXED_VAR_PARSER_TYPE,
    INT_PARSER_TYPE,
    LIST_BRACE_TYPE,
    PICT_DIMENSION_PARSER_TYPE,
    PLACEHOLDER_TYPE,
    QUOTE_STRING_PARSER_TYPE,
    TOKEN_PARSER_TYPE
} from "./constants.js";

import {tok} from "./token-utils.js";


/**
 * Walks a parser result by running each token through a listener callback
 * @param result
 * @param listener
 */
export function walkCaosParseResult(result: CaosParseResult, listener: ICaosContextListener) {
    
    // const items = result.items.sort((a: ICaosParserItem<any>, b: ICaosParserItem<any>) => {
    //     const aRange = a.textRange;
    //     const bRange = b.textRange;
    //     if (aRange?.start.line === bRange?.end.line) {
    //         return (aRange?.start.character ?? 0) - (bRange?.start.character ?? 0);
    //     }
    //     return (aRange?.start.line ?? 0) - (bRange?.start.line ?? 0);
    // });
    // for (let item of items) {
    
    const onListBrace = listener.onListBrace ? (item: ListBrace) => {
        listener.onListBrace?.call(listener, item);
    } : () => {}
    for (let item of result.items) {
        switch (item.typeToken) {
            case INT_PARSER_TYPE:
                listener.onInt(item);
                continue;
            case FLOAT_PARSER_TYPE:
                listener.onFloat(item);
                continue;
            case COMMAND_TOKEN_PARSER_TYPE:
                listener.onCommandToken(<CommandToken>item);
                continue;
            case INDEXED_VAR_PARSER_TYPE:
                listener.onIndexedVar(<any>item);
                continue;
            case EQ_OP_PARSER_TYPE:
                listener.onEqOp(<EqOpVal>item);
                continue;
            case QUOTE_STRING_PARSER_TYPE:
                listener.onC2eString(item);
                continue;
            case BYTE_STRING_PARSER_TYPE:
                listener.onByteString(item);
                continue;
            case EQ_JOIN_PARSER_TYPE:
                listener.onEqJoin(item);
                continue;
            case BRACKET_STRING_PARSER_TYPE:
                listener.onC1eString(item);
                continue;
            case TOKEN_PARSER_TYPE:
                listener.onToken(item);
                continue;
            case CHAR_PARSER_TYPE:
                listener.onChar(item);
                continue;
            case BINARY_PARSER_TYPE:
                listener.onBinary(item);
                continue;
            case PICT_DIMENSION_PARSER_TYPE:
                listener.onPictDimension(item);
                continue;
            case ERROR_PARSER_TYPE:
                // Skip for now
                continue;
            case PLACEHOLDER_TYPE:
                listener.onPlaceholderText(item);
                continue;
            case COMMENT_TYPE:
                listener.onComment(<Comment>item);
                continue;
            case CAOS2_COMMENT_TYPE:
                listener.onCaos2Comment(<Caos2Comment>item);
                continue;
            case LIST_BRACE_TYPE:
                onListBrace(<ListBrace>item);
                continue;
            default:
                throw Error("Failed to route item " + tok(item.typeToken) + '(' + item.value + ')');
        }
    }
    for (let call of result.commandCalls) {
        listener.onCommandCall(call);
    }
}

/**
 * Listener for walking a CAOS result with empty implementations
 * Useful for walking a specific element without having to implement all methods
 */
export class CaosContextListenerBase implements ICaosContextListener {
    
    /**
     * Command call cannot be automatically called
     * @param _call
     */
    onCommandCall(_call: CommandCall) {
        throw new Error("Method not implemented.");
    }
    
    onAnyString(_token: C2eStringVal | C1eStringVal) {
    }
    
    onBinary(_token: BinaryVal) {
    }
    
    onByteString(_token: ByteString) {
    }
    
    onC1eString(_token: C1eStringVal) {
    }
    
    onC2eString(_token: C2eStringVal) {
    }
    
    onChar(_token: CharVal) {
    }
    
    onCommandToken(_token: CommandToken) {
    }
    
    onEqJoin(_token: EqJoinVal) {
    }
    
    onEqOp(_token: EqOpVal) {
    }
    
    onFloat(_token: FloatVal) {
    }
    
    onIndexedVar(_token: IndexedVarVal) {
    }
    
    onInt(_token: IntVal) {
    }
    
    onPictDimension(_token: DdePictVal) {
    }
    
    onToken(_token: TokenVal) {
    }
    
    onPlaceholderText(_token: AutocompleteHint) {
    }
    
    onComment(_token: CaosParserItem) {
    }
    
    onCaos2Comment(_token: CaosParserItem) {
    }
    
    onListBrace(_token: ListBrace): void {
    }
    
}