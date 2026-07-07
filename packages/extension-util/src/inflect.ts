import type {Nullable} from "./types";

export const INFLECT_SPLITTER: string = " @@@@@@ ";

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
    text = text.trim().toLowerCase();
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
