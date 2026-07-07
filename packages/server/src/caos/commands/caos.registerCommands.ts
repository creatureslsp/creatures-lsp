import {caosInjectCommand} from "./inject/caos.inject-command.js";
import {Log} from "../../ConnLogger.js";
import {ExecuteCommandParams} from "vscode-languageserver-protocol";


declare type CommandHandler = (params: ExecuteCommandParams) => Promise<unknown>;

const commandMap: Record<string, CommandHandler> = {
    "caos/injectCAOS": caosInjectCommand
}


export async function handleCommandCaos(params: ExecuteCommandParams): Promise<unknown> {
    if (typeof commandMap[params.command] === "undefined") {
        return null;
    }
    try {
        return await commandMap[params.command](params);
    } catch(e) {
        Log.e(`Failure in CAOS command <${params.command}>; ${e}`);
        return {status: "error", message: `Failure in CAOS command <${params.command}>; ${e}`}
    }
}

export function registerCommandsCaos(): string[] {
    return Object.keys(commandMap);
}