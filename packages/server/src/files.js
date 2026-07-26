import { connection } from "./connection.vscode.js";
import { Disposable } from "vscode-languageserver";
import { FileChangeType } from "vscode-languageserver-protocol/lib/common/protocol.js";
import { WorkspaceScopedSet } from "./workspace-scoped-set.js";
import { getWorkspaceUriForFile } from "./workspace-folders.js";
import { clearIndexForFile, indexFile, pauseIndex, resumeIndex } from "./indices/index.file.js";
import { filterByExtension, isVsCode, trimLeadingSlashOnFileScheme } from "@creatureslsp/extension-util";
import { nextDocumentVersionId, validateDocument } from "./validate.js";
import { fileExistsVsCode, isDirectoryVsCode, listFilesVsCode, readBinaryFileVsCode, readTextFileVsCode, writeBinaryFileVsCode, writeTextFileVsCode } from "./files.vscode.js";
import { fileExistsNode, isDirectoryNode, listFilesNode, readBinaryFileNode, readTextFileNode, writeBinaryFileNode, writeTextFileNode } from "./files.node.js";
import { getLanguageIdFromFileName } from "./document.js";
import { Log } from "./ConnLogger.js";
let sourceFiles = new WorkspaceScopedSet();
export async function getFiles(workspaceUri, extensions) {
    let files = sourceFiles.valuesOrUndefined(workspaceUri);
    if (files == null) {
        files = await rebuildFilesList(workspaceUri);
    }
    return filterByExtension(files, extensions);
}
export async function readTextFile(documentUri) {
    return isVsCode() ? readTextFileVsCode(documentUri) : readTextFileNode(documentUri);
}
export async function readBinaryFile(documentUri) {
    return isVsCode() ? readBinaryFileVsCode(documentUri) : readBinaryFileNode(documentUri);
}
export async function initFileList(workspaceUri) {
    let files = sourceFiles.valuesOrUndefined(workspaceUri);
    if (files != null) {
        return Promise.resolve(files);
    }
    return await rebuildFilesList(workspaceUri);
}
export async function writeTextFile(documentUri, data, encoding = "utf8") {
    return isVsCode() ? writeTextFileVsCode(documentUri, data, encoding) : writeTextFileNode(documentUri, data, encoding);
}
export async function writeBinaryFile(documentUri, data) {
    return isVsCode() ? writeBinaryFileVsCode(documentUri, data) : writeBinaryFileNode(documentUri, data);
}
async function rebuildFilesList(workspaceUri) {
    workspaceUri = trimLeadingSlashOnFileScheme(workspaceUri);
    let out;
    try {
        out = await listFiles(workspaceUri, null);
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to rebuild files list; " + error);
        out = [];
    }
    sourceFiles.set(workspaceUri, out);
    return out;
}
async function listFiles(parent, child) {
    return isVsCode() ? listFilesVsCode(parent, child) : listFilesNode(parent, child);
}
export async function registerFilesWatcher(register) {
    if (!register) {
        return Promise.resolve(Disposable.create(() => null));
    }
    return connection.onDidChangeWatchedFiles(onDidChangeWatchFiles);
}
async function onDidChangeWatchFiles(event) {
    for (const change of event.changes) {
        await handleFileChangeEvent(change);
    }
}
async function handleFileChangeEvent(change) {
    const uri = trimLeadingSlashOnFileScheme(change.uri);
    const workspaceUri = trimLeadingSlashOnFileScheme(getWorkspaceUriForFile(uri));
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
async function onFileCreated(workspaceUri, event) {
    workspaceUri = trimLeadingSlashOnFileScheme(workspaceUri);
    await initFileList(workspaceUri);
    const file = trimLeadingSlashOnFileScheme(event.uri);
    sourceFiles.set(workspaceUri, (files) => {
        if (files.indexOf(file) >= 0) {
            return files;
        }
        files.push(file);
        return files;
    });
    onFileChanged(workspaceUri, event);
}
function onFileChanged(workspaceUri, event) {
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
    });
}
export async function onFileRenamed(oldName, newName) {
    pauseIndex();
    const oldWorkspace = getWorkspaceUriForFile(oldName);
    onFileDeleted(oldWorkspace, oldName);
    const newWorkspace = newName.startsWith(oldWorkspace) ? oldWorkspace : getWorkspaceUriForFile(newName);
    sourceFiles.add(newWorkspace, newName);
    await indexFile(newWorkspace, newName);
    await resumeIndex();
}
export function onFileDeleted(workspaceUri, documentUri) {
    workspaceUri = trimLeadingSlashOnFileScheme(workspaceUri);
    const file = trimLeadingSlashOnFileScheme(documentUri);
    clearIndexForFile(file);
    sourceFiles.delete(workspaceUri, file);
}
function onFileDeletedEvent(workspaceUri, event) {
    onFileDeleted(workspaceUri, event.uri);
}
export function clearFilesForWorkspace(workspaceUri) {
    sourceFiles.deleteWorkspace(trimLeadingSlashOnFileScheme(workspaceUri));
}
export async function isDirectory(path) {
    return isVsCode() ? isDirectoryVsCode(path) : isDirectoryNode(path);
}
export async function fileExists(path) {
    return isVsCode() ? fileExistsVsCode(path) : fileExistsNode(path);
}
export function isFileURINaive(fsPath, requirePrefix = false) {
    if (fsPath.trim().length === 0) {
        return false;
    }
    fsPath = decodeURIComponent(fsPath ?? "")
        .replace("%3A", ":");
    if (fsPath.indexOf(":") && fsPath.indexOf("file:") !== 0) {
        if (requirePrefix) {
            return false;
        }
    }
    const parts = fsPath.split(":", 2);
    return (parts.length === 2 && parts[0] === "file") || (parts.length === 1 && /^([a-z_\-]+:\/|\/).+/.test(fsPath));
}
