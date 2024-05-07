import {connection} from "./connection.vscode";
import {Nullable} from "@bedalton/extension-util";
import {revalidateAll} from "./validator";
import {CaosSettings, clearDocumentSettings, clientCapabilities, setGlobalSettings} from "./settings";
import {Disposable} from "vscode-languageserver";


export function registerSettingsChangeListener(register: boolean): Nullable<Disposable> {
    if (!register) {
        return;
    }
/// Called on configuration/settings change
/// Invalidates cached settings on change
    return connection.onDidChangeConfiguration(change => {
        if (clientCapabilities.hasConfigurationCapability) {
            // Reset all cached document settings
            clearDocumentSettings()
        } else {
            // noinspection JSUnresolvedReference
            setGlobalSettings(<CaosSettings>change.settings.caosScript);
        }
        revalidateAll();
    });
}

