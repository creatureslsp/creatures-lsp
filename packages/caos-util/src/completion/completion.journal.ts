import {CommandCall, GameVariant, IParserItem} from "../caos-util";
import {Nullable} from "@bedalton/extension-util/src/types";
import {CompletionItem} from "vscode-languageserver";
import {isC1eVariant} from "../is-similar-variant";
import {Is} from "../is-util";
import {CompletionItemKind, InsertTextFormat, InsertTextMode, Range} from "vscode-languageserver-types";
import {inflect, multiCase} from "./completions.values-list-values";


function isJournalNameCommand(variant: GameVariant, commandString: Nullable<string>): boolean {
    if (commandString == null) {
        return false;
    }
    if (isC1eVariant(variant)) {
        return false;
    }
    commandString = commandString.toUpperCase();
    return commandString == "FILE OOPE" || commandString === "FILE IOPE" || commandString === "FILE JDEL";
}


export function getJournalNameCompletions(
    variant: GameVariant,
    commandCall: CommandCall,
    parameterIndex: number,
    getJournalNames:(directoryType: number) => string[]
): Nullable<CompletionItem[]> {
    
    if (!isJournalNameCommand(variant, commandCall.command.command)) {
        console.log("Is not journal name completion");
        return null;
    }
    
    if (commandCall.commandArguments.length < 2) {
        console.log("Cannot complete journal without enough arguments");
        return [];
    }
    
    if (parameterIndex != 1) {
        console.log("Not in journal name parameter");
        return [];
    }
    
    const directoryCount = Is.intVal(commandCall.commandArguments[0].parserItem)
        ? commandCall.commandArguments[0].parserItem.value
        : null;
    
    if (directoryCount == null) {
        return [];
    }
    
    const names = getJournalNames(directoryCount);
    const closestItem = commandCall.commandArguments[parameterIndex]?.parserItem;
    if (closestItem == null) {
        return [];
    }
    return getJournalNameCompletionItems(names, closestItem);
}


function getJournalNameCompletionItems(
    journalNames: string[],
    closestItem: IParserItem<any>,
): CompletionItem[] {
    const keys = journalNames;
    let range: Nullable<Range>;
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
    });
}
