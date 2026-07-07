
// noinspection JSUnusedGlobalSymbols

import type {Nullable} from "./types.d.ts";
import type {
    NewLineParseTreeItem,
    ParseTreeItem,
    RangeWithIndex,
    SpaceParseTreeItem,
    WhitespaceParseTreeItem
} from "./common-ast-structs.d.ts";

export declare class CatalogueEntry {
    readonly textRange: RangeWithIndex;
    readonly keywordParserItem: CatalogueParserItem;
    readonly catalogueNameParserItem: Nullable<CatalogueParserItem>;
    readonly valueParserItems: Array<CatalogueParserItem>;
    readonly looseItems: Array<CatalogueParserItem>;
    readonly isTag: boolean;
    readonly isArray: boolean;
    readonly overrideKeyword: Nullable<CatalogueOverrideKeyword>;
    readonly arrayCountParserItem: Nullable<CatalogueIntValue>;
    readonly errorHeaderItems: Array<CatalogueParserItem>;
    readonly isOverride: boolean;
    readonly arrayCount: Nullable<number>;
    readonly catalogueName: Nullable<string>;
    readonly valuesAsStrings: Array<string>;
    readonly valuesCount: number;
}

export declare type CatalogueParseResult = {
    readonly catalogueEntries: Array<CatalogueEntry>;
    readonly looseItems: Array<CatalogueParserItem>;
    readonly parserItems: Array<CatalogueParserItem>;
    readonly entryCount: number;
}

export declare abstract class CatalogueParserItem implements ParseTreeItem {
    protected constructor();
    abstract get itemType(): number;
    abstract get textRange(): RangeWithIndex;
    abstract get value(): any;
    abstract get text(): string;
    get parserIndexStart(): Nullable<number>;
    get parserIndexEnd(): Nullable<number>;
}

export declare type CatalogueTagKeyword = CatalogueParserItem & {
    readonly textRange: RangeWithIndex;
    readonly text: string;
    readonly value: string;
    readonly itemType: number;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}

export declare type CatalogueArrayKeyword = CatalogueParserItem & {
    readonly textRange: RangeWithIndex;
    readonly text: string;
    readonly value: string;
    readonly itemType: number;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}

export declare type CatalogueOverrideKeyword = CatalogueParserItem & {
    readonly textRange: RangeWithIndex;
    readonly text: string;
    readonly value: string;
    readonly itemType: number;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}

export declare type CatalogueIntValue = CatalogueParserItem & {
    readonly textRange: RangeWithIndex;
    readonly text: string;
    readonly itemType: number;
    readonly value: number;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}


export declare type CatalogueFloatValue = CatalogueParserItem & {
    readonly textRange: RangeWithIndex;
    readonly text: string;
    readonly value: number;
    readonly itemType: number;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}

export declare type CatalogueStringValue =  CatalogueParserItem & {
    readonly textRange: RangeWithIndex;
    readonly text: string;
    readonly value: string;
    readonly isDoubleQuote: boolean;
    readonly isSingleQuote: boolean;
    readonly itemType: number;
    readonly isIncomplete: boolean;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}

export declare type CatalogueErrorChar = CatalogueParserItem & {
    readonly textRange: RangeWithIndex;
    readonly text: string;
    readonly value: string;
    readonly itemType: number;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}

export declare type CatalogueComment = CatalogueParserItem & {
    readonly textRange: RangeWithIndex;
    readonly text: string;
    readonly value: string;
    readonly itemType: number;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}


export declare type CatalogueWhitespaceItem = CatalogueParserItem  &  WhitespaceParseTreeItem;


export declare type CatalogueNewline = CatalogueWhitespaceItem & NewLineParseTreeItem & {
    readonly textRange: RangeWithIndex;
    readonly text: string;
    readonly lines: number;
    readonly value: string;
    readonly itemType: number;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}

export declare type  CatalogueSpace = CatalogueWhitespaceItem & SpaceParseTreeItem & {
    readonly textRange: RangeWithIndex;
    readonly text: string;
    readonly value: string;
    readonly itemType: number;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}


export declare abstract class CatalogueParserItemType {
    static readonly getInstance: () => CatalogueParserItemType;
    private constructor();
    get TAG_KEYWORD(): number;
    get ARRAY_KEYWORD(): number;
    get OVERRIDE_KEYWORD(): number;
    get STRING(): number;
    get INT(): number;
    get FLOAT(): number;
    get ARRAY_COUNT(): number;
    get COMMENT(): number;
    get ERROR_CHAR(): number;
    get NEWLINE(): number;
    getTypeName(value: number): Nullable<string>;
    private constructor();
}


export declare interface CatalogueTreeVisitor {
    readonly onStartTagEntity?: Nullable<(p0: CatalogueTagKeyword) => void>;
    readonly onEndTagEntity?: Nullable<() => void>;
    readonly onStartArrayEntity?: Nullable<(p0: CatalogueArrayKeyword) => void>;
    readonly onEndArrayEntity?: Nullable<() => void>;
    readonly onEachItemAndKeyword?: Nullable<(p0: CatalogueParserItem) => void>;
    readonly onCatalogueValue?: Nullable<(p0: CatalogueParserItem) => void>;
    readonly onErrorHeaderItem?: Nullable<(p0: CatalogueParserItem) => void>;
    readonly onErrorValue?: Nullable<(p0: CatalogueParserItem) => void>;
    readonly onNewline?: Nullable<(p0: CatalogueNewline) => void>;
    readonly onLooseItem?: Nullable<(p0: CatalogueParserItem) => void>;
    readonly onTagName?: Nullable<(p0: CatalogueStringValue) => void>;
    readonly onOverrideKeyword?: Nullable<(p0: CatalogueOverrideKeyword) => void>;
    readonly onArrayCount?: Nullable<(p0: CatalogueIntValue) => void>;
    readonly onStartLine?: Nullable<(p0: number) => void>;
    readonly onComment?: Nullable<(p0: CatalogueComment) => void>;
    readonly onStart?: Nullable<() => void>;
    readonly onEnd?: Nullable<() => void>;
}


export declare function parseCatalogue(text: string): CatalogueParseResult;

export declare function walkCatalogue(
    visitor: CatalogueTreeVisitor,
    catalogue: string | Array<CatalogueParserItem> | CatalogueParseResult
): void;
