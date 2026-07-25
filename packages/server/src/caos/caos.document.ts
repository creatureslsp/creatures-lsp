import {CAOS_LANGUAGE_ID, CaosSettings, getCaosDocumentSettings, getGlobalCaosSettings} from "./settings.js";
import {GameVariant} from "@creatures-lsp/caos";
import {Nullable} from "@creatures-lsp/extension-util";
import {CreaturesDocument} from "../document.js";
import {DocumentUri} from "vscode-languageserver";
import {Log} from "../ConnLogger.js";

export interface CaosDocument extends CreaturesDocument<CaosSettings>{
    languageId: typeof CAOS_LANGUAGE_ID;
    readonly documentUri: string;
    readonly text: string;
    readonly settings: CaosSettings;
    readonly variant: GameVariant;
}

export async function unpackCaosDocument(documentUri: DocumentUri, text: string): Promise<Nullable<CaosDocument>> {
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