import { getCaosDocumentSettings, getGlobalCaosSettings } from "./settings.js";
import { parseCaos, } from "@creatureslsp/caos/parser";
import { tok } from "@creatureslsp/caos";
import { WorkspaceScopedObject } from "../workspace-scoped-object.js";
import { getWorkspaceUriForFile } from "../workspace-folders.js";
import { Log } from "../ConnLogger.js";
const recent = new WorkspaceScopedObject({}, () => []);
const used = new WorkspaceScopedObject();
const namedVariables = new WorkspaceScopedObject();
const updateRecentTimeouts = {};
const refreshTimeout = 300;
export async function updateRecentCommandsInDocument(workspaceUri, documentUri, text, force = false) {
    if (typeof updateRecentTimeouts[documentUri] !== "undefined") {
        clearTimeout(updateRecentTimeouts[documentUri]);
    }
    if (workspaceUri == null || workspaceUri.trim().length === 0) {
        workspaceUri = getWorkspaceUriForFile(documentUri);
    }
    updateRecentTimeouts[documentUri] = setTimeout(() => _updateRecentCommandsInDocument(workspaceUri, documentUri, text, force), refreshTimeout);
}
async function _updateRecentCommandsInDocument(workspaceUri, documentUri, text, force = false) {
    // Only index first run if requested
    if (recent.hasOwnProperty(documentUri) && !force) {
        return;
    }
    let settings = await getCaosDocumentSettings(documentUri)
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
export function updateRecent(workspaceUri, documentUri, command, _args) {
    const commandString = command?.command?.toLowerCase();
    if (commandString == null) {
        return;
    }
    const commandFirstToken = commandString?.substring(0, 4);
    const token = tok(commandFirstToken);
    const recentForDocument = recent.get(workspaceUri, documentUri, []);
    const previousIndex = recentForDocument.indexOf(token);
    if (previousIndex > 0) {
        recentForDocument.splice(previousIndex, 1);
        recentForDocument.unshift(token);
    }
    const usedValue = used.get(workspaceUri, token) ?? 0;
    used.set(workspaceUri, token, usedValue + 1);
}
