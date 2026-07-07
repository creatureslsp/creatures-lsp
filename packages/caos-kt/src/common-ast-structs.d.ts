
import type {KtSingleton, Nullable} from "./types.d.ts";
import type {InlayHintKind} from "vscode-languageserver";

export declare type ParseTreeItem = TextWithRange & {
    readonly textRange: RangeWithIndex;
    readonly value: any;
    readonly text: string;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}

export declare type ParserItemWithIndex =  {
    readonly currentParserIndex: number;
    readonly offsetParserItemIndex: Nullable<number>;
    readonly offsetLine: Nullable<number>;
    readonly offsetColumn: Nullable<number>;
}

export declare type WhitespaceParseTreeItem = ParseTreeItem & {
}

export declare type SpaceParseTreeItem = WhitespaceParseTreeItem & {
}

export declare type NewLineParseTreeItem = WhitespaceParseTreeItem & {
    readonly lines: number;
}

export declare interface HintsProvider<T> {
    isApplicable(element: T): boolean;
    provideHints(element: T): InlayHint[];
    readonly description: string;
    readonly option: string;
    readonly priority: number;
}

export declare interface DocumentSymbol {
    readonly name: string;
    readonly detail: Nullable<string>;
    readonly kind: number;
    readonly tags: Array<number>;
    readonly range: Range;
    readonly selectionRange: Range;
    readonly children: Array<DocumentSymbol>;
}

export declare type HasRange = {
    readonly textRange: RangeWithIndex;
}

export declare type HasText = {
    readonly text: string;
}

export declare interface ITextEdit {
}

export declare type InlayHint = {
    readonly position: Position;
    readonly label: string;
    readonly kind: InlayHintKind|undefined;
    readonly textEdits: Nullable<Array<TextEdit>>;
    readonly tooltip: Nullable<string>;
    readonly paddingLeft: Nullable<boolean>;
    readonly paddingRight: Nullable<boolean>;
}

export declare type InsertReplaceEdit =  ITextEdit & {
    readonly newText: string;
    readonly insert: Range;
    readonly replace: Range;
}

export declare type Position =  {
    readonly line: number;
    readonly character: number;
}

export declare type Range  = {
    readonly start: Position;
    readonly end: Position;
}

export declare type RangeWithIndex = Range & {
    readonly startIndex: number;
    readonly endIndex: number;
    readonly parserIndex: Nullable<number>;
}

export declare type TextEdit = ITextEdit & {
    readonly range: Range;
    readonly newText: string;
}

export declare type TextWithRange = HasRange & HasText;