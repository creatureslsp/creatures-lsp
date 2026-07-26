// The example settings
import { connection } from "../connection.vscode.js";
import { clientCapabilities } from "../client-capabilities.js";
export const CATALOGUE_LANGUAGE_ID = 'creatures-catalogue';
// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings = {
    maxNumberOfProblems: 1000,
    formatting: {
        newLineChar: "\n"
    }
};
let globalSettings = defaultSettings;
// Cache the settings of all open documents
let documentSettings = new Map();
/**
 * Get the settings for this resource, or the global default if no setting
 * @param resource
 */
export function getCatalogueDocumentSettings(resource) {
    if (!clientCapabilities.hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource
        });
        if (!result) {
            result = connection.workspace.getConfiguration();
        }
        documentSettings.set(resource, result);
    }
    return new Promise(async (resolve) => {
        try {
            const clientConfig = await result;
            const config = (clientConfig?.creaturesCatalogue ?? globalSettings);
            config.minimumParameterCount = config.minimumParameterCount ?? config?.inlayHints?.parameterHints.minimumParameterCountForParameterInlayHints ?? 3;
            if (config.formatting == null) {
                config.formatting = {};
            }
            resolve(config);
        }
        catch (e) {
            resolve(globalSettings);
        }
    });
}
export function deleteCatalogueDocumentSettings(documentUri) {
    return documentSettings.delete(documentUri);
}
export function clearCatalogueDocumentSettings() {
    documentSettings.clear();
}
export function setGlobalCatalogueSettings(newSettings) {
    globalSettings = (newSettings || defaultSettings || globalSettings);
}
export function getGlobalCatalogueSettings() {
    return globalSettings;
}
