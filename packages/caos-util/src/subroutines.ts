/* eslint-disable eqeqeq */
// noinspection JSUnusedGlobalSymbols

import {COMMAND_TOKEN_PARSER_TYPE, tok, TOKEN_PARSER_TYPE} from "./constants";
import {inRange} from "@bedalton/extension-util";
import {IParserItem, ParseResult} from "./caos-util";


const SUBR: number = tok("subr") as number;
const GSUB: number = tok("gsub") as number;

/**
 * Checks if a subroutine exists inside the script containing this line and cursor
 * @param parseResult
 * @param subroutineName
 * @param line
 * @param column
 */
export function hasSubroutine(parseResult: ParseResult, subroutineName: string, line: number, column: number): boolean {
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

export function getGsubNames(items: IParserItem<any>[]) {
    return getSubroutines(items, GSUB);
}

/**
 * Gets all subroutine name parser elements in a list of parser items
 * @param items
 */
export function getSubroutines(items: IParserItem<any>[], afterToken: number = SUBR): IParserItem<any>[] {
    let subroutineNext = false;
    const out: IParserItem<any>[] = [];
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