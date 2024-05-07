import {DocumentUri, WorkspaceFolder} from "vscode-languageserver";
import {clearFilesForWorkspace, initFileList} from "./files";
import * as _path from "path"
import {connection} from "./connection.vscode";
import {clearWorkspaceCaosFileIndex} from "./indices/index.caos";
import {revalidateAll} from "./validator";
import {
    defaultWorkspaceUri,
    trimLeadingSlashOnFileSchema,
    VFS_FILE_EXISTS_REQUEST,
    VFS_IS_DIRECTORY_REQUEST,
    VfsFileRequest
} from "@bedalton/extension-util";

const _workspaceFolderPaths: string[] = [];

const _workspaceFolders: WorkspaceFolder[] = [];

let workspaceRevalidateAllTimeout: number = -1;

const REVALIDATE_ALL_TIMEOUT_DELAY = 400;

export function registerWorkspaceChangeHandlers() {
    connection.onRequest("vfs:workspace/removed",  async (event: {workspace?: WorkspaceFolder}) => {
         if (typeof event["workspace"] === "undefined" || event.workspace == null) {
             console.error("Invalid event passed to workspace/removed; Event: ", event);
         } else {
             console.log("Removing workspace: ", JSON.stringify(event.workspace));
         }
         removeWorkspaceFolder(trimLeadingSlashOnFileSchema(event.workspace!.uri));
    });
    connection.onRequest("vfs:workspace/added", async (event: {workspace?: WorkspaceFolder}) => {
        if (typeof event["workspace"] === "undefined" || event.workspace == null) {
            console.error("Invalid event passed to workspace/added; Event: ", event);
        } else {
            console.log("Adding workspace: ", JSON.stringify(event.workspace));
        }
        await pushWorkspace(event.workspace!);
    });
}

export async function setWorkspaceFolders(workspaceFolders: WorkspaceFolder[]): Promise<void> {
    console.log("SetWorkspaceFolders: " + JSON.stringify(workspaceFolders));
    for (const workspace of workspaceFolders) {
        await pushWorkspace(workspace);
    }
}

export function getWorkspaceUriForFile(documentUri: DocumentUri): DocumentUri {
    const documentLower = trimLeadingSlashOnFileSchema(documentUri).toLowerCase();
    return _workspaceFolderPaths
            .find((workspace: string) => documentLower.indexOf(workspace.toLowerCase()) === 0)
        ?? defaultWorkspaceUri;
}

async function pushWorkspace(workspace: WorkspaceFolder|DocumentUri) {
    
    const workspaceFolder: WorkspaceFolder = typeof workspace === "string"
        ? {uri: trimLeadingSlashOnFileSchema(workspace), name: _path.basename(workspace) ?? workspace}
        : workspace;
    
    let workspaceUri = typeof workspace === "string"
        ? workspace
        : trimLeadingSlashOnFileSchema(workspace.uri);
    
    const index = _workspaceFolders.findIndex(w => trimLeadingSlashOnFileSchema(w.uri) == workspaceUri);
    if (index >= 0) {
        _workspaceFolders.splice(index, 1);
    }
    
    _workspaceFolders.unshift(workspaceFolder);
    if (index < 0) {
        await pushWorkspaceFolder(workspaceUri);
    }
}

async function pushWorkspaceFolder(workspaceUri: DocumentUri): Promise<void> {
    
    workspaceUri = trimLeadingSlashOnFileSchema(workspaceUri);
    
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
    
    await initFileList(workspaceUri);
}

// export function getWorkspaceFolders(): string[] {
//     return [..._workspaceFolderPaths];
// }

export function removeWorkspaceFolder(workspaceUri: string): void {
    workspaceUri = trimLeadingSlashOnFileSchema(workspaceUri);
    
    const workspaceFolderPathIndex = _workspaceFolderPaths.indexOf(workspaceUri);
    if (workspaceFolderPathIndex >= 0) {
        _workspaceFolderPaths.splice(workspaceFolderPathIndex, 1);
    }
    
    const workspaceIndex = _workspaceFolders.findIndex((workspace) => trimLeadingSlashOnFileSchema(workspace.uri) === workspaceUri);
    if (workspaceIndex >= 0) {
        _workspaceFolders.splice(workspaceIndex, 1);
    }
    clearFilesForWorkspace(workspaceUri);
    clearWorkspaceCaosFileIndex(workspaceUri);
    clearTimeout(workspaceRevalidateAllTimeout);
    workspaceRevalidateAllTimeout = self.setTimeout(revalidateAll, REVALIDATE_ALL_TIMEOUT_DELAY);
}


export async function isDirectory(path: DocumentUri): Promise<boolean> {
    return await connection.sendRequest(VFS_IS_DIRECTORY_REQUEST, {
        type: VFS_IS_DIRECTORY_REQUEST,
        path: path
    } satisfies VfsFileRequest);
}

export async function fileExists(path: DocumentUri): Promise<boolean> {
    const request: VfsFileRequest = {
        type: VFS_FILE_EXISTS_REQUEST,
        path: path
    };
    return await connection.sendRequest(VFS_FILE_EXISTS_REQUEST, request);
}

