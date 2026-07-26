// noinspection JSIgnoredPromiseFromCall
import { connection } from "./connection.vscode.js";
import { clientCapabilities } from "./client-capabilities.js";
import { clearCaosDocumentSettings, setGlobalCaosSettings } from "./caos/settings.js";
import { DidChangeConfigurationNotification } from "vscode-languageserver";
import { revalidateAllFiles } from "./validate.js";
import { clearCatalogueDocumentSettings, setGlobalCatalogueSettings } from "./catalogue/settings.js";
import { isCaosInjectSupportedForVariant } from "./caos/commands/inject/caos.inject-command.js";
export function registerSettingsChangeListener(hasConfigurationCapabilities) {
    if (hasConfigurationCapabilities) {
        connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
    return connection.onDidChangeConfiguration(onDidChangeConfiguration);
}
async function onDidChangeConfiguration() {
    const settings = (await connection.workspace.getConfiguration());
    if (clientCapabilities.hasConfigurationCapability) {
        clearCachedDocumentSettings();
    }
    // CAOS
    onDidChangeCaosConfiguration(settings);
    // Catalogue
    onDidChangeCatalogueConfiguration(settings);
    await revalidateAllFiles();
}
function onDidChangeCaosConfiguration(settings) {
    // noinspection JSUnresolvedReference
    setGlobalCaosSettings(settings.caosScript);
    connection.sendNotification("caos/canInjectCaos", isCaosInjectSupportedForVariant(settings.caosScript.variant ?? "DS"));
}
function onDidChangeCatalogueConfiguration(settings) {
    // noinspection JSUnresolvedReference
    setGlobalCatalogueSettings(settings.catalogue);
}
function clearCachedDocumentSettings() {
    clearCaosDocumentSettings();
    clearCatalogueDocumentSettings();
}
