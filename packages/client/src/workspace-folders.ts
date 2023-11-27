import {Uri, workspace, WorkspaceFolder} from "vscode";
import {Nullable} from "@bedalton/caos-util";
import {pushDisposable} from "./disposables";

let _sortedWorkspaceFolders: Nullable<string[]>;


pushDisposable(workspace.onDidChangeWorkspaceFolders(() => _sortedWorkspaceFolders = null));

export function getOuterMostWorkspaceFolder(folder: WorkspaceFolder): WorkspaceFolder {
    const sorted = getSortedWorkspaceFolders();
    for (const element of sorted) {
        let uri = folder.uri.toString();
        if (uri.charAt(uri.length - 1) !== '/') {
            uri = uri + '/';
        }
        if (uri.startsWith(element)) {
            return workspace.getWorkspaceFolder(Uri.parse(element))!;
        }
    }
    return folder;
}

function getSortedWorkspaceFolders(): string[] {
    if (_sortedWorkspaceFolders == null) {
        _sortedWorkspaceFolders = workspace.workspaceFolders ? workspace.workspaceFolders.map(folder => {
            let result = folder.uri.toString();
            if (result.charAt(result.length - 1) !== '/') {
                result = result + '/';
            }
            return result;
        }).sort(
            (a, b) => {
                return a.length - b.length;
            }
        ) : [];
    }
    return _sortedWorkspaceFolders;
}
