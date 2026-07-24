import {Location} from "vscode-languageserver";
import {getNamedVariableLocationsForType} from "../../indices/index.caos.named-variables.js";
import {NamedVarPrefix} from "@creatures-lsp/caos-util";
import {offsetRenameRange} from "@creatures-lsp/extension-util/get-workspace-edits";


export function getNamedVariableReferences(
    workspaceUri: string,
    commandString: string,
    key: string,
): Location[] {
    const locations = getNamedVariableLocationsForType(
        workspaceUri,
        commandString as NamedVarPrefix,
        key
    );
    
    if (locations.length === 0) {
        return [];
    }
    return locations.map(l => {
        return {
            range: offsetRenameRange(l.range),
            uri: l.documentUri
        } satisfies Location
    });
}