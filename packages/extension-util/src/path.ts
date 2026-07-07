import type {DocumentUri} from "vscode-languageserver";
import type {FileNameData, Nullable} from "./types";

export function getPathSeparator(...paths: string[]) {
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

export function isPathAbsolute(uri: DocumentUri): boolean {
    
    if (!uri.length) {
        return false;
    }
    
    if (uri[0] === "/") {
        return true;
    }
    
    return /[a-zA-Z]+:[\\\/]/.test(uri);
}



export function getFileNameData(documentUri: DocumentUri): Nullable<FileNameData> {
    if (!isPathAbsolute(documentUri)) {
        return null;
    }
    const pathSeparator = getPathSeparator(documentUri);
    const components = documentUri.split(pathSeparator ?? /[\\/]/);
    const fileName = components.pop();
    const parent = components.join(pathSeparator ?? "/");
    const fileNameComponents = fileName?.split(".");
    const extension = fileNameComponents?.pop();
    const fileNameWithoutExtension = fileNameComponents?.join(".");
    
    return {
        documentUri,
        fileName,
        fileNameWithoutExtension,
        extension,
        parent,
    } satisfies FileNameData
}

export function extname(filename: string): Nullable<string> {
    const path = filename.split(/[\\\/]+/).pop();
    const parts = path ? path.split(".") : [];
    if (parts.length > 1) {
        return parts.pop();
    }
    return null;
}