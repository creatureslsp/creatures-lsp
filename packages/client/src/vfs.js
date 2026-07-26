import { Disposable, FileType, Uri, workspace } from "vscode";
import { defaultWorkspaceUri, formatUriForRead, isFileExistsEvent, isIsDirectoryEvent, isIsFileEvent, isPathAbsolute, isReadBinaryFileEvent, isReadDirectoryRequest, isReadFileEvent, isVsCode, isWriteFileEvent, trimFileSchemePrefix, trimLeadingSlashOnFileScheme, VFS_FILE_EXISTS_REQUEST, VFS_IS_DIRECTORY_REQUEST, VFS_IS_FILE_REQUEST, VFS_READ_BINARY_FILE_REQUEST, VFS_READ_FILE_REQUEST, VFS_READDIR_REQUEST, VFS_WRITE_FILE_REQUEST } from "@creatureslsp/extension-util";
import path from "path";
import { Log } from "./log.js";
import { isWriteBinaryFileEvent, VFS_WRITE_BINARY_FILE_REQUEST } from "@creatureslsp/extension-util/vfs";
const { fs } = workspace;
let didInit = {};
export function initVfs(workspaceUri, client) {
    if (didInit[workspaceUri ?? ""]) {
        return null;
    }
    didInit[workspaceUri ?? ""] = true;
    const listFilesDisposableRegistration = client.onRequest(VFS_READDIR_REQUEST, async (event) => {
        if (!isReadDirectoryRequest(event)) {
            throw new Error("Invalid readdir event passed to request \"" + VFS_READDIR_REQUEST + "\"" +
                "; Event: " + JSON.stringify(event));
        }
        const directory = event.directory;
        if (/(\/.git(\/|$))|(\\\.git(\\|$))/.test(directory) || /.*?(?:[/\\].git[\\/]|[/\\].git$|[/\\].git[\\/]$)/gi.test(directory)) {
            return [];
        }
        try {
            return await listFiles(directory, null);
        }
        catch (e) {
            const error = e instanceof Error ? e.message + "\n" + e.stack : e;
            Log.e(directory, "Failed to list files on client; " + error);
            return [];
        }
    });
    const readFileDisposableRegistration = client.onRequest(VFS_READ_FILE_REQUEST, async (event) => {
        if (!isReadFileEvent(event)) {
            throw new Error("Invalid readfile event passed to request: " + VFS_READ_FILE_REQUEST +
                "; Event: " + JSON.stringify(event));
        }
        const fileUri = createFileUri(event.path);
        const file = await workspace.openTextDocument(fileUri);
        return file.getText();
    });
    const readBinaryFileRegistration = client.onRequest(VFS_READ_BINARY_FILE_REQUEST, async (event) => {
        if (!isReadBinaryFileEvent(event)) {
            throw new Error("Invalid read binary file event passed to request: " + VFS_READ_BINARY_FILE_REQUEST +
                "; Event: " + JSON.stringify(event));
        }
        const fileUri = createFileUri(event.path);
        return fs.readFile(fileUri);
    });
    const writeBinaryFileRegistration = client.onRequest(VFS_WRITE_BINARY_FILE_REQUEST, async (event) => {
        if (!isWriteBinaryFileEvent(event)) {
            throw new Error("Invalid write binary file event passed to request: " + VFS_WRITE_BINARY_FILE_REQUEST +
                "; Event: " + JSON.stringify(event));
        }
        /** @var {VfsWriteBinaryFileRequest} event */
        const fileUri = createFileUri(event.path);
        return fs.writeFile(fileUri, event.data);
    });
    const writeFileRegistration = client.onRequest(VFS_WRITE_FILE_REQUEST, async (event) => {
        if (!isWriteFileEvent(event)) {
            throw new Error("Invalid write file event passed to request: " + VFS_WRITE_FILE_REQUEST +
                "; Event: " + JSON.stringify(event));
        }
        /** @var {VfsWriteFileRequest} event */
        const fileUri = createFileUri(event.path);
        const bytes = Buffer.from(event.data, event.encoding);
        return fs.writeFile(fileUri, Uint8Array.from(bytes));
    });
    const isDirectoryRegistration = client.onRequest(VFS_IS_DIRECTORY_REQUEST, async (event) => {
        if (!isIsDirectoryEvent(event)) {
            throw new Error("Invalid isDirectory file event passed to request: " + VFS_IS_DIRECTORY_REQUEST +
                "; Event: " + JSON.stringify(event));
        }
        try {
            return await isDirectory(event.path, event.path);
        }
        catch (e) {
            return false;
        }
    });
    const isFileRegistration = client.onRequest(VFS_IS_FILE_REQUEST, async (event) => {
        if (!isIsFileEvent(event)) {
            throw new Error("Invalid isFile event passed to request: " + VFS_IS_FILE_REQUEST +
                "; Event: " + JSON.stringify(event));
        }
        try {
            return await isFile(event.path, event.path);
        }
        catch (e) {
            return false;
        }
    });
    const fileExistsRegistration = client.onRequest(VFS_FILE_EXISTS_REQUEST, async (event) => {
        if (!isFileExistsEvent(event)) {
            throw new Error("Invalid file exists event passed to request: " + VFS_FILE_EXISTS_REQUEST +
                "; Event: " + JSON.stringify(event));
        }
        try {
            const stat = await getStats(event.path, event.path);
            if (stat == null) {
                return false;
            }
            return stat && stat.type !== FileType.Unknown;
        }
        catch (e) {
            const error = e instanceof Error ? e.message + "\n" + e.stack : e;
            Log.e(event.path, "Failed to get stats; " + error);
            return false;
        }
    });
    client.sendRequest("caos/vfs-did-init")
        .then();
    return Disposable.from(listFilesDisposableRegistration, readFileDisposableRegistration, readBinaryFileRegistration, isDirectoryRegistration, isFileRegistration, fileExistsRegistration, writeFileRegistration, writeBinaryFileRegistration);
}
async function listFiles(parent, child) {
    let uri = createFileUri(typeof parent === "string" ? parent : parent.fsPath);
    const parentAsUri = typeof parent === "string" ? createFileUri(parent) : parent;
    if (child && !path.isAbsolute(trimFileSchemePrefix(child))) {
        uri = createFileUri(path.join(uri.fsPath, ...child.split(/[/\\]/)));
    }
    if (uri.path === defaultWorkspaceUri) {
        Log.w(parent, "Cannot list files in default workspace: " + uri.path);
        return [];
    }
    if (/(\/\.git(\/|$))|(\\\.git(\\|$))/gi.test(uri.fsPath) || /.*?(?:[/\\].git[\\/]|[/\\].git$|[/\\].git[\\/]$)/gi.test(uri.fsPath)) {
        return [];
    }
    try {
        if (!(await isDirectory(uri.fsPath))) {
            return [trimLeadingSlashOnFileScheme(uri.fsPath)];
        }
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        Log.e(parent, "Failed to check if is directory; " + error);
        return [];
    }
    let out = [];
    let contents;
    try {
        contents = (await fs.readDirectory(uri));
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        Log.e(parent, "Failed to read contents of directory: " + error);
        return [];
    }
    let parentPath = parentAsUri.path;
    const pathSeparator = getPathSeparator(parentPath);
    let parentPathComponents = parentAsUri.path.split(/[/\\]/);
    if (parentPathComponents.length > 1 && parentPathComponents[parentPathComponents.length - 1] === "") {
        parentPathComponents.pop();
    }
    for (let [childPathString, type] of contents) {
        let childUri;
        if (!path.isAbsolute(childPathString)) {
            const childPathSeparator = pathSeparator ?? getPathSeparator(childPathString) ?? "/";
            const file = [
                ...parentPathComponents,
                ...childPathString.split(/[/\\]/)
            ].join(childPathSeparator);
            childUri = createFileUri(file);
        }
        else {
            childUri = createFileUri(childPathString);
        }
        if (/(\/\.git(\/|$))|(\\\.git(\\|$))/gi.test(childUri.fsPath) || /.*?(?:[/\\].git[\\/]|[/\\].git$|[/\\].git[\\/]$)/gi.test(childUri.fsPath)) {
            continue;
        }
        out.push(trimLeadingSlashOnFileScheme(formatUriForRead(childUri.path)));
        if (type === FileType.Directory) {
            out = out.concat(await listFiles(childUri));
        }
    }
    return out;
}
async function isDirectory(path, parent) {
    const type = (await getStats(path, parent))?.type;
    return type != null && (type & FileType.Directory) === FileType.Directory;
}
async function isFile(path, parent) {
    const type = (await getStats(path, parent))?.type;
    return type != null && (type & FileType.File) === FileType.File;
}
async function getStats(path, parent) {
    let uri = createFileUri(typeof path === "string" ? path : path.fsPath, false);
    if (uri.scheme?.toLowerCase() !== "file") {
        return null;
    }
    if (!isPathAbsolute(uri.fsPath)) {
        if (parent == null || !isPathAbsolute(uriOrStringToString(parent))) {
            return null;
        }
        uri = joinUri(parent, path);
    }
    if (!isFileURINaive(uri)) {
        return null;
    }
    try {
        return await fs.stat(uri);
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        Log.e(uri.fsPath, "Failed to stat file: " + uri.fsPath + "; " + error);
        return null;
    }
}
export function createFileUri(file, withoutScheme = !isVsCode()) {
    if (typeof file !== "string") {
        return file;
    }
    let fileUri;
    fileUri = trimFileSchemePrefix(file);
    fileUri = decodeURIComponent(fileUri);
    try {
        return Uri.file(fileUri);
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        Log.e(file, "Failed to create file url for <" + fileUri + ">; From: <" + file + ">; " + error);
        return Uri.file(file);
    }
}
function getPathSeparator(...paths) {
    let isWindows = false;
    let isUnix = false;
    for (const path of paths) {
        if (path.indexOf("\\") >= 0) {
            isWindows = true;
        }
        if (path.indexOf("/") >= 0) {
            isUnix = false;
        }
    }
    if (isWindows && !isUnix) {
        return "\\";
    }
    if (isUnix && !isWindows) {
        return "/";
    }
    return null;
}
export function joinUri(...path) {
    const first = path.pop();
    if (first == null) {
        return null;
    }
    path = path.map(p => {
        if (typeof p !== "string") {
            p = trimFileSchemePrefix(p.fsPath);
        }
        while (p.length && p[0] === "\\" || p[0] === "/") {
            p = p.substring(1);
        }
        return p;
    });
    if (path.map(uriOrStringToString)
        .findIndex(l => isPathAbsolute(l)) >= 0) {
        Log.e(first, "Cannot join multiple absolute paths");
        return null;
    }
    let uri = typeof first === "string" ? createFileUri(first) : first;
    return Uri.joinPath(uri, ...path.map(uriOrStringToString));
}
function uriOrStringToString(uri) {
    return decodeURIComponent(typeof uri === "string" ? uri : uri.fsPath);
}
export function isFileURINaive(uri, requireScheme = false) {
    if (typeof uri === "object" && uri.scheme?.toLowerCase() !== "file") {
        return false;
    }
    let fsPath = typeof uri === "string"
        ? uri
        : (uri.fsPath ?? uri.path);
    if (fsPath.trim().length === 0) {
        return false;
    }
    fsPath = decodeURIComponent(fsPath ?? "")
        .replace("%3A", ":");
    if (fsPath.indexOf(":") && fsPath.indexOf("file:") !== 0) {
        if (requireScheme) {
            return false;
        }
    }
    const parts = fsPath.split(":");
    return (parts.length === 1 && /^(([a-zA-Z_\-]+:(\/\/|\\\\))|\/).+/.test(fsPath)) || (parts.length === 2 && parts[0] === "file");
}
