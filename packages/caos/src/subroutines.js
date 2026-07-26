/* eslint-disable eqeqeq */
// noinspection JSUnusedGlobalSymbols
import { COMMAND_TOKEN_PARSER_TYPE, TOKEN_PARSER_TYPE } from "./constants.js";
import { inRange } from "@creatureslsp/extension-util";
import { tok } from "./token-utils.js";
const SUBR = tok("subr");
const GSUB = tok("gsub");
/**
 * Checks if a subroutine exists inside the script containing this line and cursor
 * @param parseResult
 * @param subroutineName
 * @param line
 * @param column
 */
export function hasSubroutine(parseResult, subroutineName, line, column) {
    const script = parseResult.scripts.find((script) => {
        return inRange(script.textRange, line, column);
    });
    if (script == null) {
        return false;
    }
    const items = script.items;
    const subroutineNames = getSubroutines(items)
        .map(s => s.value);
    return subroutineNames.indexOf(subroutineName) >= 0;
}
export function getGsubNames(items) {
    return getSubroutines(items, GSUB);
}
/**
 * Gets all subroutine name parser elements in a list of parser items
 * @param items
 * @param afterToken token that precedes the subroutine name. Should be [SUBR, GSUB]
 */
export function getSubroutines(items, afterToken = SUBR) {
    let subroutineNext = false;
    const out = [];
    for (let item of items) {
        if (subroutineNext) {
            if (item.typeToken === TOKEN_PARSER_TYPE || item.typeToken === COMMAND_TOKEN_PARSER_TYPE) {
                out.push(item);
            }
            subroutineNext = false;
        }
        else if (item.typeToken === COMMAND_TOKEN_PARSER_TYPE) {
            if (item.value.length != 4) {
                console.error("Item length is invalid. Expected: 4; Actual: " + item.value.length);
                continue;
            }
            if (tok(item.value) === afterToken) {
                subroutineNext = true;
            }
        }
    }
    return out;
}
