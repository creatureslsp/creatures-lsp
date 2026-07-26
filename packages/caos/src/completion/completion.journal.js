import { isC1eVariant } from "../is-similar-variant.js";
import { Is } from "../is-util.js";
import { getNameCompletionItems } from "./completion.createNameCompletionItem.js";
function isJournalNameCommand(variant, commandString) {
    if (commandString == null) {
        return false;
    }
    if (isC1eVariant(variant)) {
        return false;
    }
    commandString = commandString.toUpperCase();
    return commandString == "FILE OOPE" || commandString === "FILE IOPE" || commandString === "FILE JDEL";
}
export function getJournalNameCompletions(variant, commandCall, parameterIndex, getJournalNames) {
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
