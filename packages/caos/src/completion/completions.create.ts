import {CompletionItem, CompletionItemKind, InsertTextFormat, InsertTextMode, Range} from "vscode-languageserver-types";
import {Nullable, quoteString, INFLECT_SPLITTER} from "@creatures-lsp/extension-util";

/**
 * Creates a completion item based solely on a plain text string
 * @param token the tag or command text to insert
 * @param range
 * @param completionKind
 * @param suffix
 * @param sortPrefix
 */
export function createSimpleCompletionItem(
    token: string,
    range: Range,
    completionKind: CompletionItemKind,
    suffix: Nullable<string> = null,
    sortPrefix: string = "_d",
): CompletionItem {
    return <CompletionItem>{
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
    } satisfies CompletionItem
}

/**
 * Creates a completion item based solely on a plain text string
 * @param token the tag or command text to insert
 * @param range
 * @param completionKind
 * @param suffix
 * @param sortPrefix
 */
export function createQuotedCompletionItem(
    token: string,
    range: Range,
    completionKind: Nullable<CompletionItemKind> = CompletionItemKind.Value,
    suffix: Nullable<string> = null,
    sortPrefix: string = "_d",
): CompletionItem {
    token = quoteString(token);
    return createSimpleCompletionItem(
        token,
        range,
        completionKind ?? CompletionItemKind.Value,
        suffix,
        sortPrefix
    )
}