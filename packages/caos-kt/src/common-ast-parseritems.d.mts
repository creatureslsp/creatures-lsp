import type {Nullable} from "./types.d.ts";
import type { TextWithRange, RangeWithIndex } from "./common-ast-structs.d.ts";

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
