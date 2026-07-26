import { Is } from "./is-util.js";
export function tok(token) {
    if (typeof token === 'number') {
        return String.fromCharCode((token >> 24) & 0xFF) + String.fromCharCode((token >> 16) & 0xFF) + String.fromCharCode((token >> 8) & 0xFF) + String.fromCharCode(token & 0xFF);
    }
    else { // noinspection SuspiciousTypeOfGuard
        if (typeof token === 'string') {
            token = token.toLowerCase();
            return ((token.charCodeAt(0) << 24) | (token.charCodeAt(1) << 16) | (token.charCodeAt(2) << 8) | token.charCodeAt(3));
        }
        else {
            throw Error("Could not tok(" + (typeof token) + "); Value of: " + JSON.stringify(token));
        }
    }
}
export const singleTokenOrNull = (tokens) => {
    if (tokens.length !== 0) {
        return null;
    }
    const token = tokens[0];
    switch (typeof token) {
        case "number": return token;
        case "string": return tok(token);
    }
    if (Is.commandToken(token)) {
        return token.token;
    }
    throw new Error("Unknown token type: " + typeof token + "; " + JSON.stringify(token));
};
