import vscode from "vscode";
import {pushDisposable} from "../disposables.js";
import type {GameVariant} from "@creatures-lsp/caos-util";


export function registerSetVariantCECommand() {
    pushDisposable(vscode.commands.registerCommand('caos.enableCommunityEditionCommands', _setVariant));
}

async function _setVariant() {
    // 1. Get the configuration target workspace
    const config = vscode.workspace.getConfiguration();
    
    try {
        // 2. Update the setting at the Workspace level (.vscode/settings.json)
        // Third argument target: ConfigurationTarget.Workspace
        await config.update("caosScript.variant", "DS:CE", vscode.ConfigurationTarget.Workspace);
        vscode.window.showInformationMessage(`Project variant updated to DS: Community Edition`);
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to update project variant to DS: Community Edition. ${error}`);
    }
}