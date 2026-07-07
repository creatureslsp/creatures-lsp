import {Log} from "../../ConnLogger.js";
import {ExecuteCommandParams} from "vscode-languageserver-protocol";


declare type CommandHandler = (params: ExecuteCommandParams) => Promise<unknown>;

const commandMap: Record<string, CommandHandler> = {
}


export async function handleCommandCatalogue(params: ExecuteCommandParams): Promise<unknown> {
    if (typeof commandMap[params.command] === "undefined") {
        return null;
    }
    try {
        return await commandMap[params.command](params);
    } catch(e) {
        Log.e(`Failure catalogue in command <${params.command}>; ${e}`);
        return {status: "error", message: `Failure in catalogue command <${params.command}>; ${e}`}
    }
}


export function registerCommandsCatalogue(): string[] {
    return Object.keys(commandMap);
}