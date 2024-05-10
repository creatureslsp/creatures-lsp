import {connection} from "./connection.vscode";
import {Nullable} from "@bedalton/extension-util";
import {revalidateAll} from "./validator";
import {
    CaosSettings,
    clearDocumentSettings,
    clientCapabilities,
    getGlobalSettings,
    setGlobalSettings
} from "./settings";
import {DidChangeConfigurationNotification, Disposable} from "vscode-languageserver";

export function registerSettingsChangeListener(hasConfigurationCapabilities: boolean): Nullable<Disposable> {
    if (hasConfigurationCapabilities) {
        connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
    return connection.onDidChangeConfiguration(onDidChangeConfiguration);
}


async function onDidChangeConfiguration() {
    const settings: CaosSettings = (await connection.workspace.getConfiguration())?.caosScript;
    if (clientCapabilities.hasConfigurationCapability) {
        // Reset all cached document settings
        clearDocumentSettings()
    }
    // noinspection JSUnresolvedReference
    setGlobalSettings(settings);
    revalidateAll();
}