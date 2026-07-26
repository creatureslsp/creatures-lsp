import { inflect, INFLECT_SPLITTER, multiCase, offsetRenameRange } from "@creatureslsp/extension-util";
import { CompletionItemKind, InsertTextFormat, InsertTextMode } from "vscode-languageserver-types";
export function getNameCompletionItems(names, closestItem, completionKind = CompletionItemKind.Variable, range = null) {
    const keys = [...names];
    const text = closestItem?.text;
    let closeQuote = text != null && text.endsWith('"') ? '' : '"';
    if (range == null && closestItem) {
        range = offsetRenameRange(closestItem.textRange);
    }
    if (completionKind == null) {
        completionKind = CompletionItemKind.Variable;
    }
    return keys.map(key => {
        const completion = "\"" + key + "\"";
        const edit = range != null ? { range, newText: completion } : null;
        return {
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
