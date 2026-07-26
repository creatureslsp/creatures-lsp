import type {GameVariant} from "@creatureslsp/caos-kt";
import type {CaosParserItem, CaosScript} from "@creatureslsp/caos-kt/caos-core";
import type {CaosParseResult} from "@creatureslsp/caos-kt/caos-parser";
import {parseCaos, getScriptsFromCaosParseResult} from "@creatureslsp/caos-kt/caos-parser";
import {CaosCursorData} from "@creatureslsp/caos-kt/caos-cursor-data";
import {CompletionItem, CompletionItemKind, InsertTextFormat, InsertTextMode} from "vscode-languageserver-types";
import {Is} from "../is-util.js";
import {inRange, Nullable} from "@creatureslsp/extension-util";
import {getSubroutines} from "../subroutines.js";

/**
 * Gets subroutine data in the script where the cursor resides
 * @param variant
 * @param text
 * @param cursor
 */
export function getSubroutineCompletions(variant: GameVariant, text: string | CaosParseResult | unknown, cursor: CaosCursorData): CompletionItem[] {
    
    const tokens: Nullable<CaosParseResult> = Is.parseResult(text) ? text : (typeof text === 'string' ? parseCaos(variant, text) : null);
    if (tokens == null || tokens.items.length < 1) {
        console.error("Invalid text parameter for text. Expected CaosParseResult or string");
        return [];
    }
    
    let scripts: CaosScript[];
    if (tokens.scripts.length === 0) {
        scripts = getScriptsFromCaosParseResult(tokens)
    } else {
        scripts = tokens.scripts
    }
    
    const line = cursor.line;
    const character = cursor.character;
    const scriptTokens = scripts.find(s => inRange(s.textRange, line, character))?.items;
    
    return getSubroutines(scriptTokens ?? [])
        .map((t: CaosParserItem) => {
            return <CompletionItem>{
                label: t.value,
                kind: CompletionItemKind.Value,
                insertText: t.value,
                insertTextFormat: InsertTextFormat.PlainText,
                insertTextMode: InsertTextMode.asIs,
                preselect: false,
            };
        });
}

