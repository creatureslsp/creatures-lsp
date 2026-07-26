import { TypeTokens } from "@creatureslsp/caos-kt/caos-core";
/**
 * Checks if variable is of a given type
 */
export var Is;
(function (Is) {
    function parseResult(result) {
        if (result == null) {
            return false;
        }
        return !(result.items == null || !Array.isArray(result.items) ||
            result.commandCalls == null || !Array.isArray(result.commandCalls));
    }
    Is.parseResult = parseResult;
    function commandCall(call) {
        if (call == null) {
            return false;
        }
        return call.textRange != null && call.commandString?.length && call.tokens;
    }
    Is.commandCall = commandCall;
    function caosParserItem(item) {
        if (item == null) {
            return false;
        }
        return item.textRange != null && item.typeToken != null && item.actualType != null;
    }
    Is.caosParserItem = caosParserItem;
    function commandToken(item) {
        return caosParserItem(item) && item.typeToken === TypeTokens.getInstance().COMMAND_TOKEN;
    }
    Is.commandToken = commandToken;
    function caos2Comment(item) {
        if (item == null) {
            return false;
        }
        return caosParserItem(item) && item.typeToken === TypeTokens.getInstance().CAOS2_COMMENT;
    }
    Is.caos2Comment = caos2Comment;
    function tokenVal(item) {
        return caosParserItem(item) && item.typeToken === TypeTokens.getInstance().TOKEN;
    }
    Is.tokenVal = tokenVal;
    function intVal(item) {
        return caosParserItem(item) && item.typeToken === TypeTokens.getInstance().INT;
    }
    Is.intVal = intVal;
    function c2eStringVal(item) {
        if (!caosParserItem(item)) {
            return false;
        }
        return item.typeToken == TypeTokens.getInstance().QUOTE_STRING;
    }
    Is.c2eStringVal = c2eStringVal;
})(Is || (Is = {}));
export * from "./is-similar-variant.js";
