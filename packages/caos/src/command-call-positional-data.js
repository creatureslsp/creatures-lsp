import { inRange } from "@creatureslsp/extension-util";
import { drillDown } from "./drillDown.js";
import { getCaosCursorPosition, } from "@creatureslsp/caos-kt/caos-cursor-data";
export function getCommandCallPositionalDataFromParseResult(parseResult, position) {
    const { line, character } = position;
    let cursor = getCaosCursorPosition(parseResult, line, character, true);
    if (cursor == null) {
        return null;
    }
    const topLevelCommandCall = parseResult.commandCalls
        .filter(call => inRange(call.textRange, line, character))
        .sort((a, b) => b.textRange.startIndex - a.textRange.startIndex)
        .pop();
    if (topLevelCommandCall == null) {
        return null;
    }
    const commandCall = drillDown(parseResult.variant, position, topLevelCommandCall)
        ?? topLevelCommandCall;
    const closestItem = cursor.closestItem;
    const argumentIndex = commandCall
        .arguments
        .findIndex((a) => inRange(a.textRange, line, character, false, true));
    let argument = null;
    if (argumentIndex >= 0 && argumentIndex < (commandCall.arguments?.length ?? 0)) {
        argument = commandCall.arguments[argumentIndex];
    }
    return {
        commandCall,
        argumentIndex,
        closestItem,
        argument,
    };
}
