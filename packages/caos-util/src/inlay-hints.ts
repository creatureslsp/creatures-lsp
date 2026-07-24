import {InlayHint} from "vscode-languageserver-types";
import type {GameVariant} from '@creatures-lsp/caos-kt';
import {type CaosParseResult, parseCaos} from '@creatures-lsp/caos-kt/caos-parser';
import {getCaosInlayHints} from '@creatures-lsp/caos-kt/caos-inlay-hints';
import {isVsCode, Nullable} from "@creatures-lsp/extension-util";
import {Is} from "./is-util.js";

/**
 * Create inlay handler if needed or requested
 * @param variant the game variant
 * @param text text or parse result of CAOS document
 * @param disabledInlayHints list of ids for inlay hint providers that should be disabled
 * @param minimumParametersForInlayHints
 */
export function getCaosDocumentInlayHints(
    variant: GameVariant,
    text: string | CaosParseResult | unknown,
    disabledInlayHints?: Nullable<string[]>,
    minimumParametersForInlayHints: Nullable<number> = null,
): InlayHint[] {
    const parseResult = typeof text === 'string'
        ? parseCaos(variant, text)
        : (Is.parseResult(text) ? text : null);
    if (parseResult == null) {
        return [];
    }
    const offset = isVsCode() ? 1 : 0;
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