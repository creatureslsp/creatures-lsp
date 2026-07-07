
import type {Nullable} from "../types.js";
import type {Range} from "vscode-languageserver";
import type {GameVariant} from "@creatures-lsp/caos-util";
import {
    type CaosParseResult,
    parseCaosWithin,
    parseCaos as parseCaosKt,
} from "@creatures-lsp/caos-kt/caos-parser";

import {offsetVsRange} from "@creatures-lsp/extension-util";


export function parseCaos(variant: GameVariant, text: string, vsRange?: Nullable<Range>): CaosParseResult {
    if (vsRange != null) {
        const {start, end} = offsetVsRange(vsRange);
        return parseCaosWithin(
            variant,
            text,
            start.line,
            start.character,
            end.line,
            end.character
        )
    } else {
        return parseCaosKt(variant, text);
    }
}