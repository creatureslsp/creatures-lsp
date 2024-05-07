// noinspection JSUnusedGlobalSymbols

import {CommandCall, ICaosContextListener, IParserItem, ParseResult, ParserItem} from "./caos-util";
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
    PICT_DIMENSION_PARSER_TYPE,
    PLACEHOLDER_TYPE,
    QUOTE_STRING_PARSER_TYPE,
    tok,
    TOKEN_PARSER_TYPE
} from "./constants";


/**
 * Walks a parser result by running each token through a listener callback
 * @param result
 * @param listener
 */
export function walkParseResult(result: ParseResult, listener: ICaosContextListener) {
    
    // const items = result.items.sort((a: IParserItem<any>, b: IParserItem<any>) => {
    //     const aRange = a.textRange;
    //     const bRange = b.textRange;
    //     if (aRange?.start.line === bRange?.end.line) {
    //         return (aRange?.start.character ?? 0) - (bRange?.start.character ?? 0);
    //     }
    //     return (aRange?.start.line ?? 0) - (bRange?.start.line ?? 0);
    // });
    // for (let item of items) {
    for (let item of result.items) {
        switch (item.typeToken) {
            case INT_PARSER_TYPE:
                listener.onInt(item);
                continue;
            case FLOAT_PARSER_TYPE:
                listener.onFloat(item);
                continue;
            case COMMAND_TOKEN_PARSER_TYPE:
                listener.onCommandToken(<ParserItem.CommandToken>item);
                continue;
            case INDEXED_VAR_PARSER_TYPE:
                listener.onIndexedVar(<any>item);
                continue;
            case EQ_OP_PARSER_TYPE:
                listener.onEqOp(<ParserItem.EqOp>item);
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
                listener.onComment(item);
                continue;
            case CAOS2_COMMENT_TYPE:
                listener.onCaos2Comment(<ParserItem.Caos2Comment>item);
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
    
    onAnyString(_token: ParserItem.C2eStringVal | ParserItem.C1eStringVal) {
    }
    
    onBinary(_token: ParserItem.BinaryVal) {
    }
    
    onByteString(_token: ParserItem.ByteString) {
    }
    
    onC1eString(_token: ParserItem.C1eStringVal) {
    }
    
    onC2eString(_token: ParserItem.C2eStringVal) {
    }
    
    onChar(_token: ParserItem.CharVal) {
    }
    
    onCommandToken(_token: ParserItem.CommandToken) {
    }
    
    onEqJoin(_token: ParserItem.EqJoin) {
    }
    
    onEqOp(_token: ParserItem.EqOp) {
    }
    
    onFloat(_token: ParserItem.FloatVal) {
    }
    
    onIndexedVar(_token: ParserItem.IndexedVar) {
    }
    
    onInt(_token: ParserItem.IntVal) {
    }
    
    onPictDimension(_token: ParserItem.DdePictVal) {
    }
    
    onToken(_token: ParserItem.TokenVal) {
    }
    
    onPlaceholderText(_token: ParserItem.AutocompleteHint) {
    }
    
    onComment(_token: IParserItem<any>) {
    }
    
    onCaos2Comment(_token: IParserItem<any>) {
    }
    
}