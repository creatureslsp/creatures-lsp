import {Uri, workspace, WorkspaceFolder} from "vscode";
import {Nullable, trimFileSchemePrefix} from "@creatureslsp/extension-util";
import {pushDisposable} from "./disposables.js";
import {DocumentUri} from "vscode-languageserver";

let _sortedWorkspaceFolders: Nullable<string[]>;


pushDisposable(workspace.onDidChangeWorkspaceFolders(() => _sortedWorkspaceFolders = null));

export function getWorkspaceFolderForFile(file: DocumentUri): Nullable<string> {
    file = trimFileSchemePrefix(file.toLowerCase());
    return getSortedWorkspaceFolders(true)
        .find(folder => trimFileSchemePrefix(folder).toLowerCase().indexOf(file) === 0);
}

export function getOuterMostWorkspaceFolder(folder: WorkspaceFolder): WorkspaceFolder {
    const sorted = getSortedWorkspaceFolders();
    for (const element of sorted) {
        let uri = folder.uri.toString();
        if (uri.charAt(uri.length - 1) !== "/") {
            uri = uri + "/";
        }
        if (uri.startsWith(element)) {
            return workspace.getWorkspaceFolder(Uri.parse(element))!;
        }
    }
    return folder;
}

function getSortedWorkspaceFolders(reversed: boolean = false): string[] {
    if (_sortedWorkspaceFolders != null) {
        if (reversed) {
            return [..._sortedWorkspaceFolders].reverse();
        } else {
            return _sortedWorkspaceFolders;
        }
    }
    const workspaceFolders = workspace.workspaceFolders;
    if (workspaceFolders == null || workspaceFolders.length === 0) {
        return [];
    }
    const workspaceFolderPaths = workspaceFolders
        .map(folder => {
            let result = folder.uri.toString();
            if (result.charAt(result.length - 1) !== "/") {
                result = result + "/";
            }
            return result;
        });
    
    workspaceFolderPaths.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return b.localeCompare(a);
    });
    _sortedWorkspaceFolders = workspaceFolderPaths;
    
    if (reversed) {
        return [...workspaceFolderPaths].reverse();
    }
    
    return workspaceFolderPaths;
}
