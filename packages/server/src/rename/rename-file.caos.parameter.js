import { Is, } from "@creatureslsp/caos";
import { TypeTokens, } from "@creatureslsp/caos/core";
import { toVsRange } from "@creatureslsp/extension-util";
export function getRenameFileParameterEdit(variant, parameter, argument, oldFileNameData, newFileNameData) {
    const parserItem = argument.parserItem;
    if (parserItem == null) {
        return;
    }
    if (TypeTokens.getInstance().TOKEN === parserItem?.typeToken) {
        renameToken(variant, oldFileNameData, newFileNameData, parserItem);
    }
    if (Is.c2eStringVal(parserItem)) {
        renameString(oldFileNameData, newFileNameData, parameter, parserItem);
    }
}
function renameToken(variant, oldFileNameData, newFileNameData, parserItem) {
    if (variant !== "C1" && variant !== "C2") {
        return null;
    }
    if (oldFileNameData.fileNameWithoutExtension?.toLowerCase() !== parserItem.text?.toLowerCase()) {
        return null;
    }
    const newName = newFileNameData.fileNameWithoutExtension;
    if (newName == null) {
        return null;
    }
    if (newName.length !== 4) {
        return null;
    }
    return {
        newText: newName,
        range: toVsRange(parserItem.textRange)
    };
}
function renameString(oldFileNameData, newFileNameData, parameter, parserItem) {
    if (!Is.c2eStringVal(parserItem)) {
        return;
    }
    const isMng = parameter.valuesListName?.startsWith("File.MNG") === true;
    let newName = isMng ? newFileNameData.fileName : (newFileNameData.fileNameWithoutExtension);
    if (newName == null || newName.trim().length === 0) {
        return null;
    }
    if (isMng) {
        const components = parserItem.value.split(/\.mng/i);
        const tail = components.pop();
        let name = components.join(".mng").toLowerCase();
        if (name !== oldFileNameData.fileName?.toLowerCase()) {
            return null;
        }
        newName += tail;
    }
    else if (oldFileNameData.fileNameWithoutExtension?.toLowerCase() !== parserItem.text?.toLowerCase()) {
        return null;
    }
    return {
        newText: newName,
        range: toVsRange(parserItem.textRange)
    };
}
