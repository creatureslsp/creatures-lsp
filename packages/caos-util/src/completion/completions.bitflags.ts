import {Nullable} from "@bedalton/extension-util";
import {CaosValuesList, CursorData, libs} from "../caos-util";
import {CompletionItem, Range} from "vscode-languageserver-types";
import {getValuesListValueCompletionItem} from "./completions.values-list-values";

export function getBitflagsOptionsProvider(data: CursorData): Nullable<CompletionItem[]> {
    const parameter = data.closestParameter
    const valuesListId = parameter?.valuesListId
    if (valuesListId == null) {
        // console.log("Values list ID is null; Parameter" + (JSON.stringify(parameter)));
        return null;
    }
    const valuesList = libs.getValuesList(valuesListId)
    if (valuesList == null || !isValuesListBitflag(valuesList)) {
        // console.log("Not a bitflags list: ListName[" + (valuesList?.name ?? "NULL") + "];");
        return null;
    }
    
    const closestItemRange = data.closestItem?.textRange;
    let start = {
        line: closestItemRange?.start?.line ?? data.line,
        character: closestItemRange?.start?.character ?? data.character
    };
    
    // let end = {
    //     line: closestItemRange?.end?.line ?? data.line,
    //     character: closestItemRange?.end?.character ?? data.character
    // };
    
    const range: Range = {start: start, end: start};
    
    const command = {
        command: "caos.generateBitflagValue",
        title: "Generate Bitflag Value for " + valuesList.name,
        arguments: [valuesList, range],
    };
    
    const main: CompletionItem = {
        label: command.title,
        sortText: "0_ bit flag",
        insertText: "",
        textEdit: {
            range: range,
            newText: ""
        },
        command: command
    } satisfies CompletionItem;
    
    const out = [main];
    for (const item of valuesList.values) {
        const completionItem = getValuesListValueCompletionItem(item);
        completionItem.sortText = "1_" + completionItem.sortText;
        out.push(completionItem);
    }
    return out;
}


function isValuesListBitflag(valuesList: Nullable<CaosValuesList>): boolean {
    return valuesList?.extensionType?.toLowerCase() === "bitflags"
}