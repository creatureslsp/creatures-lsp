import {connection} from "./connection.vscode";
import {Disposable, DocumentUri, FileEvent} from "vscode-languageserver";
import * as path from "path";
import {DidChangeWatchedFilesParams} from "vscode-languageserver-protocol";
import {FileChangeType} from "vscode-languageserver-protocol/lib/common/protocol";
import {WorkspaceScopedSet} from "./workspace-scoped-set";
import {clearCaosDocumentIndices} from "./indices/index.caos";
import {getWorkspaceUriForFile} from "./workspace-folders";
import {indexFile} from "./indices/index.file";
import {
    filterByExtension,
    Nullable,
    trimLeadingSlashOnFileSchema,
    VFS_READ_BINARY_FILE_REQUEST,
    VFS_READ_FILE_REQUEST,
    VFS_READDIR_REQUEST, VfsReadBinaryFileRequest, VfsReadDirectoryEvent, VfsReadFileRequest
} from "@bedalton/extension-util";

let sourceFiles: WorkspaceScopedSet<string> = new WorkspaceScopedSet<string>();

export async function getFiles(workspaceUri: DocumentUri, extensions?: Nullable<string[]>): Promise<string[]> {
    let files = sourceFiles.valuesOrUndefined(workspaceUri);
    if (files == null) {
        files = await rebuildFilesList(workspaceUri);
    }
    return filterByExtension(files, extensions);
}

export async function readTextFile(documentUri: string): Promise<string> {
    return connection.sendRequest(VFS_READ_FILE_REQUEST, {
        type: VFS_READ_FILE_REQUEST,
        path: trimLeadingSlashOnFileSchema(documentUri)
    } satisfies VfsReadFileRequest);
}


export async function readBinaryFile(documentUri: string): Promise<Uint8Array> {
    return connection.sendRequest(VFS_READ_BINARY_FILE_REQUEST, {
        type: VFS_READ_BINARY_FILE_REQUEST,
        path: trimLeadingSlashOnFileSchema(documentUri)
    } satisfies VfsReadBinaryFileRequest);
}

export async function initFileList(workspaceUri: DocumentUri): Promise<string[]> {
    let files: Nullable<string[]> = sourceFiles.valuesOrUndefined(workspaceUri)
    if (files != null) {
        return Promise.resolve(files);
    }
    return await rebuildFilesList(workspaceUri);
}

async function rebuildFilesList(workspaceUri: DocumentUri) {
    workspaceUri = trimLeadingSlashOnFileSchema(workspaceUri);
    let out: string[] = await listFiles(workspaceUri, null);
    sourceFiles.set(workspaceUri, out);
    return out;
}

async function listFiles(parent: DocumentUri, child: Nullable<string>): Promise<string[]> {
    parent = trimLeadingSlashOnFileSchema(parent);
    let directory: string;
    
    if (child) {
        child = trimLeadingSlashOnFileSchema(child);
        if (path.isAbsolute(child)) {
            directory = child;
        } else {
            directory = path.join(parent, child);
        }
    } else {
        directory = parent;
    }
    
    return connection.sendRequest(
        VFS_READDIR_REQUEST, {
            type: VFS_READDIR_REQUEST,
            directory
        } satisfies VfsReadDirectoryEvent);
}

export async function registerFilesWatcher(register: boolean): Promise<Disposable> {
    if (!register) {
        console.log("registerFilesWatcher(false)");
        return Promise.resolve(Disposable.create(() => null));
    }
    console.log("Registering file watcher");
    return connection.onDidChangeWatchedFiles(onDidChangeWatchFiles)
}


async function onDidChangeWatchFiles(event: DidChangeWatchedFilesParams) {
    console.log("OnDidChangeWatchFiles: " + JSON.stringify(event));
    for (const change of event.changes) {
        await handleFileChangeEvent(change);
    }
}


async function handleFileChangeEvent(change: FileEvent) {
    const uri = trimLeadingSlashOnFileSchema(change.uri)
    const workspaceUri: Nullable<DocumentUri> = trimLeadingSlashOnFileSchema(getWorkspaceUriForFile(uri));
    
    switch (change.type) {
        case FileChangeType.Created:
            return onFileCreated(workspaceUri, change);
        case FileChangeType.Changed:
            return onFileChanged(workspaceUri, change);
        case FileChangeType.Deleted:
            return onFileDeleted(workspaceUri, change);
        default:
            console.log("Workspace: " + workspaceUri + " change not handled. Event: ", JSON.stringify(change));
            return;
    }
}

async function onFileCreated(workspaceUri: DocumentUri, event: FileEvent): Promise<void> {
    
    workspaceUri = trimLeadingSlashOnFileSchema(workspaceUri);
    
    await initFileList(workspaceUri);
    
    const file = trimLeadingSlashOnFileSchema(event.uri);
    
    console.log("FileCreated: " + file);
    
    sourceFiles.set(workspaceUri, (files: string[]): string[] => {
        if (files!.indexOf(file) >= 0) {
            return files;
        }
        files!.push(file);
        return files;
    });
    
    indexFile(workspaceUri, file)
        .then();
}

function onFileChanged(workspaceUri: DocumentUri, event: FileEvent) {
    workspaceUri = trimLeadingSlashOnFileSchema(workspaceUri);
    const file = trimLeadingSlashOnFileSchema(event.uri);
    console.log("FileChanged: " + file);
    indexFile(workspaceUri, file)
        .then();
}

function onFileDeleted(workspaceUri: DocumentUri, event: FileEvent) {
    workspaceUri = trimLeadingSlashOnFileSchema(workspaceUri);
    const file = trimLeadingSlashOnFileSchema(event.uri);
    clearCaosDocumentIndices(workspaceUri, file);
    sourceFiles.delete(workspaceUri, file);
}

export function clearFilesForWorkspace(workspaceUri: string) {
    sourceFiles.deleteWorkspace(trimLeadingSlashOnFileSchema(workspaceUri));
}