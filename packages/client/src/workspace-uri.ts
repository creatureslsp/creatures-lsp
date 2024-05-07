import {Nullable} from "@bedalton/extension-util";
import {DocumentUri} from "vscode-languageserver";
import {Uri, workspace} from "vscode";
import {createFileUri} from "./vfs";

export function workspaceUriToString(
    workspaceUri: Nullable<DocumentUri | Uri>,
    documentUri: Nullable<DocumentUri | Uri>,
    defaultValue?: Nullable<string>
): string | undefined {
    let workspaceUriString = uriOrStringToString(workspaceUri);
    if (workspaceUriString) {
        return workspaceUriString;
    }
    const documentUriUri = uriOrStringToUri(workspaceUri)
    if (documentUriUri) {
        return workspace.getWorkspaceFolder(documentUriUri)?.uri?.path;
    }
    return defaultValue ? defaultValue : undefined;
}

function uriOrStringToString(uri: Nullable<DocumentUri | Uri>): string | undefined {
    if (typeof uri === "string") {
        return uri;
    }
    if (uri instanceof Uri) {
        return uri.fsPath
    }
    return undefined;
}

function uriOrStringToUri(uri: Nullable<DocumentUri | Uri>): Uri|undefined {
    if (uri instanceof Uri) {
        return uri
    }
    if (typeof uri === "string") {
        return createFileUri(uri);
    }
    return undefined
}