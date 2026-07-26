import { Uri, workspace } from "vscode";
import { trimFileSchemePrefix } from "@creatureslsp/extension-util";
import { pushDisposable } from "./disposables.js";
let _sortedWorkspaceFolders;
pushDisposable(workspace.onDidChangeWorkspaceFolders(() => _sortedWorkspaceFolders = null));
export function getWorkspaceFolderForFile(file) {
    file = trimFileSchemePrefix(file.toLowerCase());
    return getSortedWorkspaceFolders(true)
        .find(folder => trimFileSchemePrefix(folder).toLowerCase().indexOf(file) === 0);
}
export function getOuterMostWorkspaceFolder(folder) {
    const sorted = getSortedWorkspaceFolders();
    for (const element of sorted) {
        let uri = folder.uri.toString();
        if (uri.charAt(uri.length - 1) !== "/") {
            uri = uri + "/";
        }
        if (uri.startsWith(element)) {
            return workspace.getWorkspaceFolder(Uri.parse(element));
        }
    }
    return folder;
}
function getSortedWorkspaceFolders(reversed = false) {
    if (_sortedWorkspaceFolders != null) {
        if (reversed) {
            return [..._sortedWorkspaceFolders].reverse();
        }
        else {
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
