import type {Nullable} from "./types.d.ts";
import type {Caos2Comment, CaosParserItem, CaosScript, ErrorVal} from "./caos-core.mjs";

export declare type CaosTokenParseResult = {
    readonly variant: string;
    readonly originalText: string;
    readonly items: CaosParserItem[];
    readonly whitespaceItems: CaosParserItem[];
    readonly controlStatementErrors: ErrorVal[];
    readonly scripts: CaosScript;
    readonly comments: Comment[];
    readonly caos2Comments: Caos2Comment[];
}

export declare function parseCaosTokensNear(variant: string, text: string, line: number, character: number, checkErrors?: Nullable<boolean>, checkDelay?: Nullable<number>, keepGoing?: Nullable<() => boolean>): any;
export declare function parseCaosTokensWithin(variant: string, text: string, startLine: number, startCharacter: number, endLine: number, endCharacter: number, checkErrors?: Nullable<boolean>, checkDelay?: Nullable<number>, keepGoing?: Nullable<() => boolean>): any;
export declare function parseCaosTokens(variant: string, text: string, keepGoing?: Nullable<() => boolean>): any;