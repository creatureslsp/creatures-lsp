import { CAOS_LANGUAGE_ID, getCaosDocumentSettings, getGlobalCaosSettings } from "./settings.js";
import { Log } from "../ConnLogger.js";
export async function unpackCaosDocument(documentUri, text) {
    const settings = await getCaosDocumentSettings(documentUri)
        .catch(e => {
        Log.e(`Failed to get document settings in unpackCaosDocument; ${e}`);
        return getGlobalCaosSettings();
    });
    return {
        languageId: CAOS_LANGUAGE_ID,
        documentUri,
        text,
        settings,
        variant: settings?.variant ?? 'DS'
    };
}
