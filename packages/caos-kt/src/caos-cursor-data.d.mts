// noinspection JSUnusedGlobalSymbols

import type {CaosParserItem, CommandToken} from "./caos-core.mjs";
import type {ClosestItemResult, CursorPosition} from "./common-lsp-cursor.mjs";
import type {CaosParseResult, CommandCall} from "./caos-parser.mjs";

import type {
    GameVariant,
    Nullable
} from "./types.d.ts";

import type {
    CaosValuesList,
    CaosCommand,
    CaosParameter
} from "./caos-libs.mjs";

import type {
    Position
} from "./common-ast-structs.d.ts";

import type {
    ParseTreeItem,
} from "./common-ast-parseritems.mjs";

export function cancelComplete(closestItem: CaosParserItem, line: number, character: number): boolean;


export function getClosestCaosItem<T>(
    inRangeItems: T[],
    lineNumber: number,
    character: number,
    notAfter: boolean,
): ClosestItemResult<T, CommandToken>;

export function getCaosCursorPosition(
    parseResult: CaosParseResult,
    lineNumber: number,
    character: number,
    incomplete: boolean,
    addContainingCommandCall?: boolean,
): CaosCursorData;

export function getCaosCursorPositionFromRawText(
    variant: GameVariant,
    text: string,
    lineNumber: number,
    column: number,
    parseOnlyNear?: boolean,
    incomplete?: boolean,
    addContainingCommandCall?: boolean,
    keepGoing?: () => boolean
): CaosCursorData;

export function inQuotes(closestItem: CaosParserItem, line: number, character: number): boolean;


export interface CaosCursorData extends Position {

    readonly command: Nullable<CaosCommand>;

    readonly missing: CaosParameter[];

    readonly closestParameter: Nullable<CaosParameter>;

    readonly beforeText: Nullable<string>;

    readonly line: number;

    readonly character: number;

    readonly previousTokens: CommandToken[];

    readonly closestItem: Nullable<CaosParserItem>;

    readonly eqValuesList: Nullable<CaosValuesList>;

    readonly inEqualityStatement: boolean;

    readonly containingCommandCall: CommandCall
    
    readonly inList: boolean;

}

export declare function getRelativeCursorPosition(parseTreeItem: ParseTreeItem, line: number, character: number): CursorPosition;

export as namespace caos_cursor;

// !Processed //