// noinspection JSUnusedGlobalSymbols
import { catalogueSemanticLegend, CatalogueSemanticTokenModifiers, CatalogueSemanticTokensMap, CatalogueSemanticTokensTypes } from "./semantics-legend.js";
import { parseCatalogue, walkCatalogue } from "@creatureslsp/caos-kt/catalogue-core";
import { offsetRange } from "@creatureslsp/extension-util";
import { IsCatalogue } from "./is.js";
/**
 * Simple class for cancellation request while processing a CAOS file
 */
export class RequestCancelledException extends Error {
}
/**
 * Converts a Kotlin range into a valid semantic token range
 * @param range
 * @param endoffset
 */
function toSemanticRange(range, endoffset = 0) {
    if (range.start == null) {
        console.log(JSON.stringify(range, null, 2));
    }
    return offsetRange(range, 0, 1, endoffset);
}
/**
 * CAOS parser item walker that constructs semantic tokens
 */
export class SemanticTokensWalker {
    tokens = [];
    checkCancelled;
    constructor(cancellationToken) {
        this.checkCancelled = this.setCancellationToken(cancellationToken);
    }
    setCancellationToken(cancellationToken) {
        return cancellationToken != null ? (() => {
            if (cancellationToken.isCancellationRequested) {
                throw new RequestCancelledException();
            }
        }) : (() => {
        });
    }
    onEachItemAndKeyword = () => {
        this.checkCancelled();
    };
    onStartArrayEntity = (token) => {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: CatalogueSemanticTokensTypes.CATALOGUE_START,
            modifiers: [CatalogueSemanticTokenModifiers.ARRAY]
        });
    };
    onStartTagEntity = (token) => {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: CatalogueSemanticTokensTypes.CATALOGUE_START,
            modifiers: [CatalogueSemanticTokenModifiers.TAG]
        });
    };
    onArrayCount = (token) => {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: CatalogueSemanticTokensTypes.NUMBER,
            modifiers: [CatalogueSemanticTokenModifiers.ARRAY_COUNT]
        });
    };
    onOverrideKeyword = (token) => {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: CatalogueSemanticTokensTypes.OVERRIDE,
            modifiers: []
        });
    };
    onCatalogueValue = (token) => {
        if (!IsCatalogue.string(token)) {
            return;
        }
        const lastChar = token.text.length ? token.text[token.text.length - 1] : undefined;
        this.tokens.push({
            range: toSemanticRange(token.textRange, lastChar === "\"" || lastChar === "'" ? -1 : 0),
            tokenType: CatalogueSemanticTokensTypes.STRING,
            modifiers: [CatalogueSemanticTokenModifiers.STRING_VALUE]
        });
    };
    onTagName = (token) => {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: CatalogueSemanticTokensTypes.TAG_NAME,
            modifiers: []
        });
    };
    onComment = (_token) => {
    };
}
/**
 * Gets the semantic token for a token type name
 */
function getType(type) {
    return CatalogueSemanticTokensMap.legendMap[type];
}
/**
 * Gets a list of modifiers as a single bit-shifted number
 */
/** @type {(modifier: string[]|string|null)=>number} */
function getModifier(modifiers) {
    if (typeof modifiers === 'string') {
        modifiers = [modifiers];
    }
    if (Array.isArray(modifiers)) {
        let nModifiers = 0;
        for (let modifier of modifiers) {
            const modifierToken = CatalogueSemanticTokensMap.modifierMap[modifier];
            if (modifierToken > 0) {
                nModifiers |= (1 << modifierToken);
            }
        }
        return nModifiers;
    }
    else {
        return 0;
    }
}
/**
 * Converts a series of tokens into an array of ints representing the semantic tokens
 * @param tokens
 * @param blockRange
 */
function convertContext(tokens, blockRange) {
    const data = [];
    let prevLine = 0;
    let prevChar = 0;
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        // translate token and modifiers to number representations
        let type = getType(token.tokenType);
        if (type === -1) {
            console.error("Type token: " + token.tokenType + " is not defined in tokens map");
            continue;
        }
        const range = token.range;
        let modifier = token.modifiers.length > 0 ? getModifier(token.modifiers) : 0;
        let tokenLength = (range.endIndex - range.startIndex) + 1;
        if (prevLine !== range.start.line) {
            prevChar = 0;
        }
        if (prevLine == range.start.line && range.start.character < prevChar) {
            console.error("Semantic tokens out of order. Character start is before previous character");
            continue;
        }
        else if (prevLine > range.start.line) {
            console.error("Semantic tokens out of order. Token line is before previous line");
            continue;
        }
        let start = range.start.character;
        if (blockRange != null && range.start.line == blockRange.start.line && start < blockRange.start.character) {
            start = blockRange.start.character;
            tokenLength -= (blockRange.start.character - range.start.character);
        }
        let end = range.end.character;
        if (blockRange != null && range.end.line == blockRange.end.line && end > blockRange.end.character) {
            start = blockRange.start.character;
            tokenLength -= (range.end.character - blockRange.end.character);
        }
        // Semantic token bytes = [line, startOffsetInLine, tokenLength, typeIndexInLegend, modifiers]
        data.push(
        // translate line to deltaLine
        range.start.line - prevLine, 
        // for the same line, translate start to deltaStart
        range.start.line == prevLine ? (start - prevChar) : start, tokenLength, type, modifier);
        prevChar = start;
        prevLine = token.range.start.line;
    }
    return data;
}
/**
 * Gets semantic tokens as an array
 * @param text
 * @param cancellationToken
 * @param range
 */
export function getCatalogueSemanticTokens(text, cancellationToken, range) {
    // Parse CAOS
    let result;
    if (typeof text === "string") {
        result = parseCatalogue(text);
    }
    else if (IsCatalogue.parseResult(text)) {
        result = text;
    }
    else {
        console.error("Cannot convert input of type: " + (typeof text) + " to catalogue parse result; Data: " + JSON.stringify(text));
        return [];
    }
    if (result == null) {
        throw new Error('Failed to parse Catalogue for result');
    }
    const listener = new SemanticTokensWalker(cancellationToken);
    try {
        walkCatalogue(listener, result);
    }
    catch (e) {
        if (e instanceof RequestCancelledException) {
            return listener.tokens;
        }
        else {
            throw e;
        }
    }
    let tokens = listener.tokens;
    if (range != null) {
        tokens = tokens.filter((t) => {
            return !(t.range.start.line < range.start.line ||
                t.range.end.line > range.start.line ||
                (t.range.start.line == range.start.line && t.range.start.character < t.range.start.character) ||
                (t.range.end.line == range.end.line && t.range.start.character > t.range.end.character));
        });
    }
    return tokens.sort((a, b) => {
        const aRange = a.range;
        const bRange = b.range;
        if (aRange?.start.line === bRange?.start?.line) {
            return (aRange?.start?.character ?? 0) - (bRange?.start?.character ?? 0);
        }
        return (aRange?.start?.line ?? 0) - (bRange?.start?.line ?? 0);
    });
}
/**
 * Gets the semantic tokens for a CAOS document
 * @param text
 * @param cancellationToken
 * @param range
 */
export function getCatalogueDocumentSemanticTokens(text, cancellationToken, range) {
    const tokens = getCatalogueSemanticTokens(text, cancellationToken, range);
    return {
        data: convertContext(tokens, range)
    };
}
export function getSemanticTokensLegend() {
    return catalogueSemanticLegend;
}
