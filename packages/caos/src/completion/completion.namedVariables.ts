import {Nullable, offsetRenameRange} from "@creatureslsp/extension-util";
import type {GameVariant} from "@creatureslsp/caos-kt";
import {CommandCall} from "@creatureslsp/caos-kt/caos-parser";
import {CaosParserItem} from "@creatureslsp/caos-kt/caos-core";
import {NamedVarPrefix} from "../completions.js";
import {CompletionItem, Range} from "vscode-languageserver-types";
import {getNameCompletionItems} from "./completion.createNameCompletionItem.js";


function isNamedVariableCommand(variant: GameVariant, commandString: Nullable<string>): commandString is NamedVarPrefix {
    if (variant == 'C1' || variant == 'C2') {
        return false;
    }
    if (!commandString) {
        return false;
    }
    commandString = commandString.toUpperCase();
    return commandString === "GAME" || commandString === "EAME" || commandString === "NAME" || commandString === "MAME";
}

export function getNamedVariableCompletionItems(
    variant: GameVariant,
    commandCall: CommandCall,
    parameterIndex: number,
    getNamedVariableKeys: (prefix: NamedVarPrefix) => string[],
): Nullable<CompletionItem[]> {
    
    const namedVariablePrefix = commandCall.commandString.toUpperCase();
    if (!isNamedVariableCommand(variant, namedVariablePrefix)) {
        return null;
    }
    const keys = getNamedVariableKeys(namedVariablePrefix);
    let range: Nullable<Range>;
    const closestItem: Nullable<CaosParserItem> = commandCall.arguments.length > parameterIndex ? commandCall.arguments[parameterIndex].parserItem : null;
    const text = closestItem?.text;
    
    let openQuote = text != null && text.startsWith('"') ? '' : '"';
    let closeQuote = text != null && text.endsWith('"') ? '' : '"';
    
    if (closestItem) {
        range = offsetRenameRange(closestItem.textRange);
    }
    
    return getNameCompletionItems(keys, closestItem, null, range);
}