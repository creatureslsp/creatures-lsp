import { connection } from "./connection.vscode.js";
import * as path from "path";
import { trimLeadingSlashOnFileScheme, VFS_FILE_EXISTS_REQUEST, VFS_IS_DIRECTORY_REQUEST, VFS_READ_BINARY_FILE_REQUEST, VFS_READ_FILE_REQUEST, VFS_READDIR_REQUEST, VFS_WRITE_BINARY_FILE_REQUEST, VFS_WRITE_FILE_REQUEST } from "@creatureslsp/extension-util";
export async function readTextFileVsCode(documentUri) {
    return connection.sendRequest(VFS_READ_FILE_REQUEST, {
        type: VFS_READ_FILE_REQUEST,
        path: documentUri
    });
}
export async function readBinaryFileVsCode(documentUri) {
    return connection.sendRequest(VFS_READ_BINARY_FILE_REQUEST, {
        type: VFS_READ_BINARY_FILE_REQUEST,
        path: documentUri
    });
}
export async function listFilesVsCode(parent, child) {
    parent = trimLeadingSlashOnFileScheme(parent);
    let directory;
    if (child) {
        child = trimLeadingSlashOnFileScheme(child);
        if (path.isAbsolute(child)) {
            directory = child;
        }
        else {
            directory = path.join(parent, child);
        }
    }
    else {
        directory = parent;
    }
    if (directory.indexOf("/.") >= 0 || directory.indexOf("\\.") >= 0) {
        return [];
    }
    try {
        console.log("VSF READ DIRECTORY");
        return await connection.sendRequest(VFS_READDIR_REQUEST, {
            type: VFS_READDIR_REQUEST,
            directory
        });
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to list files called from server; " + error);
        return [];
    }
}
export async function writeTextFileVsCode(documentUri, data, encoding) {
    return await connection.sendRequest(VFS_WRITE_FILE_REQUEST, {
        type: VFS_WRITE_FILE_REQUEST,
        path: documentUri,
        data: data,
        encoding: encoding,
    });
}
export async function writeBinaryFileVsCode(documentUri, data) {
    return await connection.sendRequest(VFS_WRITE_BINARY_FILE_REQUEST, {
        type: VFS_WRITE_BINARY_FILE_REQUEST,
        path: documentUri,
        data: data,
    });
}
export async function isDirectoryVsCode(path) {
    return await connection.sendRequest(VFS_IS_DIRECTORY_REQUEST, {
        type: VFS_IS_DIRECTORY_REQUEST,
        path: path
    });
}
export async function fileExistsVsCode(path) {
    const request = {
        type: VFS_FILE_EXISTS_REQUEST,
        path: path
    };
    const exists = await connection.sendRequest(VFS_FILE_EXISTS_REQUEST, request);
    return exists;
}
