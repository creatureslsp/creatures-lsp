import {extname} from "./path";
import type {DocumentUri} from "vscode-languageserver-types";
import type {Nullable} from "./types";
import {getArrayAccessFileNameIndex} from "./array-access-filename";

export function filterByExtension(filesInProject: string[], extensions: Nullable<string[]>) {
    // Filter out blank paths
    extensions = extensions
        ?.filter(ext => ext && ext.length > 0);
    
    // If null or no extensions
    if (extensions == null || extensions.length == 0) {
        return filesInProject;
    }
    
    extensions = extensions
        .map(ext => {
            ext = ext.toLowerCase();
            if (ext[0] != '.') {
                ext = '.' + ext;
            }
            return ext;
        });
    
    return filesInProject
        .filter(file => {
            const ext = extname(file)
                ?.toLowerCase();
            return ext != null && extensions!.indexOf(ext) >= 0;
        });
}

export function getFileName(path: string): Nullable<string> {
    if (path.trim().length == 0 || path.trim() === "/" || path.trim() === "\\") {
        return null;
    }
    const components = path.split(/[/\\]/);
    const fileName = components.pop()!;
    if (fileName.trim().length === 0) {
        return null;
    }
    return fileName;
}


export function getFileNameWithoutExtensions(path: string): Nullable<string> {
    const fileName = getFileName(path);
    if (!fileName || fileName.trim().length === 0) {
        return null;
    }
    const lastDot = fileName.lastIndexOf(".");
    if (lastDot < 0) {
        return fileName;
    }
    return fileName.substring(0, lastDot);
}


export function getExtension(value: string, notLowerCased: boolean = false): Nullable<string> {
    let extension: Nullable<string>;
    if (value.indexOf('[') < 0) {
        extension = extname(value);
    } else {
        const [fileName] = getArrayAccessFileNameIndex(value) ?? [null];
        if (fileName == null || fileName.trim().length === 0) {
            return null;
        }
        extension = extname(fileName);
    }
    
    if (extension == null) {
        return null;
    }
    
    if (extension.length > 0 && extension[0] === '.') {
        extension = extension.substring(1);
    }
    
    extension = extension.trim();
    
    if (extension.length === 0) {
        return null;
    }
    
    return notLowerCased ? extension : extension.toLowerCase();
}

export function hasExtension(value: string, ...extensions: string[]): boolean {
    const extension = getExtension(value);
    if (!extension) {
        return false;
    }
    if (!value.trim()) {
        return false;
    }
    for (const ext of extensions) {
        if (ext && ext[0] === "." && ("." + extension) === ext.toLowerCase()) {
            return true;
        } else if (extension === ext.toLowerCase()) {
            return true;
        }
    }
    return false;
}

export function trimLeadingSlashOnFileScheme(workspaceUri: DocumentUri): DocumentUri {
    if (!workspaceUri || workspaceUri[0] !== "/") {
        return workspaceUri;
    }
    let out = workspaceUri.replace(/^\/([a-zA-Z]+):/i, "$1:");
    if (out.indexOf("file:") === 0 && out.indexOf("file://") !== 0) {
        out = "file://" + out.substring(5)
    }
    if (out && out[0] === "/" && out.indexOf(":") >= 0) {
        throw new Error("Failed to trim leading slash in " + workspaceUri + "; Result: " + out);
    }
    return out;
}

export function trimFileSchemePrefix(workspaceUri: DocumentUri): DocumentUri {
    return workspaceUri.replace(/^\/?file:\/{1,2}/i, "");
}

export function formatUriForRead(file: DocumentUri): string {
    if (!file.match(/%[a-fA-F0-9]{2}/ig)?.length) {
        return file;
    }
    return decodeURIComponent(file);
}

export function toFileUri(uri: string): string {
    if (uri.toLowerCase().indexOf("file://") === 0) {
        return uri;
    }
    return "file://" + uri.split(/[\/\\]/).map(encodeURIComponent).join("/");
}