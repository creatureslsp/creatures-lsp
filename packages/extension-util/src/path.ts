import type {DocumentUri} from "vscode-languageserver";
import type {FileNameData, Nullable} from "./types.js";

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

/**
 * Pure-JS equivalent of Node's `path.relative(from, to)`, for browser
 * consumers that can't depend on the Node `path` builtin. Simplified: it
 * splits on path separators and diffs common leading segments, without
 * resolving "." / ".." segments within the inputs first (Node's version
 * calls path.resolve() on each argument before diffing). Sufficient for
 * comparing already-normalized project-relative paths.
 */
export function relative(from: string, to: string): string {
    const normalize = (p: string): string[] =>
        p.split(/[\\/]+/).filter(segment => segment.length > 0 && segment !== ".");

    const fromParts = normalize(from);
    const toParts = normalize(to);

    let commonLength = 0;
    const maxCommon = Math.min(fromParts.length, toParts.length);
    while (commonLength < maxCommon && fromParts[commonLength] === toParts[commonLength]) {
        commonLength++;
    }

    const upCount = fromParts.length - commonLength;
    const downParts = toParts.slice(commonLength);

    return [...Array(upCount).fill(".."), ...downParts].join("/");
}

export function extname(filename: string): Nullable<string> {
    const path = filename.split(/[\\\/]+/).pop();
    if (!path || !path?.includes(".")) {
        return null;
    }
    const parts = path.split(".");
    if (parts.length > 1) {
        return "." + parts.pop();
    }
    
    if (parts.length === 1 && parts[0] && parts[0][0] === '.') {
        return "." + parts[0];
    }
    return null;
}