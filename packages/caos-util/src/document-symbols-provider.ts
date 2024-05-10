import {collectors, com, CommandCall, GameVariant, IParserItem, ParseResult, Script} from "./caos-util";
import {DocumentSymbol, Range, SymbolKind} from "vscode-languageserver-types";
import {getSubroutines} from "./subroutines";
import {rangesIntersect} from "@bedalton/extension-util";
import TypeTokens = com.bedalton.creatures.caos.libs.TypeTokens;


export function getCaosDocumentSymbols(variant: GameVariant, text: string): DocumentSymbol[] {
    const parseResult = collectors.parseCaos(variant, text);
    return getDocumentSymbolsFromParseResult(parseResult);
}


export function getDocumentSymbolsFromParseResult(parseResult: ParseResult): DocumentSymbol[] {
    const scripts = parseResult.scripts;
    const commands = parseResult.commandCalls;
    const out = [];
    for (const script of scripts) {
        
        const [name, range] = getScriptName(script);
        
        const symbol = {
            /**
             * The name of this symbol. Will be displayed in the user interface and therefore must not be
             * an empty string or a string only consisting of white spaces.
             */
            name: name,
            kind: script.key === "SCRP" ? SymbolKind.Method : SymbolKind.Function,
            range: script.textRange,
            selectionRange: range,
            children: getSubroutineSymbols(script, commands),
        } satisfies DocumentSymbol
        out.push(symbol);
    }
    return out;
}


function getSubroutineSymbols(script: Script, commands: CommandCall[]): DocumentSymbol[] {
    const subroutines = getSubroutines(script.items)
        .map((s: IParserItem<any>) => {
            return {
                /**
                 * The name of this symbol. Will be displayed in the user interface and therefore must not be
                 * an empty string or a string only consisting of white spaces.
                 */
                name: s.text,
                /**
                 * The kind of this symbol.
                 */
                kind: SymbolKind.Function,
                /**
                 * The range enclosing this symbol not including leading/trailing whitespace but everything else
                 * like comments. This information is typically used to determine if the clients cursor is
                 * inside the symbol to reveal in the symbol in the UI.
                 */
                range: commands.find(c => rangesIntersect(c.textRange, s.textRange))?.textRange ?? s.textRange,
                /**
                 * The range that should be selected and revealed when this symbol is being picked, e.g the name of a function.
                 * Must be contained by the `range`.
                 */
                selectionRange: s.textRange
            } satisfies DocumentSymbol
        })
    subroutines.sort((a, b) => {
      const aLower = a.name.toLowerCase();
      const bLower = b.name.toLowerCase();
      return aLower.localeCompare(bLower)
    });
    return subroutines;
}

function getScriptName(script: Script): [string, Range] {
    let firstItemRange = script.items.length ? script.items[0].textRange : null;
    if (firstItemRange == null) {
        firstItemRange = {
            start: script.textRange.start,
            end: script.textRange.start
        }
    }
    switch (script.commandString?.toUpperCase()) {
        case "SCRP":
            return getEventScriptName(script);
        case "ISCR":
            return ["Install", firstItemRange];
        case "RSCR":
            return ["Remover", firstItemRange];
        default:
            return ["Macro", firstItemRange];
    }
}

function getEventScriptName(script: Script): [string, Range] {
    const items = script.items;
    if (items.length == 1) {
        return ["scrp", items[0].textRange];
    }
    let out = "scrp";
    const max = Math.min(script.items.length, 5);
    let start = items[0].textRange.start;
    let end = items[0].textRange.end;
    for (let i = 1; i < max; i++) {
        const item = script.items[i];
        if (item.typeToken !== TypeTokens.INT) {
            break;
        }
        out += " " + item.value;
        let end = item.textRange.end;
        
    }
    const range = {
        start,
        end
    } satisfies Range;
    return [out, range];
}