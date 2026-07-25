/* eslint-disable eqeqeq */
// noinspection JSUnusedGlobalSymbols
/*eslint eqeqeq: ["error", {"null": "never"}] */
import { getRangeStartOffset } from "./lsp-runner.js";
/**
 * Checks that a text range, contains a
 * @param range
 * @param lineNumber
 * @param column
 * @param ignoreColumn
 * @param soft allows some padding for in-range checks
 */
export function inRange(range, lineNumber, column, ignoreColumn = false, soft = true) {
    if (range == null) {
        throw new Error("TextRange is invalid in getRange; Position-Utils");
    }
    if (range.start.line === lineNumber) {
        if (ignoreColumn) {
            return true;
        }
        const endInRange = range.end.line != lineNumber || range.end.character >= column;
        if (soft) {
            return range.start.character - 1 <= column && endInRange;
        }
        else {
            return range.start.character <= column && endInRange;
        }
    }
    else if (range.end.line === lineNumber) {
        if (ignoreColumn) {
            return true;
        }
        if (soft) {
            return range.end.character + 1 >= column;
        }
        else {
            return range.end.character >= column;
        }
    }
    else {
        return range.start.line < lineNumber && range.end.line > lineNumber;
    }
}
/**
 * Converts a position to a sortable int
 * @param line
 * @param character
 */
export function positionToInt(line, character) {
    return (line << 16) | character;
}
/**
 * Sorts text ranges in descending order
 * @param a
 * @param b
 */
export function sortTextRanges(a, b) {
    const aSort = positionToInt(a.start.line, a.start.character);
    const bSort = positionToInt(b.start.line, b.start.character);
    const difference = aSort - bSort;
    if (difference === 0) {
        return 0;
    }
    else if (difference < 0) {
        return -1;
    }
    else {
        return 1;
    }
}
/**
 * Sorts text ranges in descending order
 * @param a
 * @param b
 */
export function sortTextRangesReversed(a, b) {
    const aSort = positionToInt(a.start.line, a.start.character);
    const bSort = positionToInt(b.start.line, b.start.character);
    const difference = bSort - aSort;
    if (difference === 0) {
        return 0;
    }
    else if (difference < 0) {
        return -1;
    }
    else {
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
export function offsetRange(textRange, lineMod = 0, charMod = 0, expandEnd = 0) {
    return {
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
    };
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
export function offsetVsRange(textRange, lineStartMod = 0, charStartMod = 0, lineEndMod = 0, charEndMod = 0) {
    return {
        start: {
            line: textRange.start.line + lineStartMod,
            character: Math.max(textRange.start.character + charStartMod, 0),
        },
        end: {
            line: textRange.end.line + lineEndMod,
            character: Math.max(textRange.end.character + charEndMod, 0),
        }
    };
}
let offsetStart = null;
export function toVsRange(textRange, expandEnd, startMod = 1, endMod = 0) {
    if (offsetStart == null) {
        offsetStart = getRangeStartOffset();
    }
    return {
        start: {
            line: textRange.start.line,
            character: textRange.start.character + offsetStart + startMod
        },
        end: {
            line: textRange.end.line,
            character: textRange.end.character + (expandEnd === true ? 1 : 0) + endMod
        }
    };
}
export function rangesIntersect(range1, range2) {
    const { line: r1StartLine, character: r1StartChar } = range1.start;
    const { line: r1EndLine, character: r1EndChar } = range1.end;
    const { line: r2StartLine, character: r2StartChar } = range2.start;
    const { line: r2EndLine, character: r2EndChar } = range2.end;
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
export function rangesEqual(a, b) {
    return positionsEqual(a.start, b.start) && positionsEqual(a.end, b.end);
}
export function positionsEqual(a, b) {
    return a.line === b.line && a.character === b.character;
}
