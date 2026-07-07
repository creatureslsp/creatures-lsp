/* eslint-disable eqeqeq */
// noinspection JSUnusedGlobalSymbols
/*eslint eqeqeq: ["error", {"null": "never"}] */

import type {Nullable, Range, RangeWithIndex} from "./types"
import type {Position} from "vscode-languageserver";
import {getRangeStartOffset} from "./lsp-runner.js";

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
        throw new Error("TextRange is invalid in getRange; Position-Utils");
    }
    if (range.start.line === lineNumber) {
        if (ignoreColumn) {
            return true;
        }
        const endInRange = range.end.line != lineNumber || range.end.character >= column;
        if (soft) {
            return range.start.character - 1 <= column && endInRange
        } else {
            return range.start.character <= column && endInRange;
        }
    } else if (range.end.line === lineNumber) {
        if (ignoreColumn) {
            return true;
        }
        if (soft) {
            return range.end.character + 1 >= column;
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
 * Sorts text ranges in descending order
 * @param a
 * @param b
 */
export function sortTextRangesReversed(a: Range, b: Range) {
    const aSort = positionToInt(a.start.line, a.start.character);
    const bSort = positionToInt(b.start.line, b.start.character);
    const difference = bSort - aSort;
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
            line: textRange.start.line + lineMod,
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

/**
 * Converts a CaosUtil.js text range object to language server range object
 * Can optionally offset and expand range
 * @param textRange
 * @param lineStartMod
 * @param charStartMod
 * @param lineEndMod
 * @param charEndMod
 */
export function offsetVsRange(textRange: Range, lineStartMod: number = 0, charStartMod: number = 0, lineEndMod: number = 0, charEndMod: number = 0): Range {
    return {
        start: {
            line: textRange.start.line + lineStartMod,
            character: Math.max(textRange.start.character + charStartMod, 0),
        },
        end: {
            line: textRange.end.line + lineEndMod,
            character: Math.max(textRange.end.character + charEndMod, 0),
            
        }
    } satisfies Range
}

let offsetStart: Nullable<number> = null

export function toVsRange(textRange: Range, expandEnd?: boolean, startMod: number = 1, endMod: number = 0): Range {
    if (offsetStart == null) {
        offsetStart = getRangeStartOffset()
    }
    return <Range>{
        start: {
            line: textRange.start.line,
            character: textRange.start.character + offsetStart + startMod
        },
        end: {
            line: textRange.end.line,
            character: textRange.end.character + (expandEnd === true ? 1 : 0) + endMod
        }
    }
}

export function rangesIntersect(range1: Range, range2: Range): boolean {
    const {line: r1StartLine, character: r1StartChar} = range1.start
    const {line: r1EndLine, character: r1EndChar} = range1.end
    
    const {line: r2StartLine, character: r2StartChar} = range2.start
    const {line: r2EndLine, character: r2EndChar} = range2.end
    
    if (r1EndChar < r2StartChar) {
        return false;
    }
    
    if (r1StartChar > r2EndChar) {
        return false;
    }
    
    
    if (r1EndLine < r2StartLine) {
        return false;
    }
    
    if (r1StartLine > r2EndLine) {
        return false;
    }
    
    return true;
}


export function rangesEqual(a: Range, b: Range): boolean {
    return positionsEqual(a.start, b.start) && positionsEqual(a.end, b.end);
}

export function positionsEqual(a: Position, b: Position): boolean {
    return a.line === b.line && a.character === b.character;
}