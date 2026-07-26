import { inRange } from "@creatureslsp/extension-util";
import { getCaos2TagCompletions } from "./completions.caos2.tag.js";
import { getCaos2TagValueCompletions } from "./completions.caos2.values.js";
import { getCaos2CommandCompletions } from "./completions.caos2.command.js";
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
export async function getCaos2PrayCompletions(thisFileName, variant, allComments, item, line, character, options) {
    let out = [];
    // Get type of comment
    const isCommand = item.command != null && item.tag == null;
    const isTag = item.tag != null && item.command == null;
    // If it is too soon to tell if it is a command or tag
    const isUndetermined = item.eq == null && !/([a-zA-Z]{2}|[a-zA-Z]{4})-Name|(pray|cob)[- ]?file|link|attach|inline|depends?/i.test(item.tag ?? item.command ?? "");
    const inCommandOrTag = inRange(item.token.textRange, line, character, false, true);
    const ranges = [item.token.textRange, ...(item.values ?? []).map((c) => c.textRange)];
    let range = ranges
        .find(range => inRange(range, line, character, false, true))
        ?? (ranges ? ranges[0] : null)
        ?? { start: { line, character }, end: { line, character } };
    range = {
        start: {
            line: range.start.line,
            character: range.start.character + 2
        },
        end: {
            line: range.end.line,
            character: range.end.character + 1
        }
    };
    if (isTag || isUndetermined) {
        if (inCommandOrTag) {
            out = out.concat(getCaos2TagCompletions(variant, allComments, item.eq != null, range));
        }
        else if (!isUndetermined) {
            // If indeterminate, only complete once in COMMAND
            const complete = await getCaos2TagValueCompletions(thisFileName, variant, item, allComments, line, character, options);
            out = out.concat(complete);
        }
    }
    if (isCommand || isUndetermined) {
        if (inCommandOrTag) {
            out = out.concat(getCaos2CommandCompletions(variant, allComments, item.command ?? item.tag ?? "", range));
        }
        else {
            // Complete if indeterminate or command
            const complete = await getCaos2TagValueCompletions(thisFileName, variant, item, allComments, line, character, options);
            out = out.concat(complete);
        }
    }
    return out;
}
