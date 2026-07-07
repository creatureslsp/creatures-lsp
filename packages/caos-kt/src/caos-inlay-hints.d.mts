import type {Nullable} from "./types.d.ts";

import type {CaosParseResult} from "./caos-parser.mjs";
import {InlayHint} from "vscode-languageserver-types";
import type {DocumentSymbol} from "./common-lsp-symbols.mjs";

export declare function getCaosInlayOptions(): Array<string>;
export declare function getCaosInlayHints(parseResult: CaosParseResult, disabled: Array<string>, folds: Array<Range>, minimumParameterCount?: Nullable<number>): Array<InlayHint>;
export declare function getCaosDocumentSymbolsFromText(variant: string, text: string, addDoifLikeStatements?: Nullable<boolean>): Array<DocumentSymbol>;
export declare function getCaosDocumentSymbols(parserResult: CaosParseResult, addDoifLikeStatements?: Nullable<boolean>): Array<DocumentSymbol>;