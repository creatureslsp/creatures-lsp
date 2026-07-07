// The example settings
import {connection} from "../connection.vscode.js";
import type {Nullable} from "@creatures-lsp/extension-util";
import {clientCapabilities} from "../client-capabilities.js";

export const CATALOGUE_LANGUAGE_ID = 'creatures-catalogue';

export interface CatalogueSettings {
    maxNumberOfProblems: number;
    formatting: CatalogueServerFormatSettings
    
    [id: string]: any;
}

export interface CatalogueServerFormatSettings {
    blankLinesBetweenValues?: Nullable<number>;
    blankLinesBetweenEntries?: Nullable<number>;
    insertFinalNewline?: Nullable<boolean>;
    trimFinalNewlines?: Nullable<boolean>;
    newLineChar?: Nullable<string>;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: CatalogueSettings = {
    maxNumberOfProblems: 1000,
    formatting: {
        newLineChar: "\n"
    }
};

let globalSettings: CatalogueSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<{ creaturesCatalogue?: Nullable<CatalogueSettings> }>> = new Map();


/**
 * Get the settings for this resource, or the global default if no setting
 * @param resource
 */
export function getCatalogueDocumentSettings(resource: string): Thenable<CatalogueSettings> {
    if (!clientCapabilities.hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource
        });
        if (!result) {
            result = connection.workspace.getConfiguration()
        }
        documentSettings.set(resource, result!);
    }
    return new Promise(async (resolve) => {
        try {
            const clientConfig = await result;
            const config: CatalogueSettings & {
                [key: string]: any
            } = (clientConfig?.creaturesCatalogue ?? globalSettings)
            config.minimumParameterCount = config.minimumParameterCount ?? config?.inlayHints?.parameterHints.minimumParameterCountForParameterInlayHints ?? 3
            if (config.formatting == null) {
                config.formatting = {};
            }
            resolve(config);
        } catch (e) {
            resolve(globalSettings);
        }
    });
}

export function deleteCatalogueDocumentSettings(documentUri: string): boolean {
    return documentSettings.delete(documentUri)
}

export function clearCatalogueDocumentSettings() {
    documentSettings.clear();
}

export function setGlobalCatalogueSettings(newSettings: Nullable<CatalogueSettings>) {
    globalSettings = <CatalogueSettings>(newSettings || defaultSettings || globalSettings);
}

export function getGlobalCatalogueSettings(): CatalogueSettings {
    return globalSettings;
}