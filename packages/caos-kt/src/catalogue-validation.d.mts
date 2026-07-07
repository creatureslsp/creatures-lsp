// noinspection JSUnusedGlobalSymbols

import type { Nullable} from "./types.d.ts";
import type {
    RangeWithIndex
} from "./common-ast-structs.d.ts";

import type {
    CatalogueParserItem
} from "./catalogue-core.mjs";

export declare type CatalogueError = {
    readonly textRange: RangeWithIndex,
    readonly parserItem: Nullable<CatalogueParserItem>,
    readonly message: string,
    readonly errorType: number /* CatalogueErrorType */
}

export declare abstract class CatalogueErrorTypes {
    static readonly getInstance: () => CatalogueErrorTypes;
    private constructor();
    get INVALID_OVERRIDE(): number;
    get ARRAY_TAG_CONFLICT(): number;
    get INVALID_ARRAY_COUNT(): number;
    get NEEDS_QUOTES(): number;
    get EXTRANEOUS_VALUE(): number;
    get MUST_BE_UPPERCASE(): number;
    get SINGLE_QUOTES(): number;
    get INCOMPLETE_QUOTE(): number;
    private constructor();
}

export declare function validateCatalogue(catalogue: any): Array<any>;
