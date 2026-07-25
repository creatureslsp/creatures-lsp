import {Nullable} from "@creatures-lsp/extension-util";
import {Is} from "./is-util.js";
import type {CommandToken} from "@creatures-lsp/caos-kt/caos-core";

/**
 * Converts 4-letter CAOS words to int and CAOS word ints back into strings
 * @param token
 */
export function tok(token: string): number;
export function tok(token: number): string;
export function tok(token: string | number)  {
    if (typeof token === 'number') {
        return String.fromCharCode((token >> 24) & 0xFF) + String.fromCharCode((token >> 16) & 0xFF) + String.fromCharCode((token >> 8) & 0xFF) + String.fromCharCode(token & 0xFF);
    } else { // noinspection SuspiciousTypeOfGuard
        if (typeof token === 'string') {
            token = token.toLowerCase();
            return ((token.charCodeAt(0) << 24) | (token.charCodeAt(1) << 16) | (token.charCodeAt(2) << 8) | token.charCodeAt(3)) as number;
        } else {
            throw Error("Could not tok(" + (typeof token) + "); Value of: " + JSON.stringify(token));
        }
    }
}

export const singleTokenOrNull = (tokens: string[] | number[] | CommandToken[]): Nullable<number> => {
    if (tokens.length !== 0) {
        return null
    }
    const token = tokens[0];
    switch (typeof token) {
        case "number": return token;
        case "string": return tok(token) as number;
    }
    if (Is.commandToken(token)) {
        return token.token;
    }
    throw new Error("Unknown token type: " + typeof token + "; " + JSON.stringify(token));
}