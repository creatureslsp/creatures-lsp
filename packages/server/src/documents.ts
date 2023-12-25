// noinspection JSUnusedGlobalSymbols

import {Nullable} from "@bedalton/caos-util";
import {TextDocuments} from "vscode-languageserver/node";
import {TextDocument} from "vscode-languageserver-textdocument";



// noinspection SpellCheckingInspection
export const EMPTY_DOCUMENT_URI = "xxx_____XXXX_____xxx";


let documents: TextDocuments<TextDocument>;

try {
    documents = new TextDocuments(TextDocument);
} catch (e) {
    console.error("Failed to init documents: ", JSON.stringify(e))
}

export function getAllDocuments(): TextDocument[] {
    return getDocuments().all();
}

export function getDocument(uri: string): Nullable<TextDocument> {
    try {
        return documents.get(uri);
    } catch (e) {
        console.error("Failed to get document " + uri + "; "  + e);
    }
}

export function getDocuments(): TextDocuments<TextDocument> {
    return documents;
}


