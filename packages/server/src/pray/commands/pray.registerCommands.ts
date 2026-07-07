import {Log} from "../../ConnLogger.js";
import {ExecuteCommandParams} from "vscode-languageserver-protocol";


declare type CommandHandler = (params: ExecuteCommandParams) => Promise<unknown>;

const commandMap: Record<string, CommandHandler> = {
}


export async function handleCommandPray(params: ExecuteCommandParams): Promise<unknown> {
    if (typeof commandMap[params.command] === "undefined") {
        return null;
    }
    try {
        return await commandMap[params.command](params);
    } catch(e) {
        Log.e(`Failure in PRAY command <${params.command}>; ${e}`);
        return {status: "error", message: `Failure in PRAY command <${params.command}>; ${e}`}
    }
}


export function registerCommandsPray(): string[] {
    return Object.keys(commandMap);
}