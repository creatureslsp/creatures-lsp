import type {DocumentUri} from "vscode-languageserver";
import type {Nullable} from "@creatureslsp/extension-util";
import {
    fileExistsVsCode,
    isDirectoryVsCode,
    listFilesVsCode,
    readBinaryFileVsCode,
    readTextFileVsCode,
    writeBinaryFileVsCode,
    writeTextFileVsCode
} from "./files.vscode.js";


export async function readTextFileNode(documentUri: string): Promise<string> {
    return readTextFileVsCode(documentUri);
}

export async function writeTextFileNode(documentUri: string, data: string, encoding: "latin1" | "utf-8" | "utf8") {
    return writeTextFileVsCode(documentUri, data, encoding);
}

export async function writeBinaryFileNode(documentUri: string, data: Uint8Array) {
    return writeBinaryFileVsCode(documentUri, data);
}

export async function readBinaryFileNode(documentUri: string): Promise<Uint8Array> {
    return readBinaryFileVsCode(documentUri);
}

export async function listFilesNode(parent: DocumentUri, child: Nullable<string>): Promise<string[]> {
    return listFilesVsCode(parent, child);
}

export async function isDirectoryNode(path: DocumentUri): Promise<boolean> {
    return isDirectoryVsCode(path);
}

export async function fileExistsNode(path: DocumentUri): Promise<boolean> {
    return fileExistsVsCode(path);
}