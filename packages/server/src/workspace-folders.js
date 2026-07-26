import { clearFilesForWorkspace, initFileList, isDirectory } from "./files.js";
import * as _path from "path";
import { connection } from "./connection.vscode.js";
import { defaultWorkspaceUri, trimLeadingSlashOnFileScheme } from "@creatureslsp/extension-util";
import { revalidateAllFiles } from "./validate.js";
import { clearWorkspaceIndices, initWorkspaceIndices } from "./indices/index.workspace.js";
import { didFinishInit } from "./did-finish-init.js";
import { Log } from "./ConnLogger.js";
import { getCaosDocumentSettings } from "./caos/settings.js";
import { isCaosInjectSupportedForVariant } from "./caos/commands/inject/caos.inject-command.js";
const _workspaceFolderPaths = [];
const _workspaceFolders = [];
let workspaceRevalidateAllTimeout = -1;
const REVALIDATE_ALL_TIMEOUT_DELAY = 400;
let pendingInits = [];
export function registerWorkspaceChangeHandlers() {
    connection.onRequest("vfs:workspace/removed", async (event) => {
        if (typeof event["workspace"] === "undefined" || event.workspace == null) {
            Log.e("Invalid event passed to workspace/removed; Event: " + event.toString());
        }
        removeWorkspaceFolder(trimLeadingSlashOnFileScheme(event.workspace.uri));
    });
    connection.onRequest("vfs:workspace/added", async (event) => {
        if (typeof event["workspace"] === "undefined" || event.workspace == null) {
            Log.e("Invalid event passed to workspace/added; Event: " + event.toString());
        }
        await pushWorkspace(event.workspace);
    });
}
export async function setWorkspaceFolders(workspaceFolders) {
    for (const workspace of workspaceFolders) {
        await pushWorkspace(workspace);
    }
}
export function getWorkspaceUriForFile(documentUri) {
    const documentLower = trimLeadingSlashOnFileScheme(documentUri).toLowerCase();
    return _workspaceFolderPaths
        .find((workspace) => documentLower.indexOf(workspace.toLowerCase()) === 0)
        ?? defaultWorkspaceUri;
}
async function pushWorkspace(workspace) {
    const workspaceFolder = typeof workspace === "string"
        ? { uri: trimLeadingSlashOnFileScheme(workspace), name: _path.basename(workspace) ?? workspace }
        : workspace;
    let workspaceUri = typeof workspace === "string"
        ? workspace
        : trimLeadingSlashOnFileScheme(workspace.uri);
    const index = _workspaceFolders.findIndex(w => trimLeadingSlashOnFileScheme(w.uri) == workspaceUri);
    if (index >= 0) {
        _workspaceFolders.splice(index, 1);
    }
    _workspaceFolders.unshift(workspaceFolder);
    await pushWorkspaceFolder(workspaceUri);
}
async function pushWorkspaceFolder(workspaceUri) {
    workspaceUri = trimLeadingSlashOnFileScheme(workspaceUri);
    if (workspaceUri.trim().length === 0) {
        return;
    }
    if (workspaceUri[workspaceUri.length - 1] !== "/") {
        if (await isDirectory(workspaceUri)) {
            workspaceUri += "/";
        }
    }
    let workspaceUriLower = workspaceUri.toLowerCase();
    if (_workspaceFolderPaths.find(folder => folder.toLowerCase() === workspaceUriLower) != null) {
        return;
    }
    _workspaceFolderPaths.push(workspaceUri);
    await initWorkspace(workspaceUri);
}
// export function getWorkspaceFolders(): string[] {
//     return [..._workspaceFolderPaths];
// }
export function removeWorkspaceFolder(workspaceUri) {
    workspaceUri = trimLeadingSlashOnFileScheme(workspaceUri);
    const workspaceFolderPathIndex = _workspaceFolderPaths.indexOf(workspaceUri);
    if (workspaceFolderPathIndex >= 0) {
        _workspaceFolderPaths.splice(workspaceFolderPathIndex, 1);
    }
    const workspaceIndex = _workspaceFolders.findIndex((workspace) => trimLeadingSlashOnFileScheme(workspace.uri) === workspaceUri);
    if (workspaceIndex >= 0) {
        _workspaceFolders.splice(workspaceIndex, 1);
    }
    clearFilesForWorkspace(workspaceUri);
    clearWorkspaceIndices(workspaceUri);
    clearTimeout(workspaceRevalidateAllTimeout);
    workspaceRevalidateAllTimeout = globalThis.setTimeout(revalidateAllFiles, REVALIDATE_ALL_TIMEOUT_DELAY);
}
async function initWorkspace(workspaceUri) {
    if (didFinishInit()) {
        return await _initWorkspace(workspaceUri);
    }
    const workspaceUriLower = workspaceUri.toLowerCase();
    if (pendingInits.findIndex((otherUri) => otherUri.toLowerCase() == workspaceUriLower) < 0) {
        pendingInits.push(workspaceUri);
    }
    return Promise.resolve();
}
async function _initWorkspace(workspaceUri) {
    console.log("Initializing workspace: " + workspaceUri);
    await initFileList(workspaceUri);
    await initWorkspaceIndices(workspaceUri);
    const settings = await getCaosDocumentSettings(workspaceUri);
    await connection.sendNotification("caos/canInjectCaos", isCaosInjectSupportedForVariant(settings?.variant ?? "DS"));
}
export async function initPendingWorkspaces() {
    const pending = [...pendingInits];
    pendingInits = [];
    for (const workspaceUri of pending) {
        await _initWorkspace(workspaceUri);
    }
}
