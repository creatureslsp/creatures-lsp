import { offsetRenameRange } from "@creatureslsp/extension-util";
import { getNameCompletionItems } from "./completion.createNameCompletionItem.js";
function isNamedVariableCommand(variant, commandString) {
    if (variant == 'C1' || variant == 'C2') {
        return false;
    }
    if (!commandString) {
        return false;
    }
    commandString = commandString.toUpperCase();
    return commandString === "GAME" || commandString === "EAME" || commandString === "NAME" || commandString === "MAME";
}
export function getNamedVariableCompletionItems(variant, commandCall, parameterIndex, getNamedVariableKeys) {
    const namedVariablePrefix = commandCall.commandString.toUpperCase();
    if (!isNamedVariableCommand(variant, namedVariablePrefix)) {
        return null;
    }
    const keys = getNamedVariableKeys(namedVariablePrefix);
    let range;
    const closestItem = commandCall.arguments.length > parameterIndex ? commandCall.arguments[parameterIndex].parserItem : null;
    const text = closestItem?.text;
    let openQuote = text != null && text.startsWith('"') ? '' : '"';
    let closeQuote = text != null && text.endsWith('"') ? '' : '"';
    if (closestItem) {
        range = offsetRenameRange(closestItem.textRange);
    }
    return getNameCompletionItems(keys, closestItem, null, range);
}
