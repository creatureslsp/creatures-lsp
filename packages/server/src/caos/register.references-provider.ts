// noinspection ES6MissingAwait

import {connection} from "../connection.vscode";
import {Location} from "vscode-languageserver";
import {ReferenceParams} from "vscode-languageserver-protocol";
import {inRange, Nullable} from "@bedalton/extension-util";
import {CaosDocument, unpack} from "../server.utils";
import {collectors, CursorData, ICaosCommand} from "@bedalton/caos-util";
import {getWorkspaceUriForFile} from "../workspace-folders";
import {Is} from "@bedalton/caos-util/is";
import {getJournalFileNameReferences} from "./references/references.journal";
import {getNamedVariableReferences} from "./references/references.named-variable";
import {formatCommandToLocation, getAllCommandUsages} from "./references/references.util";

export function registerCaosReferencesProvider(register: boolean) {
    if (register) {
        console.log("Registering references provider");
        connection.onReferences(onReferences);
    } else {
        console.log("Not registering references provider")
    }
}

async function onReferences(params: ReferenceParams): Promise<Location[]> {
    try {
        return await getRawLocations(params)
    } catch (e) {
        let error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        console.error("Failed to get locations for ", JSON.stringify(params), "Error: ", error);
        return [];
    }
}

async function getRawLocations(params: ReferenceParams): Promise<Location[]> {
    
    const documentUri = params.textDocument.uri;
    
    const workspaceUri = getWorkspaceUriForFile(documentUri);
    
    let document: CaosDocument;
    try {
        document = (await unpack(documentUri)) as CaosDocument;
    } catch {
        return [];
    }
    
    const {text, variant} = document;
    
    const {line, character} = params.position;
    
    const parseResult = collectors.parseCaosNear(variant, text, line, character, false);
    
    let cursor: Nullable<CursorData> = collectors.getCursorPosition(parseResult, line, character, true);
    if (cursor == null) {
        console.log("Cursor null in find references");
        return [];
    }
    
    const closestItem = cursor.closestItem;
    
    const commandDefinition: Nullable<ICaosCommand> = cursor.command;
    if (commandDefinition == null) {
        console.log("Command definition is null in find references");
        return [];
    }
    
    const inRangeCommandCalls = parseResult.commandCalls
        .filter(call => inRange(call.textRange, line, character))
        .sort((a, b) => b.textRange.startIndex - a.textRange.startIndex);
    
    if (inRangeCommandCalls.length === 0) {
        console.log("No in range calls found");
        return [];
    }
    
    const commandCall = inRangeCommandCalls[0];
    
    const commandStringUpper = (commandDefinition as ICaosCommand)!.command.toUpperCase();
    
    const out: Location[] = [];
    
    if (inRange(commandCall.tokenTextRange, line, character)) {
        const commands = await getAllCommandUsages(
            workspaceUri,
            variant,
            commandStringUpper,
            commandDefinition.isCommand,
            params
        );
        
        for (const file in commands) {
            console.log("Cursor null in find references");
            out.push(...formatCommandToLocation(file, commands[file], 0));
        }
        return out;
    }
    console.log("Commands");
    switch (commandStringUpper) {
        case "FILE OOPE":
        case "FILE IOPE":
        case "FILE JDEL":
            return getJournalFileNameReferences(
                workspaceUri,
                variant,
                commandCall,
                closestItem,
            );
        case "GAME":
        case "EAME":
        case "NAME":
        case "MAME":
            if (!Is.c2eStringVal(closestItem)) {
                console.log("Closest item is not a string for find references; Item: ", JSON.stringify(closestItem) );
                return [];
            }
            
            console.log("Getting references for " + commandStringUpper + " variable: " + closestItem.value);
            return getNamedVariableReferences(
                workspaceUri,
                commandStringUpper,
                closestItem.value
            );
        case "READ":
        case "REAN":
        case "REAQ":
            if (!Is.c2eStringVal(closestItem)) {
                return [];
            }
            console.log("Getting references to catalogue");
            return getCatalogueVariableReferences(
                workspaceUri,
                commandStringUpper,
                closestItem
            )
        case "GSUB":
        default:
            console.log("Cannot get references for command " + commandStringUpper);
            return [];
    }
}
