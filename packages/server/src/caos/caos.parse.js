import { parseCaosWithin, parseCaos as parseCaosKt, } from "@creatureslsp/caos/parser";
import { offsetVsRange } from "@creatureslsp/extension-util";
export function parseCaos(variant, text, vsRange) {
    if (vsRange != null) {
        const { start, end } = offsetVsRange(vsRange);
        return parseCaosWithin(variant, text, start.line, start.character, end.line, end.character);
    }
    else {
        return parseCaosKt(variant, text);
    }
}
