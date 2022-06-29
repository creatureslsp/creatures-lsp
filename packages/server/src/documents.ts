// noinspection JSUnusedGlobalSymbols

import {Nullable} from "@bedalton/caos-util";
import {TextDocuments} from "vscode-languageserver/node";
import {TextDocument} from "vscode-languageserver-textdocument";

// noinspection SpellCheckingInspection
export const EMPTY_DOCUMENT_URI = "xxx_____XXXX_____xxx";

let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

export function getAllDocuments(): TextDocument[] {
    return getDocuments().all();
}

export function getDocument(uri: string): Nullable<TextDocument> {
    return documents.get(uri);
}

export function getDocuments(): TextDocuments<TextDocument> {
    return documents;
}