import {type CaosSettings, getCaosDocumentSettings, getGlobalCaosSettings} from "./settings.js";
import {
    type Argument,
    parseCaos,
} from "@creatures-lsp/caos-kt/caos-parser";
import {
    type CaosCommand
} from "@creatures-lsp/caos-kt/caos-libs";
import {Nullable} from "@creatures-lsp/extension-util"
import {tok} from "@creatures-lsp/caos-util";
import {NamedVarPrefix} from "@creatures-lsp/caos-util";
import {WorkspaceScopedObject} from "../workspace-scoped-object.js";
import {getWorkspaceUriForFile} from "../workspace-folders.js";
import {DocumentUri} from "vscode-languageserver";
import {Log} from "../ConnLogger.js";


const recent: WorkspaceScopedObject<DocumentUri, number[]> = new WorkspaceScopedObject<DocumentUri, number[]>({}, () => []);
const used: WorkspaceScopedObject<number, number> = new WorkspaceScopedObject<number, number>()
const namedVariables: WorkspaceScopedObject<NamedVarPrefix, string[]> = new WorkspaceScopedObject<NamedVarPrefix, string[]>();

const updateRecentTimeouts: { [documentUri: string]: NodeJS.Timeout } = {};
const refreshTimeout: number = 300;

export async function updateRecentCommandsInDocument(workspaceUri: Nullable<DocumentUri>, documentUri: DocumentUri, text: string, force: boolean = false) {
    
    if (typeof updateRecentTimeouts[documentUri] !== "undefined") {
        clearTimeout(updateRecentTimeouts[documentUri]);
    }
    
    if (workspaceUri == null || workspaceUri.trim().length === 0) {
        workspaceUri = getWorkspaceUriForFile(documentUri);
    }
    
    updateRecentTimeouts[documentUri] = setTimeout(() => _updateRecentCommandsInDocument(workspaceUri!, documentUri, text, force), refreshTimeout);
}

async function _updateRecentCommandsInDocument(workspaceUri: DocumentUri, documentUri: DocumentUri, text: string, force: boolean = false) {
    
    // Only index first run if requested
    if (recent.hasOwnProperty(documentUri) && !force) {
        return;
    }
    let settings = await (getCaosDocumentSettings(documentUri) as Promise<CaosSettings>)
        .catch(e => {
            Log.e(`Failed to get document settings in completions-cache::_updateRecentCommandsInDocument; ${e}`);
            return getGlobalCaosSettings();
        });
    const variant = settings.variant ?? 'DS';
    if (parseCaos == null) {
        console.error("parseCaos is null");
        return;
    }
    const result = parseCaos(variant, text);
    if (result == null) {
        return;
    }
    
    if (namedVariables.containsWorkspace(workspaceUri)) {
        namedVariables.deleteWorkspace(workspaceUri);
    }
    
    for (const call of result.commandCalls) {
        updateRecent(workspaceUri, documentUri, call.command, call.arguments);
    }
}

// noinspection JSUnusedLocalSymbols
export function updateRecent(workspaceUri: DocumentUri, documentUri: string, command: Nullable<CaosCommand>, _args: Argument[]): void {
    const commandString = command?.command?.toLowerCase()
    
    if (commandString == null) {
        return;
    }
    const commandFirstToken = commandString?.substring(0, 4);
    
    
    const token = <number>tok(commandFirstToken);
    const recentForDocument = recent.get(workspaceUri, documentUri, [])!;
    const previousIndex = recentForDocument.indexOf(token)
    if (previousIndex > 0) {
        recentForDocument.splice(previousIndex, 1);
        recentForDocument.unshift(token);
    }
    
    const usedValue = used.get(workspaceUri, token) ?? 0;
    used.set(workspaceUri, token, usedValue + 1);
}