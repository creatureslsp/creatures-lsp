import { parseCaos, getScriptsFromCaosParseResult } from "@creatureslsp/caos-kt/caos-parser";
import { CompletionItemKind, InsertTextFormat, InsertTextMode } from "vscode-languageserver-types";
import { Is } from "../is-util.js";
import { inRange } from "@creatureslsp/extension-util";
import { getSubroutines } from "../subroutines.js";
/**
 * Gets subroutine data in the script where the cursor resides
 * @param variant
 * @param text
 * @param cursor
 */
export function getSubroutineCompletions(variant, text, cursor) {
    const tokens = Is.parseResult(text) ? text : (typeof text === 'string' ? parseCaos(variant, text) : null);
    if (tokens == null || tokens.items.length < 1) {
        console.error("Invalid text parameter for text. Expected CaosParseResult or string");
        return [];
    }
    let scripts;
    if (tokens.scripts.length === 0) {
        scripts = getScriptsFromCaosParseResult(tokens);
    }
    else {
        scripts = tokens.scripts;
    }
    const line = cursor.line;
    const character = cursor.character;
    const scriptTokens = scripts.find(s => inRange(s.textRange, line, character))?.items;
    return getSubroutines(scriptTokens ?? [])
        .map((t) => {
        return {
            label: t.value,
            kind: CompletionItemKind.Value,
            insertText: t.value,
            insertTextFormat: InsertTextFormat.PlainText,
            insertTextMode: InsertTextMode.asIs,
            preselect: false,
        };
    });
}
