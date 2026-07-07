import type {ScriptJectResult} from "@creatures-lsp/caos-util";
import type {Nullable} from "@creatures-lsp/caos-kt";

export const caosJectTcpC2e = async (
    bitmask: number,
    caos: string,
    host: Nullable<string>,
    port: Nullable<number>
): Promise<ScriptJectResult[]> => {
    throw new Error("Cannot inject on WEB target");
}