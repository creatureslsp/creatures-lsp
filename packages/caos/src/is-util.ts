import type {CaosParseResult, CommandCall} from "@creatureslsp/caos-kt/caos-parser";
import {
    type C2eStringVal,
    type Caos2Comment,
    type CommandToken,
    type CaosParserItem,
    type IntVal,
    type TokenVal,
    TypeTokens
} from "@creatureslsp/caos-kt/caos-core";

import {Nullable} from "@creatureslsp/extension-util";


/**
 * Checks if variable is of a given type
 */
export namespace Is {
    
    export function parseResult(result: Nullable<any>): result is CaosParseResult & NonNullable<CaosParseResult> {
        if (result == null) {
            return false;
        }
        return !(
            result.items == null || !Array.isArray(result.items) ||
            result.commandCalls == null || !Array.isArray(result.commandCalls)
        );
    }
    
    export function commandCall(call: Nullable<any>): call is CommandCall & NonNullable<CommandCall> {
        if (call == null) {
            return false;
        }
        return call.textRange != null && call.commandString?.length && call.tokens;
    }
    
    export function caosParserItem(item: Nullable<any>): item is CaosParserItem & NonNullable<CommandCall> {
        if (item == null) {
            return false;
        }
        return item.textRange != null && item.typeToken != null && item.actualType != null;
    }
    
    export function commandToken(item: Nullable<any>): item is CommandToken & NonNullable<CommandToken> {
        return caosParserItem(item) && item.typeToken === TypeTokens.getInstance().COMMAND_TOKEN;
    }
    
    export function caos2Comment(item: Nullable<any>): item is Caos2Comment & NonNullable<CommandCall> {
        if (item == null) {
            return false;
        }
        return caosParserItem(item) && item.typeToken === TypeTokens.getInstance().CAOS2_COMMENT;
    }
    
    export function tokenVal(item: Nullable<any>): item is TokenVal & NonNullable<TokenVal> {
        return caosParserItem(item) && item.typeToken === TypeTokens.getInstance().TOKEN;
    }
    
    export function intVal(item: Nullable<any>): item is IntVal & NonNullable<IntVal> {
        return caosParserItem(item) && item.typeToken === TypeTokens.getInstance().INT;
    }
    
    export function c2eStringVal(item: Nullable<any>): item is C2eStringVal & NonNullable<C2eStringVal> {
        if (!caosParserItem(item)) {
            return false;
        }
        return item.typeToken == TypeTokens.getInstance().QUOTE_STRING;
    }
}

export * from "./is-similar-variant.js";