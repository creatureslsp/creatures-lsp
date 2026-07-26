// noinspection JSUnusedGlobalSymbols
import { formatCommandStringAsMarkdown } from "./documentation-formattter.js";
import { semanticLegend, SemanticTokenModifiers, SemanticTokensMap, SemanticTokensTypes } from "./semantics-legend.js";
import { parseCaosWithin, parseCaos, } from "@creatureslsp/caos-kt/caos-parser";
import { offsetVsRange, } from "@creatureslsp/extension-util";
import { AGENT_TYPE_ID, ANIMATION_TYPE_ID, BRACKET_STRING_PARSER_TYPE, BYTE_STRING_PARSER_TYPE, BYTE_STRING_TYPE_ID, COMMAND_TYPE_COMMAND_ID, COMMAND_TYPE_LVALUE_ID, COMMAND_TYPE_RVALUE_ID, FLOAT_TYPE_ID, HEXADECIMAL_TYPE_ID, INT_TYPE_ID, QUOTE_STRING_PARSER_TYPE, STRING_TYPE_ID, TOKEN_TYPE_ID, VARIABLE_TYPE_ID } from "./constants.js";
import { tok } from "./token-utils.js";
import { getCommands } from "./commands.js";
import { walkCaosParseResult } from "./context-walker.js";
import { isOfficialTag } from "./caos2/caos2pray-definitions.js";
import { Is } from "./is-util.js";
/**
 * Simple class for cancellation request while processing a CAOS file
 */
export class RequestCancelledException extends Error {
}
/**
 * Converts a Kotlin range into a valid semantic token range
 * @param range
 * @param offsetStart
 */
function toSemanticRange(range, offsetStart = true) {
    return offsetVsRange(range, 0, offsetStart && range.start.character !== 0 ? 1 : 0, 0, 1);
}
/**
 * CAOS parser item walker that constructs semantic tokens
 */
export class SemanticTokensWalker {
    tokens = [];
    caosLib;
    checkCancelled;
    isC2e;
    isC1e;
    variant;
    constructor(variant, caosLib, cancellationToken) {
        this.caosLib = caosLib;
        variant = variant.toUpperCase();
        this.variant = variant;
        this.isC1e = variant === "C1" || variant === "C2";
        this.isC2e = variant !== "C1" && variant !== "C2";
        this.checkCancelled = this.setCancellationToken(cancellationToken);
    }
    setCancellationToken(cancellationToken) {
        return this.checkCancelled = cancellationToken != null ? (() => {
            if (cancellationToken.isCancellationRequested) {
                throw new RequestCancelledException();
            }
        }) : (() => {
        });
    }
    onInt(_token) {
    }
    onBinary(_token) {
    }
    onChar(_token) {
    }
    onFloat(_token) {
    }
    onByteString(_token) {
        // byte string needs context for colorization
        // Will be altered in onCommandCall
    }
    onC1eString(token) {
        // this.tokens.push({
        //     range: toSemanticRange(token.textRange),
        //     tokenType: SemanticTokensTypes.STRING_TOKEN,
        //     modifiers: [SemanticTokenModifiers.C1_STRING_MODIFIER_TOKEN]
        // })
    }
    onC2eString(token) {
        // this.tokens.push({
        //     range: toSemanticRange(token.textRange, true),
        //     tokenType: SemanticTokensTypes.STRING_TOKEN,
        //     modifiers: [SemanticTokenModifiers.QUOTE_STRING_MODIFIER_TOKEN]
        // })
    }
    onAnyString(_token) {
    }
    onPictDimension(token) {
        const tokenWithDescription = {
            range: toSemanticRange(token.textRange),
            tokenType: SemanticTokensTypes.DDE_PICT_TOKEN,
            modifiers: [],
            description: "Pict Dimension" + token.value.first + "x" + token.value.second,
            tokenLength: token.textRange.endIndex - token.textRange.startIndex + 1,
        };
        this.tokens.push(tokenWithDescription);
    }
    onCommandToken(_token) {
        this.checkCancelled();
    }
    onToken(_token) {
    }
    onEqOp(_token) {
    }
    onEqJoin(token) {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: SemanticTokensTypes.EQ_JOIN_TOKEN,
            modifiers: [],
            tokenLength: token.textRange.endIndex - token.textRange.startIndex + 1,
        });
    }
    onIndexedVar(token) {
        let description;
        let modifier;
        switch (token.indexedVarType.toUpperCase()) {
            case "VARX":
            case "VAXX":
                description = "Event variable";
                modifier = SemanticTokenModifiers.VAXX_MODIFIER_TOKEN;
                break;
            case "OBVX":
            case "OVXX":
                description = "TARG object variable";
                modifier = SemanticTokenModifiers.OVXX_MODIFIER_TOKEN;
                break;
            case "MVXX":
                description = "OWNR object variable";
                modifier = SemanticTokenModifiers.MVXX_MODIFIER_TOKEN;
                break;
            default:
                throw new Error("Unexpected variable type: '" + token.indexedVarType + "' encountered");
        }
        pushToken(this.tokens, toSemanticRange(token.textRange), SemanticTokensTypes.VARIABLE_TOKEN, [modifier], token.textRange.endIndex - token.textRange.startIndex + 1, formatCommandStringAsMarkdown(token.indexedVarType, description));
    }
    onCommandCall(call) {
        this.checkCancelled();
        addCommandTokenDecorations(this.tokens, call);
        addTokensFromCall(this.tokens, call);
        try {
            addStringDecorations(this.tokens, call);
        }
        catch (e) {
            const error = e instanceof Error ? e.message + "\n" + e.stack : e;
            console.error("Failed to get string decorations; " + error);
        }
    }
    onPlaceholderText(token) {
        pushToken(this.tokens, toSemanticRange(token.textRange), SemanticTokensTypes.PLACEHOLDER_TEXT, [], token.textRange.endIndex - token.textRange.startIndex + 1);
    }
    onCaos2Comment(token) {
        const tag = token.tag;
        if (tag) {
            this.onCaos2PrayTag(token, tag);
            return;
        }
        const command = token.command;
        if (command) {
            this.onCaos2PrayCommand(token, command);
            return;
        }
    }
    /**
     * Mark CAOS2PRAY tags
     * @param token
     * @param tag
     * @private
     */
    onCaos2PrayTag(token, tag) {
        // C1e tags are always marked official
        let modifiers = this.isC1e || isOfficialTag(tag)
            ? [SemanticTokenModifiers.CAOS2PRAY_OFFICIAL]
            : [];
        const range = token.token.textRange;
        this.tokens.push({
            range: toSemanticRange(range),
            tokenType: SemanticTokensTypes.CAOS2PRAY_TAG,
            modifiers,
            tokenLength: token.textRange.endIndex - token.textRange.startIndex + 1
        });
    }
    onCaos2PrayCommand(_token, _command) {
    }
    onComment(_token) {
    }
}
/**
 * Gets the modifier tokens for a given value type
 * @param type
 */
function getTypeModifierTokens(type) {
    switch (type) {
        case INT_TYPE_ID:
            return [
                // SemanticTokenModifiers.RETURNS_INT,
                SemanticTokenModifiers.RETURNS_NUMBER
            ];
        case FLOAT_TYPE_ID:
            return [
                // SemanticTokenModifiers.RETURNS_FLOAT,
                SemanticTokenModifiers.RETURNS_NUMBER
            ];
        case STRING_TYPE_ID:
            return [
                SemanticTokenModifiers.RETURNS_STRING
            ];
        case VARIABLE_TYPE_ID:
            return [
                SemanticTokenModifiers.RETURNS_VARIABLE
            ];
        case AGENT_TYPE_ID:
            return [
                SemanticTokenModifiers.RETURNS_AGENT
            ];
        case HEXADECIMAL_TYPE_ID:
            return [
                SemanticTokenModifiers.RETURNS_STRING
            ];
        default:
            return [];
    }
}
/**
 * Cached int token value for `new:`
 */
const NEW_TOK = tok("new:");
/**
 * List of control keywords
 */
const keywords = [
    tok("scrp"),
    tok("iscr"),
    tok("rscr"),
    tok("doif"),
    tok("elif"),
    tok("endi"),
    tok("reps"),
    tok("repe"),
    tok("loop"),
    tok("untl"),
    tok("ever"),
    tok("enum"),
    tok("etch"),
    tok("esee"),
    tok("epas"),
    tok("econ"),
    tok("elst"),
    tok("next"),
    tok("escn"),
    tok("nscn"),
    tok("subr"),
    tok("retn"),
    tok("{eq}")
];
/**
 * Push semantic token information for a command's individual word tokens
 * @param tokens
 * @param context
 */
function addCommandTokenDecorations(tokens, context) {
    let commandDescription = null;
    const command = context.commandString;
    const commandReturnType = context.expectType;
    if (command == null) {
        return;
    }
    const token = command.length === 4 ? tok(command.toLowerCase()) : null;
    if (token != null && keywords.indexOf(token) >= 0) {
        return;
    }
    // commandDescription = formatCaosDocumentation(variant, command);
    const modifierTokens = (tok(command.substring(0, 4)) === NEW_TOK) ? [SemanticTokenModifiers.AGENT_CONSTRUCTOR] : getTypeModifierTokens(commandReturnType);
    let commandTypeDecoration = null;
    if (context.callTypeId === COMMAND_TYPE_COMMAND_ID) {
        commandTypeDecoration = SemanticTokensTypes.COMMAND_TOKEN;
    }
    else if (context.callTypeId === COMMAND_TYPE_LVALUE_ID) {
        commandTypeDecoration = SemanticTokensTypes.LVALUE_TOKEN;
    }
    else if (context.callTypeId === COMMAND_TYPE_RVALUE_ID) {
        commandTypeDecoration = SemanticTokensTypes.RVALUE_TOKEN;
    }
    else {
        console.log("Unknown command call type: " + context.callTypeId);
        return;
    }
    switch (context.tokens.length) {
        case 3:
            pushToken(tokens, toSemanticRange(context.tokens[0].textRange), commandTypeDecoration, [SemanticTokenModifiers.COMMAND_PREFIX, ...modifierTokens], context.tokens[0].textRange.endIndex - context.tokens[0].textRange.startIndex + 1, commandDescription);
            pushToken(tokens, toSemanticRange(context.tokens[1].textRange), commandTypeDecoration, modifierTokens, context.tokens[1].textRange.endIndex - context.tokens[1].textRange.startIndex + 1, commandDescription);
            pushToken(tokens, toSemanticRange(context.tokens[2].textRange), commandTypeDecoration, [SemanticTokenModifiers.COMMAND_SUFFIX, ...modifierTokens], context.tokens[2].textRange.endIndex - context.tokens[2].textRange.startIndex + 1, commandDescription);
            break;
        case 2:
            pushToken(tokens, toSemanticRange(context.tokens[0].textRange), commandTypeDecoration, [SemanticTokenModifiers.COMMAND_PREFIX, ...modifierTokens], context.tokens[0].textRange.endIndex - context.tokens[0].textRange.startIndex + 1, commandDescription);
            pushToken(tokens, toSemanticRange(context.tokens[1].textRange), commandTypeDecoration, modifierTokens, context.tokens[1].textRange.endIndex - context.tokens[1].textRange.startIndex + 1, commandDescription);
            break;
        case 1:
            pushToken(tokens, toSemanticRange(context.tokens[0].textRange), commandTypeDecoration, modifierTokens, context.tokens[0].textRange.endIndex - context.tokens[0].textRange.startIndex + 1, commandDescription);
            break;
    }
}
/**
 * Decorate a bracket enclosed string, including by strings
 * @param tokens
 * @param call
 */
function addStringDecorations(tokens, call) {
    const stringArguments = call.arguments.filter((a) => {
        const typeToken = a.parserItem?.typeToken;
        return typeToken === QUOTE_STRING_PARSER_TYPE || typeToken === BYTE_STRING_PARSER_TYPE || typeToken === BRACKET_STRING_PARSER_TYPE;
    });
    const args = call.arguments;
    for (let argument of stringArguments) {
        const isAnimation = argument.type === ANIMATION_TYPE_ID || argument.type === BYTE_STRING_TYPE_ID;
        const typeId = isAnimation ? BYTE_STRING_TYPE_ID : argument.parserItem?.typeToken;
        const text = argument.text;
        if (text == null) {
            console.log("Argument is missing text parameter; Keys: ", Object.keys(argument));
            continue;
        }
        if (typeId == BRACKET_STRING_PARSER_TYPE || (typeId == QUOTE_STRING_PARSER_TYPE && text.length && text[0] === "[")) {
            tokens.push({
                range: toSemanticRange(argument.textRange),
                tokenType: SemanticTokensTypes.STRING_TOKEN,
                modifiers: [],
                tokenLength: argument.textRange.endIndex - argument.textRange.startIndex + 1
            });
        }
        else if (typeId == QUOTE_STRING_PARSER_TYPE) {
            expandStringComponents(tokens, argument.text, argument?.textRange, SemanticTokenModifiers.QUOTE_STRING_MODIFIER_TOKEN, /(\\.)/, null, SemanticTokensTypes.STRING_ESCAPE_CHARACTER);
        }
        else if (typeId === ANIMATION_TYPE_ID || typeId === BYTE_STRING_TYPE_ID) {
            expandStringComponents(tokens, argument.text, argument?.textRange, SemanticTokenModifiers.BYTE_STRING_MODIFIER_TOKEN, /(\d+)|([Rr])$/, null, [SemanticTokensTypes.NUMBER, SemanticTokensTypes.STRING_ESCAPE_CHARACTER]);
        }
    }
    function expandStringComponents(tokens, text, range, baseModifier, regex, capturedModifier, capturedType = null) {
        let start = {
            line: range.start.line,
            character: range.start.character
        };
        let match = text.match(regex);
        if (match == null) {
            tokens.push({
                range: toSemanticRange(range),
                tokenType: SemanticTokensTypes.STRING_TOKEN,
                modifiers: [baseModifier],
                tokenLength: range.endIndex - range.startIndex + 1
            });
        }
        let lastIndex = 0;
        while (match != null) {
            if (match.index == null) {
                continue;
            }
            let index = 0;
            for (let i = 0; i < match.length; i++) {
                if (typeof match[i] === "string") {
                    index = i;
                    break;
                }
            }
            const modifier = Array.isArray(capturedModifier)
                ? typeof capturedModifier[index] !== "undefined" ? capturedModifier[index] : capturedModifier[0]
                : capturedModifier;
            const type = Array.isArray(capturedType)
                ? typeof capturedType[index] !== "undefined" ? capturedType[index] : capturedType[0]
                : capturedType;
            if (match.index !== 0) {
                let newRange = getTextSliceRange(text, start, lastIndex, lastIndex + match.index);
                start = newRange.end;
                tokens.push({
                    range: toSemanticRange(newRange),
                    tokenType: SemanticTokensTypes.STRING_TOKEN,
                    modifiers: [baseModifier],
                    tokenLength: match.index
                });
            }
            const startIndex = lastIndex + match.index;
            const endIndex = startIndex + match[1].length;
            const newRange = getTextSliceRange(text, start, startIndex, endIndex);
            tokens.push({
                range: toSemanticRange(newRange),
                tokenType: type ?? SemanticTokensTypes.STRING_TOKEN,
                modifiers: modifier != null ? [modifier] : [],
                tokenLength: endIndex - startIndex
            });
            start = newRange.end;
            lastIndex = endIndex;
            match = text.substring(lastIndex)
                .match(regex);
        }
        const startIndex = lastIndex;
        const endIndex = text.length;
        const length = endIndex - startIndex;
        if (length) {
            const newRange = getTextSliceRange(text, start, startIndex, endIndex);
            tokens.push({
                range: toSemanticRange(newRange),
                tokenType: SemanticTokensTypes.STRING_TOKEN,
                modifiers: [baseModifier],
                tokenLength: text.length - lastIndex
            });
        }
    }
}
function getTextSliceRange(text, start, startInString, endInString) {
    const slicedText = text.substring(startInString, endInString);
    const textLines = slicedText.split("\n");
    const line = start.line + (textLines.length - 1);
    const character = textLines.length === 1 ? start.character + slicedText.length : (textLines.pop()?.length ?? 0);
    let end = {
        line: line,
        character: character
    };
    return {
        start,
        end
    };
}
/**
 * Adds semantic tokens to array for a command call
 * Pushes command word highlights as well as token arguments
 * @param tokens
 * @param call
 */
function addTokensFromCall(tokens, call) {
    const tokenArguments = call.arguments.filter((p) => p.type == TOKEN_TYPE_ID);
    if (tokenArguments.length == 0) {
        return;
    }
    for (let token of tokenArguments) {
        tokens.push({
            range: toSemanticRange(token.textRange),
            // Tokens in C1e can also be file names. These are represented as a string
            tokenType: call.commandString !== "GSUB" && call.commandString !== "SUBR" && call.commandString !== "GOTO"
                ? SemanticTokensTypes.STRING_TOKEN
                : SemanticTokensTypes.SUBROUTINE_NAME_TOKEN,
            modifiers: [],
            tokenLength: token.textRange.endIndex - token.textRange.startIndex
        });
    }
}
/**
 * Constructs and pushes a semantic token into the passed in semantic token array
 * @param allTokens
 * @param ctx the range of this semantic item
 * @param tag main token type
 * @param modifierTokens any semantic modifiers
 * @param tokenLength
 * @param description
 */
function pushToken(allTokens, ctx, tag, modifierTokens, tokenLength, description = null) {
    if (ctx.start?.line == null || ctx.start?.character == null || ctx.end?.line == null || ctx.end?.character == null) {
        return false;
    }
    const token = {
        range: ctx,
        tokenType: tag,
        modifiers: modifierTokens,
        description: description,
        tokenLength
    };
    allTokens.push(token);
    return true;
}
/**
 * Gets the semantic token for a token type name
 */
function getType(type) {
    return SemanticTokensMap.legendMap[type];
}
/**
 * Gets a list of modifiers as a single bit-shifted number
 */
/** @type {(modifier: string[]|string|null)=>number} */
function getModifier(modifiers) {
    if (typeof modifiers === "string") {
        modifiers = [modifiers];
    }
    if (Array.isArray(modifiers)) {
        let nModifiers = 0;
        for (let modifier of modifiers) {
            const modifierToken = SemanticTokensMap.modifierMap[modifier];
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
        let tokenLength = token.tokenLength;
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
 * @param variant
 * @param text
 * @param cancellationToken
 * @param range
 */
export function getCaosSemanticTokens(variant, text, cancellationToken, range) {
    const lib = getCommands(variant);
    if (lib == null) {
        throw new Error("CaosLibs is null with variant: " + variant);
    }
    // Parse CAOS
    let result;
    if (Is.parseResult(text)) {
        result = text;
    }
    else if (typeof text !== "string") {
        throw new Error(`getCaosSemanticTokens expects string or CaosParseResult; Found: ${JSON.stringify(text, null, 2)}`);
    }
    else if (range != null) {
        result = parseCaosWithin(variant, text, range.start.line, range.start.character, range.end.line, range.end.character);
    }
    else {
        result = parseCaos(variant, text);
    }
    if (result == null) {
        throw new Error("Failed to parse CAOS for result");
    }
    const listener = new SemanticTokensWalker(variant, lib, cancellationToken);
    try {
        walkCaosParseResult(result, listener);
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
 * @param variant
 * @param text
 * @param cancellationToken
 * @param range
 */
export function getCaosDocumentSemanticTokens(variant, text, cancellationToken, range) {
    const tokens = getCaosSemanticTokens(variant, text, cancellationToken, range);
    return {
        data: convertContext(tokens, range)
    };
}
export function getSemanticTokensLegend() {
    return semanticLegend;
}
