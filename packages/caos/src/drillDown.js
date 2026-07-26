import { isVsCode } from "@creatureslsp/extension-util";
import { Is } from "./is-util.js";
/**
 * Drill down into the command call to find its closest command and get its hover information
 * @param variant
 * @param position
 * @param commandCall
 */
export function drillDown(variant, position, commandCall) {
    if (commandCall == null) {
        return null;
    }
    if (!inRange(commandCall.textRange, position)) {
        return null;
    }
    if (inRange(commandCall.tokenTextRange, position)) {
        return commandCall;
    }
    for (const argument of commandCall.arguments) {
        if (argument == null) {
            continue;
        }
        if (!inRange(argument.textRange, position)) {
            continue;
        }
        if (!Is.commandCall(argument)) {
            return commandCall;
        }
        return drillDown(variant, position, argument) ?? commandCall;
    }
    return null;
}
/**
 * Checks that a position is in range
 * @param position
 * @param range
 */
function inRange(range, position) {
    if (position.line < range.start.line) {
        return false;
    }
    if (position.line > range.end.line) {
        return false;
    }
    if (position.line == range.start.line) {
        const offsetStart = isVsCode() ? -1 : 0;
        if (position.character < (range.start.character + offsetStart)) {
            return false;
        }
    }
    if (position.line == range.end.line) {
        if (position.character > range.end.character) {
            return false;
        }
    }
    return true;
}
