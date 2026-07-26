import type {Range} from "@creatureslsp/extension-util";

export declare type ScriptType = "install" | "remove" | "event";
export declare type JectStatus = "skipped" | "ok" | "failed" | "conn_failed";

export declare type ScriptJectResult = {
    name: string;
    range: Range;
    type: ScriptType;
    index: number;
    status: JectStatus;
    response: string;
};

export declare type JectResult = {
    status: JectStatus;
    skipped: number;
    errors: string[];
    messages: string[];
    results: ScriptJectResult[];
}