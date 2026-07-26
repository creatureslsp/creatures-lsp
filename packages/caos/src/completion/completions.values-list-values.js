import { getValuesList } from "@creatureslsp/caos-kt/caos-libs";
import { CompletionItemKind, InsertTextFormat, InsertTextMode } from "vscode-languageserver-types";
import { inflect, offsetRange } from "@creatureslsp/extension-util";
const numbersRegex = /[+-]?[0-9]*\.[0-9]+|[+-]?[0-9]+/;
export function getValuesListCompletions(data, position, inQuotes) {
    const parameter = data.closestParameter;
    const valuesListId = parameter?.valuesListId;
    const valuesListValues = (valuesListId != null ? getValuesList(valuesListId)?.values : null) ??
        data.eqValuesList?.values ??
        [];
    let valuesListValuesCompletions = [];
    if (valuesListValues.length > 0) {
        const range = data.closestItem?.textRange ? offsetRange(data.closestItem?.textRange, 1) : { start: position, end: position };
        valuesListValuesCompletions = valuesListValues.map(v => {
            return getValuesListValueCompletionItem(v, inQuotes);
        });
    }
    return valuesListValuesCompletions;
}
export function getValuesListValueCompletionItem(value, inQuotes = false) {
    const isNumber = numbersRegex.test(value.value);
    return {
        label: value.value + " - " + value.name.toLowerCase(),
        filterText: inflect(value.name.toLowerCase()
            .trim() + (isNumber ? "" : (" " + value.value))),
        insertTextMode: InsertTextMode.asIs,
        kind: CompletionItemKind.Value,
        insertText: (isNumber || inQuotes) ? value.value : ("\"" + value.value + "\""),
        insertTextRules: InsertTextFormat.PlainText,
        documentation: value.description ?? undefined,
        sortText: '1__' + value.name.toLowerCase(),
    };
}
