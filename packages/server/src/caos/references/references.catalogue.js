import { toVsRange } from "@creatureslsp/extension-util";
import { isInCaosCatalogueKey } from "@creatureslsp/caos";
import { getCaosCatalogueLocations } from "../../indices/index.caos.catalogue-usages.js";
import { getCatalogueLocations } from "../../indices/index.catalogue.entries.js";
import { Log } from "../../ConnLogger.js";
export async function getCaosCatalogueNameReferences(workspaceUri, commandCall, closestItem) {
    if (closestItem == null) {
        return [];
    }
    if (!isInCaosCatalogueKey(commandCall, closestItem)) {
        return [];
    }
    const key = closestItem.value ?? closestItem.text;
    Log.i(`Getting raw catalogue locations for ${key} in ${workspaceUri}`);
    const rawLocations = getCatalogueLocations(workspaceUri, key)
        .concat(getCaosCatalogueLocations(workspaceUri, key));
    return rawLocations.map((location) => {
        return {
            uri: location.documentUri,
            range: toVsRange(location.range),
        };
    });
}
export async function getCatalogueNameReferences(workspaceUri, key) {
    const rawLocations = getCaosCatalogueLocations(workspaceUri, key);
    return rawLocations.map((location) => {
        return {
            uri: location.documentUri,
            range: toVsRange(location.range),
        };
    });
}
