import {Location} from "vscode-languageserver";
import {getNamedVariableLocationsForType} from "../../indices/index.caos.named-variables";
import {NamedVarPrefix} from "@bedalton/caos-util/completions";


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
        console.log("No locations for " + commandString +" \"" + key + "\"");
        return [];
    }
    console.log(JSON.stringify(locations));
    return locations.map(l => {
        return {
            range: l.range,
            uri: l.documentUri
        } satisfies Location
    });
}