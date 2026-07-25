import {Nullable} from "@creatures-lsp/extension-util";
import type {CaosValuesList} from "@creatures-lsp/caos-kt/caos-libs";
import {getValuesList} from "@creatures-lsp/caos-kt/caos-libs";
import type {CaosCursorData} from "@creatures-lsp/caos-kt/caos-cursor-data";
import type {CompletionItem, Range} from "vscode-languageserver-types";
import {getValuesListValueCompletionItem} from "./completions.values-list-values.js";

export function getBitflagsOptionsProvider(data: CaosCursorData): Nullable<CompletionItem[]> {
    const parameter = data.closestParameter
    const valuesListId = parameter?.valuesListId
    if (valuesListId == null) {
        return null;
    }
    const valuesList = getValuesList(valuesListId)
    if (valuesList == null || !isValuesListBitflag(valuesList)) {
        return null;
    }
    
    const closestItemRange = data.closestItem?.textRange;
    let start = {
        line: closestItemRange?.start?.line ?? data.line,
        character: (closestItemRange?.start?.character ?? data.character) + 1
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