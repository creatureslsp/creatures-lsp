// noinspection ES6UnusedImports,JSDeprecatedSymbols
// noinspection JSUnusedGlobalSymbols

import type {GameVariant, KtSingleton, Nullable} from "./types.d.ts";

export declare abstract class CaosScriptNamedGameVarType {

    static get NAME(): CaosScriptNamedGameVarType & {
        readonly name: "NAME";
        readonly ordinal: 0;
    };

    static get EAME(): CaosScriptNamedGameVarType & {
        readonly name: "EAME";
        readonly ordinal: 1;
    };

    static get GAME(): CaosScriptNamedGameVarType & {
        readonly name: "GAME";
        readonly ordinal: 2;
    };

    static get MAME(): CaosScriptNamedGameVarType & {
        readonly name: "MAME";
        readonly ordinal: 3;
    };

    readonly name: "NAME" | "EAME" | "GAME" | "MAME";

    readonly ordinal: 0 | 1 | 2 | 3;
    readonly token: string;
}

export declare namespace CaosScriptNamedGameVarType {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => CaosScriptNamedGameVarType;
    }

    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }

    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor /* implements SerializerFactory */ {
                fromValue(value: number): CaosScriptNamedGameVarType;

                private constructor();
            }
        }
    }
}

export declare abstract class CaosScriptVarTokenGroup {
    private constructor();

    static get UNKNOWN(): CaosScriptVarTokenGroup & {
        readonly name: "UNKNOWN";
        readonly ordinal: 0;
    };

    static get VARx(): CaosScriptVarTokenGroup & {
        readonly name: "VARx";
        readonly ordinal: 1;
    };

    static get OBVx(): CaosScriptVarTokenGroup & {
        readonly name: "OBVx";
        readonly ordinal: 2;
    };

    static get VAxx(): CaosScriptVarTokenGroup & {
        readonly name: "VAxx";
        readonly ordinal: 3;
    };

    static get OVxx(): CaosScriptVarTokenGroup & {
        readonly name: "OVxx";
        readonly ordinal: 4;
    };

    static get MVxx(): CaosScriptVarTokenGroup & {
        readonly name: "MVxx";
        readonly ordinal: 5;
    };

    static values(): [typeof CaosScriptVarTokenGroup.UNKNOWN, typeof CaosScriptVarTokenGroup.VARx, typeof CaosScriptVarTokenGroup.OBVx, typeof CaosScriptVarTokenGroup.VAxx, typeof CaosScriptVarTokenGroup.OVxx, typeof CaosScriptVarTokenGroup.MVxx];

    static valueOf(value: string): CaosScriptVarTokenGroup;

    readonly name: "UNKNOWN" | "VARx" | "OBVx" | "VAxx" | "OVxx" | "MVxx";

    readonly ordinal: 0 | 1 | 2 | 3 | 4 | 5;

    readonly value: string;
}

export declare namespace CaosScriptVarTokenGroup {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => CaosScriptVarTokenGroup;
    }

    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }

    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor /* implements SerializerFactory */ {
                fromValue(value: string): CaosScriptVarTokenGroup;

                fromText(text: string): CaosScriptVarTokenGroup;

                private constructor();
            }
        }
    }
}

export declare type CaosValuesList = {
    readonly id: number;
    readonly name: string;
    readonly values: Array<ValuesListValue>;
    readonly description: Nullable<string>;
    readonly extensionType: Nullable<string>;
    readonly bitflag: boolean;
}

export declare type ValuesListValue = {
    readonly value: string;
    readonly name: string;
    readonly description: Nullable<string>;
    readonly beforeRegion: Nullable<string>;
    readonly intValue: Nullable<number>;
    readonly negatedValue: boolean;
    readonly greaterThanValue: boolean;
}
export declare type Commands = {
    readonly commands: Array<CaosCommand>;
    readonly rvalues: Array<CaosCommand>;
    readonly lvalues: Array<CaosCommand>;
}

export declare class CaosCommand {
    readonly command: string;

    readonly parameters: CaosParameter[];

    readonly isLvalue: boolean;

    readonly isRvalue: boolean;

    readonly isCommand: boolean;

    readonly returnTypeId: number;

    readonly returnTypeName: string;

    readonly variants: string[];

    readonly description: Nullable<string>;

    readonly lvalueName: Nullable<string>;

    readonly returnValuesListIds: Nullable<VariantData<number>>;

    readonly requiresOwnr: number;

    readonly commandGroup: string;

    readonly doifFormat: Nullable<string>;

    readonly requiresCreatureOwnr: boolean;

    readonly tokens: Int32Array;
}

export declare type CaosParameter = {
    readonly index: number;

    readonly name: string;

    readonly typeId: number;

    readonly type: string;

    readonly valuesListId: Nullable<number>;

    readonly valuesListName: Nullable<string>;

    readonly valuesList: Nullable<CaosValuesList>;
}

export declare class VariantData<T> {
    readonly C1: Nullable<T>;

    readonly C2: Nullable<T>;

    readonly CV: Nullable<T>;

    readonly C3: Nullable<T>;

    readonly DS: Nullable<T>;

    readonly SM: Nullable<T>;
}

export declare namespace VariantData {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new <T>() => VariantData<T>;
    }
}

export declare function getCommandsForVariant(variant: GameVariant): Commands;

export declare function getValuesList(id: number): Nullable<CaosValuesList>;

export declare function getAllValuesLists(variant: GameVariant): CaosValuesList[];

export declare function getValueTypeName(typeId: number): Nullable<string>;