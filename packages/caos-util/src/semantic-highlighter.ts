// noinspection JSUnusedGlobalSymbols

import {formatCaosDocumentation, formatCommandStringAsMarkdown} from "./documentation-formattter";
import {semanticLegend, SemanticTokenModifiers, SemanticTokensMap, SemanticTokensTypes} from "./semantics-legend";
import {
    com,
    GameVariant,
    ICaosContextListener,
    Nullable,
    RangeWithIndex
} from "./caos-util";
import collectors = com.bedalton.creatures.caos.collectors;
import libs = com.bedalton.creatures.caos.libs;
import ICommandCall = collectors.CommandCall;
import {
    AGENT_TYPE_ID,
    ANIMATION_TYPE_ID,
    BYTE_STRING_TYPE_ID,
    C1_STRING_TYPE_ID,
    COMMAND_TYPE_ID,
    FLOAT_TYPE_ID,
    HEXADECIMAL_TYPE_ID,
    INT_TYPE_ID,
    STRING_TYPE_ID,
    tok,
    TOKEN_TYPE_ID,
    VARIABLE_TYPE_ID
} from "./constants";
import {
    Range,
    SemanticTokens,
    SemanticTokensLegend,
    uinteger
} from "vscode-languageserver-types";
import Commands = libs.Commands;
import ParserItem = collectors.ParserItem;
import {offsetRange} from "./position-utils";
import ParseResult = collectors.ParseResult;
import {getCommands} from "./commands";
import {walkParseResult} from "./context-walker";
import parseCaosWithin = collectors.parseCaosWithin;
import parseCaos = collectors.parseCaos;
import {CancellationToken} from "../lib/CaosUtil";


/**
 * Simple class for cancellation request while processing a CAOS file
 */
export class RequestCancelledException extends Error {

}

/**
 * Converts a Kotlin range into a valid semantic token range
 * @param range
 * @param expandEnd
 */
function toSemanticRange(range: RangeWithIndex, expandEnd: boolean = false): RangeWithIndex {
    return offsetRange(range, 0, 0, expandEnd ? 1 : 0);
}

/**
 * CAOS parser item walker that constructs semantic tokens
 */
export class SemanticTokensWalker implements ICaosContextListener {
    tokens: SemanticToken[] = [];
    protected readonly caosLib: Commands;
    private readonly checkCancelled: () => void;
    
    constructor(caosLib: Commands, cancellationToken?: CancellationToken) {
        this.caosLib = caosLib;
        this.checkCancelled = cancellationToken != null ? (() => {
            if (cancellationToken.isCancellationRequested) {
                throw new RequestCancelledException()
            }
        }) : (() => {
        });
    }
    
    onInt(token: ParserItem.IntVal) {
    }
    
    onBinary(token: ParserItem.BinaryVal) {
    }
    
    onChar(token: ParserItem.CharVal) {
    }
    
    onFloat(token: ParserItem.FloatVal) {
    }
    
    onByteString(token: ParserItem.ByteString) {
        // byte string needs context for colorization
        // Will be altered in onCommandCall
    }
    
    onC1eString(token: ParserItem.C1eStringVal) {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: SemanticTokensTypes.STRING_TOKEN,
            modifiers: [SemanticTokenModifiers.C1_STRING_MODIFIER_TOKEN]
        })
    }
    
    onC2eString(token: ParserItem.C2eStringVal) {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: SemanticTokensTypes.STRING_TOKEN,
            modifiers: [SemanticTokenModifiers.QUOTE_STRING_MODIFIER_TOKEN]
        })
    }
    
    onAnyString(token: ParserItem.C1eStringVal | ParserItem.C2eStringVal) {
    }
    
    onPictDimension(token: ParserItem.DdePictVal) {
        const tokenWithDescription: SemanticToken = {
            range: toSemanticRange(token.textRange),
            tokenType: SemanticTokensTypes.DDE_PICT_TOKEN,
            modifiers: [],
            description: "Pict Dimension" + token.value.first + "x" + token.value.second
        }
        this.tokens.push(tokenWithDescription)
    }
    
    onCommandToken(token: ParserItem.CommandToken) {
        this.checkCancelled();
    }
    
    onToken(token: ParserItem.TokenVal) {
    
    }
    
    onEqOp(token: ParserItem.EqOp) {
    
    }
    
    onEqJoin(token: ParserItem.EqJoin) {
        this.tokens.push({
            range: toSemanticRange(token.textRange),
            tokenType: SemanticTokensTypes.EQ_JOIN_TOKEN,
            modifiers: []
        })
    }
    
    onIndexedVar(token: ParserItem.IndexedVar) {
        let description: string;
        let modifier: string;
        switch (token.type.toUpperCase()) {
            case "VARX":
            case "VAXX":
                description = "Event variable";
                modifier = SemanticTokenModifiers.VAXX_MODIFIER_TOKEN
                break;
            case "OBVX":
            case "OVXX":
                description = "TARG object variable";
                modifier = SemanticTokenModifiers.OVXX_MODIFIER_TOKEN
                break;
            case "MVXX":
                description = "OWNR object variable";
                modifier = SemanticTokenModifiers.MVXX_MODIFIER_TOKEN
                break;
            default:
                throw Error("Unexpected variable type: '" + token.type + "' encountered");
        }
        pushToken(this.tokens, toSemanticRange(token.textRange), SemanticTokensTypes.VARIABLE_TOKEN, [modifier], formatCommandStringAsMarkdown(token.type, description));
    }
    
    onCommandCall(call: ICommandCall) {
        this.checkCancelled();
        addCommandTokenDecorations(this.tokens, call);
        addTokensFromCall(this.tokens, call);
        addBracketStringDecorations(this.tokens, call);
    }
    
    onPlaceholderText(token: ParserItem.AutocompleteHint) {
        pushToken(this.tokens, toSemanticRange(token.textRange), SemanticTokensTypes.PLACEHOLDER_TEXT, []);
    }
    
    onCaos2Comment(token: collectors.ParserItem<any>): void {
    }
    
    onComment(token: collectors.ParserItem<any>): void {
    }
}


/**
 * Gets the modifier tokens for a given value type
 * @param type
 */
function getTypeModifierTokens(type: number): string[] {
    switch (type) {
        case INT_TYPE_ID:
            return [
                // SemanticTokenModifiers.RETURNS_INT,
                SemanticTokenModifiers.RETURNS_NUMBER
            ]
        
        case FLOAT_TYPE_ID:
            return [
                // SemanticTokenModifiers.RETURNS_FLOAT,
                SemanticTokenModifiers.RETURNS_NUMBER
            ]
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
            ]
        default:
            return [];
    }
}

/**
 * Cached int token value for `new:`
 */
const NEW_TOK = tok('new:');

/**
 * List of control keywords
 */
const keywords = [
    tok('scrp'),
    tok('iscr'),
    tok('rscr'),
    tok('doif'),
    tok('elif'),
    tok('endi'),
    tok('reps'),
    tok('repe'),
    tok('loop'),
    tok('untl'),
    tok('ever'),
    tok('enum'),
    tok('etch'),
    tok('esee'),
    tok('epas'),
    tok('econ'),
    tok('next'),
    tok('escn'),
    tok('nscn'),
    tok('subr'),
    tok('retn'),
    tok('{eq}')
];


/**
 * Push semantic token information for a command's individual word tokens
 * @param tokens
 * @param context
 */
function addCommandTokenDecorations(tokens: SemanticToken[], context: ICommandCall) {
    context.tokenTextRange
    let commandDescription: Nullable<string> = null;
    const command = context.command;
    if (command == null) {
        return;
    }
    
    const token = command.command.length === 4 ? tok(command.command.toLowerCase()) : null;
    if (token != null && keywords.indexOf(token) >= 0) {
        return;
    }
    
    // commandDescription = formatCaosDocumentation(variant, command);
    const modifierTokens = (tok(command.command.substring(0, 4)) === NEW_TOK) ? [SemanticTokenModifiers.AGENT_CONSTRUCTOR] : getTypeModifierTokens(command.returnTypeId);
    const commandTypeDecoration = context.type === COMMAND_TYPE_ID ? SemanticTokensTypes.COMMAND_TOKEN : (context.type != VARIABLE_TYPE_ID ? SemanticTokensTypes.RVALUE_TOKEN : SemanticTokensTypes.LVALUE_TOKEN);
    switch (context.tokens.length) {
        case 3:
            pushToken(tokens, toSemanticRange(context.tokens[0].textRange!!), commandTypeDecoration, [SemanticTokenModifiers.COMMAND_PREFIX, ...modifierTokens], commandDescription);
            pushToken(tokens, toSemanticRange(context.tokens[1].textRange!!), commandTypeDecoration, modifierTokens, commandDescription);
            pushToken(tokens, toSemanticRange(context.tokens[2].textRange!!), commandTypeDecoration, [SemanticTokenModifiers.COMMAND_SUFFIX, ...modifierTokens], commandDescription);
            break;
        case 2:
            pushToken(tokens, toSemanticRange(context.tokens[0].textRange!!), commandTypeDecoration, [SemanticTokenModifiers.COMMAND_PREFIX, ...modifierTokens], commandDescription);
            pushToken(tokens, toSemanticRange(context.tokens[1].textRange!!), commandTypeDecoration, modifierTokens, commandDescription);
            break;
        case 1:
            pushToken(tokens, toSemanticRange(context.tokens[0].textRange!!), commandTypeDecoration, modifierTokens, commandDescription);
            break;
    }
}


/**
 * Decorate a bracket enclosed string, including by strings
 * @param tokens
 * @param call
 */
function addBracketStringDecorations(tokens: SemanticToken[], call: ICommandCall) {
    const stringParameters = call.command.parameters.filter((p) => {
        const type = p.typeId
        return type === BYTE_STRING_TYPE_ID || type === ANIMATION_TYPE_ID || type === C1_STRING_TYPE_ID
    });
    const args = call.arguments;
    for (let parameter of stringParameters) {
        if (args.length <= parameter.index) {
            continue;
        }
        const range = toSemanticRange(args[parameter.index]?.textRange);
        if (range == null) {
            continue;
        }
        if (parameter.typeId == C1_STRING_TYPE_ID) {
            tokens.push({
                range: range,
                tokenType: SemanticTokensTypes.STRING_TOKEN,
                modifiers: [SemanticTokenModifiers.C1_STRING_MODIFIER_TOKEN]
            })
        } else {
            tokens.push({
                range: range,
                tokenType: SemanticTokensTypes.STRING_TOKEN,
                modifiers: [SemanticTokenModifiers.BYTE_STRING_MODIFIER_TOKEN]
            })
        }
    }
}


/**
 * Adds semantic tokens to array for a command call
 * Pushes command word highlights as well as token arguments
 * @param tokens
 * @param call
 */
function addTokensFromCall(tokens: SemanticToken[], call: ICommandCall) {
    const tokenArguments = call.arguments.filter(p => p.type == TOKEN_TYPE_ID)
    if (tokenArguments.length == 0) {
        return;
    }
    for (let token of tokenArguments) {
        if (token?.parameter == null) {
            continue;
        }
        tokens.push({
            range: toSemanticRange(token.textRange),
            // Tokens in C1e can also be file names. These are represented as a string
            tokenType: token.parameter.name.toLowerCase()
                .startsWith('file') || token.parameter.name.startsWith('sprite') ?
                SemanticTokensTypes.STRING_TOKEN :
                SemanticTokensTypes.SUBROUTINE_NAME_TOKEN,
            modifiers: []
        })
    }
}

/**
 * Constructs and pushes a semantic token into the passed in semantic token array
 * @param allTokens
 * @param ctx the range of this semantic item
 * @param tag main token type
 * @param modifierTokens any semantic modifiers
 * @param description
 */
function pushToken(allTokens: SemanticToken[], ctx: RangeWithIndex, tag: string, modifierTokens: string[], description: Nullable<string> = null): boolean {
    if (ctx.start?.line == null || ctx.start?.character == null || ctx.end?.line == null || ctx.end?.character == null) {
        return false;
    }
    const token: SemanticToken = {
        range: ctx,
        tokenType: tag,
        modifiers: modifierTokens,
        description: description
    }
    allTokens.push(token);
    return true;
}


/**
 * Gets the semantic token for a token type name
 * @type {(type: string)=>number}
 */
function getType(type: string) {
    return SemanticTokensMap.legendMap[type];
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
            const modifierToken = SemanticTokensMap.modifierMap[modifier];
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
            continue;
        }
        const range: RangeWithIndex = token.range;
        
        let modifier = token.modifiers.length > 0 ? getModifier(token.modifiers) : 0;
        let tokenLength = range.endIndex - range.startIndex + 1;
        if (prevLine !== range.start.line) {
            prevChar = 0;
        }
        if (range.start.character < prevChar) {
            console.error("Tokens do not line up.");
        }
        // const offset = range.start.character + 1;
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
        
        const offset = start - prevChar;
        // Semantic token bytes = [line, startOffsetInLine, tokenLength, typeIndexInLegend, modifiers]
        data.push(
            // translate line to deltaLine
            range.start.line! - prevLine,
            // for the same line, translate start to deltaStart
            offset,
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
 * @param variant
 * @param text
 * @param cancellationToken
 * @param range
 */
export function getSemanticTokens(variant: GameVariant, text: string | ParseResult, cancellationToken?: CancellationToken, range?: Range): SemanticToken[] {
    const lib = getCommands(variant);
    if (lib == null) {
        throw new Error("CaosLibs is null with variant: " + variant);
    }
    const listener = new SemanticTokensWalker(lib, cancellationToken);
    let result: Nullable<ParseResult>;
    if (text instanceof ParseResult) {
        result = text;
    } else if (range != null) {
        result = parseCaosWithin(variant, text, range.start.line, range.start.character, range.end.line, range.end.character);
    } else {
        result = parseCaos(variant, text)
    }
    if (result == null) {
        throw new Error('Failed to parse CAOS for result');
    }
    try {
        walkParseResult(result, listener);
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
    })
}

/**
 * Gets the semantic tokens for a CAOS document
 * @param variant
 * @param text
 * @param cancellationToken
 * @param range
 */
export function getDocumentSemanticTokens(variant: GameVariant, text: string | ParseResult, cancellationToken?: CancellationToken, range?: Range): SemanticTokens {
    const tokens = getSemanticTokens(variant, text, cancellationToken, range);
    return <SemanticTokens>{
        data: convertContext(tokens!, range)
    };
}

export function getSemanticTokensLegend(): SemanticTokensLegend {
    return semanticLegend
}


/**
 * Information object for a semantic token
 */
export interface SemanticToken {
    /**
     * The range for this semantic token
     */
    range: RangeWithIndex;
    
    /**
     * The semantic token type
     */
    tokenType: string;
    
    /**
     * List of semantic token modifiers
     */
    modifiers: string[];
    
    /**
     * A description ( only used my Monaco )
     */
    description?: Nullable<string>;
}