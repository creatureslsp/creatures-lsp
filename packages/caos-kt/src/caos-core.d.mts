// noinspection JSUnusedGlobalSymbols,JSDeprecatedSymbols

import type {
    RangeWithIndex,
    TextWithRange,
} from "./common-ast-structs.d.ts";

import type {
    ParseTreeItem,
    WhitespaceParseTreeItem,
    NewLineParseTreeItem
} from "./common-ast-parseritems.mjs";

// noinspection ES6UnusedImports
import type {KtSingleton, Nullable} from "./types.d.ts";

export declare type BlockRange = RangeWithIndex & {
    readonly startToken: Nullable<string>;
    readonly endToken: Nullable<string>;
    readonly depth: number;
    readonly startTok: Nullable<number>;
    readonly endTok: Nullable<number>;
}

export declare type CaosItem = TextWithRange & {}

export type CaosParserItem = TextWithRange & CaosItem & ParseTreeItem & {
    actualType: number;
    typeToken: number;
}

export declare type IntVal = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: number;
}

export declare type FloatVal = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: number;
}

export declare type CharVal = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: number;
}

export declare type BinaryVal = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: number;
}

export declare type ByteString = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: string;
}

export declare type C2eStringVal = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: string;
}

export declare type C1eStringVal = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: string;
}

export declare type TokenVal = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: string;
}

export declare type EqJoinVal = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: string;
}

export declare type EqOpVal = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: string;
}

export declare type DdePictVal = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: { first: number; second: number; };
}

export declare type ErrorVal = CaosParserItem & {
    readonly message: string;
    readonly errorCode: number;
    readonly actualType: number;
    readonly actualTokenType: number;
    readonly typeToken: number;
    readonly value: string;
}

export declare type IndexedVarVal = CaosParserItem & {
    readonly indexedVarType: string;
    readonly index: number;
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: string;
}

export declare type AutocompleteHint = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: string;
}

export declare type Comment = CaosParserItem & {
    readonly typeToken: number;
    readonly actualType: number;
    readonly value: string;
}

export declare type Caos2Comment = CaosParserItem & {
    readonly token: TokenVal;
    readonly values: Array<CaosParserItem>;
    readonly eq: Nullable<TokenVal>;
    readonly caos2Hash: Nullable<TokenVal>;
    readonly valueAsStrings: Array<string>;
    readonly typeToken: number;
    readonly actualType: number;
    readonly isTag: boolean;
    readonly tag: Nullable<string>;
    readonly command: Nullable<string>;
    readonly intValue: Nullable<number>;
    readonly value: string;
}
export declare type CommandToken = CaosParserItem & {
    readonly actualType: number;
    readonly token: number;
    readonly typeToken: number;
    readonly value: string;
}
export declare type CompoundCommandToken = CaosParserItem & {
    readonly actualType: number;
    readonly tokens: Array<CommandToken>;
    readonly typeToken: number;
    readonly value: string;
}

export declare type WhitespaceItem = CaosParserItem & WhitespaceParseTreeItem & {
    readonly value: string;
}

export declare type NewLine = WhitespaceItem & {
    readonly actualType: number;
    readonly typeToken: number;
}

export declare type Spaces = WhitespaceItem & NewLineParseTreeItem & {
    readonly actualType: number;
    readonly typeToken: number;
}

export declare class CaosScript {
    readonly commandString: Nullable<string>;
    readonly items: Array<CaosParserItem>;
    readonly textRange: RangeWithIndex;
    readonly key: Nullable<string>;
    readonly blockRange: BlockRange;
}

export declare abstract class ErrorTypes {
    static readonly getInstance: () => ErrorTypes;

    get GENERAL(): number;

    get TYPE_ERROR(): number;

    get INCOMPLETE_COMMAND_ERROR(): number;

    get OUT_OF_VARIANT(): number;

    get UNTERMINATED_CONTROL_STATEMENT(): number;

    get UNEXPECTED_CONTROL_TERMINATOR(): number;

    get WHITESPACE_ERROR(): number;

    get TOO_MANY_NEWLINES(): number;

    get UNTERMINATED_STRING(): number;

    get COMMUNITY_EDITION_ONLY(): number;

    private constructor();

}

export declare abstract class TypeTokens {
    static readonly getInstance: () => TypeTokens;

    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    get FLOAT(): number;

    get INT(): number;

    get CHAR(): number;

    get BINARY(): number;

    get BYTE_STRING(): number;

    get QUOTE_STRING(): number;

    get BRACKET_STRING(): number;

    get TOKEN(): number;

    get EQ_JOIN(): number;

    get EQ_OP(): number;

    get PICT_DIMENSION(): number;

    get ERROR(): number;

    get INDEXED_VARIABLE(): number;

    get COMMAND_TOKEN(): number;

    get PLACEHOLDER_TOKEN(): number;

    get COMMENT(): number;

    get CAOS2_COMMENT(): number;

    get NEWLINE(): number;

    get SPACES(): number;
    private constructor();
}


export declare abstract class ValueType {
    private constructor();
    static get INT(): ValueType & {
        get name(): "INT";
        get ordinal(): 0;
    };
    static get FLOAT(): ValueType & {
        get name(): "FLOAT";
        get ordinal(): 1;
    };
    static get TOKEN(): ValueType & {
        get name(): "TOKEN";
        get ordinal(): 2;
    };
    static get STRING(): ValueType & {
        get name(): "STRING";
        get ordinal(): 3;
    };
    static get VARIABLE(): ValueType & {
        get name(): "VARIABLE";
        get ordinal(): 4;
    };
    static get COMMAND(): ValueType & {
        get name(): "COMMAND";
        get ordinal(): 5;
    };
    static get C1_STRING(): ValueType & {
        get name(): "C1_STRING";
        get ordinal(): 6;
    };
    static get BYTE_STRING(): ValueType & {
        get name(): "BYTE_STRING";
        get ordinal(): 7;
    };
    static get AGENT(): ValueType & {
        get name(): "AGENT";
        get ordinal(): 8;
    };
    static get ANY(): ValueType & {
        get name(): "ANY";
        get ordinal(): 9;
    };
    static get CONDITION(): ValueType & {
        get name(): "CONDITION";
        get ordinal(): 10;
    };
    static get DECIMAL(): ValueType & {
        get name(): "DECIMAL";
        get ordinal(): 11;
    };
    static get ANIMATION(): ValueType & {
        get name(): "ANIMATION";
        get ordinal(): 12;
    };
    static get HEXADECIMAL(): ValueType & {
        get name(): "HEXADECIMAL";
        get ordinal(): 13;
    };
    static get NULL(): ValueType & {
        get name(): "NULL";
        get ordinal(): 14;
    };
    static get PICT_DIMENSION(): ValueType & {
        get name(): "PICT_DIMENSION";
        get ordinal(): 15;
    };
    static get EQ_OP(): ValueType & {
        get name(): "EQ_OP";
        get ordinal(): 16;
    };
    static get EQ_JOIN(): ValueType & {
        get name(): "EQ_JOIN";
        get ordinal(): 17;
    };
    static get UNKNOWN(): ValueType & {
        get name(): "UNKNOWN";
        get ordinal(): 18;
    };
    static get PLACEHOLDER(): ValueType & {
        get name(): "PLACEHOLDER";
        get ordinal(): 19;
    };
    static get COMMENT(): ValueType & {
        get name(): "COMMENT";
        get ordinal(): 20;
    };
    static get CAOS2_COMMENT(): ValueType & {
        get name(): "CAOS2_COMMENT";
        get ordinal(): 21;
    };
    static get NEWLINE(): ValueType & {
        get name(): "NEWLINE";
        get ordinal(): 22;
    };
    static get SPACES(): ValueType & {
        get name(): "SPACES";
        get ordinal(): 23;
    };
    static values(): [typeof ValueType.INT, typeof ValueType.FLOAT, typeof ValueType.TOKEN, typeof ValueType.STRING, typeof ValueType.VARIABLE, typeof ValueType.COMMAND, typeof ValueType.C1_STRING, typeof ValueType.BYTE_STRING, typeof ValueType.AGENT, typeof ValueType.ANY, typeof ValueType.CONDITION, typeof ValueType.DECIMAL, typeof ValueType.ANIMATION, typeof ValueType.HEXADECIMAL, typeof ValueType.NULL, typeof ValueType.PICT_DIMENSION, typeof ValueType.EQ_OP, typeof ValueType.EQ_JOIN, typeof ValueType.UNKNOWN, typeof ValueType.PLACEHOLDER, typeof ValueType.COMMENT, typeof ValueType.CAOS2_COMMENT, typeof ValueType.NEWLINE, typeof ValueType.SPACES];
    static valueOf(value: string): ValueType;
    get name(): "INT" | "FLOAT" | "TOKEN" | "STRING" | "VARIABLE" | "COMMAND" | "C1_STRING" | "BYTE_STRING" | "AGENT" | "ANY" | "CONDITION" | "DECIMAL" | "ANIMATION" | "HEXADECIMAL" | "NULL" | "PICT_DIMENSION" | "EQ_OP" | "EQ_JOIN" | "UNKNOWN" | "PLACEHOLDER" | "COMMENT" | "CAOS2_COMMENT" | "NEWLINE" | "SPACES";
    get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
    get value(): number;
    get simpleName(): string;
}

export declare namespace ValueType {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ValueType;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor /* implements SerializerFactory */ {
                fromSimpleName(simpleName: string): ValueType;
                simpleName(value: number): Nullable<string>;
                fromIntValue(value: number): ValueType;
                private constructor();
            }
        }
    }
}