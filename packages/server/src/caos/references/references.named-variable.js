import { getNamedVariableLocationsForType } from "../../indices/index.caos.named-variables.js";
import { offsetRenameRange } from "@creatureslsp/extension-util/get-workspace-edits";
export function getNamedVariableReferences(workspaceUri, commandString, key) {
    const locations = getNamedVariableLocationsForType(workspaceUri, commandString, key);
    if (locations.length === 0) {
        return [];
    }
    return locations.map(l => {
        return {
            range: offsetRenameRange(l.range),
            uri: l.documentUri
        };
    });
}
