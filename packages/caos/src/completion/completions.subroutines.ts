import type {GameVariant} from "@creatureslsp/caos-kt";
import type {CaosParserItem, CaosScript} from "@creatureslsp/caos-kt/caos-core";
import type {CaosParseResult} from "@creatureslsp/caos-kt/caos-parser";
import {parseCaos, getScriptsFromCaosParseResult} from "@creatureslsp/caos-kt/caos-parser";
import {CaosCursorData} from "@creatureslsp/caos-kt/caos-cursor-data";
import {CompletionItem, CompletionItemKind, InsertTextFormat, InsertTextMode} from "vscode-languageserver-types";
import {Is} from "../is-util.js";
import {inRange, Nullable} from "@creatureslsp/extension-util";
import {getSubroutines} from "../subroutines.js";
import {tok} from "../token-utils.js";

/**
 * Gets subroutine data in the script where the cursor resides
 * @param variant
 * @param text
 * @param cursor
 * @param afterToken
 */
export function getSubroutineCompletions(variant: GameVariant, text: string | CaosParseResult | unknown, cursor: CaosCursorData, afterToken: "GSUB"|"GOTO"|"SUBR" = "SUBR"): CompletionItem[] {
    
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
    const scriptTokens = scripts.find(s => {
        const offset = s.items ? (s.items[0]?.textRange?.start ?? null) : null;
        const lineOffset = offset?.line ?? 0
        const charOffset = (offset && lineOffset == line) ? offset.character : 0;
        inRange(s.textRange, line - lineOffset, character - charOffset);
    })?.items ?? (scripts.length == 1 ? scripts[0]?.items : []);
    
    if (!scriptTokens) {
        return [];
    }
    return getSubroutines(scriptTokens ?? [], tok(afterToken.toLowerCase()))
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

