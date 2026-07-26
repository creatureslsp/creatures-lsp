import { formatUriForRead, trimFileSchemePrefix, trimLeadingSlashOnFileScheme } from "@creatureslsp/extension-util";
import fs from "node:fs";
export async function readTextFileNode(documentUri) {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.readFileSync(documentUri, "utf-8");
}
export async function readBinaryFileNode(documentUri) {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.readFileSync(documentUri);
}
export async function listFilesNode(parent, child) {
    parent = trimFileSchemePrefix(formatUriForRead(trimLeadingSlashOnFileScheme(parent)));
    let directory;
    const path = require("path");
    if (child) {
        child = trimFileSchemePrefix(formatUriForRead(child));
        if (path.isAbsolute(child)) {
            directory = child;
        }
        else {
            directory = path.join(parent, child);
        }
    }
    else {
        directory = parent;
    }
    const out = [];
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
    }
    catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to list files called from server; " + error);
        return [];
    }
}
export async function writeTextFileNode(documentUri, data, encoding) {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.writeFileSync(documentUri, data, encoding);
}
export async function writeBinaryFileNode(documentUri, data) {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.writeFileSync(documentUri, data);
}
export async function isDirectoryNode(documentUri) {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.existsSync(documentUri) && fs.statSync(documentUri).isDirectory();
}
export async function fileExistsNode(documentUri) {
    documentUri = trimFileSchemePrefix(formatUriForRead(documentUri));
    return fs.existsSync(documentUri);
}
