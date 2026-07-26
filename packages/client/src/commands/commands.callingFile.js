import vscode, { workspace } from "vscode";
import { createFileUri } from "../vfs.js";
export const getCallingFile = (uri) => {
    // 1. Check if the command was triggered via a context menu click (Explorer or Editor Tab)
    let targetUri = uri;
    // 2. Fallback to the active open file if triggered via Command Palette or Keyboard Shortcut
    if (!targetUri) {
        targetUri = vscode.window.activeTextEditor?.document.uri;
    }
    // 3. Process the file path if a target was found
    if (targetUri) {
        return targetUri;
    }
    else {
        return null;
    }
};
export const getCallingFileText = async (uri) => {
    uri = uri ?? getCallingFile(uri);
    if (vscode.window.activeTextEditor?.document.uri?.fsPath === uri.fsPath) {
        return vscode.window.activeTextEditor?.document.getText();
    }
    const fileUri = createFileUri(uri.fsPath);
    const file = await workspace.openTextDocument(fileUri);
    return file.getText();
};
