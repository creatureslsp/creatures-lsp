import {CommandCall} from "@creatures-lsp/caos-kt/caos-parser";
import {Nullable, toVsRange} from "@creatures-lsp/extension-util";
import {Location} from "vscode-languageserver";
import {isInCaosCatalogueKey} from "@creatures-lsp/caos-util";
import type {CaosParserItem} from "@creatures-lsp/caos-kt/caos-core";
import {getCaosCatalogueLocations} from "../../indices/index.caos.catalogue-usages.js";
import {getCatalogueLocations} from "../../indices/index.catalogue.entries.js";
import {IndexedItemLocation} from "../../indices/indices.js";
import {Log} from "../../ConnLogger.js";

export async function getCaosCatalogueNameReferences(
    workspaceUri: string,
    commandCall: CommandCall,
    closestItem: Nullable<CaosParserItem>
): Promise<Location[]> {
    
    if (closestItem == null) {
        return [];
    }
    
    if (!isInCaosCatalogueKey(commandCall, closestItem)) {
        return [];
    }
    
    const key = closestItem.value ?? closestItem.text;
    Log.i(`Getting raw catalogue locations for ${key} in ${workspaceUri}`);
    const rawLocations = getCatalogueLocations(workspaceUri, key)
        .concat(getCaosCatalogueLocations(
            workspaceUri,
            key
        ));
    return rawLocations.map((location: IndexedItemLocation) => {
        return {
            uri: location.documentUri,
            range: toVsRange(location.range),
        } satisfies Location
    });
}


export async function getCatalogueNameReferences(
    workspaceUri: string,
    key: string
): Promise<Location[]> {
    
    const rawLocations = getCaosCatalogueLocations(
        workspaceUri,
        key
    );
    
    return rawLocations.map((location: IndexedItemLocation) => {
        return {
            uri: location.documentUri,
            range: toVsRange(location.range),
        } satisfies Location
    });
}