import { CATALOGUE_LANGUAGE_ID, getCatalogueDocumentSettings } from "./settings.js";
export async function unpackCatalogueDocument(documentUri, text) {
    const settings = await getCatalogueDocumentSettings(documentUri);
    return {
        languageId: CATALOGUE_LANGUAGE_ID,
        documentUri,
        text,
        settings
    };
}
