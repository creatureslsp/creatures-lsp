// noinspection JSUnusedGlobalSymbols

import CommandToken = ParserItem.CommandToken;
// Export logging commands

import {DocumentSymbol, InlayHint} from "vscode-languageserver-types";
import {Nullable} from "@bedalton/extension-util";
export * from "./bedalton.log";
export {
    HasRange,
    ITuple,
} from "@bedalton/extension-util"

export type GameVariant = 'C1' | 'C2' | 'CV' | 'C3' | 'DS' | 'SM';

declare const __doNotImplementIt: unique symbol
export type __doNotImplementIt = typeof __doNotImplementIt


export type MessageType = 'error' | 'warning' | 'info';


// export namespace com.bedalton.creatures.caos.collectors {
export type CollectorsApi = {
    
    cancelComplete(closestItem: IParserItem<any>, line: number, character: number): boolean;
    
    collectErrors(variant: GameVariant, text: string): Array<ParserItem.ErrorVal>;
    
    getCaos2PrayComments(text: string): Array<ParserItem.Caos2Comment>;
    
    getClosestItem<T>(
        inRangeItems: T[],
        lineNumber: number,
        character: number,
        notAfter: boolean
    ): ClosestItemResult<T>;
    
    getCursorPosition(
        parseResult: ParseResult,
        lineNumber: number,
        character: number,
        incomplete: boolean
    ): CursorData;
    
    getCursorPositionFromRawText(
        variant: GameVariant,
        text: string,
        lineNumber: number,
        column: number,
        parseOnlyNear?: boolean,
        incomplete?: boolean,
        keepGoing?: () => boolean
    ): CursorData;
    
    getScriptsFromParseResult(parseResult: ParseResult): Array<Script>;
    
    getStops(variant: GameVariant, text: string): number[];
    
    getWhitespace(text: string): Array<IParserItem<any>>;
    
    inQuotes(closestItem: IParserItem<any>, line: number, character: number): boolean;
    
    parseCaos(variant: GameVariant, text: string, keepGoing?: Nullable<() => boolean>): ParseResult;
    
    parseCaosNear(variant: GameVariant, text: string, line: number, character: number, checkErrors?: Nullable<boolean>, checkDelay?: Nullable<number>, keepGoing?: Nullable<() => boolean>): ParseResult;
    
    parseCaosWithin(variant: GameVariant, text: string, startLine: number, startCharacter: number, endLine: number, endCharacter: number, checkErrors?: Nullable<boolean>, checkDelay?: Nullable<number>, keepGoing?: Nullable<() => boolean>): ParseResult;
    
    parseTokens(variant: GameVariant, text: string, items: IParserItem<any>[], scriptOffsets?: Array<BlockRange>, checkErrors?: Nullable<boolean>, checkDelay?: Nullable<number>, keepGoing?: Nullable<() => boolean>): ParseResult;
    
    scopeOffsets(text: string): Array<BlockRange>;
    
    scriptOffsets(text: string): Array<BlockRange>;
}

export const collectors: CollectorsApi;


export type LibsApi = {
    
    getAllValuesLists(variant: GameVariant): CaosValuesList[];
    
    getCommandsForLib(variant: GameVariant): Commands;
    
    getValuesList(id: number): Nullable<CaosValuesList>;
    
    getValueTypeName(typeId: number): Nullable<string>;
    
}

export const libs: LibsApi;

// export namespace com.bedalton.creatures.caos.hints {
export type HintsApi = {
    
    getInlayOptions(): Array<string>;
    
    getInlayHints(parseResult: ParseResult, disabled: Array<string>, folds: Array<Range>, minimumParameterCount?: Nullable<number>): Array<InlayHint>;
    
    getDocumentSymbolsFromText(variant: GameVariant, text: string, addDoifLikeStatements?: boolean): Array<DocumentSymbol>;
    
    getDocumentSymbols(parserResult: ParseResult, addDoifLikeStatements?: boolean): Array<DocumentSymbol>;
    
}

export const hints: HintsApi;

export type FormatterApi = {
    format(variant: GameVariant, text: string, options?: Nullable<CaosFormatterOptions>): FormatResult;
}

export const formatter: FormatterApi;

export type ServerApi = {
    inRange(range: Nullable<RangeWithIndex>, lineNumber: number, column: number, ignoreColumn?: boolean, soft?: boolean): boolean;
}

export const server: ServerApi;


export interface Argument implements TextWithRange, CaosItem {
    
    readonly textRange: RangeWithIndex;
    
    readonly parameter: Nullable<ICaosParameter>;
    
    readonly type: number;
    
    readonly text: string;
    
    readonly inEqualityExpression: boolean;
    
    readonly parserItem: Nullable<IParserItem<any>>;
    
    readonly containingCommand: Nullable<CommandReference>;
    
    readonly parserIndexStart: Nullable<number>;
    
    readonly parserIndexEnd: Nullable<number>;
    
}

export interface CaosItem extends TextWithRange {
    readonly textRange: RangeWithIndex;
}

export interface CursorData extends Position {
    
    readonly command: Nullable<ICaosCommand>;
    
    readonly missing: Array<ICaosParameter>;
    
    readonly closestParameter: Nullable<ICaosParameter>;
    
    readonly beforeText: Nullable<string>;
    
    readonly line: number;
    
    readonly character: number;
    
    readonly previousTokens: Array<ParserItem.CommandToken>;
    
    readonly closestItem: Nullable<IParserItem<any>>;
    
    readonly eqValuesList: Nullable<CaosValuesList>;
    
    readonly inEqualityStatement: boolean;
    
}

export interface CaosFormatterOptions {
    
    readonly tabSize: number;
    
    readonly insertSpaces: boolean;
    
    readonly trimTrailingWhitespace: Nullable<boolean>;
    
    readonly insertFinalNewline: Nullable<boolean>;
    
    readonly trimFinalNewlines: Nullable<boolean>;
    
    readonly keepSameLine: Nullable<boolean>;
    
    readonly maxBlankLines: Nullable<number>;
    
    readonly indentComments: Nullable<boolean>;
    
    readonly continuationIndent: Nullable<number>;
    
    readonly spaceBetweenByteStingBrackets: Nullable<boolean>;
    
    readonly minBlankLines: Nullable<number>;
    
    readonly newLineChar: Nullable<string>;
    
    readonly forceMinBlankLinesAfterComments: Nullable<boolean>;
    
}

export interface ParseResult {
    
    readonly variant: GameVariant;
    
    readonly originalText: string;
    
    readonly items: Array<IParserItem<any>>;
    
    readonly errors: Array<ParserItem.ErrorVal>;
    
    readonly scripts: Array<Script>;
    
    readonly equalityStatements: Array<EqualityStatement>;
    
    readonly equalityStatementRanges: Array<RangeWithIndex>;
    
    readonly commandCalls: Array<CommandCall>;
    
    readonly comments: Array<ParserItem.Comment>;
    
    readonly caos2Comments: Array<ParserItem.Caos2Comment>;
    
    readonly looseTokens: Array<IParserItem<CommandToken>>;
}

export interface ICaosContextListener {
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
    
    onComment(token: ParserItem.Comment): void
    
    onCaos2Comment(token: ParserItem.Caos2Comment): void;
}

export interface DateComponents {
    readonly year: number;
    
    readonly  monthZeroIndexed: number;
    
    readonly  day: number;
    
    readonly  hour: Nullable<number>;
    
    readonly  minute: Nullable<number>;
    
    readonly  seconds: Nullable<number>;
    
    readonly unix: Nullable<number>;
}

export interface BlockRange extends RangeWithIndex {
    
    readonly startToken: Nullable<string>;
    
    readonly endToken: Nullable<string>;
    
    readonly startIndex: number;
    
    readonly endIndex: number;
    
    readonly start: Position;
    
    readonly end: Position;
    
    readonly parserIndex: Nullable<number>;
    
    readonly depth: number;
    
    readonly startTok: Nullable<number>;
    
    readonly endTok: Nullable<number>;
    
}

export interface CommandCall extends HasRange, Argument, CaosItem {
    readonly type: number;
    
    readonly command: ICaosCommand;
    
    readonly commandArguments: Array<Argument>;
    
    readonly tokenTextRange: RangeWithIndex;
    
    readonly inVariant: boolean;
    
    readonly textRange: RangeWithIndex;
    
    readonly parameter: Nullable<ICaosParameter>;
    
    readonly inEqualityExpression: boolean;
    
    readonly containingCommand: Nullable<CommandReference>;
    
    readonly tokens: Array<ParserItem.CommandToken>;
    
    readonly callType: any/* com.bedalton.creatures.caos.libs.CommandType */
    ;
    
    readonly callTypeId: number;
    
    readonly parameterCount: number;
    
    // readonly endIndex: number;
    //
    // readonly lineNumber: number;
    //
    // readonly startIndex: number;
    //
    // readonly isRvalue: boolean;
    //
    // readonly isLvalue: boolean;
    //
    // readonly isCommand: boolean;
    //
    // readonly parserItem: ParserItem.CompoundCommandToken;
    //
    // readonly text: string;
    //
    // readonly commandString: string;
    //
    // readonly parserIndexStart: Nullable<number>;
    
    readonly parserIndexEnd: Nullable<number>;
}

export interface CommandReference {
    
    readonly command: ICaosCommand;
    
    readonly commandString: string;
    
    readonly line: number;
    
    readonly column: number;
    
    readonly commandCallIndex: number;
    
}

export interface EqualityStatement extends Argument {
    
    readonly lineNumber: number;
    
    readonly startIndex: number;
    
    readonly endIndex: number;
    
    readonly textRange: RangeWithIndex;
    
    readonly first: Nullable<Argument>;
    
    readonly second: Nullable<Argument>;
    
    readonly eqToken: Nullable<ParserItem.EqOp>;
    
    readonly containingCommand: Nullable<CommandReference>;
    
    readonly parameter: ICaosParameter;
    
    readonly type: number;
    
    readonly text: string;
    
    readonly inEqualityExpression: boolean;
    
    readonly parserItem: Nullable<IParserItem<any /*UnknownType **/>>;
    
    readonly parserIndexStart: Nullable<number>;
    
    readonly parserIndexEnd: Nullable<number>;
    
}

export interface Script {
    
    readonly commandString: Nullable<string>;
    
    readonly items: Array<IParserItem<any>>;
    
    readonly textRange: RangeWithIndex;
    
    readonly endIndex: number;
    
    readonly lineNumber: number;
    
    readonly startIndex: number;
    
    readonly key: Nullable<string>;
    
    readonly blockRange: BlockRange;
    
}

export interface IParserItem<T> extends ParseTreeItem<T>, CaosItem {
    
    readonly textRange: RangeWithIndex;
    
    readonly endIndex: number;
    
    readonly lineNumber: number;
    
    readonly startIndex: number;
    
    readonly value: T;
    
    readonly actualType: number;
    
    readonly typeToken: number;
    
    readonly parserIndexEnd: Nullable<number>;
    
    readonly parserIndexStart: Nullable<number>;
    
    readonly text: string;
}

export namespace ParserItem {
    interface FloatVal extends IParserItem<number> {
        
        readonly textRange: RangeWithIndex;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
        readonly value: number;
        
    }
    
    interface IntVal extends IParserItem<number> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: number;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface CharVal extends IParserItem<number> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: number;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface BinaryVal extends IParserItem<any/* kotlin.Long */> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: number;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface ByteString extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface C2eStringVal extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface C1eStringVal extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface TokenVal extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface EqJoin extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface EqOp extends IParserItem<string>, Argument {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
        readonly text: string;
        
        readonly parameter: ICaosParameter;
        
        readonly type: number;
        
        readonly inEqualityExpression: boolean;
        
        readonly parserItem: IParserItem<any>;
        
        readonly containingCommand: Nullable<CommandReference>;
        
    }
    
    interface DdePictVal extends IParserItem<ITuple<number, number>> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: ITuple<number, number>
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface ErrorVal extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly message: string;
        
        readonly type: number;
        
        readonly value: string;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface IndexedVar extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly indexedVarType: string;
        
        readonly index: number;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface AutocompleteHint extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface Comment extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
    }
    
    interface Caos2Comment extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly token: ParserItem.TokenVal;
        
        readonly values: IParserItem<any>[];
        
        readonly eq: Nullable<ParserItem.TokenVal>;
        
        readonly caos2Hash: Nullable<ParserItem.TokenVal>;
        
        readonly value: string;
        
        readonly parserIndexEnd: Nullable<number>;
        
        readonly valuesAsStrings: Array<string>;
        
        readonly typeToken: number;
        
        readonly actualType: number;
        
        readonly isTag: boolean;
        
        readonly tag: Nullable<string>;
        
        readonly command: Nullable<string>;
        
        readonly intValue: Nullable<number>;
        
    }
    
    interface CommandToken extends IParserItem<string> {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly actualType: number;
        
        readonly token: number;
        
        readonly typeToken: number;
        
    }
    
    interface CompoundCommandToken extends IParserItem<string> {
        
        readonly actualType: number;
        
        readonly tokens: Array<ParserItem.CommandToken>;
        
        readonly textRange: RangeWithIndex;
        
        readonly parserIndexEnd: Nullable<number>;
        
        readonly value: string;
        
        readonly typeToken: number;
        
    }
    
    interface WhitespaceItem extends IParserItem<string> {
    }
    
    interface NewLine extends WhitespaceItem {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly lines: number;
        
        readonly actualType: number;
        
        readonly typeToken: number;
        
    }
    
    interface Spaces extends WhitespaceItem {
        
        readonly textRange: RangeWithIndex;
        
        readonly value: string;
        
        readonly actualType: number;
        
        readonly typeToken: number;
        
    }
}

export namespace com.bedalton.creatures.caos.libs {
    abstract class CaosVariant {
        
        readonly code: string;
        
        readonly fullName: string;
        
        readonly index: number;
        
        readonly isOld: boolean;
        
        readonly isNotOld: boolean;
        
        static C1: {} & com.bedalton.creatures.caos.libs.CaosVariant;
        
        static C2: {} & com.bedalton.creatures.caos.libs.CaosVariant;
        
        static CV: {} & com.bedalton.creatures.caos.libs.CaosVariant;
        
        static C3: {} & com.bedalton.creatures.caos.libs.CaosVariant;
        
        static DS: {} & com.bedalton.creatures.caos.libs.CaosVariant;
        
        static SM: {} & com.bedalton.creatures.caos.libs.CaosVariant;
        
        static UNKNOWN: {} & com.bedalton.creatures.caos.libs.CaosVariant;
    }
}

export namespace com.bedalton.creatures.caos.libs {
    abstract class ValueType {
        
        readonly value: number;
        
        readonly simpleName: string;
        
        static INT: com.bedalton.creatures.caos.libs.ValueType
        
        static FLOAT: com.bedalton.creatures.caos.libs.ValueType
        
        static TOKEN: com.bedalton.creatures.caos.libs.ValueType
        
        static STRING: com.bedalton.creatures.caos.libs.ValueType
        
        static VARIABLE: com.bedalton.creatures.caos.libs.ValueType
        
        static COMMAND: com.bedalton.creatures.caos.libs.ValueType
        
        static C1_STRING: com.bedalton.creatures.caos.libs.ValueType
        
        static BYTE_STRING: com.bedalton.creatures.caos.libs.ValueType
        
        static AGENT: com.bedalton.creatures.caos.libs.ValueType
        
        static ANY: com.bedalton.creatures.caos.libs.ValueType
        
        static CONDITION: com.bedalton.creatures.caos.libs.ValueType
        
        static DECIMAL: com.bedalton.creatures.caos.libs.ValueType
        
        static ANIMATION: com.bedalton.creatures.caos.libs.ValueType
        
        static HEXADECIMAL: com.bedalton.creatures.caos.libs.ValueType
        
        static NULL: com.bedalton.creatures.caos.libs.ValueType
        
        static PICT_DIMENSION: com.bedalton.creatures.caos.libs.ValueType
        
        static EQ_OP: com.bedalton.creatures.caos.libs.ValueType
        
        static EQ_JOIN: com.bedalton.creatures.caos.libs.ValueType
        
        static UNKNOWN: com.bedalton.creatures.caos.libs.ValueType
        
        static PLACEHOLDER: com.bedalton.creatures.caos.libs.ValueType
        
        static COMMENT: com.bedalton.creatures.caos.libs.ValueType
        
        static CAOS2_COMMENT: com.bedalton.creatures.caos.libs.ValueType
        
        static NEWLINE: com.bedalton.creatures.caos.libs.ValueType
        
        static SPACES: com.bedalton.creatures.caos.libs.ValueType
        
        static values(): Array<com.bedalton.creatures.caos.libs.ValueType>;
        
        static valueOf(value: string): com.bedalton.creatures.caos.libs.ValueType;
        
        name: "INT" | "FLOAT" | "TOKEN" | "STRING" | "VARIABLE" | "COMMAND" | "C1_STRING" | "BYTE_STRING" | "AGENT" | "ANY" | "CONDITION" | "DECIMAL" | "ANIMATION" | "HEXADECIMAL" | "NULL" | "PICT_DIMENSION" | "EQ_OP" | "EQ_JOIN" | "UNKNOWN" | "PLACEHOLDER" | "COMMENT" | "CAOS2_COMMENT" | "NEWLINE" | "SPACES";
        
    }
}

export interface ICaosParameter {
    
    index: number;
    
    name: string;
    
    typeId: number;
    
    type: string;
    
    valuesListId: Nullable<number>;
    
    valuesListName: Nullable<string>;
    
    valuesList: Nullable<CaosValuesList>;
    
}

export interface ICaosCommand {
    command: string;
    
    parameters: Array<ICaosParameter>;
    
    isLvalue: boolean;
    
    isRvalue: boolean;
    
    isCommand: boolean;
    
    returnTypeId: number;
    
    returnTypeName: string;
    
    variants: Array<string>;
    
    description: Nullable<string>;
    
    lvalueName: Nullable<string>;
    
    returnValuesListIds: Nullable<VariantData<number>>;
    
    requiresOwnr: number;
    
    commandGroup: string;
    
    doifFormat: Nullable<string>;
    
    requiresCreatureOwnr: boolean;
    
}

export namespace com.bedalton.creatures.caos.libs {
    
    
    const TypeTokens: {
        FLOAT: number;
        INT: number;
        CHAR: number;
        BINARY: number;
        BYTE_STRING: number;
        QUOTE_STRING: number;
        BRACKET_STRING: number;
        TOKEN: number;
        EQ_JOIN: number;
        EQ_OP: number;
        PICT_DIMENSION: number;
        ERROR: number;
        INDEXED_VARIABLE: number;
        COMMAND_TOKEN: number;
        PLACEHOLDER_TOKEN: number;
        COMMENT: number;
        CAOS2_COMMENT: number;
        NEWLINE: number;
        SPACES: number;
    }
    const ErrorTypes: {
        GENERAL: number;
        TYPE_ERROR: number;
        INCOMPLETE_COMMAND_ERROR: number;
        OUT_OF_VARIANT: number;
        UNTERMINATED_CONTROL_STATEMENT: number;
        UNEXPECTED_CONTROL_TERMINATOR: number;
        WHITESPACE_ERROR: number;
        TOO_MANY_NEWLINES: number;
    }
}
export type VariantData<T> = {
    
    C1?: Nullable<T>;
    
    C2?: Nullable<T>;
    
    CV?: Nullable<T>;
    
    C3?: Nullable<T>;
    
    DS?: Nullable<T>;
    
    SM?: Nullable<T>;
    
    [variant: GameVariant]: Nullable<T>
    
}

export interface CaosValuesList {
    
    id: number;
    
    name: string;
    
    values: Array<ValuesListValue>;
    
    description: Nullable<string>;
    
    extensionType: Nullable<string>;
    
    bitflag: boolean;
    
}

export interface ValuesListValue {
    
    value: string;
    
    name: string;
    
    description: Nullable<string>;
    
    beforeRegion: Nullable<string>;
    
    intValue: Nullable<number>;
    
    negatedValue: boolean;
    
    greaterThanValue: boolean;
    
}

export interface Commands {
    
    commands: Array<ICaosCommand>;
    
    rvalues: Array<ICaosCommand>;
    
    lvalues: Array<ICaosCommand>;
    
}


export namespace com.bedalton.common.util {
    export function unixToDateComponents(unix: number): DateComponents;
    
    export function toUnixTime(dateComponents: DateComponents, offsetHours?: Nullable<number>, offsetMinutes?: Nullable<number>): number;
}


export namespace com.bedalton.creatures.caos.exceptions {
    class CaosException /* extends kotlin.Exception */ {
        constructor(message: string, throwable?: Nullable<Error>);
    }
    
    class CaosInvalidTokenLengthException /* extends kotlin.Exception */ {
        constructor(chars: any /*CharArray*/, message: string, throwable?: Nullable<Error>);
        
        chars: any /*CharArray*/;
    }
    
    class CaosValidatorIllegalArgumentException extends com.bedalton.creatures.caos.exceptions.CaosException {
        constructor(message: string, throwable?: Nullable<Error>);
    }
}

export namespace com.bedalton.creatures.caos.formatter {
    
    class FormatException extends com.bedalton.creatures.caos.exceptions.CaosException {
        constructor(message: string, throwable?: Nullable<Error>);
    }
    
    class FormatExceptionWithCaosErrors extends com.bedalton.creatures.caos.exceptions.CaosException {
        constructor(message: string, errors: Array<ParserItem.ErrorVal>, throwable?: Nullable<Error>);
        
        errors: Array<ParserItem.ErrorVal>;
    }
}


export namespace com.bedalton.common.exceptions {
    class CommonException /* extends kotlin.Exception */ {
        constructor(message: string, throwable: Nullable<Error>);
        
        asThrowable(): Error;
    }
}
export namespace com.bedalton.common.exceptions {
    class IOReadException /* extends com.bedalton.common.exceptions.IOException */ {
        constructor(message: string, throwable?: Nullable<Error>);
    }
}
export namespace com.bedalton.common.structs {
    class AlreadyDisposedDataCacheException /* extends kotlin.Exception */ {
        constructor(message?: string);
    }
}


export as namespace caos_util;

// !Processed //