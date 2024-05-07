import {InlayHint} from "vscode-languageserver-types";
import {GameVariant, collectors, hints, ParseResult} from './caos-util';
import {Nullable, repack} from "@bedalton/extension-util";
const parseCaos = collectors.parseCaos;
import {Is} from "./is-util";


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
        : (Is.parseResult(text) ? text : null);
    if (parseResult == null) {
        return [];
    }
    const raw = hints.getInlayHints(parseResult, disabledInlayHints ?? [], []);
    return <InlayHint[]>repack(raw);
}