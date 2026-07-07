import type {ValuesListValue} from "@creatures-lsp/caos-kt/caos-libs";
import {getValuesList} from "@creatures-lsp/caos-kt/caos-libs";
import type {CaosCursorData} from "@creatures-lsp/caos-kt/caos-cursor-data";
import {
    CompletionItem,
    CompletionItemKind,
    InsertTextFormat,
    InsertTextMode,
    Position
} from "vscode-languageserver-types";
import {inflect, offsetRange} from "@creatures-lsp/extension-util";

const numbersRegex = /[+-]?[0-9]*\.[0-9]+|[+-]?[0-9]+/

export function getValuesListCompletions(
    data: CaosCursorData,
    position: Position,
    inQuotes: boolean
): CompletionItem[] {
    const parameter = data.closestParameter
    const valuesListId = parameter?.valuesListId
    const valuesListValues: ValuesListValue[] = (valuesListId != null ? getValuesList(valuesListId)?.values : null) ??
        data.eqValuesList?.values ??
        [];
    let valuesListValuesCompletions: CompletionItem[] = [];
    if (valuesListValues.length > 0) {
        const range = data.closestItem?.textRange ? offsetRange(data.closestItem?.textRange, 1) : {start: position, end: position};
        valuesListValuesCompletions = valuesListValues.map(v => {
            return getValuesListValueCompletionItem(v, inQuotes);
        });
    }
    return valuesListValuesCompletions;
}

export function getValuesListValueCompletionItem(
    value: ValuesListValue,
    inQuotes: boolean = false
): CompletionItem {
    const isNumber = numbersRegex.test(value.value);
    return <CompletionItem>{
        label: value.value + " - " + value.name.toLowerCase(),
        filterText: inflect(value.name.toLowerCase()
            .trim() + (isNumber ? "" : (" " + value.value))),
        insertTextMode: InsertTextMode.asIs,
        kind: CompletionItemKind.Value,
        insertText: (isNumber || inQuotes) ? value.value : ("\"" + value.value + "\""),
        insertTextRules: InsertTextFormat.PlainText,
        documentation: value.description ?? undefined,
        sortText: '1__' + value.name.toLowerCase(),
    }
}

