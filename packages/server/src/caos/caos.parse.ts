
import type {Nullable} from "../types.js";
import type {Range} from "vscode-languageserver";
import type {GameVariant} from "@creatureslsp/caos";
import {
    type CaosParseResult,
    parseCaosWithin,
    parseCaos as parseCaosKt,
} from "@creatureslsp/caos/parser";

import {offsetVsRange} from "@creatureslsp/extension-util";


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