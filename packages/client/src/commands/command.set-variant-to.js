import vscode from "vscode";
import { pushDisposable } from "../disposables.js";
export function registerSetVariantToCommand() {
    pushDisposable(vscode.commands.registerCommand('caos.setVariantTo', _setVariantTo));
}
const _setVariantTo = async () => {
    const quickPick = vscode.window.createQuickPick();
    quickPick.items = [
        { label: 'C1', description: 'Creatures 1' },
        { label: 'C2', description: 'Creatures 2' },
        { label: 'CV', description: 'Creatures Village' },
        { label: 'C3', description: 'Creatures 3' },
        { label: 'DS', description: 'Docking Station' },
        { label: 'DS:CE', description: 'DS: Community Edition' },
        { label: 'SM', description: 'Sea Monkeys' },
    ];
    quickPick.canSelectMany = false;
    quickPick.onDidAccept(async () => {
        const picked = quickPick.selectedItems ? quickPick.selectedItems[0] : null;
        quickPick.dispose();
        const variant = picked?.label;
        if (!variant) {
            return;
        }
        // 1. Get the configuration target workspace
        const config = vscode.workspace.getConfiguration();
        try {
            // 2. Update the setting at the Workspace level (.vscode/settings.json)
            // Third argument target: ConfigurationTarget.Workspace
            await config.update("caosScript.variant", variant, vscode.ConfigurationTarget.Workspace);
            vscode.window.showInformationMessage(`Project variant updated to ${picked?.description ?? (variant === "DS:CE" ? "DS: Community Edition" : variant)}`);
        }
        catch (error) {
            vscode.window.showErrorMessage(`Failed to update project variant to ${variant}: ${error}`);
        }
    });
    quickPick.show();
};
