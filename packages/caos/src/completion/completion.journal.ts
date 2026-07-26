import type {GameVariant} from "@creatureslsp/caos-kt";
import {CommandCall} from "@creatureslsp/caos-kt/caos-parser";
import {Nullable} from "@creatureslsp/extension-util";
import {CompletionItem} from "vscode-languageserver";
import {isC1eVariant} from "../is-similar-variant.js";
import {Is} from "../is-util.js";
import {getNameCompletionItems} from "./completion.createNameCompletionItem.js";


function isJournalNameCommand(variant: GameVariant, commandString: Nullable<string>): boolean {
    if (commandString == null) {
        return false;
    }
    if (isC1eVariant(variant)) {
        return false;
    }
    commandString = commandString.toUpperCase();
    return commandString == "FILE OOPE" || commandString === "FILE IOPE" || commandString === "FILE JDEL";
}


export function getJournalNameCompletions(
    variant: GameVariant,
    commandCall: CommandCall,
    parameterIndex: number,
    getJournalNames:(directoryType: number) => string[]
): Nullable<CompletionItem[]> {
    
    if (!isJournalNameCommand(variant, commandCall.commandString)) {
        return null;
    }
    
    if (commandCall.arguments.length < 2) {
        return [];
    }
    
    if (parameterIndex != 1) {
        return [];
    }
    
    const directoryInt = Is.intVal(commandCall.arguments[0].parserItem)
        ? commandCall.arguments[0].parserItem?.value
        : null;
    
    if (directoryInt == null) {
        return [];
    }
    
    const names = getJournalNames(directoryInt);
    const closestItem = commandCall.arguments[parameterIndex]?.parserItem;
    if (closestItem == null) {
        return [];
    }
    return getNameCompletionItems(names, closestItem);
}

