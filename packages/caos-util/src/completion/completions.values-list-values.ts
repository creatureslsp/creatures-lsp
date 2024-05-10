import {CursorData, IParserItem, libs, ValuesListValue} from "../caos-util";
import {
    CompletionItem,
    CompletionItemKind,
    InsertTextFormat,
    InsertTextMode,
    Position,
    Range
} from "vscode-languageserver-types";
import {NamedVarPrefix} from "../completions";
import {Nullable, offsetRange} from "@bedalton/extension-util";

const numbersRegex = /[+-]?[0-9]*\.[0-9]+|[+-]?[0-9]+/

export function getValuesListCompletions(
    data: CursorData,
    position: Position,
    inQuotes: boolean
): CompletionItem[] {
    const parameter = data.closestParameter
    const valuesListId = parameter?.valuesListId
    const valuesListValues: ValuesListValue[] = (valuesListId != null ? libs.getValuesList(valuesListId)?.values : null) ??
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


function replaceIf(text: string, search: string, replace: string): Nullable<string> {
    text = text.trim();
    const replaced = text.replace(search, replace);
    if (replaced == text) {
        return undefined;
    } else {
        return replaced;
    }
}

export function inflect(text: string): string {
    text = text.trim();
    const replaced = replace.map(([search, replacement]) => replaceIf(text, search, replacement))
        .filter(t => t != null && t.trim().length > 0);
    return (text + ' ' + replaced.join(' ')).trim();
}

const replace = [
    ['mouseable', 'mousable'],
    ['mousable', 'mouseable'],
    ['eaten', 'ate'],
    ['eat ', 'ate '],
    ['ate ', 'eaten'],
    ['gadget', 'machine'],
    ['machine', 'gadget'],
    ['hit', 'slap'],
    ['slap', 'hit'],
    ['pat', 'tickle'],
    ['tickle', 'pat'],
    ['tired', 'tiredness'],
    ['impregnated', 'pregnant'],
    ['pregnant', 'impregnated'],
    ['true', 'yes'],
    ['false', 'no'],
    ['string', 'text'],
    ['text', 'string'],
    ['Amorous', 'horny'],
    ['barf', 'vomit'],
    ['vomit', 'barf'],
    ['with', 'and'],
    ['and', 'with'],
    ['travelling', 'moving'],
    ['moving', 'traveling'],
    ['x', 'width'],
    ['width', 'x'],
    ['hunger', 'hungry'],
    ['hungry', 'hunger']
];


export function multiCase(key: string): string {
    if (key.length <= 1) {
        return key;
    }
    return (key[0].toUpperCase() + key.substring(1)) + " " +
        (key[0].toLowerCase() + key.substring(1)) + " " +
        key.toLowerCase() + " " +
        key.toUpperCase() + " " +
        key.replace(" ", "").toLowerCase() + " " +
        key.replace(/ ([a-z])/gm, "\U$1");
}