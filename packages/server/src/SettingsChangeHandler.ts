import {connection} from "./connection.vscode";
import {revalidateAll} from "./validator";
import {CaosSettings, clearDocumentSettings, clientCapabilities, setGlobalSettings} from "./settings";


export function registerSettingsChangeListener() {
/// Called one configuration/settings change
/// Invalidates cached settings on change
    const disposable = connection.onDidChangeConfiguration(change => {
        if (clientCapabilities.hasConfigurationCapability) {
            // Reset all cached document settings
            clearDocumentSettings()
        } else {
            // noinspection JSUnresolvedReference
            setGlobalSettings(<CaosSettings>change.settings.caosScript);
        }
        revalidateAll();
    });
    return disposable;
}

