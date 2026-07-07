import type {GameVariant} from "@creatures-lsp/caos-kt";
import type {CommandCall} from "@creatures-lsp/caos-kt/caos-parser";
import {Nullable} from "@creatures-lsp/extension-util";
import {CompletionItem} from "vscode-languageserver";
import {isC1eVariant} from "../is-similar-variant.js";
import {getNameCompletionItems} from "./completion.createNameCompletionItem.js";


function isCatalogueNameCommand(variant: GameVariant, commandString: Nullable<string>): boolean {
    if (commandString == null) {
        return false;
    }
    if (isC1eVariant(variant)) {
        return false;
    }
    commandString = commandString.toUpperCase();
    return commandString == "READ" || commandString === "REAQ" || commandString === "REAN";
}


export function getCatalogueNameCompletions(
    variant: GameVariant,
    commandCall: CommandCall,
    parameterIndex: number,
    getCatalogueNames:() => string[]
): Nullable<CompletionItem[]> {
    
    if (!isCatalogueNameCommand(variant, commandCall.commandString)) {
        return null;
    }
    
    if (commandCall.arguments.length < 1) {
        return [];
    }
    
    if (parameterIndex != 0) {
        return [];
    }
    
    const closestItem = commandCall.arguments[parameterIndex]?.parserItem;
    if (closestItem == null) {
        return [];
    }
    
    const names = getCatalogueNames();
    
    return getNameCompletionItems(names, closestItem);
}
