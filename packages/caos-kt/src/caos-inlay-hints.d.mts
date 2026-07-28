import type {Nullable} from "./types.d.ts";

import type {CaosParseResult} from "./caos-parser.mjs";
import type {InlayHint} from "vscode-languageserver-types";
import type {DocumentSymbol} from "vscode-languageserver-types";

export declare function getCaosInlayOptions(): Array<string>;
export declare function getCaosInlayHints(parseResult: CaosParseResult, disabled: Array<string>, folds: Array<Range>, minimumParameterCount?: Nullable<number>): Array<InlayHint>;
export declare function getCaosDocumentSymbolsFromText(variant: string, text: string, addDoifLikeStatements?: Nullable<boolean>): Array<DocumentSymbol>;
export declare function getCaosDocumentSymbols(parserResult: CaosParseResult, addDoifLikeStatements?: Nullable<boolean>): Array<DocumentSymbol>;