import { IsCatalogue } from "../is.js";
import { createCompletionItem } from "../completions.js";
import { isVsCode, toVsRange } from "@creatureslsp/extension-util";
export function appendAgentHelpCompletion(cursor, out) {
    let complete = false;
    const item = cursor.item;
    let range;
    const relativePosition = cursor.position;
    let tail = "";
    if (IsCatalogue.tagKeyword(item)) {
        if (relativePosition === "AFTER" || relativePosition === "END") {
            range = item.textRange;
        }
        else if (relativePosition === "INSIDE") {
            range = item.textRange;
        }
        else {
            return;
        }
        complete = true;
    }
    else if (IsCatalogue.string(item)) {
        if (relativePosition !== "BEFORE" && relativePosition !== "INSIDE" && relativePosition !== "START") {
            return;
        }
        if (!item.text.endsWith("\"")) {
            tail = "\"";
        }
        const start = item.textRange.start;
        const value = item.value;
        // Set text value before any trailing numbers
        let prefix = value;
        // Calculate end of replacement range
        const rangeEnd = item.textRange.end;
        let endCharacter = rangeEnd.character;
        // Get trailing classifier numbers if any
        const matches = value.trim().match(/((?:\s+\d+)+"?)$/i);
        if (matches != null) {
            // Set end character to final character before spaces and digits
            endCharacter = endCharacter - (matches.index ?? 0);
            // Set trailing number text
            tail = matches[0] ?? "";
            // Get text before numbers and spaces
            prefix = value.substring(0, matches.index);
        }
        // Check if text-so-far is
        if (prefix.trim().length === 0 || "agent help ".startsWith(prefix.toLowerCase())) {
            complete = true;
        }
        const end = {
            line: rangeEnd.line,
            character: endCharacter
        };
        range = {
            start,
            end
        };
    }
    else {
        return;
    }
    if (!complete) {
        return;
    }
    out.push(createCompletionItem(("\"" + "Agent Help " + tail).replace(/  +/, " "), toVsRange(range, false, isVsCode() ? 1 : 0)));
}
