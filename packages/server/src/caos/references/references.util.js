// noinspection ES6MissingAwait
import { WorkDoneProgress } from "vscode-languageserver";
import { Is, isSimilarVariant, } from "@creatureslsp/caos";
import { parseCaos } from "@creatureslsp/caos/parser";
import { caosInitLib } from "./../caos-init-lib.js";
import { getFiles } from "../../files.js";
import { connection } from "../../connection.vscode.js";
import { isCaosDocument, unpackDocument } from "../../document.js";
import { offsetRenameRange } from "@creatureslsp/extension-util/get-workspace-edits";
export async function getAllCommandUsages(workspaceUri, variant, commandString, isCommand, params) {
    commandString = commandString.toUpperCase();
    let files = (await getFiles(workspaceUri, ["cos"]));
    console.log(files);
    const fileCount = files.length;
    const token = params.partialResultToken;
    if (token) {
        connection.sendProgress(WorkDoneProgress.type, token, {
            kind: "begin",
            title: "Find usages of <" + commandString + ">",
            cancellable: false,
            message: "Searched 0 of " + fileCount,
            percentage: 0,
        });
    }
    const onProgress = token ? ((currentI) => {
        connection.sendProgress(WorkDoneProgress.type, token, {
            kind: "report",
            cancellable: false,
            message: "Searched " + currentI + " of " + fileCount,
            percentage: Math.floor((currentI / fileCount) * 100),
        });
    }) : () => {
    };
    const out = {};
    let count = 0;
    for (let i = 0; i < fileCount; i++) {
        const file = files[i];
        const commandCalls = await collectCommandUsagesForFile(file, variant, commandString, isCommand);
        count += commandCalls.length;
        onProgress(i + 1);
        if (commandCalls.length > 0) {
            out[file] = commandCalls;
        }
    }
    if (token) {
        connection.sendProgress(WorkDoneProgress.type, token, {
            kind: "end",
            message: "Found " + count + " usages of " + commandString
        });
    }
    return out;
}
export async function collectCommandUsagesForFile(documentUri, targetVariant, commandUppercase, isCommand) {
    const documentData = await unpackDocument(documentUri);
    if (!documentData) {
        return [];
    }
    if (!isCaosDocument(documentData)) {
        return [];
    }
    caosInitLib();
    const { variant, text } = documentData;
    if (!isSimilarVariant(targetVariant, variant)) {
        return [];
    }
    let parseResult;
    try {
        parseResult = parseCaos(variant, text);
    }
    catch {
        return [];
    }
    let commands;
    if (isCommand) {
        commands = parseResult.commandCalls.filter(c => {
            return c.commandString === commandUppercase;
        });
    }
    else {
        commands = [];
        for (const commandCall of parseResult.commandCalls) {
            collectCommandLRUsages(commandUppercase, commandCall, commands, false);
        }
    }
    return commands;
}
function collectCommandLRUsages(commandStringUpper, command, out, addSelf) {
    if (addSelf && command.commandString === commandStringUpper) {
        out.push(command);
    }
    const args = command.arguments
        .filter((arg) => Is.commandCall(arg));
    for (const commandCall of args) {
        collectCommandLRUsages(commandStringUpper, commandCall, out, true);
    }
}
export function formatCommandToLocation(documentUri, commands, argumentIndex) {
    const out = [];
    /** @var {CommandCall} command */
    for (const command of commands) {
        const args = command.arguments;
        const targetRange = argumentIndex != null && args.length > argumentIndex ? args[argumentIndex].textRange : command.tokenTextRange;
        out.push({
            uri: documentUri,
            range: offsetRenameRange(targetRange),
        });
    }
    return out;
}
