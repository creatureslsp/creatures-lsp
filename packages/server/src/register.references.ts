import type {ReferenceParams} from "vscode-languageserver-protocol";
import type {Location} from "vscode-languageserver";
import {connection} from "./connection.vscode.js";
import {unpackDocument} from "./document.js";
import {getRawCaosLocations} from "./caos/caos.references-provider.js";
import {getRawCatalogueLocations} from "./catalogue/catalogue.references-provider.js";
import {getWorkspaceUriForFile} from "./workspace-folders.js";
import {isVsCode, toFileUri} from "@creatures-lsp/extension-util";
import {Log} from "./ConnLogger.js";


export function registerReferencesProvider(register: boolean) {
    if (register) {
        connection.onReferences(onReferences);
    }
}

async function onReferences(params: ReferenceParams): Promise<Location[]> {
    try {
        return await _onReferences(params);
    } catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to get references; ${error}`);
        return [];
    }
}

async function _onReferences(params: ReferenceParams): Promise<Location[]> {
    const documentUri = params.textDocument.uri;
    const workspaceUri = getWorkspaceUriForFile(documentUri);
    const document = await unpackDocument(documentUri);
    
    if (document == null) {
        return [];
    }
    
    const locations: Location[] = [];
    try {
        const caosLocations = await getRawCaosLocations(params, workspaceUri, document);
        locations.push(...caosLocations);
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to get CAOS locations; ", error);
    }
    try {
        const catalogueLocations = await getRawCatalogueLocations(params, workspaceUri, document);
        locations.push(...catalogueLocations);
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to get caos locations; ", error);
    }
    if (isVsCode()) {
        return locations;
    }
    return locations?.map((loc) => {
        return {
            ...loc,
            uri: toFileUri(loc.uri)
        } satisfies Location
    });
}