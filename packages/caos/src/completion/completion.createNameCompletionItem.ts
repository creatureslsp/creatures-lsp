import {CompletionItem} from "vscode-languageserver";
import {inflect, INFLECT_SPLITTER, multiCase, Nullable, offsetRenameRange} from "@creatureslsp/extension-util";
import {CompletionItemKind, InsertTextFormat, InsertTextMode, Range} from "vscode-languageserver-types";
import {CaosParserItem} from "@creatureslsp/caos-kt/caos-core";

export function getNameCompletionItems(
    names: string[],
    closestItem: Nullable<CaosParserItem>,
    completionKind: Nullable<CompletionItemKind> = CompletionItemKind.Variable,
    range: Nullable<Range> = null,
): CompletionItem[] {
    const keys = [...names];
    const text = closestItem?.text;
    let closeQuote = text != null && text.endsWith('"') ? '' : '"';
    if (range == null && closestItem) {
        range = offsetRenameRange(closestItem.textRange)
    }
    if (completionKind == null) {
        completionKind = CompletionItemKind.Variable
    }
    return keys.map(key => {
        const completion = "\"" + key + "\"";
        const edit = range != null ? {range, newText: completion} : null;
        return <CompletionItem>{
            label: key,
            kind: completionKind,
            filterText: key + INFLECT_SPLITTER + '\"' + inflect(key) + " " + (multiCase(key)) + "\"",
            insertText: completion,
            insertTextFormat: InsertTextFormat.PlainText,
            insertTextMode: InsertTextMode.asIs,
            preselect: false,
            sortText: '0__0' + key,
            textEdit: edit
        };
    });
}
