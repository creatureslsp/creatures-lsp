// noinspection JSUnusedGlobalSymbols
import { TextDocuments } from "vscode-languageserver/node.js";
import { TextDocument } from "vscode-languageserver-textdocument";
import { readTextFile } from "./files.js";
// noinspection SpellCheckingInspection
export const EMPTY_DOCUMENT_URI = "xxx_____XXXX_____xxx";
let documents;
try {
    documents = new TextDocuments(TextDocument);
}
catch (e) {
    console.error("Failed to init documents: ", JSON.stringify(e));
}
export function getAllDocuments() {
    return getDocuments().all();
}
export function getDocument(uri) {
    try {
        return documents.get(uri);
    }
    catch (e) {
        console.error("Failed to get document " + uri + "; ", e);
    }
}
export async function getDocumentText(uri) {
    try {
        return await readTextFile(uri);
    }
    catch (e) {
        console.error("Failed to get document " + uri + "; ", e);
    }
}
export function getDocuments() {
    return documents;
}
