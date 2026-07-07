import {connection} from "./connection.vscode.js";
import {DocumentUri} from "vscode-languageserver";
import * as path from "path";
import {
    Nullable,
    trimLeadingSlashOnFileScheme, VFS_FILE_EXISTS_REQUEST, VFS_IS_DIRECTORY_REQUEST,
    VFS_READ_BINARY_FILE_REQUEST,
    VFS_READ_FILE_REQUEST,
    VFS_READDIR_REQUEST, VFS_WRITE_BINARY_FILE_REQUEST, VFS_WRITE_FILE_REQUEST, VfsFileRequest,
    VfsReadBinaryFileRequest,
    VfsReadDirectoryEvent,
    VfsReadFileRequest, VfsWriteBinaryFileRequest, VfsWriteFileRequest
} from "@creatures-lsp/extension-util";
import {Log} from "./ConnLogger.js";

export async function readTextFileVsCode(documentUri: string): Promise<string> {
    return connection.sendRequest(VFS_READ_FILE_REQUEST, {
        type: VFS_READ_FILE_REQUEST,
        path: documentUri
    } satisfies VfsReadFileRequest);
}


export async function readBinaryFileVsCode(documentUri: string): Promise<Uint8Array> {
    return connection.sendRequest(VFS_READ_BINARY_FILE_REQUEST, {
        type: VFS_READ_BINARY_FILE_REQUEST,
        path: documentUri
    } satisfies VfsReadBinaryFileRequest);
}

export async function listFilesVsCode(parent: DocumentUri, child: Nullable<string>): Promise<string[]> {
    parent = trimLeadingSlashOnFileScheme(parent);
    let directory: string;
    
    if (child) {
        child = trimLeadingSlashOnFileScheme(child);
        if (path.isAbsolute(child)) {
            directory = child;
        } else {
            directory = path.join(parent, child);
        }
    } else {
        directory = parent;
    }
    
    if (directory.indexOf("/.") >= 0 || directory.indexOf("\\.") >= 0) {
        return [];
    }
    
    try {
        console.log("VSF READ DIRECTORY");
        return await connection.sendRequest(
            VFS_READDIR_REQUEST, {
                type: VFS_READDIR_REQUEST,
                directory
            } satisfies VfsReadDirectoryEvent) as string[];
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to list files called from server; " + error);
        return [];
    }
}

export async function writeTextFileVsCode(documentUri: string, data: string, encoding: "latin1" | "utf-8" | "utf8"): Promise<void> {
    return await connection.sendRequest(VFS_WRITE_FILE_REQUEST, {
        type: VFS_WRITE_FILE_REQUEST,
        path: documentUri,
        data: data,
        encoding: encoding,
    } satisfies VfsWriteFileRequest);
}

export async function writeBinaryFileVsCode(documentUri: string, data: Uint8Array): Promise<void> {
    return await connection.sendRequest(VFS_WRITE_BINARY_FILE_REQUEST, {
        type: VFS_WRITE_BINARY_FILE_REQUEST,
        path: documentUri,
        data: data,
    } satisfies VfsWriteBinaryFileRequest);
}

export async function isDirectoryVsCode(path: DocumentUri): Promise<boolean> {
    return await connection.sendRequest(VFS_IS_DIRECTORY_REQUEST, {
        type: VFS_IS_DIRECTORY_REQUEST,
        path: path
    } satisfies VfsFileRequest);
}

export async function fileExistsVsCode(path: DocumentUri): Promise<boolean> {
    const request: VfsFileRequest = {
        type: VFS_FILE_EXISTS_REQUEST,
        path: path
    };
    const exists = await connection.sendRequest(VFS_FILE_EXISTS_REQUEST, request) as boolean;
    return exists;
}
