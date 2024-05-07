import {getDocumentSettings} from "./settings";
import {Argument, collectors, ICaosCommand} from "@bedalton/caos-util";
import {Nullable} from "@bedalton/extension-util"
import {tok} from "@bedalton/caos-util/constants";
import {NamedVarPrefix} from "@bedalton/caos-util/completions";
import {WorkspaceScopedObject} from "./workspace-scoped-object";
import {getWorkspaceUriForFile} from "./workspace-folders";
import {DocumentUri} from "vscode-languageserver";

const parseCaos = collectors?.parseCaos;

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
    const settings = await getDocumentSettings(documentUri);
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
export function updateRecent(workspaceUri: DocumentUri, documentUri: string, command: Nullable<ICaosCommand>, _args: Argument[]): void {
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