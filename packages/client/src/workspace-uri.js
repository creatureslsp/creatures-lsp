import { Uri, workspace } from "vscode";
import { createFileUri } from "./vfs.js";
export function workspaceUriToString(workspaceUri, documentUri, defaultValue) {
    let workspaceUriString = uriOrStringToString(workspaceUri);
    if (workspaceUriString) {
        return workspaceUriString;
    }
    const documentUriUri = uriOrStringToUri(workspaceUri);
    if (documentUriUri) {
        return workspace.getWorkspaceFolder(documentUriUri)?.uri?.path;
    }
    return defaultValue ? defaultValue : undefined;
}
function uriOrStringToString(uri) {
    if (typeof uri === "string") {
        return uri;
    }
    if (uri instanceof Uri) {
        return uri.fsPath;
    }
    return null;
}
function uriOrStringToUri(uri) {
    if (uri instanceof Uri) {
        return uri;
    }
    if (typeof uri === "string") {
        return createFileUri(uri);
    }
    return null;
}
