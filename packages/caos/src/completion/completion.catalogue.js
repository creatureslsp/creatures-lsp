import { isC1eVariant } from "../is-similar-variant.js";
import { getNameCompletionItems } from "./completion.createNameCompletionItem.js";
function isCatalogueNameCommand(variant, commandString) {
    if (commandString == null) {
        return false;
    }
    if (isC1eVariant(variant)) {
        return false;
    }
    commandString = commandString.toUpperCase();
    return commandString == "READ" || commandString === "REAQ" || commandString === "REAN";
}
export function getCatalogueNameCompletions(variant, commandCall, parameterIndex, getCatalogueNames) {
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
