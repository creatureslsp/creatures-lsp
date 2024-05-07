import {Disposable, FileStat, FileType, Uri, workspace} from "vscode";
import {LanguageClient} from "vscode-languageclient/node";
import {DocumentUri} from "vscode-languageserver";
import {
    Nullable,
    defaultWorkspaceUri,
    isFileExistsEvent,
    isIsDirectoryEvent,
    isIsFileEvent,
    isReadBinaryFileEvent,
    isReadDirectoryRequest,
    isReadFileEvent,
    VFS_FILE_EXISTS_REQUEST,
    VFS_IS_DIRECTORY_REQUEST,
    VFS_IS_FILE_REQUEST,
    VFS_READ_BINARY_FILE_REQUEST,
    VFS_READ_FILE_REQUEST,
    VFS_READDIR_REQUEST,
    VfsReadBinaryFileRequest,
    trimFileSchemaPrefix,
    trimLeadingSlashOnFileSchema
} from "@bedalton/extension-util";
import path from "path";
import {Log} from "./log";

const {fs} = workspace;

export function initVfs(client: LanguageClient): Disposable {
    const listFilesDisposableRegistration: Disposable = client.onRequest(VFS_READDIR_REQUEST, async (event: unknown): Promise<string[]> => {
        if (!isReadDirectoryRequest(event)) {
            throw new Error(
                "Invalid readdir event passed to request \"" + VFS_READDIR_REQUEST + "\"" +
                "; Event: " + JSON.stringify(event)
            );
        }
        const directory = trimLeadingSlashOnFileSchema(event.directory);
        Log.i(directory, "Listing Files for: " + directory)
        return listFiles(directory, null);
    });
    
    const readFileDisposableRegistration: Disposable = client.onRequest(VFS_READ_FILE_REQUEST, async (event: any) => {
        if (!isReadFileEvent(event)) {
            throw new Error("Invalid readfile event passed to request: " + VFS_READ_FILE_REQUEST +
                "; Event: " + JSON.stringify(event)
            );
        }
        const fileUri = createFileUri(trimFileSchemaPrefix(event.path));
        const file = await workspace.openTextDocument(fileUri);
        return file.getText();
    });
    
    
    const readBinaryFileRegistration: Disposable = client.onRequest(VFS_READ_BINARY_FILE_REQUEST, async (event: any) => {
        if (!isReadBinaryFileEvent(event)) {
            throw new Error("Invalid read binary file event passed to request: " + VFS_READ_BINARY_FILE_REQUEST +
                "; Event: " + JSON.stringify(event)
            );
        }
        const fileUri = createFileUri(trimLeadingSlashOnFileSchema((event as VfsReadBinaryFileRequest).path));
        return fs.readFile(fileUri);
    });
    
    const isDirectoryRegistration: Disposable = client.onRequest(VFS_IS_DIRECTORY_REQUEST, async (event: any) => {
        client.info("isDirectory check on client: " + client.name);
        if (!isIsDirectoryEvent(event)) {
            throw new Error("Invalid isDirectory file event passed to request: " + VFS_IS_DIRECTORY_REQUEST +
                "; Event: " + JSON.stringify(event)
            );
        }
        try {
            return await isDirectory(event.path, event.path);
        } catch (e) {
            return false;
        }
    });
    
    const isFileRegistration: Disposable = client.onRequest(VFS_IS_FILE_REQUEST, async (event: any) => {
        if (!isIsFileEvent(event)) {
            throw new Error("Invalid isFile event passed to request: " + VFS_IS_FILE_REQUEST +
                "; Event: " + JSON.stringify(event)
            );
        }
        try {
            return await isFile(event.path, event.path);
        } catch (e) {
            return false;
        }
    });
    
    const fileExistsRegistration: Disposable = client.onRequest(VFS_FILE_EXISTS_REQUEST, async (event: any) => {
        
        if (!isFileExistsEvent(event)) {
            throw new Error("Invalid file exists event passed to request: " + VFS_FILE_EXISTS_REQUEST +
                "; Event: " + JSON.stringify(event)
            );
        }
        
        try {
            const stat = await getStats(event.path, event.path);
            return stat && stat.type !== FileType.Unknown;
        } catch (e) {
            return false;
        }
        
    });
    client.sendRequest("caos/vfs-did-init")
        .then();
    return Disposable.from(
        listFilesDisposableRegistration,
        readFileDisposableRegistration,
        readBinaryFileRegistration,
        isDirectoryRegistration,
        isFileRegistration,
        fileExistsRegistration
    );
}

async function listFiles(parent: DocumentUri | Uri, child?: Nullable<string>): Promise<string[]> {
    
    let uri: Uri = createFileUri(typeof parent === "string" ? parent : parent.fsPath, true);
    const parentAsUri = typeof parent === "string" ? createFileUri(parent) : parent;
    
    if (child && !path.isAbsolute(trimFileSchemaPrefix(child))) {
        uri = createFileUri(path.join(uri.fsPath, ...child.split(/[/\\]/)));
        Log.i(parent, "Child path is not absolute. Combining with parent; Child: " + child + ": Parent: " + parent + "; Result: " + uri.fsPath);
    } else {
        Log.i(parent, "Uri: " + uri.fsPath + "; From: " + parent);
    }
    
    if (uri.path === defaultWorkspaceUri) {
        Log.i(parent, "Cannot list files in default workspace: " + uri.path);
        return [];
    }
    
    if (!(await isDirectory(trimLeadingSlashOnFileSchema(uri.fsPath), parent))) {
        Log.i(parent, "Is NOT Directory: " + uri.fsPath);
        return [trimLeadingSlashOnFileSchema(uri.fsPath)];
    }
    
    let out: string[] = [];
    
    let contents: Array<[string, FileType]>;
    try {
        contents = (await fs.readDirectory(uri))
    } catch (e) {
        const error = e instanceof Error ? e.message : e;
        Log.e(parent, "Failed to read contents of directory: " + error);
        return [];
    }
    
    for (let [childPathString, type] of contents) {
        Log.i(parent, "Child in path: " + childPathString);
        let childUri: Uri;
        if (!path.isAbsolute(childPathString)) {
            childUri = Uri.joinPath(parentAsUri, ...childPathString.split(/[/\\]/));
        } else {
            childUri = createFileUri(childPathString);
        }
        out.push(trimLeadingSlashOnFileSchema(childUri.path));
        if (type === FileType.Directory) {
            out = out.concat(await listFiles(childUri));
        }
    }
    
    return out;
}


async function isDirectory(path: string | Uri, parent: string | Uri): Promise<boolean> {
    Log.i(parent, "Checking is Directory: " + (typeof path === "string" ? path : path.fsPath));
    return (await getStats(path, parent))?.type === FileType.Directory
}


async function isFile(path: string | Uri, parent: string | Uri): Promise<boolean> {
    Log.i(parent, "Checking is File: " + (typeof path === "string" ? path : path.fsPath));
    return (await getStats(path, parent))?.type === FileType.File
}

async function getStats(path: string | Uri, parent: string | Uri): Promise<Nullable<FileStat>> {
    const uri: Uri = createFileUri(typeof path === "string" ? path : path.fsPath, true);
    try {
        return await fs.stat(uri);
    } catch (e) {
        return null;
    }
}

export function createFileUri(file: Uri | string, withoutSchema: boolean = false): Uri {
    if (typeof file !== "string") {
        return file;
    }
    file = (withoutSchema) ? trimFileSchemaPrefix(file) : trimLeadingSlashOnFileSchema(file);
    return Uri.file(file);
}