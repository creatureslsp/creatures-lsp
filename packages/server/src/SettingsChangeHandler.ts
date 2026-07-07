// noinspection JSIgnoredPromiseFromCall

import {connection} from "./connection.vscode.js";
import type {Nullable} from "@creatures-lsp/extension-util";
import {clientCapabilities} from "./client-capabilities.js";
import {type CaosSettings, clearCaosDocumentSettings, setGlobalCaosSettings} from "./caos/settings.js";
import {DidChangeConfigurationNotification, Disposable} from "vscode-languageserver";
import {revalidateAllFiles} from "./validate.js";
import {type CatalogueSettings, clearCatalogueDocumentSettings, setGlobalCatalogueSettings} from "./catalogue/settings.js";
import {isCaosInjectSupportedForVariant} from "./caos/commands/inject/caos.inject-command.js";

export function registerSettingsChangeListener(hasConfigurationCapabilities: boolean): Nullable<Disposable> {
    if (hasConfigurationCapabilities) {
        connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
    return connection.onDidChangeConfiguration(onDidChangeConfiguration);
}


async function onDidChangeConfiguration() {
    const settings: { caosScript: CaosSettings, catalogue: CatalogueSettings } = (await connection.workspace.getConfiguration());
    
    if (clientCapabilities.hasConfigurationCapability) {
        clearCachedDocumentSettings()
    }
    
    // CAOS
    onDidChangeCaosConfiguration(settings);
    
    // Catalogue
    onDidChangeCatalogueConfiguration(settings);
    
    await revalidateAllFiles();
}


function onDidChangeCaosConfiguration(settings: {caosScript: CaosSettings}) {
    // noinspection JSUnresolvedReference
    setGlobalCaosSettings(settings.caosScript);
    connection.sendNotification("caos/canInjectCaos", isCaosInjectSupportedForVariant(settings.caosScript.variant ?? "DS"));
}

function onDidChangeCatalogueConfiguration(settings: {catalogue: CatalogueSettings}) {
    // noinspection JSUnresolvedReference
    setGlobalCatalogueSettings(settings.catalogue);
}

function clearCachedDocumentSettings() {
    clearCaosDocumentSettings();
    clearCatalogueDocumentSettings();
}