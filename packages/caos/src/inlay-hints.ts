import {InlayHint} from "vscode-languageserver-types";
import type {GameVariant} from '@creatureslsp/caos-kt';
import {type CaosParseResult, parseCaos} from '@creatureslsp/caos-kt/caos-parser';
import {getCaosInlayHints} from '@creatureslsp/caos-kt/caos-inlay-hints';
import {isVsCode, Nullable} from "@creatureslsp/extension-util";
import {Is} from "./is-util.js";
export {getCaosInlayHints, getCaosInlayOptions} from "@creatureslsp/caos-kt/caos-inlay-hints";

/**
 * Create inlay handler if needed or requested
 * @param variant the game variant
 * @param text text or parse result of CAOS document
 * @param disabledInlayHints list of ids for inlay hint providers that should be disabled
 * @param minimumParametersForInlayHints
 * @param offset
 */
export function getCaosInlayHintsWithOffset(
    variant: GameVariant,
    text: string | CaosParseResult | unknown,
    disabledInlayHints?: Nullable<string[]>,
    minimumParametersForInlayHints: Nullable<number> = null,
    offset: number = isVsCode() ? 1 : 0,
): InlayHint[] {
    
    const parseResult = typeof text === 'string'
        ? parseCaos(variant, text)
        : (Is.parseResult(text) ? text : null);
    
    if (parseResult == null) {
        return [];
    }
    
    const hints = getCaosInlayHints(
        parseResult,
        disabledInlayHints ?? [],
        [],
        minimumParametersForInlayHints,
    )
    
    if (offset === 0) {
        return hints;
    }
    return hints.map((hint) => {
        return {
            ...hint,
            position: {
                line: hint.position.line,
                character: hint.position.character + offset,
            }
        }
    });
}