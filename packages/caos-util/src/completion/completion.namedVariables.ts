import {Nullable} from "@bedalton/extension-util/src/types";
import {CommandCall, GameVariant, IParserItem} from "../caos-util";
import {NamedVarPrefix} from "../completions";
import {CompletionItem, CompletionItemKind, InsertTextFormat, InsertTextMode, Range} from "vscode-languageserver-types";
import {inflect, multiCase} from "./completions.values-list-values";


function isNamedVariableCommand(variant: GameVariant, commandString: Nullable<string>): commandString is NamedVarPrefix {
    if (variant == 'C1' || variant == 'C2') {
        return false;
    }
    if (!commandString) {
        return false;
    }
    commandString = commandString.toUpperCase();
    return commandString === "GAME" || commandString === "EAME" || commandString === "NAME" || commandString === "MAME";
}

export function getNamedVariableCompletionItems(
    variant: GameVariant,
    commandCall: CommandCall,
    parameterIndex: number,
    getNamedVariableKeys: (prefix: NamedVarPrefix) => string[],
): Nullable<CompletionItem[]> {
    
    const namedVariablePrefix = commandCall.command.command.toUpperCase();
    if (!isNamedVariableCommand(variant, namedVariablePrefix)) {
        console.log("Is not named variable completion");
        return null;
    }
    const keys = getNamedVariableKeys(namedVariablePrefix);
    let range: Nullable<Range>;
    const closestItem = commandCall.commandArguments.length > parameterIndex ? commandCall.commandArguments[parameterIndex].parserItem : null;
    const text = closestItem?.text;
    
    let openQuote = text != null && text.startsWith('"') ? '' : '"';
    let closeQuote = text != null && text.endsWith('"') ? '' : '"';
    
    if (closestItem) {
        range = {
            start: {
                line: closestItem.textRange.start.line!!,
                character: closestItem.textRange.start.character + (1 - openQuote.length)
            },
            end: {
                line: closestItem.textRange.end.line,
                character: closestItem.textRange.end.character - (1 - closeQuote.length)
            }
        }
    }
    return keys.map(key => {
        const completion = openQuote + key + closeQuote;
        const edit = range != null ? {range, newText: completion} : null;
        return <CompletionItem>{
            label: key,
            kind: CompletionItemKind.Variable,
            filterText: '\"' + inflect(key) + " " + (multiCase(key)) + "\"",
            insertText: completion,
            insertTextFormat: InsertTextFormat.PlainText,
            insertTextMode: InsertTextMode.asIs,
            preselect: false,
            sortText: '0__0' + key,
            textEdit: edit
        };
    }); //.filter(i => i.label !== stringValue);
}