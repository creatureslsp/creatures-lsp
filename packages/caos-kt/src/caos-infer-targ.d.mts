import type { Nullable } from "./types.d.ts";

import type { CaosParseResult } from "./caos-parser.mjs";

import type { Range } from "./common-ast-structs.d.ts";

export declare type TargInScope = {
    readonly classifier: number[];
    readonly scope: Range;
}

export declare function getTargScopesFromText(variant: string, text: string): TargInScope[];
export declare function getTargScopesFromParseResult(parseResultDynamic?: CaosParseResult): TargInScope[];
export declare function getTargClassifier(parseResultDynamic: any, line: number, character: number): Nullable<Int32Array>;
