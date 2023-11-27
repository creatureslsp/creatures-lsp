/* eslint-disable eqeqeq */
// noinspection JSUnusedGlobalSymbols
/*eslint eqeqeq: ["error", {"null": "never"}] */

import {Nullable, Range, RangeWithIndex} from "./caos-util";

/**
 * Checks that a text range, contains a
 * @param range
 * @param lineNumber
 * @param column
 * @param ignoreColumn
 * @param soft allows some padding for in-range checks
 */
export function inRange(range: Nullable<Range>, lineNumber: number, column: number, ignoreColumn: boolean = false, soft: boolean = true): boolean {
    if (range == null) {
        throw new Error("TextRange is invalid in getRange");
    }
    if (range.start.line === lineNumber) {
        if (ignoreColumn) {
            return true;
        }
        if (range.start.line !== range.end.line) {
            return true;
        }
        if (soft) {
            return range.start.character - 2 <= column;
        } else {
            return range.start.character <= column;
        }
    } else if (range.end.line === lineNumber) {
        if (ignoreColumn) {
            return true;
        }
        if (range.start.line !== range.end.line) {
            return true;
        }
        if (soft) {
            return range.end.character + 2 >= column;
        } else {
            return range.end.character >= column;
        }
    } else {
        return range.start.line < lineNumber && range.end.line > lineNumber;
    }
}

/**
 * Converts a position to a sortable int
 * @param line
 * @param character
 */
export function positionToInt(line: number, character: number): number {
    return (line << 16) | character;
}

/**
 * Sorts text ranges in descending order
 * @param a
 * @param b
 */
export function sortTextRanges(a: Range, b: Range) {
    const aSort = positionToInt(a.start.line, a.start.character);
    const bSort = positionToInt(b.start.line, b.start.character);
    const difference = aSort - bSort;
    if (difference === 0) {
        return 0;
    } else if (difference < 0) {
        return -1;
    } else {
        return 1;
    }
}

/**
 * Converts a CaosUtil.js text range object to language server range object
 * Can optionally offset and expand range
 * @param textRange
 * @param lineMod
 * @param charMod
 * @param expandEnd
 */
export function offsetRange(textRange: RangeWithIndex, lineMod: number = 0, charMod: number = 0, expandEnd: number = 0): RangeWithIndex {
    return <RangeWithIndex>{
        start: {
            line: textRange.start.line+ lineMod,
            character: textRange.start.character + charMod,
        },
        end: {
            line: textRange.end.line + lineMod,
            character: textRange.end.character + charMod + expandEnd,
            
        },
        startIndex: textRange.startIndex,
        endIndex: textRange.endIndex + charMod + expandEnd,
    }
}

export function toVsRange(textRange: RangeWithIndex, expandEnd?: boolean): Range {
    return <Range> {
        start: {
            line: textRange.start.line,
            character: textRange.start.character
        },
        end: {
            line: textRange.end.line,
            character: textRange.end.character + (expandEnd === true ? 1 : 0)
        }
    }
}