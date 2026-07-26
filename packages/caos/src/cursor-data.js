import { inRange, sortTextRanges } from "@creatureslsp/extension-util";
import { Is } from "./is-util.js";
export * from "@creatureslsp/caos-kt/caos-cursor-data";
function flattenCommands(call) {
    if (!Is.commandCall(call)) {
        return [];
    }
    return [call, ...call.arguments.filter(Is.commandCall).flatMap(flattenCommands)];
}
export function getCommandBeneathCursor(variant, commandCalls, position, inTokenOnly) {
    const containingCommands = commandCalls
        .filter(call => inRange(call.textRange, position.line, Math.max(position.character, 0), false, true));
    const parentCommandCalls = containingCommands
        .flatMap(flattenCommands)
        .sort((a, b) => sortTextRanges(a.textRange, b.textRange));
    const call = parentCommandCalls
        .pop();
    if (!call) {
        return null;
    }
    if (!inTokenOnly || inRange(call.tokenTextRange, position.line, position.character)) {
        return call;
    }
    return null;
    //
    // for (const call of commandCalls) {
    //     if (call.textRange.end.line < position.line) {
    //         continue;
    //     }
    //     const actualCommand = drillDown(variant, position, call);
    //     // eslint-disable-next-line eqeqeq
    //     if (actualCommand != null) {
    //         if (inTokenOnly && !inRange(actualCommand.tokenTextRange, position.line, position.character)) {
    //             return null;
    //         }
    //         return actualCommand
    //     }
    // }
    // return null;
}
