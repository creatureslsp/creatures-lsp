import type {GameVariant} from "@creatureslsp/caos-kt";
import {
    type CaosCommand,
    type CaosParameter,
    getValueTypeName,
    getValuesList,
} from "@creatureslsp/caos-kt/caos-libs";
import {Nullable} from "@creatureslsp/extension-util";

function wrapParameter(parameter: string) : string {
    if (parameter == null) {
        return "(value)";
    }
    return parameter.substring(0,1) == "[" ? parameter : "("+parameter+")";
}

function getListName(listId: Nullable<number>): Nullable<string> {
    if (listId == null || listId < 1)
        return null;
    const list = getValuesList(listId);
    if (list == null)
        return null;
    return list.name;
}

function formatParameter(parameter:CaosParameter, withValuesList: boolean) : string {
    const listName = getListName(parameter.valuesListId);
    const typeName = getValueTypeName(parameter.typeId)!!;
    const formattedType = wrapParameter(listName != null && withValuesList ? typeName + "@" + listName : typeName);
    return "**"+parameter.name +"** " + formattedType;
}

export function formatCaosDocumentation(variant: GameVariant, command:CaosCommand, withValuesLists: boolean = false) : Nullable<string> {
    if (command == null)
        return null;
    let out = "";
    out += "**"+command.command.replace('_', '\\_')+"**";
    let returnTypeName = command.returnTypeName;
    if (variant != 'C1' && variant != 'C2') {
        if (command.command === 'VELX' || command.command === 'VELY') {
            returnTypeName = 'float';
        }
    }
    out += ' ' + (returnTypeName.startsWith('[') ? returnTypeName : "(" + returnTypeName + ')');
    for(let parameter of command.parameters) {
        out += ' ' + formatParameter(parameter, withValuesLists)
    }
    // const outArray: IMarkdownString[] = [];
    //out = "#### "+out
    // outArray.push({value: out});
    const description = command.description;
    if (description != null && description.length > 0) {
        out += "   \n" + description;
    }
    return out;
}


export function formatCommandStringAsMarkdown(command:string, string:string) : Nullable<string> {
    // Allow length of 2 in case we decide to add text to equality operators
    if (command.length < 2)
        return null;
    
    let out: string = "**"+command+"**";
    if (string.length > 1) {
        out += "  \n" + string;
    }
    return out;
}