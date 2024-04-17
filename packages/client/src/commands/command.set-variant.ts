import vscode from "vscode";
import {pushDisposable} from "../disposables";


export function registerSetVariantCommand() {
    pushDisposable(vscode.commands.registerCommand('caos.setVariant', _setVariant));
}

async function _setVariant() {
    vscode.commands.executeCommand('workbench.action.openSettings', 'caosScript.variant')
}