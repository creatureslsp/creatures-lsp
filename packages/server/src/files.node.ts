import type {DocumentUri} from "vscode-languageserver";
import {
    formatUriForRead,
    type Nullable,
    trimFileSchemePrefix,
    trimLeadingSlashOnFileScheme
} from "@creatures-lsp/extension-util";
import fs from "node:fs";

export async function readTextFileNode(documentUri: string): Promise<string> {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.readFileSync(documentUri, "utf-8");
}


export async function readBinaryFileNode(documentUri: string): Promise<Uint8Array> {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.readFileSync(documentUri);
}

export async function listFilesNode(parent: DocumentUri, child?: Nullable<string>): Promise<string[]> {
    
    parent = trimFileSchemePrefix(formatUriForRead(trimLeadingSlashOnFileScheme(parent)));
    
    let directory: string;
    
    const path = require("path");
    if (child) {
        child = trimFileSchemePrefix(formatUriForRead(child));
        if (path.isAbsolute(child)) {
            directory = child;
        } else {
            directory = path.join(parent, child);
        }
    } else {
        directory = parent;
    }
    const out: string[] = [];
    try {
        const fs = require("fs");
        for (let file of fs.readdirSync(directory)) {
            if (!path.isAbsolute(file)) {
                file = path.join(directory, file);
            }
            out.push(file);
            if (await isDirectoryNode(file)) {
                out.push(...(await listFilesNode(file)));
            }
        }
        return out;
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to list files called from server; " + error);
        return [];
    }
}

export async function writeTextFileNode(documentUri: string, data: string, encoding: "latin1" | "utf-8" | "utf8"): Promise<void> {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.writeFileSync(documentUri, data, encoding);
}

export async function writeBinaryFileNode(documentUri: string, data: Uint8Array): Promise<void> {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.writeFileSync(documentUri, data);
}


export async function isDirectoryNode(documentUri: DocumentUri): Promise<boolean> {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.existsSync(documentUri) && fs.statSync(documentUri).isDirectory()
}

export async function fileExistsNode(documentUri: DocumentUri): Promise<boolean> {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.existsSync(documentUri);
}
