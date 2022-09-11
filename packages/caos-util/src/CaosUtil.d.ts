// noinspection JSUnusedGlobalSymbols

import ParserItem = collectors.ParserItem;
import CommandCall = collectors.CommandCall;
import CommandReference = collectors.CommandReference;
import {FormattingOptions, InlayHint} from "./server";
import ICaosParameter = libs.ICaosParameter;
import CommandToken = collectors.ParserItem.CommandToken;
import CaosValuesList = libs.CaosValuesList;
import {DocumentSymbol} from "vscode-languageserver-types";

/**
 * A spe
 */
interface Range {
    start: Position;
    end: Position;
}

/**
 * Represents an item with a specific range within the document
 */
interface HasRange {
    readonly textRange: RangeWithIndex;
}

/**
 * A range object that holds both line/character positions and the
 * absolute character index of the start and end in a file
 */
interface RangeWithIndex extends Range {
    startIndex: number;
    endIndex: number;
}


export interface Position {
    /**
     * Line position in a document (zero-based).
     */
    line: number;
    /**
     * Character offset on a line in a document (zero-based). Assuming that the line is
     * represented as a string, the `character` value represents the gap between the
     * `character` and `character + 1`.
     *
     * If the character value is greater than the line length it defaults back to the
     * line length.
     */
    character: number;
}

type Nullable<T> = T | null | undefined


type GameVariant = 'C1' | 'C2' | 'CV' | 'C3' | 'DS' | 'SM';

interface ICaosContextListener {
    onIndexedVar(token: ParserItem.IndexedVar): void;
    
    onInt(token: ParserItem.IntVal): void;
    
    onBinary(token: ParserItem.BinaryVal): void;
    
    onChar(token: ParserItem.CharVal): void;
    
    onFloat(token: ParserItem.FloatVal): void;
    
    onByteString(token: ParserItem.ByteString): void;
    
    onC1eString(token: ParserItem.C1eStringVal): void;
    
    onC2eString(token: ParserItem.C2eStringVal): void;
    
    onAnyString(token: ParserItem.C2eStringVal | ParserItem.C1eStringVal): void;
    
    onPictDimension(token: ParserItem.DdePictVal): void;
    
    onCommandToken(token: ParserItem.CommandToken): void;
    
    onToken(token: ParserItem.TokenVal): void;
    
    onEqOp(token: ParserItem.EqOp): void;
    
    onEqJoin(token: ParserItem.EqJoin): void;
    
    onCommandCall(call: CommandCall): void;
    
    onPlaceholderText(token: ParserItem.AutocompleteHint): void;
    
    onComment(token: collectors.ParserItem<any>): void;
    
    onCaos2Comment(token: collectors.ParserItem<any>): void;
}

/**
 * Data object with information about a specific command usage
 */
interface ICommandCall extends Argument {
    /**
     * The return type of this command
     */
    get type(): number
    
    /**
     * The command's command definition object
     */
    get command(): libs.ICaosCommand;
    
    /**
     * List of arguments for this command
     */
    get arguments(): Array<Argument>;
    
    /**
     * The range of the command tokens. This includes all command tokens in the call such as `new: simp`
     */
    get tokenTextRange(): RangeWithIndex;
    
    /**
     * Whether this command is valid in the variant context it was parsed with
     */
    get inVariant(): boolean;
    
    /**
     * The text range for this command call
     */
    get textRange(): RangeWithIndex;
    
    /**
     * The parser items for the command tokens used
     */
    get tokens(): ParserItem.CommandToken[]
    
    /**
     * Reference to the containing command if any
     */
    get containingCommand(): Nullable<CommandReference>;
    
    /**
     * Whether this command is used within an equality expression such as DOIF or DBG: ASRT
     */
    get inEqualityExpression(): boolean;
    
    /**
     * Its corresponding parameter definition if used within another command
     */
    get parameter(): Nullable<libs.ICaosParameter>;
    
    /**
     * Its root parser item
     */
    get parserItem(): Nullable<collectors.ParserItem<any>>;
    
    /**
     * Its actual text in the file
     */
    get text(): string;
}

/**
 * A pair of values
 */
interface Pair<T1, T2> {
    readonly first: T1
    readonly second: T2
}


/**
 * Information about what is happening in a CAOS file near a given position
 */
interface CursorData extends Position {
    /**
     * The command occurring at this position
     */
    readonly command: Nullable<libs.ICaosCommand>;
    
    /**
     * Which parameters are missing for the command at cursor position
     */
    readonly missing: libs.ICaosParameter[];
    
    /**
     * The closest parameter to the cursor position
     */
    readonly closestParameter: Nullable<ICaosParameter>;
    
    /**
     * Text of the closest parser item to the cursor
     */
    readonly beforeText: string;
    
    /**
     * The line number of the cursor
     */
    readonly lineNumber: number;
    
    /**
     * The column of the cursor
     */
    readonly column: number;
    
    /**
     * Any unused tokens that immediately proceed the cursor
     */
    readonly previousTokens: CommandToken[];
    
    /**
     * The closest parser item to the cursor
     */
    readonly closestItem: Nullable<ParserItem<any>>;
    
    /**
     * The values list if this cursor occurs within an EQ statement and there is a known list of values
     */
    readonly eqValuesList: Nullable<CaosValuesList>;
    
    /**
     * Whether the cursor is inside an equality statement
     */
    readonly inEqualityStatement: boolean;
}


export namespace collectors {
    function getCursorPosition(parseResult: collectors.ParseResult, lineNumber: number, character: number, incomplete: boolean): Nullable<server.CursorData>;
    class ClosestItemResult<T> {
        constructor(closest: T, previous: Array<collectors.ParserItem.CommandToken>);
        get closest(): T;
        get previous(): Array<collectors.ParserItem.CommandToken>;
    }
    function getCursorPositionFromRawText(variant: string, text: string, lineNumber: number, character: number, parseOnlyNear: Nullable<boolean>, incomplete: Nullable<boolean>, keepGoing: Nullable<() => boolean>): Nullable<server.CursorData>;
    function cancelComplete(closestItem: collectors.ParserItem<any /*UnknownType **/>, line: number, character: number): boolean;
    function inQuotes(closestItem: collectors.ParserItem<any /*UnknownType **/>, line: number, character: number): boolean;
    function getClosestItem<T extends HasRange>(
        inRangeItems: Array<T>,
        lineNumber: Int,
        character: Int,
        notAfter: Boolean,
): ClosestItemResult<T>|null|undefined;
}


interface Script {
    readonly key: Nullable<string>,
    readonly items: Array<collectors.ParserItem<any>>
    readonly textRange: RangeWithIndex
}

export namespace collectors {
    class BlockRange implements RangeWithIndex {
        get startToken(): Nullable<string>;
        
        get endToken(): Nullable<string>;
        
        get startIndex(): number;
        
        get endIndex(): number;
        
        get start(): Position
        
        get end(): Position
        
        get startTok(): Nullable<number>;
        
        get endTok(): Nullable<number>;
        
        get depth(): number;
    }
}

interface TextWithRange {
    readonly textRange: RangeWithIndex;
}


/**
 * Information about an argument within a command call
 * Includes information about its parameter definition, text range and containing command
 */
interface Argument extends TextWithRange {
    /**
     * The text range for this command call
     */
    get textRange(): RangeWithIndex;
    
    /**
     * Reference to the containing command if any
     */
    get containingCommand(): Nullable<collectors.CommandReference>;
    
    /**
     * Whether this command is used within an equality expression such as DOIF or DBG: ASRT
     */
    get inEqualityExpression(): boolean;
    
    /**
     * Its corresponding parameter definition if used within another command
     */
    get parameter(): Nullable<libs.ICaosParameter>;
    
    /**
     * Its root parser item
     */
    get parserItem(): Nullable<collectors.ParserItem<any>>;
    
    /**
     * Its actual text in the file
     */
    get text(): string;
    
    /**
     * The return type of this command
     */
    get type(): number
}

export namespace collectors {
    
    /**
     * Data object containing information about a parsed CAOS file
     */
    class ParseResult {
        /**
         * The variant used to parse the CAOS file
         */
        get variant(): GameVariant;
        
        /**
         * The original text passed into to the parser
         */
        get originalText(): string;
        
        /**
         * Array of all parser items.
         * This includes things like Int or string value objects
         * Command tokens are returned as individual tokens with no association between them
         */
        get items(): Array<collectors.ParserItem<any>>;
        
        /**
         * List of Error value objects found while parsing
         */
        get errors(): Array<collectors.ParserItem.ErrorVal>;
        
        /**
         * List of "script" objects which is just a text range and a parser item list
         */
        get scripts(): Array<Script>;
        
        /**
         * List of command calls. This includes both commands, r/l value commands.
         * Commands do not feature nesting or parent context objects
         */
        get commandCalls(): CommandCall[];
        
        /**
         * List of comments found inside the parsed CAOS file
         */
        get comments(): collectors.ParserItem<any>[];
        
        /**
         * List of CAOS2Pray comments found while parsing
         */
        get caos2Comments(): collectors.ParserItem<any>[];
        
        /**
         * Array of parser items that could not be associated with any commands
         */
        get looseTokens(): collectors.ParserItem<any>[];
        
        /**
         * List of equality statements found within the CAOS file.
         */
        get equalityStatements(): Array<collectors.EqualityStatement>;
        
    }
    
    
    /**
     * Data object with information about a specific command usage
     */
    class CommandCall implements Argument {
        /**
         * The return type of this command
         */
        get type(): number
        
        /**
         * The command's command definition object
         */
        get command(): libs.ICaosCommand;
        
        /**
         * List of arguments for this command
         */
        get arguments(): Array<Argument>;
        
        /**
         * The range of the command tokens. This includes all command tokens in the call such as `new: simp`
         */
        get tokenTextRange(): RangeWithIndex;
        
        /**
         * Whether this command is valid in the variant context it was parsed with
         */
        get inVariant(): boolean;
        
        /**
         * The text range for this command call
         */
        get textRange(): RangeWithIndex;
        
        /**
         * The parser items for the command tokens used
         */
        get tokens(): ParserItem.CommandToken[]
        
        /**
         * Reference to the containing command if any
         */
        get containingCommand(): Nullable<CommandReference>;
        
        /**
         * Whether this command is used within an equality expression such as DOIF or DBG: ASRT
         */
        get inEqualityExpression(): boolean;
        
        /**
         * Its corresponding parameter definition if used within another command
         */
        get parameter(): Nullable<libs.ICaosParameter>;
        
        /**
         * Its root parser item
         */
        get parserItem(): Nullable<collectors.ParserItem<any>>;
        
        /**
         * Its actual text in the file
         */
        get text(): string;
    }
    
    /**
     * A simple reference to another command
     */
    class CommandReference {
        /**
         * The CAOS command definition information
         */
        get command(): libs.ICaosCommand;
        
        /**
         * This command's command string, upper-case
         */
        get commandString(): string;
        
        /**
         * The line at which this command starts
         */
        get line(): number;
        
        /**
         * The column at which this command starts
         */
        get column(): number;
        
        /**
         * The index into the ParserResult.commandCalls array that this referenced command is found
         */
        get commandCallIndex(): number;
    }
    
    
    /**
     * Represents an equality statement within the CAOS file
     */
    class EqualityStatement implements HasRange {
        /**
         * The range of this entire equality statement
         */
        get textRange(): RangeWithIndex;
        
        /**
         * The first/left side argument in this equality statement
         */
        get first(): Argument;
        
        /**
         * The equality statement token i.e `eq`, `ne`, `=`, `<>`
         */
        get eqToken(): ParserItem.EqOp
        
        /**
         * The last/right side argument
         */
        get second(): Argument;
    }
}
export namespace collectors {
    
    /**
     * Gets text range information for all scripts contained within a CAOS file
     * @param text
     */
    function scriptOffsets(text: string): Array<collectors.BlockRange>;
    
    /**
     *  Gets all scripts from a parser result
     */
    function getScriptsFromParseResult(parseResult: ParseResult): Script[];
    
    
    /**
     * Parses a CAOS file in its entirety
     * @param variant [C1.C2,CV,C3,DS]
     * @param text
     * @param keepGoing return false to stop parsing early
     */
    function parseCaos(variant: GameVariant, text: string, keepGoing?: () => boolean): collectors.ParseResult;
    
    /**
     * Tries to parse the smallest portion of a CAOS file around a single line and character
     * @param variant [C1,C2,CV,C3,DS]
     * @param text
     * @param line The line number of
     * @param character the starting character index on the line specified
     * @param checkErrors Whether to check for errors when parsing near
     * @param checkDelay The number of commands to parse before checking if operation should be cancelled
     * @param keepGoing return false to stop parsing early
     */
    function parseCaosNear(
        variant: GameVariant,
        text: string,
        line: number,
        character: number,
        checkErrors?: Nullable<boolean>,
        checkDelay?: Nullable<Int> = null,
        keepGoing?: Nullable<() => boolean>
    ): collectors.ParseResult;
    
    /**
     * Parses CAOS within a given region.
     * Region is expanded to contain complete control statements
     * @param variant [C1.C2,CV,C3,DS]
     * @param text
     * @param startLine
     * @param startCharacter
     * @param endLine
     * @param endCharacter
     * @param keepGoing return false to stop parsing early
     */
    function parseCaosWithin(
        variant: GameVariant,
        text: string,
        startLine: number,
        startCharacter: number,
        endLine: number,
        endCharacter: number,
        keepGoing?: () => boolean
    ): collectors.ParseResult;
    
    function parseTokens(
        variant: string,
        text: string,
        items: ParserItem<any>[],
        scriptOffsets?: collectors.BlockRange[],
        checkErrors?: Nullable<boolean>,
        checkDelay?: Nullable<number>,
        keepGoing?: Nullable<() => boolean>
    ): collectors.ParseResult;
    
    
    /**
     * Gets all CAOS2Pray comments in a given CAOS document
     * @param text
     */
    function getCaos2PrayComments(text: String): Array<ParserItem.Caos2Comment>
    
    /**
     * Collect all errors inside a CAOS file
     * @param variant
     * @param text
     */
    function collectErrors(variant: GameVariant, text: string): Array<collectors.ParserItem.ErrorVal>;
}
export namespace collectors {
    
    /**
     * The smallest unit in a Parsed CAOS file
     * These items **do not** serialize to JSON
     */
    abstract class ParserItem<T> implements HasRange {
        protected constructor();
        
        /**
         * The actual text of this item
         */
        abstract readonly text: string;
        
        /**
         * This item's position and range within a CAOS file
         */
        abstract readonly textRange: RangeWithIndex;
        
        /**
         * The interpreted value of the original text
         */
        abstract readonly value: T;
        
        /**
         * The actual type of this value
         * As some values have a meaning in CAOS that is different from how the parser sees it
         * Example is a char's actual type is an Int (as that is how the game sees it),
         * but its token type is an CHAR
         */
        abstract readonly actualType: number;
        
        /**
         * The token as seen from the parser
         * Not to be confused with actual type which is an id of its interpreted value
         * @see actualType
         */
        abstract readonly typeToken: number;
        
        /**
         * Checks for equality between this parser item and another object
         * @param other
         */
        abstract equals(other: any): boolean;
    }
    
    namespace ParserItem {
        
        /**
         * Float literal parser item
         */
        class FloatVal extends collectors.ParserItem<number> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: number;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * Represents an int literal
         */
        class IntVal extends collectors.ParserItem<number> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: number;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * A char value and its interpreted int value
         */
        class CharVal extends collectors.ParserItem<number> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: number;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * A binary string, with its evaluated int value
         */
        class BinaryVal extends collectors.ParserItem<number> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: number;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * A byte-string for things like animation
         */
        class ByteString extends collectors.ParserItem<string> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * C2e style quoted string
         */
        class C2eStringVal extends collectors.ParserItem<string> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * C1e Bracket style strings `[Hello Panda]`
         */
        class C1eStringVal extends collectors.ParserItem<string> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * Token value for things like subroutine names and file names in C1e
         */
        class TokenVal extends collectors.ParserItem<string> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * Equality join token i.e. `and` | `or`
         */
        class EqJoin extends collectors.ParserItem<string> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * Equality operator i.e. `eq` or `<>`
         */
        class EqOp extends collectors.ParserItem<string> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * DDE: Pict 3 character value
         * Parses the characters to their numeric dimension
         */
        class DdePictVal extends collectors.ParserItem<Pair<number, number>> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: Pair<number, number>;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
            
        }
        
        /**
         * A token that could not be matched
         */
        class ErrorVal extends collectors.ParserItem<string> {
            
            /**
             * The error message for this error token
             */
            readonly message: string;
            
            /**
             * The internal error code for this item
             */
            readonly type: number
            
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * An indexed variable i.e. va08
         */
        class IndexedVar extends collectors.ParserItem<string> {
            
            /**
             * The type of variable VAxx, MVxx, OBVx
             */
            readonly type: string;
            
            /**
             * The numeric index for this variable (i.e. `2` for `va02`
             */
            readonly index: number;
            
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * A single command word token
         */
        class CommandToken extends collectors.ParserItem<string> {
            
            /**
             * This command word as an 32-bit uint
             */
            readonly token: number;
            
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * Completion hint as found in VS-Code
         * @internal
         */
        class AutocompleteHint extends collectors.ParserItem<string> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * Represents a single line comment in a CAOS file
         */
        class Comment extends collectors.ParserItem<string> {
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
        
        /**
         * Represents a single CAOS2Pray comment
         */
        class Caos2Comment extends collectors.ParserItem<string> {
            
            /**
             * Whether this CAOS2Pray comment is a tag
             */
            get isTag(): boolean;
            
            /**
             * The tag name if this is a CAOS2Pray tag
             */
            get tag(): Nullable<string>;
            
            /**
             * The command name if this is a CAOS2Pray command
             */
            get command(): Nullable<string>;
            
            /**
             * The list of values for this command or tag
             */
            get valuesAsStrings(): string[];
    
            /**
             * The CAOS2Pray Comment's values' parser items
             */
            get values(): ParserItem<any>[]
            
            /**
             * Gets the value as an int if possible
             */
            get intValue(): Nullable<number>;
            
            /**
             * @inheritDoc
             */
            readonly text: string;
            
            /**
             * @inheritDoc
             */
            readonly textRange: RangeWithIndex;
            
            /**
             * @inheritDoc
             */
            readonly value: string;
            
            /**
             * @inheritDoc
             */
            readonly actualType: number;
            
            /**
             * @inheritDoc
             */
            readonly typeToken: number;
            
            /**
             * @inheritDoc
             */
            equals(other: any): boolean;
        }
    }
}
export namespace libs {
    
    /**
     * Documentation object for a CAOS command
     * Documentation is specific to a CAOS variant (i.e. C1, C2, etc)
     */
    class ICaosCommand {
        /**
         * The command as an uppercase string
         */
        readonly command: string;
        
        /**
         * List of parameters with their associated documentation
         */
        readonly parameters: Array<libs.ICaosParameter>;
        
        /**
         * Whether this command functions as an LValue
         */
        readonly isLvalue: boolean;
        
        /**
         * Whether this command functions as an RValue
         */
        readonly isRvalue: boolean;
        
        /**
         * Whether this command is simply a block level command (i.e. Not an r/lvalue)
         */
        readonly isCommand: boolean;
        
        /**
         * The return type as a number if any
         */
        readonly returnTypeId: number;
        
        /**
         * Value list of known values for the returned value
         */
        readonly returnValuesListIds?: Nullable<{
            [variant in GameVariant]?: Nullable<number>;
        }>
        
        /**
         * The name for the return type (i.e. integer, [string], "string", float)
         */
        readonly returnTypeName: string;
        
        /**
         * What variants this particular version of the command is valid for
         */
        readonly variants: Array<string>;
        
        /**
         * A description of this command and what it does
         */
        readonly description: Nullable<string>;
    }
    
    /**
     * Documentation object for a CAOS command parameter
     */
    class ICaosParameter {
        
        /**
         * This parameter's index in its parent command call
         */
        get index(): number;
        
        /**
         * The name of this parameter as found in the documentation
         */
        get name(): string;
        
        /**
         * Internal value type id
         */
        get typeId(): number;
        
        /**
         * The parameter type as a "string", float, integer, etc.
         * To differentiate between C1e and C2e strings, the return type will be [string] or "string" respectively
         */
        get type(): string;
        
        /**
         * Internal id for a value list
         */
        get valuesListId(): Nullable<number>;
        
        /**
         * The human-readable name for this parameters known values list
         */
        get valuesListName(): Nullable<string>;
    }
    
}
export namespace libs {
    
    /**
     * A representation of a list of known values for a given property
     * i.e. Chemicals for `CHEM` calls
     */
    class CaosValuesList {
        /**
         * The unofficial name of this value list
         */
        get name(): string;
        
        /**
         * All known values as libs.ValuesListValue(s)
         */
        get values(): Array<libs.ValuesListValue>;
        
        /**
         * A short description of what this values list represents.
         * Mostly empty
         */
        get description(): Nullable<string>;
        
        /**
         * The base values list value this list extends
         * NOTE: usually null or "bool"
         */
        get extensionType(): Nullable<string>;
        
        /**
         * Tries to find the ValueListValue for a given string
         * @param key
         */
        getValueWithString(key: string): Nullable<libs.ValuesListValue>;
        
        /**
         * Tries to find the ValueListValue for a given int
         * @param key
         */
        getValueWithInt(key: number): Nullable<libs.ValuesListValue>;
        
        /**
         * Gets a list of value list value objects matching the bitflag
         * @param bitFlag
         */
        getWithBitFlags(bitFlag: number): Nullable<Array<libs.ValuesListValue>>;
        
        /**
         * Whether this values list values represent bitflags
         */
        get bitflag(): boolean;
    }
    
    /**
     * A known value within a value list
     */
    class ValuesListValue {
        /**
         * The literal value for this list item
         */
        get value(): string;
        
        /**
         * The human-readable name of what the value represents
         * I.e. Protein, Oxygen, Arsenic
         */
        get name(): string;
        
        /**
         * A description if any for this named value
         */
        get description(): Nullable<string>;
        
        /**
         * The literal value as an int if possible
         */
        get intValue(): Nullable<number>;
        
        /**
         * Whether value checks should match any value except for this.value
         */
        get negatedValue(): boolean;
        
        /**
         * Whether checks for value should match anything greater than this.value
         */
        get greaterThanValue(): boolean;
    }
    
    /**
     * List of all commands for a variant by type
     */
    class Commands {
        /**
         * Block level commands (commands without parent calls)
         */
        readonly commands: Array<libs.ICaosCommand>;
        /**
         * Commands that can be used as rvalues (i.e. anything that needs an actual value)
         */
        readonly rvalues: Array<libs.ICaosCommand>;
        /**
         * Commands that can be used as lvalues (i.e. anywhere that needs to store a value)
         */
        readonly lvalues: Array<libs.ICaosCommand>;
    }
}

export namespace hints {
    
    /**
     * Get hint options, or setting names to check for disabled
     */
    function getInlayOptions(): string[];
    
    /**
     * Get Inlay hints for a parsed CAOS file
     * @param parseResult parsed CAOS file
     * @param disabled List of inlay hint option keys to suppress output from
     * @param folds Folding regions as defined in Text
     * @param minParameters filter out inlay hints with less than this number of parameters
     */
    function getInlayHints(
        parseResult: collectors.ParseResult,
        disabled: string[],
        folds: Range[],
        minParameters?: Nullable<number>
    ): InlayHint[]
}

export namespace hints {
    /**
     * Gets the CAOS scope symbols from a parser result
     * @param parserResult
     * @param addDoifLikeStatements add control statements like DOIF, REPS, LOOP
     */
    function getDocumentSymbols(parserResult: ParseResult, addDoifLikeStatements?: boolean): DocumentSymbol[]
    
    /**
     * Gets the CAOS scope symbols for a given CAOS document
     * @param variant [C1,C2,CV,C3,DS]
     * @param text the document text
     * @param addDoifLikeStatements add control statements like DOIF, REPS, LOOP
     */
    function getDocumentSymbolsFromText(variant: string, text: string, addDoifLikeStatements: boolean): Array<server.DocumentSymbol>;
}

export namespace libs {
    /**
     * Gets a value list by its internal id number
     * @param id
     */
    function getValuesList(id: number): Nullable<libs.CaosValuesList>;
    
    /**
     * Gets the human-readable name for an internal type id
     * @param value
     */
    function getValueTypeName(value: number): Nullable<string>;
    
    /**
     * Gets a command definitions object for a given variant
     * @param variant
     */
    function getCommandsForLib(variant: GameVariant): libs.Commands;
}

// export namespace server {
//     import ParseResult = collectors.ParseResult;
//
//     /**
//      * Get data related to the current cursor position including enclosing command
//      * @param variant game variant [C1,C2,CV,C3,DS]
//      * @param text the full document text
//      * @param line the line number of cursor
//      * @param character column of cursor
//      * @param incomplete whether to search for incomplete commands near, or simply the nearest command call
//      * @param parseNearOnly whether to use nearness parse to get cursor data
//      */
//     function getCursorDataInDocument(
//         variant: GameVariant,
//         text: string,
//         line: number,
//         character: number,
//         incomplete?: boolean,
//         parseNearOnly?: boolean
//     ): CursorData
//
//     /**
//      * Finds information about what is happening near the cursor
//      * @param parseResult
//      * @param lineNumber
//      * @param column
//      * @param incomplete
//      * @param offsetIndex
//      */
//     function getCursorDataInParseResult(
//         parseResult: ParseResult,
//         lineNumber: number,
//         column: number,
//         incomplete: boolean,
//         offsetIndex?: number
//     ): CursorData
//
// }

type MessageType = 'error' | 'warning' | 'info';

type CancellationToken = {
    /**
     * Is `true` when the token has been cancelled, `false` otherwise.
     */
    readonly isCancellationRequested: boolean;
}

/**
 * Formatting commands
 */
export namespace formatter {
    
    /**
     * Format a CAOS string using the given formatting options
     * @param variant Game variant [C1,C2,CV,C3,DS]
     * @param text the document text
     * @param options the options to use when formatting
     */
    function format(variant: string, text: string, options: Nullable<formatter.CaosFormatterOptions>): formatter.FormatResult;
    
}

/**
 * Formatting Objects/Classes
 */
export namespace formatter {
    
    /**
     * The result of a CAOS format call
     */
    class FormatResult {
        get formattedText(): string;
        get oldText(): string;
    }
    
    /**
     * Options used in formatting
     */
    interface CaosFormatterOptions extends FormattingOptions {
        /**
         * The size of each tab
         * If using spaces, this is the number of spaces
         */
        readonly tabSize: number;
        
        /**
         * Whether to prefer spaces to tabs
         * If tabSize is set to 4, and insertSpaces is true. 4 spaces will be inserted for each indent needed
         */
        readonly insertSpaces: boolean;
        
        /**
         * Whether to trim trailing whitespace after format
         * @default false
         */
        readonly trimTrailingWhitespace?: Nullable<boolean>;
        
        /**
         * Whether to insert a final new line character after indent
         * @default false
         */
        readonly insertFinalNewline?: Nullable<boolean>;
    
        /**
         * Trim all newlines after the final newline at the end of the file.
         */
        readonly trimFinalNewlines?: Nullable<boolean>;
    
        /**
         * Whether to keep inline commands on the same line or move them to the next
         */
        readonly keepSameLine?: Nullable<boolean>;
    
        /**
         * The maximum number of blank lines to allow between character
         * If there is a conflict between this an minNewLines, maxNewLines wins
         */
        readonly maxBlankLines?: Nullable<number>;
    
        /**
         * The minimum number of blank lines to have between commands
         * If minBlankLines > maxBlankLines, maxBlankLines wins
         */
        readonly minBlankLines?: Nullable<number>;
    
        /**
         * Whether to re-indent comments or leave them alone
         */
        readonly indentComments?: Nullable<boolean>;
        
        /**
         * The number of spaces to use for a continuation indent. This respects the prefersSpaces attribute
         */
        readonly continuationIndent?: Nullable<number>;
        
        /**
         * Whether to add a space between numbers and brackets in a byte-string `[ 1 2 3 ]` or `[1 2 3]`
         */
        readonly spaceBetweenByteStingBrackets?: Nullable<boolean>;
        
        /**
         * Whether to enforce the minimum blank lines rule after a comment
         * If false, no blank lines are required after a comment
         */
        readonly forceMinBlankLinesAfterComments?: Nullable<boolean>;
    }
    
    /**
     * Exception for when formatting fails
     */
    class FormatException extends exceptions.CaosException {
        constructor(message: string, throwable: Nullable<Error>);
    }
}

export namespace server {
    interface DocumentSymbol {
        /**
         * Display name for symbol
         */
        readonly name: string;
        /**
         * An additional descriptor
         */
        readonly detail: Nullable<string>;
        /**
         * The kind of symbol it is
         */
        readonly kind: number;
        /**
         * Symbol modifier tags (at the moment only tag is deprecated)
         */
        readonly tags: Array<number>;
        /**
         * The range of this entire element
         * i.e. The entire function (header and body)
         */
        readonly range: Range;
        /**
         * The range to select for the symbol
         * i.e. The function name
         */
        readonly selectionRange: Range;
        /**
         * Any symbol children contained within this symbol's range
         */
        readonly children: Array<DocumentSymbol>;
    }
}

export as namespace CaosValidator;