import {com, CommandCall, IParserItem, ParseResult, ParserItem} from "./caos-util";
import {Nullable} from "@bedalton/extension-util"
import C2eStringVal = ParserItem.C2eStringVal;


/**
 * Checks if variable is of a given type
 */
export namespace Is {
    import Caos2Comment = ParserItem.Caos2Comment;
    import CommandToken = ParserItem.CommandToken;
    import TokenVal = ParserItem.TokenVal;
    import TypeTokens = com.bedalton.creatures.caos.libs.TypeTokens;
    import IntVal = ParserItem.IntVal;
    
    export function parseResult(result: Nullable<any>): result is ParseResult & NonNullable<ParseResult> {
        if (result == null) {
            return false;
        }
        return !(
            result.items == null || !Array.isArray(result.items) ||
            result.commandCalls == null || !Array.isArray(result.command)
        );
    }
    
    export function commandCall(call: Nullable<any>): call is CommandCall & NonNullable<CommandCall> {
        if (call == null) {
            return false;
        }
        return call.textRange != null && call.command?.command?.length && call.tokens;
    }
    
    export function parserItem(item: Nullable<any>): item is IParserItem<any> & NonNullable<CommandCall> {
        if (item == null) {
            return false;
        }
        return item.textRange != null && item.typeToken != null && item.actualType != null;
    }
    
    export function commandToken(item: Nullable<any>): item is CommandToken & NonNullable<CommandToken> {
        return parserItem(item) && item.typeToken === TypeTokens.COMMAND_TOKEN;
    }
    
    export function caos2Comment(item: Nullable<any>): item is Caos2Comment & NonNullable<CommandCall>  {
        if (item == null) {
            return false;
        }
        return parserItem(item) && item.typeToken === TypeTokens.CAOS2_COMMENT;
    }
    
    export function tokenVal(item: Nullable<any>): item is TokenVal & NonNullable<TokenVal> {
        return parserItem(item) && item.typeToken === TypeTokens.TOKEN
    }
    
    export function intVal(item: Nullable<any>): item is IntVal & NonNullable<IntVal> {
        return parserItem(item) && item.typeToken === TypeTokens.INT
    }
    
    export function c2eStringVal(item: Nullable<any>): item is C2eStringVal & NonNullable<C2eStringVal> {
        if (!parserItem(item)) {
            return false;
        }
        return item.typeToken == TypeTokens.QUOTE_STRING
    }
}

export * from "./is-similar-variant";