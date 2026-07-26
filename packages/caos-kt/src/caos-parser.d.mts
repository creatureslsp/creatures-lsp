// noinspection JSUnusedGlobalSymbols,JSDeprecatedSymbols

import type {GameVariant, Nullable} from "./types.d.ts";

import type {
    BlockRange,
    Caos2Comment,
    CaosItem,
    CaosParserItem,
    CaosScript,
    CommandToken,
    EqOpVal,
    ErrorVal,
} from "./caos-core.mjs";
import type {CaosCommand, CaosParameter} from "./caos-libs.mjs";
import type {
    RangeWithIndex,
    TextWithRange,
} from "./common-ast-structs.d.ts";


export declare type CaosLike = CaosParseResult | string;

export declare type Argument = TextWithRange & CaosItem & {

    readonly textRange: RangeWithIndex;

    readonly parameterIndex: Nullable<number>;

    readonly typeId: number;

    readonly text: string;

    readonly inEqualityExpression: boolean;

    readonly parserItem: Nullable<CaosParserItem>;

    readonly containingCommand: Nullable<CommandReference>;

    readonly parserIndexStart: Nullable<number>;

    readonly parserIndexEnd: Nullable<number>;

}


export type CommandCall = Argument & {
    readonly type: number;
    readonly commandString: string;
    arguments: Argument[];
    tokenTextRange: RangeWithIndex;
    inVariant: boolean;
    textRange: RangeWithIndex;
    parameterIndex: number;
    inEqualityExpression: boolean,
    containingCommand?: Nullable<CommandReference>;
    tokens: Array<CommandToken>;
    callTypeId: number;
    expectType: number;
    readonly text: string;
}

export declare interface CommandReference {

    readonly command: CaosCommand;

    readonly commandString: string;

    readonly line: number;

    readonly column: number;

    readonly commandCallIndex: number;

}


export declare type CaosParseResult = {
    readonly variant: GameVariant;
    readonly originalText: string;
    readonly items: CaosParserItem[];
    readonly whitespaceItems: CaosParserItem[];
    readonly controlStatementErrors: ErrorVal[];
    readonly scripts: CaosScript[];
    readonly equalityStatements: EqualityStatement[];
    readonly equalityStatementRanges: RangeWithIndex[];
    readonly commandCalls: CommandCall[];
    readonly comments: Comment[];
    readonly caos2Comments: Caos2Comment[];
    readonly looseTokens: CaosParserItem[];
}

export declare type EqOp = {
    readonly eqOpToken: EqOpVal;
    readonly text: string;
    readonly textRange: RangeWithIndex;
    readonly parserIndexStart?: Nullable<number>;
    readonly parserIndexEnd?: Nullable<number>;
    readonly parameter?: Nullable<CaosParameter>;
    readonly parserItem?: Nullable<CaosParserItem>;
    readonly containingCommand?: Nullable<CommandReference>;
    readonly type: number;
    readonly inEqualityExpression: boolean;
}

export declare type EqualityStatement = {
    /**
     * The entire range of this equality statement
     */
    readonly textRange: RangeWithIndex,
    /**
     * The first/left side argument
     */
    readonly first: Nullable<Argument>,
    /**
     * The last/right side argument
     */
    readonly second: Nullable<Argument>,

    /**
     * The equality operator token
     */
    readonly eqToken: Nullable<EqOp>,

    readonly containingCommand?: Nullable<CommandReference>;

    readonly parameter: CaosParameter;

    readonly text: String;

    readonly type: number;

    readonly inEqualityExpression: boolean;

    readonly parserItem?: Nullable<CaosParserItem>;

    readonly arguments: Argument[]

    readonly parserIndexStart?: Nullable<number>;

    readonly parserIndexEnd?: Nullable<number>;

}


/**
 * Extract CAOS2Pray and CAOS2Cob comments
 * @param text CAOS Script
 */
export declare function getCaos2PrayComments(text: string): Caos2Comment[];

/**
 * Get CAOS parse result as an array of script scoped commands
 * @param parseResult
 */
export declare function getScriptsFromCaosParseResult(parseResult: CaosParseResult): CaosScript[];

/**
 * Get all whitespace in [text] as CAOS parser items
 * @param text
 */
export declare function getCaosWhitespace(text: string): CaosParserItem[];

/**
 * Gets all text indices where command only CAOS commands exist
 * This allows for recovery by skipping to the next command token that is
 *  guaranteed not to be in the middle of another command (if used properly).
 *
 * @param variant oneOf C1|C2|CV|C3|DS
 * @param text CAOS script text
 */
export declare function getCaosStops(variant: GameVariant, text: string): Int32Array;

/**
 * Gets the range of each CAOS script in the CAOS text.
 * @param text CAOS script text
 */
export declare function caosScriptOffsets(text: string): BlockRange[];

/**
 * Gets all scopes in scripts, scopes includes SCRP, ISCR, DOIF, ENUM, REPE, etc.
 * @param text CAOS script text
 */
export declare function caosScopeOffsets(text: string): BlockRange[];

/**
 * Takes raw parsed tokens array and converts them into commands and scripts.
 *
 * @param variant oneOf C1|C2|CV|C3|DS
 * @param text CAOS text
 * @param items raw parsed CAOS tokens
 * @param scriptOffsets offsets of scripts if known
 * @param checkErrors whether to check for control statement errors
 * @param checkDelay how often to check for a cancellation signal
 * @param keepGoing checks if parsing should continue or abort
 */
export declare function parseCaosTokens(
    variant: GameVariant,
    text: string,
    items: CaosParserItem[],
    scriptOffsets?: BlockRange[],
    checkErrors?: Nullable<boolean>,
    checkDelay?: Nullable<number>,
    keepGoing?: Nullable<() => boolean>
): CaosParseResult;

/**
 * Parses the smallest CAOS block possible using things like DOIF, REPE, ENUM block scopes.
 *
 * @param variant oneOf: C1|C2|CV|C3|DS
 * @param text raw CAOS text
 * @param line line to parse near
 * @param character character index on line to parse near
 * @param checkErrors whether to check for control statement errors
 * @param checkDelay how frequently to check for cancellation
 * @param keepGoing check to see if parsing should continue. Aborts on <b>false</b>
 */
export declare function parseCaosNear(variant: GameVariant, text: string, line: number, character: number, checkErrors?: Nullable<boolean>, checkDelay?: Nullable<number>, keepGoing?: Nullable<() => boolean>): CaosParseResult;

/**
 * Parse the smallest amount of CAOS around the start and end.
 * Start and end cannot be guaranteed by the parser to be a block scope,
 *  so scope may need to be enlarged.
 *
 * @param variant oneOf C1|C2|CV|C3|DS
 * @param text raw CAOS text
 * @param startLine
 * @param startCharacter
 * @param endLine
 * @param endCharacter
 * @param checkErrors whether to check for control statement errors
 * @param checkDelay how frequently to check for a cancellation
 * @param keepGoing check to see if parsing should continue. Aborts on <b>false</b>
 */
export declare function parseCaosWithin(variant: GameVariant, text: string, startLine: number, startCharacter: number, endLine: number, endCharacter: number, checkErrors?: Nullable<boolean>, checkDelay?: Nullable<number>, keepGoing?: Nullable<() => boolean>): CaosParseResult;

/**
 * Parses raw CAOS text into commands and scripts
 *
 * @param variant onOf C1|C2|CV|C3|DS
 * @param text raw CAOS text
 * @param keepGoing check to see if parsing should continue. Aborts on <b>false</b>
 */
export declare function parseCaos(variant: GameVariant, text: string, keepGoing?: Nullable<() => boolean>): any;


/**
 * Obtains the CAOS command definition for a given command call
 * @param variant game variant C1|C2|CV|C3|DS|SM
 * @param commandCall
 */
export declare function caosCommandDefinitionFromCommandCall(
    variant: GameVariant,
    commandCall: CommandCall,
): Nullable<CaosCommand>;

export declare abstract class CommandCallType {
    static readonly getInstance: () => CommandCallType;
    private constructor();
    get COMMAND(): number;
    get LVALUE(): number;
    get RVALUE(): number;
}