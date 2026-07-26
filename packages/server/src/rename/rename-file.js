import { renameFileReferencesInCaosDocument } from "../caos/caos.update-file-references.js";
import { getFileNameData, getPathSeparator } from "@creatureslsp/extension-util";
import { getFiles, isDirectory, onFileRenamed } from "../files.js";
import { getWorkspaceUriForFile } from "../workspace-folders.js";
import { unpackDocument } from "../document.js";
import { clearIndexForFile } from "../indices/index.file.js";
export async function renameFileOrFolder(oldFile, newFile, edits) {
    if (await isDirectory(oldFile)) {
        if (!(await isDirectory(newFile))) {
            console.error("Trying to rename folder to file; [OldPath=" + oldFile + "; NewPath=" + newFile + "]");
            return;
        }
        await renameFolder(oldFile, newFile, edits);
    }
    else {
        await renameFile(oldFile, newFile, edits);
    }
}
export async function renameFolder(oldFolder, newFolder, edits) {
    const pathSeparator = getPathSeparator(oldFolder) ?? "/";
    if (!oldFolder.endsWith(pathSeparator)) {
        oldFolder += pathSeparator;
    }
    newFolder = newFolder.replace(pathSeparator === "/" ? "\\" : "/", pathSeparator);
    if (!newFolder.endsWith(pathSeparator)) {
        newFolder += pathSeparator;
    }
    for (const workspaceUri of getWorkspacesForEdits(oldFolder, newFolder)) {
        const oldFolderLowercase = oldFolder.toLowerCase();
        const allFiles = await getFiles(workspaceUri);
        for (const oldPath of allFiles) {
            const index = oldPath.toLowerCase()
                .indexOf(oldFolderLowercase);
            if (index < 0) {
                continue;
            }
            const newPath = newFolder + oldPath.substring(index);
            await renameFile(oldPath, newPath, edits);
        }
    }
}
async function renameFile(oldFile, newFile, edits) {
    clearIndexForFile(oldFile);
    clearIndexForFile(newFile);
    const oldFileNameData = getFileNameData(oldFile);
    const newFileNameData = getFileNameData(newFile);
    if (oldFileNameData == null || newFileNameData == null) {
        return;
    }
    for (const workspace of getWorkspacesForEdits(oldFile, newFile)) {
        await renameInWorkspace(workspace, oldFileNameData, newFileNameData, edits);
    }
    await onFileRenamed(oldFile, newFile);
}
async function renameInWorkspace(workspaceUri, oldFileNameData, newFileNameData, edits) {
    const allFiles = await getFiles(workspaceUri, ["cos", "caos"]);
    for (const documentUri of allFiles) {
        await renameInFile(documentUri, oldFileNameData, newFileNameData, edits);
    }
}
async function renameInFile(documentUri, oldFileNameData, newFileNameData, edits) {
    const document = await unpackDocument(documentUri);
    renameFileReferencesInCaosDocument(document, oldFileNameData, newFileNameData, edits);
}
function getWorkspacesForEdits(oldPath, newPath) {
    const workspaces = [];
    const oldFileWorkspace = getWorkspaceUriForFile(oldPath);
    if (oldFileWorkspace != null) {
        workspaces.push(oldFileWorkspace);
    }
    const newFileWorkspace = getWorkspaceUriForFile(newPath);
    if (newFileWorkspace != null && newFileWorkspace.toLowerCase() != oldFileWorkspace.toLowerCase()) {
        workspaces.push(newFileWorkspace);
    }
    return workspaces;
}
