// noinspection JSUnusedGlobalSymbols

import type {Nullable} from "./types.d.ts";

export declare type HasRange = {
    readonly textRange: RangeWithIndex;
}

export declare type HasText = {
    readonly text: string;
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

export declare type TextWithRange = HasRange & HasText;

