// noinspection ES6MissingAwait

import {DocumentUri, Location, WorkDoneProgress} from "vscode-languageserver";
import {Argument, collectors, CommandCall, GameVariant, ParseResult} from "@bedalton/caos-util";
import {unpack} from "../../server.utils";
import {Nullable} from "@bedalton/extension-util/src/types";
import {Is, isSimilarVariant} from "@bedalton/caos-util/is";
import {ReferenceParams} from "vscode-languageserver-protocol";
import {getFiles} from "../../files";
import {connection} from "../../connection.vscode";



export async function getAllCommandUsages(
    workspaceUri: DocumentUri,
    variant: GameVariant,
    commandString: string,
    isCommand: boolean,
    params: ReferenceParams
): Promise<{ [documentURI: string]: CommandCall[] }> {
    
    commandString = commandString.toUpperCase();
    
    let files: DocumentUri[] = (await getFiles(workspaceUri, ["cos"])) as DocumentUri[];
    const fileCount = files.length;
    
    const token = params.partialResultToken;
    
    if (token) {
        connection.sendProgress(
            WorkDoneProgress.type,
            token,
            {
                kind: "begin",
                title: "Find usages <" + commandString + ">",
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
                    kind: "begin",
                    title: "Find usages <" + commandString + ">",
                    cancellable: false,
                    message: "Searched " + currentI + " of " + fileCount,
                    percentage: Math.floor((currentI / fileCount) * 100),
                }
            )
        }) : () => {
    };
    
    const out: { [documentUri: string]: CommandCall[] } = {};
    
    for (let i = 0; i < fileCount;) {
        const file = files[i];
        const commandCalls: CommandCall[] = await collectCommandUsagesForFile(
            file as DocumentUri,
            variant,
            commandString,
            isCommand,
        );
        onProgress(i + 1);
        out[file] = commandCalls;
    }
    if (token) {
        connection.sendProgress(
            WorkDoneProgress.type,
            token,
            {
                kind: "end",
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
    
    const documentData = await unpack(documentUri);
    if (!documentData) {
        return [];
    }
    
    const {variant, text} = documentData;
    
    if (!isSimilarVariant(targetVariant, variant)) {
        return [];
    }
    
    let parseResult: ParseResult;
    try {
        parseResult = collectors.parseCaos(variant, text);
    } catch {
        return [];
    }
    
    let commands: CommandCall[];
    if (isCommand) {
        commands = parseResult.commandCalls.filter(c => {
            return c.command.command === commandUppercase
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
    
    if (addSelf && command.command.command === commandStringUpper) {
        out.push(command);
    }
    
    const args: CommandCall[] = command.commandArguments
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
        const args: Argument[] = command.commandArguments;
        const targetRange = argumentIndex != null && args.length > argumentIndex ? args[argumentIndex].textRange : command.tokenTextRange;
        out.push({
            uri: documentUri,
            range: targetRange
        } satisfies Location)
    }
    return out;
}
