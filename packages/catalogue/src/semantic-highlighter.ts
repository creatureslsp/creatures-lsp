// noinspection JSUnusedGlobalSymbols

import {
    catalogueSemanticLegend,
    CatalogueSemanticTokenModifiers,
    CatalogueSemanticTokensMap,
    CatalogueSemanticTokensTypes
} from "./semantics-legend.js";
import type {
    CatalogueArrayKeyword,
    CatalogueComment,
    CatalogueIntValue,
    CatalogueOverrideKeyword,
    CatalogueParseResult,
    CatalogueParserItem,
    CatalogueStringValue,
    CatalogueTagKeyword,
    CatalogueTreeVisitor,
} from "@creatureslsp/caos-kt/catalogue-core";

import {
    parseCatalogue,
    walkCatalogue
} from "@creatureslsp/caos-kt/catalogue-core";

import {CancellationToken, Nullable, offsetRange, RangeWithIndex, SemanticToken} from "@creatureslsp/extension-util"
import {Range, SemanticTokens, SemanticTokensLegend, uinteger} from "vscode-languageserver-types";
import {IsCatalogue} from "./is.js";


/**
 * Simple class for cancellation request while processing a CAOS file
 */
export class RequestCancelledException extends Error {

}

/**
 * Converts a Kotlin range into a valid semantic token range
 * @param range
 * @param endOffset
 */
function toSemanticRange(range: RangeWithIndex, endOffset: number = 0): RangeWithIndex {
    if (range.start == null) {
        console.log(JSON.stringify(range, null, 2));
    }
    return offsetRange(range, 0, 0, endOffset);
}

/**
 * CAOS parser item walker that constructs semantic tokens
 */
export class SemanticTokensWalker implements CatalogueTreeVisitor {
    tokens: SemanticToken[] = [];
    private checkCancelled: () => void;
    
    constructor(cancellationToken?: CancellationToken) {
        this.checkCancelled = this.setCancellationToken(cancellationToken);
    }
    
    setCancellationToken(cancellationToken?: CancellationToken): () => void {
        return cancellationToken != null ? (() => {
            if (cancellationToken.isCancellationRequested) {
                throw new RequestCancelledException()
            }
        }) : (() => {
        });
    }
    
    readonly onEachItemAndKeyword = () => {
        this.checkCancelled();
    }
    
    readonly onStartArrayEntity = (token: CatalogueArrayKeyword) => {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: CatalogueSemanticTokensTypes.CATALOGUE_START,
            modifiers: [CatalogueSemanticTokenModifiers.ARRAY]
        });
    }
    
    readonly onStartTagEntity = (token: CatalogueTagKeyword) => {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: CatalogueSemanticTokensTypes.CATALOGUE_START,
            modifiers: [CatalogueSemanticTokenModifiers.TAG]
        });
    }
    
    readonly onArrayCount = (token: CatalogueIntValue) => {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: CatalogueSemanticTokensTypes.NUMBER,
            modifiers: [CatalogueSemanticTokenModifiers.ARRAY_COUNT]
        });
    }
    
    readonly onOverrideKeyword = (token: CatalogueOverrideKeyword) => {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: CatalogueSemanticTokensTypes.OVERRIDE,
            modifiers: []
        });
    }
    
    readonly onCatalogueValue = (token: CatalogueParserItem) => {
        if (!IsCatalogue.string(token)) {
            return;
        }
        const lastChar = token.text.length ? token.text[token.text.length - 1] : undefined;
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: CatalogueSemanticTokensTypes.STRING,
            modifiers: [CatalogueSemanticTokenModifiers.STRING_VALUE]
        });
    }
    
    readonly onTagName = (token: CatalogueStringValue) => {
        this.tokens.push({
            range: toSemanticRange(token.textRange, 1),
            tokenType: CatalogueSemanticTokensTypes.TAG_NAME,
            modifiers: []
        });
    }
    
    readonly onComment = (_token: CatalogueComment): void => {
    }
}

/**
 * Gets the semantic token for a token type name
 */
function getType(type: string): number {
    return CatalogueSemanticTokensMap.legendMap[type];
}

/**
 * Gets a list of modifiers as a single bit-shifted number
 */
/** @type {(modifier: string[]|string|null)=>number} */
function getModifier(modifiers: string[] | string | null): number {
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
    } else {
        return 0;
    }
}

/**
 * Converts a series of tokens into an array of ints representing the semantic tokens
 * @param tokens
 * @param blockRange
 */
function convertContext(tokens: SemanticToken[], blockRange?: Range): uinteger[] {
    const data: number[] = [];
    let prevLine = 0;
    let prevChar = 0;
    
    for (let i = 0; i < tokens.length; i++) {
        const token: SemanticToken = tokens[i];
        // translate token and modifiers to number representations
        let type = getType(token.tokenType);
        if (type === -1) {
            console.error("Type token: " + token.tokenType + " is not defined in tokens map");
            continue;
        }
        
        const range: RangeWithIndex = token.range;
        
        let modifier = token.modifiers.length > 0 ? getModifier(token.modifiers) : 0;
        let tokenLength = (range.endIndex - range.startIndex);
        
        if (prevLine !== range.start.line) {
            prevChar = 0;
        }
        
        if (prevLine == range.start.line && range.start.character < prevChar) {
            console.error("Semantic tokens out of order. Character start is before previous character");
            continue;
        } else if (prevLine > range.start.line) {
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
            range.start.line! - prevLine,
            // for the same line, translate start to deltaStart
            range.start.line! == prevLine ? (start - prevChar) : start,
            tokenLength,
            type,
            modifier
        );
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
export function getCatalogueSemanticTokens(text: string | CatalogueParseResult, cancellationToken?: CancellationToken, range?: Range): SemanticToken[] {
    // Parse CAOS
    let result: Nullable<CatalogueParseResult>;
    if (typeof text === "string") {
        result = parseCatalogue(text);
    } else if (IsCatalogue.parseResult(text)) {
        result = text;
    } else {
        console.error("Cannot convert input of type: " + (typeof text) + " to catalogue parse result; Data: " + JSON.stringify(text));
        return [];
    }
    
    if (result == null) {
        throw new Error('Failed to parse Catalogue for result');
    }
    
    const listener = new SemanticTokensWalker(cancellationToken);
    try {
        walkCatalogue(listener, result);
    } catch (e) {
        if (e instanceof RequestCancelledException) {
            return listener.tokens;
        } else {
            throw e;
        }
    }
    
    let tokens = listener.tokens;
    if (range != null) {
        tokens = tokens.filter((t) => {
            return !(
                t.range.start.line < range.start.line ||
                t.range.end.line > range.start.line ||
                (t.range.start.line == range.start.line && t.range.start.character < t.range.start.character) ||
                (t.range.end.line == range.end.line && t.range.start.character > t.range.end.character)
            )
        })
    }
    return tokens.sort((a: SemanticToken, b: SemanticToken) => {
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
export function getCatalogueDocumentSemanticTokens(text: string | CatalogueParseResult, cancellationToken?: CancellationToken, range?: Range): SemanticTokens {
    const tokens = getCatalogueSemanticTokens(text, cancellationToken, range);
    return <SemanticTokens>{
        data: convertContext(tokens!, range)
    };
}

export function getSemanticTokensLegend(): SemanticTokensLegend {
    return catalogueSemanticLegend;
}

