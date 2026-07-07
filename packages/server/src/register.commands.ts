import {connection} from './connection.vscode.js';
import type {ExecuteCommandOptions} from "vscode-languageserver-protocol/lib/common/protocol.js";
import {handleCommandCaos, registerCommandsCaos} from "./caos/commands/caos.registerCommands.js";
import {handleCommandPray, registerCommandsPray} from "./pray/commands/pray.registerCommands.js";
import {handleCommandCatalogue, registerCommandsCatalogue} from "./catalogue/commands/catalogue.registerCommands.js";
import {ExecuteCommandParams} from "vscode-languageserver-protocol";

/**
 * Get supported commands
 */
export function registerCommands(): ExecuteCommandOptions  {
    const commands: string[] = [];
    commands.push(...registerCommandsCaos());
    commands.push(...registerCommandsCatalogue());
    commands.push(...registerCommandsPray());
    connection.onExecuteCommand(handleCommand);
    return {
        commands
    }
}


async function handleCommand(params: ExecuteCommandParams) {
    const prefix = params.command.split('/').shift()?.toLowerCase();
    switch (prefix) {
        case "caos":
            return await handleCommandCaos(params);
        case "catalogue":
            return await handleCommandCatalogue(params);
        case "pray":
            return await handleCommandPray(params);
    }
}
