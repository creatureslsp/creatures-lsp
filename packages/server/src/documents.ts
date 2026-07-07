// noinspection JSUnusedGlobalSymbols

import type {Nullable} from "@creatures-lsp/extension-util";
import {TextDocuments} from "vscode-languageserver/node.js";
import {TextDocument} from "vscode-languageserver-textdocument";
import {readTextFile} from "./files.js";



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
        console.error("Failed to get document " + uri + "; ",  e);
    }
}

export async function getDocumentText(uri: string): Promise<Nullable<string>> {
    try {
        return await readTextFile(uri);
    } catch (e) {
        console.error("Failed to get document " + uri + "; ", e);
    }
}

export function getDocuments(): TextDocuments<TextDocument> {
    return documents;
}


