import {
    type GameVariant,
    Is,
} from "@creatures-lsp/caos";

import type {
    Argument,
} from "@creatures-lsp/caos/parser";

import {
    TypeTokens,
    type C2eStringVal,
    type CaosParserItem,
} from "@creatures-lsp/caos/core";

import type {
    CaosParameter
} from "@creatures-lsp/caos/libs";
import {type FileNameData, toVsRange} from "@creatures-lsp/extension-util";
import type {Nullable} from "@creatures-lsp/caos";
import type {TextEdit} from "vscode-languageserver";

export function getRenameFileParameterEdit(
    variant: GameVariant,
    parameter: CaosParameter,
    argument: Argument,
    oldFileNameData: FileNameData,
    newFileNameData: FileNameData,
): Nullable<TextEdit> {
    const parserItem = argument.parserItem;
    if (parserItem == null) {
        return;
    }
    
    if (TypeTokens.getInstance().TOKEN === parserItem?.typeToken) {
        renameToken(
            variant,
            oldFileNameData,
            newFileNameData,
            parserItem!,
        )
    }
    
    if (Is.c2eStringVal(parserItem)) {
        renameString(
            oldFileNameData,
            newFileNameData,
            parameter,
            parserItem,
        )
    }
}

function renameToken(
    variant: GameVariant,
    oldFileNameData: FileNameData,
    newFileNameData: FileNameData,
    parserItem: CaosParserItem,
): Nullable<TextEdit> {
    
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
    } satisfies TextEdit
}

function renameString(
    oldFileNameData: FileNameData,
    newFileNameData: FileNameData,
    parameter: CaosParameter,
    parserItem: C2eStringVal,
): Nullable<TextEdit> {
    
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
    } else if (oldFileNameData.fileNameWithoutExtension?.toLowerCase() !== parserItem.text?.toLowerCase()) {
        return null;
    }
    
    return {
        newText: newName,
        range: toVsRange(parserItem.textRange)
    } satisfies TextEdit
}