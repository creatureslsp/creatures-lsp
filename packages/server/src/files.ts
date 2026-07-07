import {connection} from "./connection.vscode.js";
import {Disposable, type DocumentUri, type FileEvent} from "vscode-languageserver";
import type {DidChangeWatchedFilesParams} from "vscode-languageserver-protocol";
import {FileChangeType} from "vscode-languageserver-protocol/lib/common/protocol.js";
import {WorkspaceScopedSet} from "./workspace-scoped-set.js";
import {getWorkspaceUriForFile} from "./workspace-folders.js";
import {clearIndexForFile, indexFile, pauseIndex, resumeIndex} from "./indices/index.file.js";
import {filterByExtension, isVsCode, type Nullable, trimLeadingSlashOnFileScheme} from "@creatures-lsp/extension-util";
import {nextDocumentVersionId, validateDocument} from "./validate.js";
import {
    fileExistsVsCode,
    isDirectoryVsCode,
    listFilesVsCode,
    readBinaryFileVsCode,
    readTextFileVsCode,
    writeBinaryFileVsCode,
    writeTextFileVsCode
} from "./files.vscode.js";
import {
    fileExistsNode,
    isDirectoryNode,
    listFilesNode,
    readBinaryFileNode,
    readTextFileNode,
    writeBinaryFileNode,
    writeTextFileNode
} from "./files.node.js";
import {getLanguageIdFromFileName} from "./document.js";
import {Log} from "./ConnLogger.js";

let sourceFiles: WorkspaceScopedSet<string> = new WorkspaceScopedSet<string>();

export async function getFiles(workspaceUri: DocumentUri, extensions?: Nullable<string[]>): Promise<string[]> {
    let files = sourceFiles.valuesOrUndefined(workspaceUri);
    if (files == null) {
        files = await rebuildFilesList(workspaceUri);
    }
    return filterByExtension(files, extensions);
}

export async function readTextFile(documentUri: string): Promise<string> {
    return isVsCode() ? readTextFileVsCode(documentUri) : readTextFileNode(documentUri);
}

export async function readBinaryFile(documentUri: string): Promise<Uint8Array> {
    return isVsCode() ? readBinaryFileVsCode(documentUri) : readBinaryFileNode(documentUri);
}

export async function initFileList(workspaceUri: DocumentUri): Promise<string[]> {
    let files: Nullable<string[]> = sourceFiles.valuesOrUndefined(workspaceUri)
    if (files != null) {
        return Promise.resolve(files);
    }
    return await rebuildFilesList(workspaceUri);
}

export async function writeTextFile(documentUri: DocumentUri, data: string, encoding: "latin1" | "utf8" | "utf-8" = "utf8"): Promise<void> {
    return isVsCode() ? writeTextFileVsCode(documentUri, data, encoding) : writeTextFileNode(documentUri, data, encoding);
}

export async function writeBinaryFile(documentUri: DocumentUri, data: Uint8Array): Promise<void> {
    return isVsCode() ? writeBinaryFileVsCode(documentUri, data) : writeBinaryFileNode(documentUri, data);
}

async function rebuildFilesList(workspaceUri: DocumentUri) {
    
    workspaceUri = trimLeadingSlashOnFileScheme(workspaceUri);
    
    let out: string[];
    try {
        out  = await listFiles(workspaceUri, null);
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to rebuild files list; " + error);
        out = [];
    }
    sourceFiles.set(workspaceUri, out);
    return out;
}

async function listFiles(parent: DocumentUri, child: Nullable<string>): Promise<string[]> {
    return isVsCode() ? listFilesVsCode(parent, child) : listFilesNode(parent, child);
}

export async function registerFilesWatcher(register: boolean): Promise<Disposable> {
    if (!register) {
        return Promise.resolve(Disposable.create(() => null));
    }
    return connection.onDidChangeWatchedFiles(onDidChangeWatchFiles)
}


async function onDidChangeWatchFiles(event: DidChangeWatchedFilesParams) {
    for (const change of event.changes) {
        await handleFileChangeEvent(change);
    }
}

async function handleFileChangeEvent(change: FileEvent) {
    const uri = trimLeadingSlashOnFileScheme(change.uri)
    const workspaceUri: Nullable<DocumentUri> = trimLeadingSlashOnFileScheme(getWorkspaceUriForFile(uri));
    if (!isFileURINaive(change.uri ?? "")) {
        return;
    }
    switch (change.type) {
        case FileChangeType.Created:
            return onFileCreated(workspaceUri, change);
        case FileChangeType.Changed:
            return onFileChanged(workspaceUri, change);
        case FileChangeType.Deleted:
            return onFileDeletedEvent(workspaceUri, change);
        default:
            return;
    }
}

async function onFileCreated(workspaceUri: DocumentUri, event: FileEvent): Promise<void> {
    
    workspaceUri = trimLeadingSlashOnFileScheme(workspaceUri);
    
    await initFileList(workspaceUri);
    
    const file = trimLeadingSlashOnFileScheme(event.uri);
    
    sourceFiles.set(workspaceUri, (files: string[]): string[] => {
        if (files!.indexOf(file) >= 0) {
            return files;
        }
        files!.push(file);
        return files;
    });
    
    onFileChanged(workspaceUri, event);
}

function onFileChanged(workspaceUri: DocumentUri, event: FileEvent) {
    
    workspaceUri = trimLeadingSlashOnFileScheme(workspaceUri);
    
    const file = trimLeadingSlashOnFileScheme(event.uri);
    
    indexFile(workspaceUri, file)
        .then();
    const languageId = getLanguageIdFromFileName(event.uri);
    if (languageId == null) {
        return;
    }
    validateDocument(file, nextDocumentVersionId(languageId, event.uri))
        .then()
        .catch(e => {
            Log.e(`Failed to validate CAOS document in onFileChange(); ${e}`);
        })
}

export async function onFileRenamed(oldName: DocumentUri, newName: DocumentUri) {
    pauseIndex()
    const oldWorkspace = getWorkspaceUriForFile(oldName);
    onFileDeleted(oldWorkspace, oldName);
    const newWorkspace = newName.startsWith(oldWorkspace) ? oldWorkspace : getWorkspaceUriForFile(newName);
    sourceFiles.add(newWorkspace, newName);
    await indexFile(newWorkspace, newName);
    await resumeIndex()
}

export function onFileDeleted(workspaceUri: DocumentUri, documentUri: DocumentUri): void {
    workspaceUri = trimLeadingSlashOnFileScheme(workspaceUri);
    const file = trimLeadingSlashOnFileScheme(documentUri);
    clearIndexForFile(file);
    sourceFiles.delete(workspaceUri, file);
}

function onFileDeletedEvent(workspaceUri: DocumentUri, event: FileEvent) {
    onFileDeleted(workspaceUri, event.uri);
}

export function clearFilesForWorkspace(workspaceUri: string) {
    sourceFiles.deleteWorkspace(trimLeadingSlashOnFileScheme(workspaceUri));
}

export async function isDirectory(path: DocumentUri): Promise<boolean> {
    return isVsCode() ? isDirectoryVsCode(path) : isDirectoryNode(path);
}

export async function fileExists(path: DocumentUri): Promise<boolean> {
    return isVsCode() ? fileExistsVsCode(path) : fileExistsNode(path);
}

export function isFileURINaive(fsPath: string, requirePrefix: boolean = false): boolean {
    
    if (fsPath.trim().length === 0) {
        return false;
    }
    
    fsPath = decodeURIComponent(fsPath ?? "")
        .replace("%3A", ":");
    
    if (fsPath.indexOf(":") && fsPath.indexOf("file:") !== 0) {
        if (requirePrefix) {
            return false
        }
    }
    
    const parts = fsPath.split(":", 2);
    return (parts.length === 2 && parts[0] === "file") || (parts.length === 1 && /^([a-z_\-]+:\/|\/).+/.test(fsPath));
    
}