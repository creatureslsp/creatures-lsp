import {InlayHint} from "vscode-languageserver-types";
import {GameVariant, com, Nullable} from './caos-util';
import collectors = com.bedalton.creatures.caos.collectors;
import hints = com.bedalton.creatures.caos.hints;
import {repack} from "./repack";
import parseCaos = collectors.parseCaos;
import ParseResult = collectors.ParseResult;


/**
 * Create inlay handler if needed or requested
 * @param variant the game variant
 * @param text text or parse result of CAOS document
 * @param disabledInlayHints list of ids for inlay hint providers that should be disabled
 */
export function getInlayHints(
    variant: GameVariant,
    text: string | ParseResult | unknown,
    disabledInlayHints?: Nullable<string[]>
): InlayHint[] {
    const parseResult = typeof text === 'string'
        ? parseCaos(variant, text)
        : (text instanceof ParseResult ? text : null);
    if (parseResult == null) {
        return [];
    }
    const raw = hints.getInlayHints(parseResult, disabledInlayHints ?? [], []);
    return <InlayHint[]>repack(raw);
}