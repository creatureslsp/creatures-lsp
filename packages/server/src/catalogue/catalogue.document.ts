import {CATALOGUE_LANGUAGE_ID, type CatalogueSettings, getCatalogueDocumentSettings} from "./settings.js";
import type {Nullable} from "@creatureslsp/extension-util";
import type {CreaturesDocument} from "../document.js";
import type {DocumentUri} from "vscode-languageserver";

export type CatalogueDocument = CreaturesDocument<CatalogueSettings> & {
    readonly languageId: typeof CATALOGUE_LANGUAGE_ID;
    readonly documentUri: string;
    readonly text: string;
    readonly settings: CatalogueSettings;
}

export async function unpackCatalogueDocument(documentUri: DocumentUri, text: string): Promise<Nullable<CatalogueDocument>> {
    
    const settings = await getCatalogueDocumentSettings(documentUri);
    
    return {
        languageId: CATALOGUE_LANGUAGE_ID,
        documentUri,
        text,
        settings
    };
}