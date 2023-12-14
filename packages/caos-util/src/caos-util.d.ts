
// noinspection JSUnusedGlobalSymbols

import ParserItem = com.bedalton.creatures.caos.collectors.ParserItem;
import CommandCall = com.bedalton.creatures.caos.collectors.CommandCall;


type GameVariant = 'C1' | 'C2' | 'CV' | 'C3' | 'DS' | 'SM';

type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt

type MessageType = 'error' | 'warning' | 'info';

interface ILoggerObject {
    log(replace: boolean, message: string, color: Nullable<com.bedalton.log.LoggerColor>): void;

    info(replace: boolean, message: string, color: Nullable<com.bedalton.log.LoggerColor>): void;

    warning(message: string, color: Nullable<com.bedalton.log.LoggerColor>): void;

    error(message: string, color: Nullable<com.bedalton.log.LoggerColor>): void;

    getColorPrefix(color: Nullable<com.bedalton.log.LoggerColor>): Nullable<string>;

    logMemory(): void;

    readonly prependLogType: Nullable<boolean>;
}

interface HasRange {
    readonly lineNumber: number;
    readonly startIndex: number;
    readonly endIndex: number;
}

interface ITuple<T1, T2> {
    readonly first: T1;
    readonly second: T2;
}

interface IMutableTuple<T1, T2> {
    first: T1;
    second: T2;
}

interface HasSize {
    readonly width: number;
    readonly height: number;
}

interface HasGetter<K, V> {
    get(key: K): V;

    readonly __doNotUseIt: __doNotImplementIt;
}

interface HasText {
    readonly text: string
}

interface TextWithRange extends HasRange, HasText {

}

interface Argument extends TextWithRange, CaosItem {
    readonly textRange: RangeWithIndex;
    readonly parameter: Nullable<com.bedalton.creatures.caos.libs.ICaosParameter>;
    readonly type: number;
    readonly text: string;
    readonly inEqualityExpression: boolean;
    readonly parserItem: Nullable<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>;
    readonly containingCommand: Nullable<com.bedalton.creatures.caos.collectors.CommandReference>;
    readonly parserIndexStart: Nullable<number>;
    readonly parserIndexEnd: Nullable<number>;
}

interface CaosItem extends TextWithRange {
    readonly textRange: RangeWithIndex;
}

interface CursorData extends Position {
    readonly command: Nullable<com.bedalton.creatures.caos.libs.ICaosCommand>;

    readonly missing: Array<com.bedalton.creatures.caos.libs.ICaosParameter>;

    readonly closestParameter: Nullable<com.bedalton.creatures.caos.libs.ICaosParameter>;

    readonly beforeText: Nullable<string>;

    readonly line: number;

    readonly character: number;

    readonly previousTokens: Array<com.bedalton.creatures.caos.collectors.ParserItem.CommandToken>;

    readonly closestItem: Nullable<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>;

    readonly eqValuesList: Nullable<com.bedalton.creatures.caos.libs.CaosValuesList>;

    readonly inEqualityStatement: boolean;

    toString(): string;
}

interface CaosFormatterOptions {
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

interface DocumentSymbol {
    readonly name: string;
    readonly detail: Nullable<string>;
    readonly kind: number;
    readonly tags: Array<number>;
    readonly range: Range;
    readonly selectionRange: Range;
    readonly children: Array<DocumentSymbol>;
}

interface HasRange {
    readonly textRange: RangeWithIndex;
}

interface InlayHint {
    readonly position: Position;
    readonly label: string;
    readonly kind: Nullable<number>;
    readonly textEdits: Nullable<Array<TextEdit>>;
    readonly tooltip: Nullable<string>;
    readonly paddingLeft: Nullable<boolean>;
    readonly paddingRight: Nullable<boolean>;
}

interface Position {
    readonly line: number;
    readonly character: number;
}

interface Range {
    readonly start: Position;
    readonly end: Position;
}

interface RangeWithIndex extends Range {
    readonly startIndex: number;
    readonly endIndex: number;
    readonly parserIndex: Nullable<number>;
    readonly start: Position;
    readonly end: Position;
}

interface ITextEdit {
}

interface TextEdit extends ITextEdit {
    readonly range: Range;
    readonly newText: string;

}

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

    onComment(token: com.bedalton.creatures.caos.collectors.ParserItem.Comment): void

    onCaos2Comment(token: com.bedalton.creatures.caos.collectors.ParserItem.Caos2Comment): void;
}


export namespace com.bedalton.log {
    abstract class LoggerColor {
        protected constructor();

        static get BLACK(): {} & com.bedalton.log.LoggerColor;

        static get RED(): {} & com.bedalton.log.LoggerColor;

        static get GREEN(): {} & com.bedalton.log.LoggerColor;

        static get YELLOW(): {} & com.bedalton.log.LoggerColor;

        static get BLUE(): {} & com.bedalton.log.LoggerColor;

        static get MAGENTA(): {} & com.bedalton.log.LoggerColor;

        static get CYAN(): {} & com.bedalton.log.LoggerColor;

        static get WHITE(): {} & com.bedalton.log.LoggerColor;
    }
}
export namespace com.bedalton.log {
    class LoggerBuilder {
        constructor();

        withLog(log: (p0: boolean, p1: string, p2: Nullable<com.bedalton.log.LoggerColor>) => void): void;

        info(log: (p0: boolean, p1: string, p2: Nullable<com.bedalton.log.LoggerColor>) => void): com.bedalton.log.LoggerBuilder;

        warning(log: (p0: string, p1: Nullable<com.bedalton.log.LoggerColor>) => void): com.bedalton.log.LoggerBuilder;

        error(log: (p0: string, p1: Nullable<com.bedalton.log.LoggerColor>) => void): com.bedalton.log.LoggerBuilder;

        logMemory(log: () => void): com.bedalton.log.LoggerBuilder;

        getColor(callback: Nullable<(p0: Nullable<com.bedalton.log.LoggerColor>) => Nullable<string>>): com.bedalton.log.LoggerBuilder;

        build(): ILoggerObject;
    }
}
export namespace com.bedalton.log {

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
export namespace com.bedalton.common.util {
    class DateComponents {
        constructor(year: number, monthZeroIndexed: number, day: number, hour?: Nullable<number>, minute?: Nullable<number>, seconds?: Nullable<number>, unix?: Nullable<number>);

        get year(): number;

        get monthZeroIndexed(): number;

        get day(): number;

        get hour(): Nullable<number>;

        get minute(): Nullable<number>;

        get seconds(): Nullable<number>;

        get unix(): Nullable<number>;

        toISO(offsetHours?: Nullable<number>, offsetMinutes?: Nullable<number>): string;

        toString(): string;

    }
}

export function setSingleFunctionLogger(logger: (p0: string, p1: string) => void): void;

export function setLogger(logger: ILoggerObject): void;

export namespace com.bedalton.common.util {
    function unixToDateComponents(unix: number): com.bedalton.common.util.DateComponents;

    function toUnixTime(dateComponents: com.bedalton.common.util.DateComponents, offsetHours?: Nullable<number>, offsetMinutes?: Nullable<number>): number;
}
export namespace com.bedalton.creatures.caos.collectors {
    class BlockRange implements RangeWithIndex {
        constructor(startToken: Nullable<string>, endToken: Nullable<string>, startIndex: number, endIndex: number, start: Position, end: Position, parserIndex: Nullable<number>, depth: number);

        get startToken(): Nullable<string>;

        get endToken(): Nullable<string>;

        get startIndex(): number;

        get endIndex(): number;

        get start(): Position;

        get end(): Position;

        get parserIndex(): Nullable<number>;

        get depth(): number;

        get startTok(): Nullable<number>;

        get endTok(): Nullable<number>;

        toString(): string;

    }
}
export namespace com.bedalton.creatures.caos.collectors {
    class CommandReference {
        constructor(command: com.bedalton.creatures.caos.libs.ICaosCommand, commandString?: string, line?: number, column?: number, commandCallIndex?: number);

        get command(): com.bedalton.creatures.caos.libs.ICaosCommand;

        get commandString(): string;

        get line(): number;

        get column(): number;

        get commandCallIndex(): number;

        toString(): string;

    }
}
export namespace com.bedalton.creatures.caos.collectors {
    abstract class CommandCall implements HasRange, Argument, CaosItem {
        get type(): number;

        get command(): com.bedalton.creatures.caos.libs.ICaosCommand;

        get arguments(): Array<Argument>;
        set arguments(value: Array<Argument>);

        get tokenTextRange(): RangeWithIndex;
        get endIndex(): number;
        get lineNumber(): number;
        get startIndex(): number;

        get inVariant(): boolean;

        get textRange(): RangeWithIndex;
        set textRange(value: RangeWithIndex);

        get parameter(): Nullable<com.bedalton.creatures.caos.libs.ICaosParameter>;

        get inEqualityExpression(): boolean;
        set inEqualityExpression(value: boolean);

        get containingCommand(): Nullable<com.bedalton.creatures.caos.collectors.CommandReference>;

        get tokens(): Array<com.bedalton.creatures.caos.collectors.ParserItem.CommandToken>;

        get callType(): any/* com.bedalton.creatures.caos.libs.CommandType */;

        get isRvalue(): boolean;

        get isLvalue(): boolean;

        get isCommand(): boolean;

        get parserItem(): com.bedalton.creatures.caos.collectors.ParserItem.CompoundCommandToken;

        get text(): string;

        get commandString(): string;

        get parserIndexStart(): Nullable<number>;

        get parserIndexEnd(): Nullable<number>;

        toString(): string;
    }

    class EqualityStatement implements Argument {
        constructor(textRange: RangeWithIndex, first: Nullable<Argument>, second: Nullable<Argument>, eqToken: Nullable<com.bedalton.creatures.caos.collectors.ParserItem.EqOp>, containingCommand: Nullable<com.bedalton.creatures.caos.collectors.CommandReference>, parameter: com.bedalton.creatures.caos.libs.ICaosParameter, getTextActual: () => string);
        
        lineNumber: number;
        startIndex: number;
        endIndex: number;

        get textRange(): RangeWithIndex;
        set textRange(value: RangeWithIndex);

        get first(): Nullable<Argument>;
        set first(value: Nullable<Argument>);

        get second(): Nullable<Argument>;
        set second(value: Nullable<Argument>);

        get eqToken(): Nullable<com.bedalton.creatures.caos.collectors.ParserItem.EqOp>;
        set eqToken(value: Nullable<com.bedalton.creatures.caos.collectors.ParserItem.EqOp>);

        get containingCommand(): Nullable<com.bedalton.creatures.caos.collectors.CommandReference>;

        get parameter(): com.bedalton.creatures.caos.libs.ICaosParameter;

        get type(): number;

        get text(): string;

        get inEqualityExpression(): boolean;

        get parserItem(): Nullable<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>;

        get parserIndexStart(): Nullable<number>;

        get parserIndexEnd(): Nullable<number>;

        toString(): string;

    }
}
export namespace com.bedalton.creatures.caos.collectors {
    function getCursorPosition(parseResult: com.bedalton.creatures.caos.collectors.ParseResult, lineNumber: number, column: number, incomplete: boolean): Nullable<CursorData>;

    class ClosestItemResult<T> {
        constructor(closest: T, previous: Array<com.bedalton.creatures.caos.collectors.ParserItem.CommandToken>);

        get closest(): T;

        get previous(): Array<com.bedalton.creatures.caos.collectors.ParserItem.CommandToken>;

        toString(): string;
    }

    function getClosestItem<T extends HasRange>(inRangeItems: Array<T>, lineNumber: number, column: number, notAfter: boolean): Nullable<com.bedalton.creatures.caos.collectors.ClosestItemResult<T>>;

    function getCursorPositionFromRawText(variant: string, text: string, lineNumber: number, column: number, parseOnlyNear?: Nullable<boolean>, incomplete?: Nullable<boolean>, keepGoing?: Nullable<() => boolean>): Nullable<CursorData>;

    function cancelComplete(closestItem: com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>, line: number, character: number): boolean;

    function inQuotes(closestItem: com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>, line: number, character: number): boolean;
}
export namespace com.bedalton.creatures.caos.collectors {
    class Script {
        constructor(commandString: Nullable<string>, items: Array<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>, textRange: RangeWithIndex);

        get commandString(): Nullable<string>;

        get items(): Array<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>;

        get textRange(): RangeWithIndex;
        get endIndex(): number;
        get lineNumber(): number;
        get startIndex(): number;

        get key(): Nullable<string>;

        get blockRange(): com.bedalton.creatures.caos.collectors.BlockRange;

        toString(): string;
    }

    class ParseResult {
        constructor(variant: string, originalText: string, items: Array<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>, errors: Array<com.bedalton.creatures.caos.collectors.ParserItem.ErrorVal>, scripts: Array<com.bedalton.creatures.caos.collectors.Script>, equalityStatements: Array<com.bedalton.creatures.caos.collectors.EqualityStatement>, equalityStatementRanges: Array<RangeWithIndex>, commandCalls: Array<com.bedalton.creatures.caos.collectors.CommandCall>, comments: Array<com.bedalton.creatures.caos.collectors.ParserItem.Comment>, caos2Comments: Array<com.bedalton.creatures.caos.collectors.ParserItem.Caos2Comment>, looseTokens: Array<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>);

        get variant(): string;

        get originalText(): string;

        get items(): Array<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>;

        get errors(): Array<com.bedalton.creatures.caos.collectors.ParserItem.ErrorVal>;

        get scripts(): Array<com.bedalton.creatures.caos.collectors.Script>;

        get equalityStatements(): Array<com.bedalton.creatures.caos.collectors.EqualityStatement>;

        get equalityStatementRanges(): Array<RangeWithIndex>;

        get commandCalls(): Array<com.bedalton.creatures.caos.collectors.CommandCall>;

        get comments(): Array<com.bedalton.creatures.caos.collectors.ParserItem.Comment>;

        get caos2Comments(): Array<com.bedalton.creatures.caos.collectors.ParserItem.Caos2Comment>;

        get looseTokens(): Array<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>;

        toString(): string;
    }
}
export namespace com.bedalton.creatures.caos.collectors {
    abstract class ParserItem<T> implements TextWithRange, CaosItem {
        protected constructor();

        abstract get textRange(): RangeWithIndex;
        get endIndex(): number;
        get lineNumber(): number;
        get startIndex(): number;

        abstract get value(): T;

        abstract get actualType(): number;

        abstract get typeToken(): number;

        get parserIndexEnd(): Nullable<number>;

        get parserIndexStart(): Nullable<number>;

        toString(): string;

        get text(): string;
    }

    namespace ParserItem {
        class FloatVal extends com.bedalton.creatures.caos.collectors.ParserItem<number> {

            get textRange(): RangeWithIndex;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

            get value(): number;

        }

        class IntVal extends com.bedalton.creatures.caos.collectors.ParserItem<number> {
            constructor(textRange: RangeWithIndex, value: number);

            get textRange(): RangeWithIndex;

            get value(): number;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class CharVal extends com.bedalton.creatures.caos.collectors.ParserItem<number> {
            constructor(textRange: RangeWithIndex, value: number, text: string);

            get textRange(): RangeWithIndex;

            get value(): number;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class BinaryVal extends com.bedalton.creatures.caos.collectors.ParserItem<any/* kotlin.Long */> {
            constructor(textRange: RangeWithIndex, value: any/* kotlin.Long */, text: string);

            get textRange(): RangeWithIndex;

            get value(): any/* kotlin.Long */;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class ByteString extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class C2eStringVal extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class C1eStringVal extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class TokenVal extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class EqJoin extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class EqOp extends com.bedalton.creatures.caos.collectors.ParserItem<string> implements Argument {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

            get text(): string;

            get parameter(): com.bedalton.creatures.caos.libs.ICaosParameter;

            get type(): number;

            get inEqualityExpression(): boolean;

            get parserItem(): com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>;

            get containingCommand(): Nullable<com.bedalton.creatures.caos.collectors.CommandReference>;
            set containingCommand(value: Nullable<com.bedalton.creatures.caos.collectors.CommandReference>);

        }

        class DdePictVal extends com.bedalton.creatures.caos.collectors.ParserItem<any/* kotlin.Pair<number, number> */> {
            constructor(textRange: RangeWithIndex, value: any/* kotlin.Pair<number, number> */, text: string);

            get textRange(): RangeWithIndex;

            get value(): any/* kotlin.Pair<number, number> */;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class ErrorVal extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, message: string, type: number, text: string);

            get textRange(): RangeWithIndex;

            get message(): string;

            get type(): number;

            get value(): string;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

            static ErrorVal_init_$Create$(seen1: number, textRange: Nullable<RangeWithIndex>, message: Nullable<string>, type: number, text: Nullable<string>, typeToken: number, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.bedalton.creatures.caos.collectors.ParserItem.ErrorVal;

            static get Companion(): {
                serializer(): any/* kotlinx.serialization.KSerializer<com.bedalton.creatures.caos.collectors.ParserItem.ErrorVal> */;
            };

            static get $serializer(): {} & any/* kotlinx.serialization.internal.GeneratedSerializer<com.bedalton.creatures.caos.collectors.ParserItem.ErrorVal> */;
        }

        class IndexedVar extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, value: string, type: string, index: number);

            get textRange(): RangeWithIndex;

            get value(): string;

            get type(): string;

            get index(): number;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class AutocompleteHint extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class Comment extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            toString(): string;

            get typeToken(): number;

            get actualType(): number;

        }

        class Caos2Comment extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, text: string, token: com.bedalton.creatures.caos.collectors.ParserItem.TokenVal, values: Array<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>, eq: Nullable<com.bedalton.creatures.caos.collectors.ParserItem.TokenVal>);

            get textRange(): RangeWithIndex;

            get token(): com.bedalton.creatures.caos.collectors.ParserItem.TokenVal;

            get values(): Array<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>;

            get eq(): Nullable<com.bedalton.creatures.caos.collectors.ParserItem.TokenVal>;

            get caos2Hash(): Nullable<com.bedalton.creatures.caos.collectors.ParserItem.TokenVal>;

            get value(): string;

            toString(): string;

            get parserIndexEnd(): Nullable<number>;

            get valuesAsStrings(): Array<string>;

            get typeToken(): number;

            get actualType(): number;

            get isTag(): boolean;

            get tag(): Nullable<string>;

            get command(): Nullable<string>;

            get intValue(): Nullable<number>;

            static get Companion(): {};
        }

        class CommandToken extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            get actualType(): number;

            get token(): number;

            get typeToken(): number;

            toString(): string;

        }

        class CompoundCommandToken extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            constructor(mTokens: Array<com.bedalton.creatures.caos.collectors.ParserItem.CommandToken>);

            get actualType(): number;

            get tokens(): Array<com.bedalton.creatures.caos.collectors.ParserItem.CommandToken>;

            get textRange(): RangeWithIndex;

            get parserIndexEnd(): Nullable<number>;

            get value(): string;

            get typeToken(): number;

            toString(): string;

        }

        abstract class WhitespaceItem extends com.bedalton.creatures.caos.collectors.ParserItem<string> {
            protected constructor();
        }

        class NewLine extends com.bedalton.creatures.caos.collectors.ParserItem.WhitespaceItem {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            toString(): string;

            get lines(): number;

            get actualType(): number;

            get typeToken(): number;

        }

        class Spaces extends com.bedalton.creatures.caos.collectors.ParserItem.WhitespaceItem {
            constructor(textRange: RangeWithIndex, value: string);

            get textRange(): RangeWithIndex;

            get value(): string;

            toString(): string;

            get actualType(): number;

            get typeToken(): number;

        }
    }
}
export namespace com.bedalton.creatures.caos.collectors {
    function getStops(variant: string, text: string): Int32Array;

    function scriptOffsets(text: string): Array<com.bedalton.creatures.caos.collectors.BlockRange>;

    function getCaos2PrayComments(text: string): Array<com.bedalton.creatures.caos.collectors.ParserItem.Caos2Comment>;

    function getScriptsFromParseResult(parseResult: com.bedalton.creatures.caos.collectors.ParseResult): Array<com.bedalton.creatures.caos.collectors.Script>;

    function getWhitespace(text: string): Array<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>;

    function scopeOffsets(text: string): Array<com.bedalton.creatures.caos.collectors.BlockRange>;

    function parseTokens(variant: string, text: string, items: Array<com.bedalton.creatures.caos.collectors.ParserItem<any /*UnknownType **/>>, scriptOffsets?: Array<com.bedalton.creatures.caos.collectors.BlockRange>, checkErrors?: Nullable<boolean>, checkDelay?: Nullable<number>, keepGoing?: Nullable<() => boolean>): com.bedalton.creatures.caos.collectors.ParseResult;

    function parseCaosNear(variant: string, text: string, line: number, character: number, checkErrors?: Nullable<boolean>, checkDelay?: Nullable<number>, keepGoing?: Nullable<() => boolean>): com.bedalton.creatures.caos.collectors.ParseResult;

    function parseCaosWithin(variant: string, text: string, startLine: number, startCharacter: number, endLine: number, endCharacter: number, checkErrors?: Nullable<boolean>, checkDelay?: Nullable<number>, keepGoing?: Nullable<() => boolean>): com.bedalton.creatures.caos.collectors.ParseResult;

    function parseCaos(variant: string, text: string, keepGoing?: Nullable<() => boolean>): com.bedalton.creatures.caos.collectors.ParseResult;

    function collectErrors(variant: string, text: string): Array<com.bedalton.creatures.caos.collectors.ParserItem.ErrorVal>;
}
export namespace com.bedalton.creatures.caos.exceptions {
    class CaosException /* extends kotlin.Exception */ {
        constructor(message: string, throwable?: Nullable<Error>);
    }

    class CaosInvalidTokenLengthException /* extends kotlin.Exception */ {
        constructor(chars: any /*CharArray*/, message: string, throwable?: Nullable<Error>);

        get chars(): any /*CharArray*/;
    }

    class CaosValidatorIllegalArgumentException extends com.bedalton.creatures.caos.exceptions.CaosException {
        constructor(message: string, throwable?: Nullable<Error>);
    }
}
export namespace com.bedalton.creatures.caos.formatter {
    class FormatResult {
        constructor(formattedText: string, oldText: string, edits: Array<TextEdit>, editReasons: Array<any/* com.bedalton.creatures.caos.formatter.EditReason */>);

        get formattedText(): string;

        get oldText(): string;

        get edits(): Array<TextEdit>;

        get editReasons(): Array<any/* com.bedalton.creatures.caos.formatter.EditReason */>;

        toString(): string;
    }
}
export namespace com.bedalton.creatures.caos.formatter {
    function format(variant: string, text: string, options?: Nullable<CaosFormatterOptions>): com.bedalton.creatures.caos.formatter.FormatResult;

    class FormatException extends com.bedalton.creatures.caos.exceptions.CaosException {
        constructor(message: string, throwable?: Nullable<Error>);
    }

    class FormatExceptionWithCaosErrors extends com.bedalton.creatures.caos.exceptions.CaosException {
        constructor(message: string, errors: Array<com.bedalton.creatures.caos.collectors.ParserItem.ErrorVal>, throwable?: Nullable<Error>);

        get errors(): Array<com.bedalton.creatures.caos.collectors.ParserItem.ErrorVal>;
    }
}
export namespace com.bedalton.creatures.caos.hints {
    function getInlayOptions(): Array<string>;

    function getInlayHints(parseResult: com.bedalton.creatures.caos.collectors.ParseResult, disabled: Array<string>, folds: Array<Range>, minimumParameterCount?: Nullable<number>): Array<InlayHint>;
}
export namespace com.bedalton.creatures.caos.hints {
    function getDocumentSymbolsFromText(variant: string, text: string, addDoifLikeStatements?: boolean): Array<DocumentSymbol>;

    function getDocumentSymbols(parserResult: com.bedalton.creatures.caos.collectors.ParseResult, addDoifLikeStatements?: boolean): Array<DocumentSymbol>;
}
export namespace com.bedalton.creatures.caos.libs {
    abstract class CaosVariant {
        protected constructor(code: string, fullName: string, index: number);

        get code(): string;

        get fullName(): string;

        get index(): number;

        get isOld(): boolean;

        get isNotOld(): boolean;

        toString(): string;

        compareTo(version: number): number;

        static get C1(): {} & com.bedalton.creatures.caos.libs.CaosVariant;

        static get C2(): {} & com.bedalton.creatures.caos.libs.CaosVariant;

        static get CV(): {} & com.bedalton.creatures.caos.libs.CaosVariant;

        static get C3(): {} & com.bedalton.creatures.caos.libs.CaosVariant;

        static get DS(): {} & com.bedalton.creatures.caos.libs.CaosVariant;

        static get SM(): {} & com.bedalton.creatures.caos.libs.CaosVariant;

        static get UNKNOWN(): {} & com.bedalton.creatures.caos.libs.CaosVariant;

        static get Companion(): {
            fromVal(variant: string): com.bedalton.creatures.caos.libs.CaosVariant;
        };
    }
}
export namespace com.bedalton.creatures.caos.libs {

    class HasGetterImpl<K, V> implements HasGetter<K, V> {
        constructor(getter: (p0: K) => V);

        get(key: K): V;

        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace com.bedalton.creatures.caos.libs {
    abstract class ValueType {
        private constructor();

        get value(): number;

        get simpleName(): string;

        static get INT(): com.bedalton.creatures.caos.libs.ValueType

        static get FLOAT(): com.bedalton.creatures.caos.libs.ValueType

        static get TOKEN(): com.bedalton.creatures.caos.libs.ValueType

        static get STRING(): com.bedalton.creatures.caos.libs.ValueType

        static get VARIABLE(): com.bedalton.creatures.caos.libs.ValueType

        static get COMMAND(): com.bedalton.creatures.caos.libs.ValueType

        static get C1_STRING(): com.bedalton.creatures.caos.libs.ValueType

        static get BYTE_STRING(): com.bedalton.creatures.caos.libs.ValueType

        static get AGENT(): com.bedalton.creatures.caos.libs.ValueType

        static get ANY(): com.bedalton.creatures.caos.libs.ValueType

        static get CONDITION(): com.bedalton.creatures.caos.libs.ValueType

        static get DECIMAL(): com.bedalton.creatures.caos.libs.ValueType

        static get ANIMATION(): com.bedalton.creatures.caos.libs.ValueType

        static get HEXADECIMAL(): com.bedalton.creatures.caos.libs.ValueType

        static get NULL(): com.bedalton.creatures.caos.libs.ValueType

        static get PICT_DIMENSION(): com.bedalton.creatures.caos.libs.ValueType

        static get EQ_OP(): com.bedalton.creatures.caos.libs.ValueType

        static get EQ_JOIN(): com.bedalton.creatures.caos.libs.ValueType

        static get UNKNOWN(): com.bedalton.creatures.caos.libs.ValueType

        static get PLACEHOLDER(): com.bedalton.creatures.caos.libs.ValueType

        static get COMMENT(): com.bedalton.creatures.caos.libs.ValueType

        static get CAOS2_COMMENT(): com.bedalton.creatures.caos.libs.ValueType

        static get NEWLINE(): com.bedalton.creatures.caos.libs.ValueType

        static get SPACES(): com.bedalton.creatures.caos.libs.ValueType

        static values(): Array<com.bedalton.creatures.caos.libs.ValueType>;

        static valueOf(value: string): com.bedalton.creatures.caos.libs.ValueType;

        get name(): "INT" | "FLOAT" | "TOKEN" | "STRING" | "VARIABLE" | "COMMAND" | "C1_STRING" | "BYTE_STRING" | "AGENT" | "ANY" | "CONDITION" | "DECIMAL" | "ANIMATION" | "HEXADECIMAL" | "NULL" | "PICT_DIMENSION" | "EQ_OP" | "EQ_JOIN" | "UNKNOWN" | "PLACEHOLDER" | "COMMENT" | "CAOS2_COMMENT" | "NEWLINE" | "SPACES";

        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;

        static get Companion(): {
            fromSimpleName(simpleName: string): com.bedalton.creatures.caos.libs.ValueType;
            simpleName(value: number): Nullable<string>;
            fromIntValue(value: number): com.bedalton.creatures.caos.libs.ValueType;
            serializer(): any/* kotlinx.serialization.KSerializer<com.bedalton.creatures.caos.libs.ValueType> */;
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export namespace com.bedalton.creatures.caos.libs {
    class ICaosParameter {
        constructor(index: number, name: string, typeId: number, typeName: string, valuesListId?: Nullable<number>, valuesListName?: Nullable<string>);

        get index(): number;

        get name(): string;

        get typeId(): number;

        get type(): string;

        get valuesListId(): Nullable<number>;

        get valuesListName(): Nullable<string>;

        get valuesList(): Nullable<com.bedalton.creatures.caos.libs.CaosValuesList>;

        toString(): string;

        static ICaosParameter_init_$Create$(seen1: number, index: number, name: Nullable<string>, typeId: number, typeName: Nullable<string>, valuesListId: Nullable<number>, valuesListName: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.bedalton.creatures.caos.libs.ICaosParameter;

        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.bedalton.creatures.caos.libs.ICaosParameter> */;
        };

        static get $serializer(): {} & any/* kotlinx.serialization.internal.GeneratedSerializer<com.bedalton.creatures.caos.libs.ICaosParameter> */;
    }

    class ICaosCommand {
        get command(): string;

        get parameters(): Array<com.bedalton.creatures.caos.libs.ICaosParameter>;

        get isLvalue(): boolean;

        get isRvalue(): boolean;

        get isCommand(): boolean;

        get returnTypeId(): number;

        get returnTypeName(): string;

        get variants(): Array<string>;

        get description(): Nullable<string>;

        get lvalueName(): Nullable<string>;

        get returnValuesListIds(): Nullable<com.bedalton.creatures.caos.libs.VariantData<number>>;

        get requiresOwnr(): number;

        get commandGroup(): string;

        get doifFormat(): Nullable<string>;

        get requiresCreatureOwnr(): boolean;

        returnValuesList(variant: string): Nullable<com.bedalton.creatures.caos.libs.CaosValuesList>;

        toString(): string;

        static ICaosCommand_init_$Create$(seen1: number, command: Nullable<string>, parameters: Nullable<Array<com.bedalton.creatures.caos.libs.ICaosParameter>>, isLvalue: boolean, isRvalue: boolean, isCommand: boolean, returnTypeId: number, returnTypeName: Nullable<string>, variants: Nullable<Array<string>>, description: Nullable<string>, lvalueName: Nullable<string>, returnValuesListIds: Nullable<com.bedalton.creatures.caos.libs.VariantData<number>>, requiresOwnr: number, commandGroup: Nullable<string>, doifFormat: Nullable<string>, requiresCreatureOwnr: boolean, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.bedalton.creatures.caos.libs.ICaosCommand;

        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.bedalton.creatures.caos.libs.ICaosCommand> */;
        };

        static get $serializer(): {} & any/* kotlinx.serialization.internal.GeneratedSerializer<com.bedalton.creatures.caos.libs.ICaosCommand> */;
    }
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

    class VariantData<T> {
        constructor(C1?: Nullable<T>, C2?: Nullable<T>, CV?: Nullable<T>, C3?: Nullable<T>, DS?: Nullable<T>, SM?: Nullable<T>);

        get C1(): Nullable<T>;

        get C2(): Nullable<T>;

        get CV(): Nullable<T>;

        get C3(): Nullable<T>;

        get DS(): Nullable<T>;

        get SM(): Nullable<T>;

        valueForVariant(variant: com.bedalton.creatures.caos.libs.CaosVariant): Nullable<T>;

        get(variant: string): Nullable<T>;

        toString(): string;
    }
}
export namespace com.bedalton.creatures.caos.libs {
    class CaosValuesList {
        constructor(id: number, name: string, values: Array<com.bedalton.creatures.caos.libs.ValuesListValue>, description?: Nullable<string>, extensionType?: Nullable<string>);

        get id(): number;

        get name(): string;

        get values(): Array<com.bedalton.creatures.caos.libs.ValuesListValue>;

        get description(): Nullable<string>;

        get extensionType(): Nullable<string>;

        getValueWithString(key: string): Nullable<com.bedalton.creatures.caos.libs.ValuesListValue>;

        getValueWithInt(key: number): Nullable<com.bedalton.creatures.caos.libs.ValuesListValue>;

        getWithBitFlags(bitFlag: number): Nullable<Array<com.bedalton.creatures.caos.libs.ValuesListValue>>;

        get bitflag(): boolean;

        toString(): string;

        static CaosValuesList_init_$Create$(seen1: number, id: number, name: Nullable<string>, values: Nullable<Array<com.bedalton.creatures.caos.libs.ValuesListValue>>, description: Nullable<string>, extensionType: Nullable<string>, negative: any/* Nullable<kotlin.collections.List<com.bedalton.creatures.caos.libs.ValuesListValue>> */, greaterThan: any/* Nullable<kotlin.collections.List<com.bedalton.creatures.caos.libs.ValuesListValue>> */, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.bedalton.creatures.caos.libs.CaosValuesList;
    }

    class ValuesListValue {
        constructor(value: string, name: string, description?: Nullable<string>, beforeRegion?: Nullable<string>);

        get value(): string;

        get name(): string;

        get description(): Nullable<string>;

        get beforeRegion(): Nullable<string>;

        get intValue(): Nullable<number>;

        get negatedValue(): boolean;

        get greaterThanValue(): boolean;

        toString(): string;
    }

    function getCommandsForLib(variant: string): com.bedalton.creatures.caos.libs.Commands;

    class Commands {
        constructor(commands: Array<com.bedalton.creatures.caos.libs.ICaosCommand>, rvalues: Array<com.bedalton.creatures.caos.libs.ICaosCommand>, lvalues: Array<com.bedalton.creatures.caos.libs.ICaosCommand>);

        get commands(): Array<com.bedalton.creatures.caos.libs.ICaosCommand>;

        get rvalues(): Array<com.bedalton.creatures.caos.libs.ICaosCommand>;

        get lvalues(): Array<com.bedalton.creatures.caos.libs.ICaosCommand>;

        toString(): string;
    }
}
export namespace com.bedalton.creatures.caos.libs {
    function getValuesList(id: number): Nullable<com.bedalton.creatures.caos.libs.CaosValuesList>;

    function getValueTypeName(value: number): Nullable<string>;
}

export namespace com.bedalton.creatures.caos.server {
    function inRange(range: Nullable<RangeWithIndex>, lineNumber: number, column: number, ignoreColumn?: boolean, soft?: boolean): boolean;
}
export namespace com.bedalton.creatures.caos.server {
    class PositionImpl implements Position {
        constructor(line: number, character: number);

        get line(): number;

        get character(): number;

        toString(): string;

        static PositionImpl_init_$Create$(seen1: number, line: number, character: number, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): PositionImpl;

        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<PositionImpl> */;
        };

        static get $serializer(): {} & any/* kotlinx.serialization.internal.GeneratedSerializer<PositionImpl> */;
    }

    class InsertReplaceEdit implements ITextEdit {
        constructor(newText: string, insert: Range, replace: Range);

        get newText(): string;

        get insert(): Range;

        get replace(): Range;

        toString(): string;

        static InsertReplaceEdit_init_$Create$(seen1: number, newText: Nullable<string>, insert: Nullable<Range>, replace: Nullable<Range>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.bedalton.creatures.caos.server.InsertReplaceEdit;

        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.bedalton.creatures.caos.server.InsertReplaceEdit> */;
        };

        static get $serializer(): {} & any/* kotlinx.serialization.internal.GeneratedSerializer<com.bedalton.creatures.caos.server.InsertReplaceEdit> */;
    }

    class RangeWithIndex implements RangeWithIndex {
        constructor(start: Position, end: Position, startIndex: number, endIndex: number, parserIndex?: Nullable<number>);

        get start(): Position;

        get end(): Position;

        get startIndex(): number;

        get endIndex(): number;

        get parserIndex(): Nullable<number>;

        toString(): string;

        static RangeWithIndexImpl_init_$Create$(seen1: number, start: Nullable<Position>, end: Nullable<Position>, startIndex: number, endIndex: number, parserIndex: Nullable<number>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): RangeWithIndex;

        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<RangeWithIndex> */;
        };

        static get $serializer(): {} & any/* kotlinx.serialization.internal.GeneratedSerializer<RangeWithIndex> */;
    }
}


/**
 * A cancellation token is passed to an asynchronous or long running
 * operation to request cancellation, like cancelling a request
 * for completion items because the user continued to type.
 *
 * To get an instance of a `CancellationToken` use a
 * {@link CancellationTokenSource}.
 */
export interface CancellationToken {
    
    /**
     * Is `true` when the token has been cancelled, `false` otherwise.
     */
    isCancellationRequested: boolean;
    
    /**
     * An {@link Event} which fires upon cancellation.
     */
    onCancellationRequested: Event;
}

/**
 * A cancellation source creates and controls a {@link CancellationToken cancellation token}.
 */
export class CancellationTokenSource {
    
    /**
     * The cancellation token of this source.
     */
    token: CancellationToken;
    
    /**
     * Signal cancellation on the token.
     */
    cancel(): void;
    
    /**
     * Dispose object and free resources.
     */
    dispose(): void;
}


export as namespace caos_util;

// !Processed //