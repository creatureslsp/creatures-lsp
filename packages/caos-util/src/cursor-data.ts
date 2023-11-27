/* eslint-disable eqeqeq */
import {Argument, com, CursorData, GameVariant, HasRange,Nullable, RangeWithIndex} from "./caos-util";
import libs = com.bedalton.creatures.caos.libs;
import collectors = com.bedalton.creatures.caos.collectors;
import {inRange, sortTextRanges} from "./position-utils";
import {
    CAOS2_COMMENT_TYPE_ID,
    COMMAND_TYPE_ID,
    EQ_JOIN_TYPE_ID,
    EQ_OP_TYPE_ID,
    STRING_TYPE_ID,
    tok,
    TOKEN_TYPE_ID,
    UNKNOWN_TYPE_ID,
    VARIABLE_TYPE_ID
} from "./constants";
import ParseResult = collectors.ParseResult;
import ParserItem = collectors.ParserItem;
import CommandToken = collectors.ParserItem.CommandToken;
import ICaosCommand = libs.ICaosCommand;
import parseCaosNear = collectors.parseCaosNear;
import parseCaos = collectors.parseCaos;
import CommandCall = collectors.CommandCall;
import CaosValuesList = libs.CaosValuesList;
import ICaosParameter = libs.ICaosParameter;
import getValuesList = libs.getValuesList;
import EqualityStatement = collectors.EqualityStatement;

const VAR_REGEX = /^((va|ov|mv)\d)|((obv|var)\d{2})/i;

/**
 * Finds information about what is happening near the cursor
 * @param parseResult previously parsed CAOS result
 * @param lineNumber line number of cursor
 * @param column column in line
 * @param incomplete whether to bias results to incomplete commands and values. Less strict to cursor position
 * @param parseNear parse only CAOS near cursor. Faster in long documents, but unstable
 */
export function getCursorPosition(
    parseResult: ParseResult,
    lineNumber: number,
    column: number,
    incomplete: boolean,
    parseNear: Nullable<boolean> = null
): Nullable<CursorData> {
    if (parseResult == null) {
        return null;
    }
// Find all calls in range
    const commandCalls = parseResult.commandCalls;
    if (commandCalls == null && parseResult.equalityStatements.length == 0) {
        return null;
    }
    // Filter calls to those enclosing position
    const inRangeCalls = commandCalls.filter((call: collectors.CommandCall) => inRange(call.textRange, lineNumber, column, false, true));
    // Find the closest call to cursor
    let closestResult = getClosestItem(inRangeCalls, lineNumber, column, true);
    
    // Get all tokens on row
    const inRangeItems = parseResult.items.filter((it: ParserItem<any>) => inRange(it.textRange, lineNumber, column, true));
    
    // Find the closest parser item
    const closestItemResult = getClosestItem<ParserItem<any>>(inRangeItems, lineNumber, column, true);
    
    let closestItem: Nullable<collectors.ParserItem<any>> = closestItemResult?.closest;
    
    // Closest Command call
    let closest: Nullable<collectors.CommandCall> = closestResult?.closest;
    
    let commandParameters: Nullable<ICaosParameter[]> = [];
    let missingParameters: libs.ICaosParameter[] = [];
    let matchingEqualityStatements: EqualityStatement[] = [];
    let index: number = 0;
    let inCommand = true;
    const run = (closestCall: CommandCall) => {
        // Get current command calls arguments
        const commandArguments: collectors.Argument[] = closestCall?.arguments ?? [];
        let argumentIndex = commandArguments.findIndex((a) => {
            if (inRange(a.textRange, lineNumber, column, false, false)) {
                if (column <= a.textRange.end.character) {
                    return true;
                }
            }
            return false;
        });
        if (argumentIndex < 0) {
            if (commandArguments.length > 0) {
                argumentIndex = commandArguments.findIndex(a => column > a.textRange.end.character);
                if (argumentIndex < 0) {
                    commandArguments.length;
                } else if (commandArguments.length > 0 && commandArguments[argumentIndex]?.type !== TOKEN_TYPE_ID && commandArguments[argumentIndex]?.type !== UNKNOWN_TYPE_ID) {
                    argumentIndex += 1;
                }
            } else {
                argumentIndex = 0
            }
        }
        
        if (closestItem != null && commandArguments[argumentIndex] != null && closestItem.textRange.endIndex > (commandArguments[argumentIndex]?.textRange?.endIndex ?? 0)) {
            inCommand = false;
        }
        
        let missing: libs.ICaosParameter[];
        // Offset the index to find the one currently being edited
        let indexMod = argumentIndex == 0 ? 1 : 0;
        commandParameters = closestCall?.command?.parameters;
    
        const argumentType = closestItem?.actualType;
        const isIncompleteToken = argumentType === TOKEN_TYPE_ID ||
            argumentType === UNKNOWN_TYPE_ID;
        const isCompletable = !isIncompleteToken &&
            argumentType !== VARIABLE_TYPE_ID;
        const noMissing = commandArguments.length > 0 &&
            commandArguments.length - 1 >= argumentIndex &&
            isCompletable;
        
        if (noMissing) {
            missing = [];
        } else {
            // Calculate missing parameters
            let missingParameterStart = Math.min(argumentIndex, commandArguments.length - indexMod);
            missing = commandParameters
                ?.slice(missingParameterStart, commandParameters?.length ?? 0) ?? [];
        }
        const isEqLike = (closestItem?.actualType === EQ_OP_TYPE_ID || closestItem?.actualType === EQ_JOIN_TYPE_ID);
        const inEq = closestCall.inEqualityExpression;
        if (missing == null || missing.length < 1) {
            let jumpOut = true;
            if (inRange(closestItem?.textRange, lineNumber, column)) {
                if (closestItem != null && !isComplete(closestItem, lineNumber, column)) {
                    jumpOut = false;
                }
            }
            if (!inEq && isEqLike) {
                jumpOut = false
            }
            jumpOut = jumpOut || !inCommand;
            if (jumpOut) {
                const commandCallIndex = closestCall?.containingCommand?.commandCallIndex;
                if (commandCallIndex != null) {
                    run(parseResult.commandCalls[commandCallIndex]);
                } else {
                    inCommand = false;
                    closest = null;
                    missingParameters = [];
                }
                return;
            }
            
        }
    
        // Find index of arguments
        matchingEqualityStatements = parseResult.equalityStatements
            .filter(eq => inRange(eq.textRange, lineNumber, column, true, true));
        
        index = (argumentIndex != null && argumentIndex >= 0 ? argumentIndex : 0);
    
        // If cursor is at end of command call
        inCommand = inCommand && closestItem != null && closestCall.arguments.findIndex(arg => inRange(arg.textRange, closestItem!!.textRange.start.line, closestItem!!.textRange.start.character!! + 1)) >= 0;
        
        if (!inCommand && !(inEq && isEqLike)) {
            const commandCallIndex = closestCall?.containingCommand?.commandCallIndex;
            if (commandCallIndex != null) {
                run (parseResult.commandCalls[commandCallIndex]);
                return;
            } else {
                closest = null;
                missing = [];
            }
        }
        closest = closestCall;
        missingParameters = missing;
    }
    
    if (closest) {
        run(closest);
    }
    
    // Find the closest parameter based on argument index
    const closestParameter = (missingParameters.length != 0 || closestItem?.textRange?.end.character === column || (closestItem != null && !isComplete(closestItem, lineNumber, column))) &&
        inCommand &&
        commandParameters != null &&
        commandParameters.length > 0 &&
        commandParameters.length > (index ?? Number.MAX_VALUE) ?
        commandParameters[index!!] : null;
    
    const beforeTextIsMatchingCommand =
        (closestItem != null && VAR_REGEX.test(closestItem.text.toLowerCase())) ||
        closest?.command?.command?.toLowerCase()
            ?.endsWith(closestItem?.value?.toString()
                ?.toLowerCase());
    
    // Get value list if any for an equality statement value
    let equalityValuesList: Nullable<CaosValuesList> = getEqualityValuesList(
        parseResult,
        closestParameter,
        lineNumber,
        column
    );
    
    return <CursorData>{
        command: closest?.command,
        missing: missingParameters,
        closestParameter: closestParameter,
        beforeText: !beforeTextIsMatchingCommand ? closestItem?.text : '',
        previousTokens: dismissTokensIfUsed(closest?.command, closestItemResult?.previous ?? []),
        closestItem,
        line: lineNumber,
        character: column,
        eqValuesList: equalityValuesList,
        inEqualityStatement: matchingEqualityStatements.length > 0
    };
}

/**
 * Discard tokens in a list of tokens that where used by a command call
 * Sometimes a token array is given, but the last two tokens were actually used in the command call,
 * this returns that array minus the two tokens used
 * @param currentCommand
 * @param tokens
 */
function dismissTokensIfUsed(currentCommand: Nullable<ICaosCommand>, tokens: CommandToken[]): CommandToken[] {
    if (currentCommand == null) {
        return tokens;
    }
    let tokensTemp = [...tokens].map(t => <number>tok(t.text.toLowerCase()));
    const commandTokens = currentCommand.command.toLowerCase()
        .split(' ')
        .map((c: string) => <number>(tok(c)));
    let startIndex = tokensTemp.indexOf(commandTokens[0]);
    if (startIndex < 0) {
        return tokens;
    }
    const availableTokens = Math.min(commandTokens.length, tokensTemp.length - startIndex);
    tokensTemp = tokensTemp.slice(startIndex);
    let i = 0;
    for (; i < availableTokens; i++) {
        if (tokensTemp[i] !== commandTokens[i]) {
            return tokens.slice(i);
        }
    }
    if (i == tokens.length - 1) {
        return [];
    }
    return tokens.slice(i + 1);
}

/**
 * Object of an item and its distance to a line and column
 */
interface Distanced<T extends HasRange> {
    item: T
    distance: Distance
}

/**
 * Distance between two positions
 */
interface Distance {
    lineOffset: number
    columnOffset: number
}


/**
 * Gets an items distance from a given line and column
 * @param range
 * @param lineNumber
 * @param column
 */
function getDistance (range: RangeWithIndex, lineNumber: number, column: number): Distance {
    return <Distance>{
        lineOffset: lineNumber - range.start.line,
        columnOffset: (lineNumber === range.start.line) ? (column - range.start.character) : range.start.character
    };
}


/**
 * Gets the closest item to a given line and column
 * If notAfter is set, it will only get the closest item without going past the column and line
 * @param inRangeItems
 * @param lineNumber
 * @param column
 * @param notAfter
 */
export function getClosestItem<T extends HasRange>(
    inRangeItems: T[],
    lineNumber: number,
    column: number,
    notAfter: boolean
): Nullable<{ closest: T; previous: CommandToken[]; }> {
    
    if (inRangeItems.length < 1) {
        return null;
    }
    
    if (notAfter) {
        const fuzzy = column;
        inRangeItems = inRangeItems.filter(item => item.textRange.start.line === lineNumber && item.textRange.start.character <= fuzzy);
    }
    if (inRangeItems.length < 1) {
        return null;
    }
    // Combine call with distance to lineNumber/Column
    const distanced: Distanced<T>[] = inRangeItems.map(call => {
        return {item: call, distance: getDistance(call.textRange, lineNumber, column)};
    });
    
    // Find all commands on same line
    const sameLine: Distanced<T>[] = distanced.filter(c => c.distance.lineOffset === 0)
        .sort((a: Distanced<T>, b: Distanced<T>) => {
            return a.distance.columnOffset - b.distance.columnOffset
        });
    
    if (sameLine.length > 0) {
        // Sort by column distance, and return nearest
        let index = null;
        
        for (let i = 0; i < sameLine.length; i++) {
            const item = sameLine[i];
            if (item.item.textRange.start.character > column) {
                break;
            }
            index = i;
        }
        if (index == null) {
            return null;
        }
        const items = sameLine.slice(0)
            .slice(0, Math.min(5, sameLine.length));
        const tokens: ParserItem.CommandToken[] = [];
        let stillTokens = true;
        for (const {item} of items) {
            if (!(item instanceof ParserItem.CommandToken)) {
                stillTokens = (item instanceof ParserItem.TokenVal);
            } else if (stillTokens) {
                tokens.push(item);
            }
        }
        
        return {
            closest: sameLine[0].item,
            previous: tokens.reverse()
        };
    }
    
    // Sort distanced by
    distanced.sort((a, b) => {
        return ((a.distance.lineOffset << 8) | a.distance.columnOffset) - ((b.distance.lineOffset >> 8) | b.distance.columnOffset);
    });
    
    // Find the closest call in distanced
    let min: Distanced<T> = distanced[0];
    // Search all distanced
    for (let call of distanced) {
        // Distanced is sorted by line number
        // So a change in line means it is guaranteed to be further away
        if (call.distance.lineOffset > min.distance.lineOffset) {
            break;
        }
        // Grab closest
        if (call.distance.columnOffset < min.distance.columnOffset) {
            min = call;
        }
    }
    // Return the closest call
    return {
        closest: min.item,
        previous: []
    };
}

/**
 * Get values list for equality statement based on opposing command
 * @param parseResult
 * @param closestParameter
 * @param lineNumber
 * @param column
 */
function getEqualityValuesList(
    parseResult: ParseResult,
    closestParameter: Nullable<ICaosParameter>,
    lineNumber: number,
    column: number
): Nullable<CaosValuesList> {
    
    const equalityStatementsInRange = parseResult.equalityStatements
        .filter(eq => eq.textRange != null && inRange(eq.textRange, lineNumber, column, true, true))
        .sort((a, b) => sortTextRanges(a.textRange, b.textRange));
    if (equalityStatementsInRange.length < 1) {
        return null;
    }
    const equalityStatement = equalityStatementsInRange[0];
    let shouldComplete = true;
    let other: Nullable<Argument> = null;
    if (equalityStatement.second instanceof CommandCall) {
        shouldComplete = equalityStatement.first == null || equalityStatement.first?.parserItem instanceof ParserItem.IntVal;
        other = equalityStatement.second;
    } else if (equalityStatement.first instanceof CommandCall) {
        shouldComplete = equalityStatement.second == null || equalityStatement.second?.parserItem instanceof ParserItem.IntVal;
        other = equalityStatement.first;
    }
    if (!shouldComplete || !(other instanceof CommandCall)) {
        return null;
    }
    const variant = parseResult.variant;
    const valuesListIds = other.command?.returnValuesListIds ?? {get: () => null };
    if (!valuesListIds.hasOwnProperty(variant) && valuesListIds.get(variant) == null) {
        return null;
    }
    const valuesListId = valuesListIds.get(variant);
    if (valuesListId == null) {
        return null;
    }
    return getValuesList(valuesListId);
}


/**
 * Gets a cursor position using un-parsed CAOS text
 * @param variant
 * @param text
 * @param lineNumber
 * @param column
 * @param parseOnlyNear
 * @param incomplete
 * @param keepGoing
 */
// noinspection JSUnusedGlobalSymbols
export function getCursorPositionFromRawText(
    variant: GameVariant,
    text: string,
    lineNumber: number,
    column: number,
    parseOnlyNear: boolean = true,
    incomplete: boolean = true,
    keepGoing?: () => boolean
): Nullable<CursorData> {
    
    const result = parseOnlyNear ?
        parseCaosNear(variant, text, lineNumber, column, false, null, keepGoing) :
        parseCaos(variant, text, keepGoing);//parseCaosNear(variant, text, lineNumber + 1, column + 1);
    
    if (result == null) {
        return null;
    }
    return getCursorPosition(result, lineNumber, column, incomplete);
}

export function cancelComplete(closestItem: ParserItem<any>, line: number, character: number): boolean {
    if (!inRange(closestItem.textRange, line, character, false, false)) {
        return false;
    }
    switch (closestItem.actualType) {
        case TOKEN_TYPE_ID:
        case COMMAND_TYPE_ID:
        case UNKNOWN_TYPE_ID:
        case STRING_TYPE_ID:
            return false;
        case CAOS2_COMMENT_TYPE_ID:
            return closestItem.textRange.start.character + 2 > character
        default:
            return true;
    }
}


export function inQuotes(closestItem: ParserItem<any>, line: number, character: number): boolean {
    if (!closestItem.text.startsWith('"')) {
        return false;
    }
    const {start, end} = closestItem.textRange;
    if (start.line === line) {
        if (end.line !== line) {
            return true;
        } else {
            return (start.character < character && character <= end.character);
        }
    } else if (start.line < line) {
        if (end.line > line) {
            return true;
        } else {
            const endQuote = closestItem.text.endsWith('"') ? 1 : 0;
            return (character < end.character - endQuote);
        }
    } else if (start.line > line) {
        return false;
    } else {
        return false;
    }
}



function isComplete(parserItem: ParserItem<any>, line: number, character: number): boolean {
    if (inQuotes(parserItem, line, character)) {
        return false;
    }
    const text = parserItem.text;
    // If is numeric
    if ((/((\d+)?\.\d+)|(\d+)/).test(text)) {
        return false;
    }
    if (parserItem.actualType === TOKEN_TYPE_ID) {
        return false;
    }
    
    return text.startsWith('"') || text.length == 4;
    
}