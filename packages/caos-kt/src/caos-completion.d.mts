import {CompletionItem, CompletionList} from "vscode-languageserver";
import type {Nullable, GameVariant} from "./types.d.ts";
import type {CaosParserItem} from "./caos-core.mjs";
import type {CaosParseResult, CommandCall} from "./caos-parser.mjs";
import type {CaosCursorData} from "./caos-cursor-data.mjs";

export type CaosCompletionSettings = {
    readonly parameterInlayHints?: boolean;
    readonly usePlaceholders?: boolean;
    readonly dumbMode?: boolean,
    readonly minimumParameterCount?: number
    readonly useInsertReplace?: boolean,
}


/**
 * Optional parameters for getCompletionItems
 * @see getCompletionItems
 */
export type CaosCompletionOptions = {
    readonly cursorPointer?: { CaosCursorData?: Nullable<CaosCursorData>; commandString?: Nullable<string>; };
    readonly getStringCompletions?: (cursorData: CaosCursorData, commandCall: CommandCall) => CompletionItem[];
    readonly parseNear?: boolean;
    readonly keepGoing?: () => boolean;
    readonly incomplete: boolean;
    readonly directory: string;
    readonly getFiles: (extensions?: Nullable<string[]>) => Promise<string[]>,
}


export declare function getCaosCompletionItems(
    variant: GameVariant,
    caos: string|CaosParseResult|Array<CaosParserItem>,
    line: number,
    column: number,
    options: CaosCompletionOptions,
    settings?: Nullable<CaosCompletionSettings>,
    cursorOut?: Nullable<((cursor: CaosCursorData) =>  void)>,
): CompletionList;


