import { fileExistsVsCode, isDirectoryVsCode, listFilesVsCode, readBinaryFileVsCode, readTextFileVsCode, writeBinaryFileVsCode, writeTextFileVsCode } from "./files.vscode.js";
export async function readTextFileNode(documentUri) {
    return readTextFileVsCode(documentUri);
}
export async function writeTextFileNode(documentUri, data, encoding) {
    return writeTextFileVsCode(documentUri, data, encoding);
}
export async function writeBinaryFileNode(documentUri, data) {
    return writeBinaryFileVsCode(documentUri, data);
}
export async function readBinaryFileNode(documentUri) {
    return readBinaryFileVsCode(documentUri);
}
export async function listFilesNode(parent, child) {
    return listFilesVsCode(parent, child);
}
export async function isDirectoryNode(path) {
    return isDirectoryVsCode(path);
}
export async function fileExistsNode(path) {
    return fileExistsVsCode(path);
}
