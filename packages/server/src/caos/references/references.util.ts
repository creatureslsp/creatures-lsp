// noinspection ES6MissingAwait

import {type DocumentUri, type Location, WorkDoneProgress} from "vscode-languageserver";
import {
    Is,
    isSimilarVariant,
} from "@creatures-lsp/caos";
import {
    parseCaos
} from "@creatures-lsp/caos/parser";
import {type GameVariant} from "@creatures-lsp/caos";
import type {
    Argument,
    CaosParseResult,
    CommandCall,
} from "@creatures-lsp/caos/parser";
import {caosInitLib} from "./../caos-init-lib.js";
import {Nullable} from "@creatures-lsp/extension-util";
import {ReferenceParams} from "vscode-languageserver-protocol";
import {getFiles} from "../../files.js";
import {connection} from "../../connection.vscode.js";
import {isCaosDocument, unpackDocument} from "../../document.js";
import {offsetRenameRange} from "@creatures-lsp/extension-util/get-workspace-edits";



export async function getAllCommandUsages(
    workspaceUri: DocumentUri,
    variant: GameVariant,
    commandString: string,
    isCommand: boolean,
    params: ReferenceParams
): Promise<{ [documentURI: string]: CommandCall[] }> {
    
    commandString = commandString.toUpperCase();
    
    let files: DocumentUri[] = (await getFiles(workspaceUri, ["cos"])) as DocumentUri[];
    
    console.log(files);
    const fileCount = files.length;
    
    const token = params.partialResultToken;
    
    if (token) {
        connection.sendProgress(
            WorkDoneProgress.type,
            token,
            {
                kind: "begin",
                title: "Find usages of <" + commandString + ">",
                cancellable: false,
                message: "Searched 0 of " + fileCount,
                percentage: 0,
            }
        )
    }
    
    const onProgress = token ? (
        (currentI: number) => {
            connection.sendProgress(
                WorkDoneProgress.type,
                token,
                {
                    kind: "report",
                    cancellable: false,
                    message: "Searched " + currentI + " of " + fileCount,
                    percentage: Math.floor((currentI / fileCount) * 100),
                }
            )
        }) : () => {
    };
    
    const out: { [documentUri: string]: CommandCall[] } = {};
    let count = 0
    for (let i = 0; i < fileCount; i++) {
        const file = files[i];
        const commandCalls: CommandCall[] = await collectCommandUsagesForFile(
            file as DocumentUri,
            variant,
            commandString,
            isCommand,
        );
        count += commandCalls.length;
        onProgress(i + 1);
        if (commandCalls.length > 0) {
            out[file] = commandCalls;
        }
    }
    
    if (token) {
        connection.sendProgress(
            WorkDoneProgress.type,
            token,
            {
                kind: "end",
                message: "Found " + count + " usages of " + commandString
            }
        );
    }
    return out;
}

export async function collectCommandUsagesForFile(
    documentUri: DocumentUri,
    targetVariant: GameVariant,
    commandUppercase: string,
    isCommand: boolean,
): Promise<CommandCall[]> {
    
    const documentData = await unpackDocument(documentUri);
    if (!documentData) {
        return [];
    }
    
    if (!isCaosDocument(documentData)) {
        return [];
    }
    
    caosInitLib();
    const {variant, text} = documentData;
    
    if (!isSimilarVariant(targetVariant, variant)) {
        return [];
    }
    
    let parseResult: CaosParseResult;
    try {
        parseResult = parseCaos(variant, text);
    } catch {
        return [];
    }
    
    let commands: CommandCall[];
    if (isCommand) {
        commands = parseResult.commandCalls.filter(c => {
            return c.commandString === commandUppercase
        });
    } else {
        commands = [] as CommandCall[];
        for (const commandCall of parseResult.commandCalls) {
            collectCommandLRUsages(
                commandUppercase,
                commandCall,
                commands,
                false
            );
        }
    }
    return commands;
}


function collectCommandLRUsages(
    commandStringUpper: string,
    command: CommandCall,
    out: CommandCall[],
    addSelf: boolean
) {
    
    if (addSelf && command.commandString === commandStringUpper) {
        out.push(command);
    }
    
    const args: CommandCall[] = command.arguments
        .filter((arg: Argument) => Is.commandCall(arg)) as CommandCall[];
    
    for (const commandCall of args) {
        collectCommandLRUsages(commandStringUpper, commandCall, out, true)
    }
}


export function formatCommandToLocation(
    documentUri: DocumentUri,
    commands: CommandCall[],
    argumentIndex: Nullable<number>,
): Location[] {
    const out: Location[] = [];
    /** @var {CommandCall} command */
    for (const command of commands) {
        const args: Argument[] = command.arguments;
        const targetRange = argumentIndex != null && args.length > argumentIndex ? args[argumentIndex].textRange : command.tokenTextRange;
        out.push({
            uri: documentUri,
            range: offsetRenameRange(targetRange),
        } satisfies Location)
    }
    return out;
}
