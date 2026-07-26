import { CompletionItemKind, InsertTextFormat, InsertTextMode } from "vscode-languageserver-types";
import { quoteString, INFLECT_SPLITTER } from "@creatureslsp/extension-util";
/**
 * Creates a completion item based solely on a plain text string
 * @param token the tag or command text to insert
 * @param range
 * @param completionKind
 * @param suffix
 * @param sortPrefix
 */
export function createSimpleCompletionItem(token, range, completionKind, suffix = null, sortPrefix = "_d") {
    return {
        label: token,
        kind: completionKind,
        insertText: token + (suffix ?? ""),
        insertTextFormat: suffix ? InsertTextFormat.Snippet : InsertTextFormat.PlainText,
        insertTextMode: InsertTextMode.asIs,
        filterText: token + INFLECT_SPLITTER + token.toLowerCase() + " " + token.toUpperCase(),
        preselect: false,
        sortText: sortPrefix + token.toLowerCase(),
        textEdit: {
            newText: token + (suffix ?? ""),
            range: range,
            replace: true
        }
    };
}
/**
 * Creates a completion item based solely on a plain text string
 * @param token the tag or command text to insert
 * @param range
 * @param completionKind
 * @param suffix
 * @param sortPrefix
 */
export function createQuotedCompletionItem(token, range, completionKind = CompletionItemKind.Value, suffix = null, sortPrefix = "_d") {
    token = quoteString(token);
    return createSimpleCompletionItem(token, range, completionKind ?? CompletionItemKind.Value, suffix, sortPrefix);
}
