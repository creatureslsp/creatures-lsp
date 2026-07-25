/* eslint-disable eqeqeq */
// noinspection JSUnusedGlobalSymbols

import {COMMAND_TOKEN_PARSER_TYPE, TOKEN_PARSER_TYPE} from "./constants.js";
import {inRange} from "@creatures-lsp/extension-util";
import type { CaosParseResult} from "@creatures-lsp/caos-kt/caos-parser";
import type {CaosParserItem} from "@creatures-lsp/caos-kt/caos-core";
import {tok} from "./token-utils.js";

const SUBR: number = tok("subr") as number;
const GSUB: number = tok("gsub") as number;

/**
 * Checks if a subroutine exists inside the script containing this line and cursor
 * @param parseResult
 * @param subroutineName
 * @param line
 * @param column
 */
export function hasSubroutine(parseResult: CaosParseResult, subroutineName: string, line: number, column: number): boolean {
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

export function getGsubNames(items: CaosParserItem[]) {
    return getSubroutines(items, GSUB);
}

/**
 * Gets all subroutine name parser elements in a list of parser items
 * @param items
 * @param afterToken token that precedes the subroutine name. Should be [SUBR, GSUB]
 */
export function getSubroutines(items: CaosParserItem[], afterToken: number = SUBR): CaosParserItem[] {
    let subroutineNext = false;
    const out: CaosParserItem[] = [];
    for (let item of items) {
        if (subroutineNext) {
            if (item.typeToken === TOKEN_PARSER_TYPE || item.typeToken === COMMAND_TOKEN_PARSER_TYPE) {
                out.push(item);
            }
            subroutineNext = false;
        } else if (item.typeToken === COMMAND_TOKEN_PARSER_TYPE) {
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