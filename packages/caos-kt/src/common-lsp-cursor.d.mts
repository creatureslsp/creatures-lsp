// noinspection JSUnusedGlobalSymbols

import type {HasRange} from "./common-ast-structs.d.ts";

export declare type ClosestItemResult<T, PrevT> = {
    readonly closest: T
    readonly previous: PrevT[]
}

export declare abstract class CursorPosition {
    static readonly getInstance: () => CursorPosition;
    private constructor();
    static get BEFORE(): CursorPosition & {
        readonly name: "BEFORE";
        readonly ordinal: 0;
    };
    static get START(): CursorPosition & {
        readonly name: "START";
        readonly ordinal: 1;
    };
    static get INSIDE(): CursorPosition & {
        readonly name: "INSIDE";
        readonly ordinal: 2;
    };
    static get END(): CursorPosition & {
        readonly name: "END";
        readonly ordinal: 3;
    };
    static get AFTER(): CursorPosition & {
        readonly name: "AFTER";
        readonly ordinal: 4;
    };
    readonly name: "BEFORE" | "START" | "INSIDE" | "END" | "AFTER";
    readonly value: number;
    static values(): Array<CursorPosition>;
}

export declare abstract class CursorPositionValues {

    static readonly getInstance: () => CursorPositionValues;

    private constructor();

    readonly BEFORE: number;
    readonly START: number;
    readonly INSIDE: number;
    readonly END: number;
    readonly AFTER: number;
}


export declare type Distanced<T extends HasRange> = {
    readonly item: T;
    readonly distance: Distance;
}

export declare type Distance = {
    readonly lineOffset: number;
    readonly columnOffset: number;
}