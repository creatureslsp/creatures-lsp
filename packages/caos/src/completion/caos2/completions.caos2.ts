import type { GameVariant } from "@creatureslsp/caos-kt";
import type {CaosParserItem, Caos2Comment} from "@creatureslsp/caos-kt/caos-core";
import type {CompletionItem, Range} from "vscode-languageserver-types";
import {inRange} from "@creatureslsp/extension-util";
import type {CaosCompletionOptions} from "../../completions.js";
import {getCaos2TagCompletions} from "./completions.caos2.tag.js";
import {getCaos2TagValueCompletions} from "./completions.caos2.values.js";
import {getCaos2CommandCompletions} from "./completions.caos2.command.js";

/**
 * Get completions within a CAOS2Pray statement
 * @param thisFileName
 * @param variant
 * @param allComments
 * @param item
 * @param line
 * @param character
 * @param options
 */
export async function getCaos2PrayCompletions(
    thisFileName: string,
    variant: GameVariant,
    allComments: Caos2Comment[],
    item: Caos2Comment,
    line: number,
    character: number,
    options: CaosCompletionOptions,
): Promise<CompletionItem[]> {
    let out: CompletionItem[] = [];
    
    // Get type of comment
    const isCommand = item.command != null && item.tag == null;
    const isTag = item.tag != null && item.command == null;
    
    // If it is too soon to tell if it is a command or tag
    const isUndetermined = item.eq == null && !/([a-zA-Z]{2}|[a-zA-Z]{4})-Name|(pray|cob)[- ]?file|link|attach|inline|depends?/i.test(item.tag ?? item.command ?? "");
    
    const inCommandOrTag = inRange(item.token.textRange, line, character, false, true);
    
    const ranges = [item.token.textRange, ...(item.values ?? []).map((c: CaosParserItem) => c.textRange)];
    let range: Range = ranges
            .find(range => inRange(range, line, character, false, true))
        ?? (ranges ? ranges[0] : null)
        ?? {start: {line, character}, end: {line, character}};
    
    if (isTag || isUndetermined) {
        if (inCommandOrTag) {
            out = out.concat(getCaos2TagCompletions(variant, allComments, item.eq != null, range));
        } else if (!isUndetermined) {
            // If indeterminate, only complete once in COMMAND
            const complete = await getCaos2TagValueCompletions(
                thisFileName,
                variant,
                item,
                allComments,
                line,
                character,
                options
            );
            out = out.concat(complete);
        }
    }
    
    if (isCommand || isUndetermined) {
        if (inCommandOrTag) {
            out = out.concat(getCaos2CommandCompletions(variant, allComments, item.command ?? item.tag ?? "", range));
        } else {
            // Complete if indeterminate or command
            const complete = await getCaos2TagValueCompletions(
                thisFileName,
                variant,
                item,
                allComments,
                line,
                character,
                options
            );
            out = out.concat(complete);
        }
    }
    
    return out;
}


