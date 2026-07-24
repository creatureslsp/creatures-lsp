import type {DocumentUri} from "vscode-languageserver";
import {deleteWorkspaceJournalNameIndex} from "./index.caos.journal-files.js";
import {deleteWorkspaceNamedVariableIndex} from "./index.caos.named-variables.js";
import {deleteCaosCatalogueWorkspaceIndex} from "./index.caos.catalogue-usages.js";
import {deleteCatalogueEntryWorkspaceIndex} from "./index.catalogue.entries.js";
import {getFiles} from "../files.js";
import {indexFile} from "./index.file.js";
import {Log} from "../ConnLogger.js";


const didInitIndex:string[] = [];

export async function initWorkspaceIndices(workspaceUri: DocumentUri) {
    if (didInitIndex.indexOf(workspaceUri) >= 0) {
        return;
    }
    didInitIndex.push(workspaceUri);
    const files = await getFiles(workspaceUri, ["cos", "catalogue" /*, "txt", "ps" */]);
    for (const file of files) {
        await indexFile(workspaceUri, file);
    }
}

export function clearWorkspaceIndices(workspaceUri: DocumentUri) {
    // CAOS
    deleteWorkspaceNamedVariableIndex(workspaceUri);
    deleteWorkspaceJournalNameIndex(workspaceUri);
    deleteCaosCatalogueWorkspaceIndex(workspaceUri);
    
    // Catalogue
    deleteCatalogueEntryWorkspaceIndex(workspaceUri);
}