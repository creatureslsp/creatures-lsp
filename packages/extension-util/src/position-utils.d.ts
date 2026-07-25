import type { Nullable, Range, RangeWithIndex } from "./types.js";
import type { Position } from "vscode-languageserver";
/**
 * Checks that a text range, contains a
 * @param range
 * @param lineNumber
 * @param column
 * @param ignoreColumn
 * @param soft allows some padding for in-range checks
 */
export declare function inRange(range: Nullable<Range>, lineNumber: number, column: number, ignoreColumn?: boolean, soft?: boolean): boolean;
/**
 * Converts a position to a sortable int
 * @param line
 * @param character
 */
export declare function positionToInt(line: number, character: number): number;
/**
 * Sorts text ranges in descending order
 * @param a
 * @param b
 */
export declare function sortTextRanges(a: Range, b: Range): 1 | 0 | -1;
/**
 * Sorts text ranges in descending order
 * @param a
 * @param b
 */
export declare function sortTextRangesReversed(a: Range, b: Range): 1 | 0 | -1;
/**
 * Converts a CaosUtil.js text range object to language server range object
 * Can optionally offset and expand range
 * @param textRange
 * @param lineMod
 * @param charMod
 * @param expandEnd
 */
export declare function offsetRange(textRange: RangeWithIndex, lineMod?: number, charMod?: number, expandEnd?: number): RangeWithIndex;
/**
 * Converts a CaosUtil.js text range object to language server range object
 * Can optionally offset and expand range
 * @param textRange
 * @param lineStartMod
 * @param charStartMod
 * @param lineEndMod
 * @param charEndMod
 */
export declare function offsetVsRange(textRange: Range, lineStartMod?: number, charStartMod?: number, lineEndMod?: number, charEndMod?: number): Range;
export declare function toVsRange(textRange: Range, expandEnd?: boolean, startMod?: number, endMod?: number): Range;
export declare function rangesIntersect(range1: Range, range2: Range): boolean;
export declare function rangesEqual(a: Range, b: Range): boolean;
export declare function positionsEqual(a: Position, b: Position): boolean;
//# sourceMappingURL=position-utils.d.ts.map