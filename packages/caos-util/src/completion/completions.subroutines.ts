import {collectors, CursorData, GameVariant, IParserItem, ParseResult, Script} from "../caos-util";
import {CompletionItem, CompletionItemKind, InsertTextFormat, InsertTextMode} from "vscode-languageserver-types";
import {Is} from "../is-util";
import {inRange, Nullable} from "@bedalton/extension-util";
import {getSubroutines} from "../subroutines";
const parseCaos = collectors.parseCaos;

const getScriptsFromParseResult = collectors.getScriptsFromParseResult;

/**
 * Gets subroutine data in the script where the cursor resides
 * @param variant
 * @param text
 * @param cursor
 */
export function getSubroutineCompletions(variant: GameVariant, text: string | ParseResult | unknown, cursor: CursorData): CompletionItem[] {
    
    const tokens: Nullable<ParseResult> = Is.parseResult(text) ? text : (typeof text === 'string' ? parseCaos(variant, text) : null);
    if (tokens == null || tokens.items.length < 1) {
        console.error("Invalid text parameter for text. Expected ParseResult or string");
        return [];
    }
    
    let scripts: Script[];
    if (tokens.scripts.length === 0) {
        scripts = getScriptsFromParseResult(tokens)
    } else {
        scripts = tokens.scripts
    }
    
    const line = cursor.line;
    const character = cursor.character;
    const scriptTokens = scripts.find(s => inRange(s.textRange, line, character))?.items;
    
    return getSubroutines(scriptTokens ?? [])
        .map((t: IParserItem<any>) => {
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

