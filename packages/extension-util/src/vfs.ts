import {DocumentUri} from "vscode-languageserver";

export const VFS_READDIR_REQUEST = "vfs/directory:list";
export const VFS_IS_DIRECTORY_REQUEST = "vfs/file:is-directory"
export const VFS_IS_FILE_REQUEST = "vfs/file:is-file"
export const VFS_FILE_EXISTS_REQUEST = "vfs/file:exists"
export const VFS_READ_FILE_REQUEST = "vfs/file:read-text";
export const VFS_READ_BINARY_FILE_REQUEST = "vfs/file:read-binary";

type VFS_READDIR_REQUEST = typeof VFS_READDIR_REQUEST;

type VFS_READ_FILE_REQUEST = typeof VFS_READ_FILE_REQUEST;

type VFS_READ_BINARY_FILE_REQUEST = typeof VFS_READ_BINARY_FILE_REQUEST;

type VFS_IS_DIRECTORY_REQUEST = typeof VFS_IS_DIRECTORY_REQUEST;

type VFS_IS_FILE_REQUEST = typeof VFS_IS_FILE_REQUEST;

type VFS_FILE_EXISTS_REQUEST = typeof VFS_FILE_EXISTS_REQUEST;

export type VfsRequestType = VFS_READDIR_REQUEST | VFS_READ_FILE_REQUEST | VFS_READ_BINARY_FILE_REQUEST | VFS_IS_DIRECTORY_REQUEST | VFS_IS_FILE_REQUEST | VFS_FILE_EXISTS_REQUEST;


export const defaultWorkspaceUri: DocumentUri = "memoryvfs:/";

export type VfsEvent = {
    readonly type: VfsRequestType;
}

export type VfsDirectoryEvent = VfsEvent & {
    readonly directory: string;
}

export type VfsReadDirectoryEvent = VfsDirectoryEvent & {
    readonly type: VFS_READDIR_REQUEST;
}

// File Requests

export type VfsFileRequest = VfsEvent & {
    readonly path: string;
}

export type VfsReadFileRequest = VfsFileRequest & {
    readonly type: VFS_READ_FILE_REQUEST;
}

export type VfsReadBinaryFileRequest = VfsFileRequest & {
    readonly type: VFS_READ_BINARY_FILE_REQUEST;
}

export type VfsIsDirectoryRequest = VfsFileRequest & {
    readonly type: VFS_IS_DIRECTORY_REQUEST;
}

export function isDirectoryRequest(event: any, eventType: string): event is VfsDirectoryEvent {
    return isVfsEventOfType(event, eventType)
        && typeof (<any>event)["directory"] !== "undefined";
}

export function isReadDirectoryRequest(event: any): event is VfsReadDirectoryEvent {
    return isDirectoryRequest(event, VFS_READDIR_REQUEST);
}

export function isFileEvent(event: any, eventType: string): event is VfsFileRequest {
    return isVfsEventOfType(event, eventType)
        && typeof (<any>event)["path"] === "string";
}

export function isReadFileEvent(event: any): event is VfsReadFileRequest {
    return isFileEvent(event, VFS_READ_FILE_REQUEST);
}

export function isReadBinaryFileEvent(event: any): event is VfsReadBinaryFileRequest {
    return isFileEvent(event, VFS_READ_BINARY_FILE_REQUEST);
}

export function isIsDirectoryEvent(event: any): event is VfsIsDirectoryRequest {
    return isFileEvent(event, VFS_IS_DIRECTORY_REQUEST);
}

export function isIsFileEvent(event: any): event is VfsIsDirectoryRequest {
    return isFileEvent(event, VFS_IS_FILE_REQUEST);
}

export function isFileExistsEvent(event: any): event is VfsIsDirectoryRequest {
    return isFileEvent(event, VFS_FILE_EXISTS_REQUEST);
}

function isVfsEventOfType(event: any, eventType: string): event is VfsEvent {
    return typeof event === "object"
        && typeof event["type"] !== "undefined"
        && event["type"] === eventType;
}

