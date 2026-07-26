import {type CaosDocument, unpackCaosDocument} from "./caos/caos.document.js";
import {type CatalogueDocument, unpackCatalogueDocument} from "./catalogue/catalogue.document.js";
import {CATALOGUE_LANGUAGE_ID} from "./catalogue/settings.js";
import {CAOS_LANGUAGE_ID, getGlobalCaosSettings} from "./caos/settings.js";
import {getDocument} from "./documents.js";
import {getExtension, type Nullable, toFileUri} from "@creatureslsp/extension-util";
import type {TextDocument} from "vscode-languageserver-textdocument";
import {fileExists, isFileURINaive, readTextFile} from "./files.js";
import {caosInitLib} from "./caos/caos-init-lib.js";
import type {DocumentUri} from "vscode-languageserver";
import {Log} from "./ConnLogger.js";

export type UriLike = string | { textDocument: { uri: string }; } | { uri: string; }

export interface CreaturesDocument<SettingsT> {
    readonly languageId: string;
    readonly documentUri: string;
    readonly text: string;
    readonly settings: SettingsT;
}

export async function unpackDocument(reference: UriLike | CreaturesDocument<any>): Promise<Nullable<CreaturesDocument<any>>> {
    if (isCreaturesDocument(reference)) {
        return reference;
    }
    
    let documentUri: string;
    if (typeof reference === 'string') {
        documentUri = toFileUri(reference);
    } else if (typeof reference === "object") {
        if (typeof (<any>reference).uri !== "undefined") {
            documentUri = (<any>reference).uri;
        } else if (typeof (<any>reference).textDocument !== "undefined") {
            documentUri = (<any>reference).textDocument.uri;
        } else {
            console.error("Unexpected CAOS document reference for unpack; Found: " + JSON.stringify(reference, null, 2));
            return null;
        }
        
    } else {
        console.error("CAOS document reference is not an object or string. Found: " + JSON.stringify(reference, null, 2));
        return null;
    }
    
    if (documentUri == null || !isFileURINaive(documentUri)) {
        Log.i(`Document URI is not file URL Naive like <${documentUri}>`);
        return null;
    }
    
    let document: Nullable<TextDocument> = null;
    let documentText: Nullable<string>;
    
    let languageId: Nullable<string>;
    try {
        document = getDocument(documentUri);
    } catch (e) {
        const error = e instanceof Error ? e.message +"\n"+e.stack : e;
        console.error("Error getting document <" + documentUri + ">; ", error);
        return null;
    }
    
    if (document != null) {
        documentText = document?.getText();
        languageId = document?.languageId;
        if (languageId == null || languageId.length == 0) {
            languageId = getLanguageIdFromFileName(documentUri);
        }
    } else {
        if (!(await fileExists(documentUri))) {
            console.error("File does not exist; URI:" + documentUri)
            return null;
        }
        try {
            documentText = await readTextFile(documentUri);
        } catch (e) {
            const error = e instanceof Error ? e.message + "\n" + e.stack : e;
            console.error("readTextFile threw error;", error);
            return null;
        }
        
        languageId = getLanguageIdFromFileName(documentUri);
    }
    
    if (documentText == null) {
        console.error("Failed to read document with URI: " + documentUri);
        return null;
    }
    
    if (languageId == null || languageId.length == 0) {
        console.error("Language ID is null for: " + documentUri);
        return null;
    }
    
    // Ensure that this document is a CAOS document
    switch (languageId) {
        case CAOS_LANGUAGE_ID:
            caosInitLib();
            return await unpackCaosDocument(documentUri, documentText)
                .catch(e => {
                    Log.e(`Failed to unpack CAOS document. ${e}`);
                    return {
                        documentUri,
                        variant: "DS",
                        languageId: "caos",
                        text: documentText!,
                        settings: getGlobalCaosSettings()
                    } satisfies CaosDocument
                });
        case CATALOGUE_LANGUAGE_ID:
            return await unpackCatalogueDocument(documentUri, documentText);
        default:
            Log.w(`Document is some other creatures document; ${languageId}`);
            return {
                documentUri,
                languageId,
                text: documentText,
                settings: {} as any
            } satisfies CreaturesDocument<any>
    }
}


export function isCatalogueDocument(document: Nullable<CreaturesDocument<any>>): document is CatalogueDocument {
    return document != null && document.languageId === CATALOGUE_LANGUAGE_ID;
}

export function isCaosDocument(document: Nullable<CreaturesDocument<any>>): document is CaosDocument {
    return document != null && document.languageId === CAOS_LANGUAGE_ID;
}

export function isCreaturesDocument(document: Nullable<unknown>): document is CreaturesDocument<unknown> {
    if (document == null) {
        return false;
    }
    if (typeof document !== "object") {
        return false;
    }
    const partial = document as Partial<CreaturesDocument<unknown>>;
    return partial.settings != null && partial.documentUri != null && partial.text != null && partial.languageId != null
}


export function getLanguageIdFromFileName(documentUri: DocumentUri) {
    const extension = getExtension(documentUri, false);
    if (extension == null) {
        return null;
    }
    switch(extension) {
        case "cos":
        case "caos":
            return CAOS_LANGUAGE_ID;
        case "catalogue":
            return CATALOGUE_LANGUAGE_ID;
        case "ps":
            return "pray";
        default:
            return extension;
    }
}