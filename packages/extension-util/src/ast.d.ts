// noinspection JSUnusedGlobalSymbols

declare type Nullable<T> = T | undefined | null;

export interface HasRange {
    readonly textRange: RangeWithIndex;
}

export interface ITuple<T1, T2> {
    readonly first: T1;
    readonly second: T2;
}


export interface HasSize {
    readonly width: number;
    readonly height: number;
}

export interface HasText {
    readonly text: string
}

export {
    CancellationToken,
    CancellationTokenSource,
    DocumentUri,
    InlayHintLabelPart,
    InlayHintKind,
    InlayHint,
    InsertReplaceEdit,
    Location,
    MarkupContent,
    MarkupKind,
    SymbolKind,
    SymbolTag,
    TextEdit,
    DocumentSymbol,
    Position,
    Range
} from "vscode-languageserver-types"

export interface TextWithRange extends HasRange, HasText {}

export interface RangeWithIndex {

    readonly start: Position;

    readonly end: Position;

    readonly startIndex: number;

    readonly endIndex: number;

    readonly parserIndex: Nullable<number>;

}

export interface ParseTreeItem<T> extends TextWithRange {
    readonly textRange: RangeWithIndex

    /**
     * The interpreted value of its text in the document
     */
    readonly value: T

    /**
     * The original text in the document
     */
    readonly text: String

    /**
     * The index of this or the starting sub-parser-item in the parse result
     */
    readonly parserIndexStart: Nullable<number>

    /**
     * The index of this or the last sub parser item in the containing parse result
     */
    readonly parserIndexEnd: Nullable<number>;
}

export interface WhitespaceParseTreeItem extends ParseTreeItem<string> {}

export interface  NewlineParseTreeItem extends WhitespaceParseTreeItem {}

export interface  SpaceParseTreeItem extends WhitespaceParseTreeItem {}

/**
 * Value-object describing what options formatting should use.
 */
export interface FormattingOptions {
    /**
     * Size of a tab in spaces.
     */
    tabSize: number;
    /**
     * Whether to prefer spaces or tabs.
     */
    insertSpaces: boolean;
    /**
     * Trim trailing whitespaces on a line.
     *
     * @since 3.15.0
     */
    trimTrailingWhitespace?: boolean;
    /**
     * Insert a newline character at the end of the file if one does not exist.
     *
     * @since 3.15.0
     */
    insertFinalNewline?: boolean;
    /**
     * Trim all newlines after the final newline at the end of the file.
     *
     * @since 3.15.0
     */
    trimFinalNewlines?: boolean;

    /**
     * Signature for further properties.
     */
    [key: string]: boolean | number | string | undefined;
}

export interface FormatResult<ReasonT> {

    formattedText: string;

    oldText: string;

    edits: Array<TextEdit>;

    editReasons: Array<ReasonT>;

}

export const CursorPositionValues: {
    readonly BEFORE: number;
    readonly START: number;
    readonly INSIDE: number;
    readonly END: number;
    readonly AFTER: number;
}

export type CursorPosition = "BEFORE" | "START" | "INSIDE" | "END" | "AFTER";

export type ClosestItemResult<T, PrevT> = {
    readonly closest: T;
    readonly previous: Array<PrevT>;
}

export type EditReason =
    "DANGLING_AUTO_COMPLETE" |
    "COMMENT" |
    "SPACE_BETWEEN_BRACKETS" |
    "SPACES_BETWEEN_COMMANDS" |
    "SPACE_NEEDED" |
    "SPACE_TOO_MANY" |
    "NEWLINES_NEEDED" |
    "NEWLINES_TOO_MANY" |
    "SPACE_TOKEN" |
    "INCORRECT_CASE" |
    "TAB_CHANGE";

export function inQuotes(item: ParseTreeItem<any>, line: number, character: number): boolean;

export as namespace bedalton_ast;