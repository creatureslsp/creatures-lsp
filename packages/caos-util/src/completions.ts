// noinspection SpellCheckingInspection

import {collectors, CursorData, GameVariant, libs, Nullable, Script} from "./CaosUtil";
import {
    CompletionItem,
    CompletionItemKind,
    CompletionList,
    InsertTextFormat,
    InsertTextMode,
    Position,
    Range,
    TextEdit
} from "vscode-languageserver-types";
import {ANY_TYPE_ID, CAOS2_COMMENT_TYPE_ID, COMMAND_TYPE_ID, tok, UNKNOWN_TYPE_ID, VARIABLE_TYPE_ID} from "./constants";
import {repack} from "./repack";
import {getSubroutines} from "./subroutines";
import {inRange} from "./position-utils";
import {isSimilarType} from "./is-similar";
import {getCommands} from "./commands";
import ICaosCommand = libs.ICaosCommand;
import ICaosParameter = libs.ICaosParameter;
import getValueTypeName = libs.getValueTypeName;
import getValuesList = libs.getValuesList;
import ValuesListValue = libs.ValuesListValue;
import Commands = libs.Commands;
import CommandToken = collectors.ParserItem.CommandToken;
import parseCaos = collectors.parseCaos;
import ParserItem = collectors.ParserItem;
import ParseResult = collectors.ParseResult;
import getScriptsFromParseResult = collectors.getScriptsFromParseResult;
import Caos2Comment = collectors.ParserItem.Caos2Comment;
import getCaos2PrayComments = collectors.getCaos2PrayComments;

const {cancelComplete, getClosestItem, getCursorPosition, getCursorPositionFromRawText, inQuotes} = collectors;
export type NamedVarPrefix = 'game' | 'eame' | 'name';

/**
 * Default completion sort priority for variables
 */
const DEFAULT_VAR_PRIORITY = 1001 << 16;

type VariantIndexed<T> = {
    [variant in GameVariant]: T;
}

type VariantArray<T> = VariantIndexed<T[]>;

const VAR_TYPES_REGEX = /([Vv][Aa][Rr]|[Oo][Bb][Vv])[xX]|([Vv][Aa]|[OoMm][Vv])[Xx][Xx]/;

const COMMAND_TYPE__COMMAND = 0;
const COMMAND_TYPE__RVALUE = 1;
const COMMAND_TYPE__LVALUE = 2;


const singleTokenCommands: VariantArray<CompletionItem> = <any>{};
const singleTokenRvalues: VariantArray<CompletionItem> = <any>{};
const singleTokenLvalues: VariantArray<CompletionItem> = <any>{};

const multiTokenCommands: VariantArray<CompletionItem> = <any>{};
const multiTokenRvalues: VariantArray<CompletionItem> = <any>{};
const multiTokenLvalues: VariantArray<CompletionItem> = <any>{};

const dumbModeCompletionItems: VariantArray<CompletionItem> = <any>{};

const prefixTokens: VariantIndexed<{ [commandType: number]: number[] }> = <any>{};

export type CompletionSettings = {
    readonly parameterInlayHints?: boolean;
    readonly usePlaceholders?: boolean;
    readonly dumbMode?: boolean,
    readonly minimumParameterCount?: number
}


export function createEmptyCompletionList(): CompletionList {
    return {
        isIncomplete: true,
        items: []
    }
}


/**
 * Get option based on its command type
 * Can accomodate any kind of item
 * @param commandType
 * @param command
 * @param rvalue
 * @param lvalue
 */
function getFromCommandType<T>(commandType: number, command: T, rvalue: T, lvalue: T): T {
    switch (commandType) {
        case COMMAND_TYPE__COMMAND:
            return command;
        case COMMAND_TYPE__RVALUE:
            return rvalue;
        case COMMAND_TYPE__LVALUE:
            return lvalue;
        default:
            throw new Error("Failed to understand command type: <" + commandType + "> for command type filter action");
    }
}

function getDumbCompletionItems(variant: GameVariant, commands: Commands): CompletionItem[] {
    if (dumbModeCompletionItems.hasOwnProperty(variant)) {
        return dumbModeCompletionItems[variant];
    }
    const allCommands = [...commands.commands, ...commands.rvalues, ...commands.lvalues];
    const completions = allCommands.map(command => commandToCompletionItem(command)!!);
    return dumbModeCompletionItems[variant] = completions;
}

/**
 * Get all prefix tokens for multi-word completion items
 * @param variant
 * @param commands
 * @param commandType
 */
function getMultiTokenPrefixTokens(variant: GameVariant, commands: Commands, commandType: number): number[] {
    if (prefixTokens.hasOwnProperty(variant)) {
        if (prefixTokens[variant].hasOwnProperty(commandType)) {
            return prefixTokens[variant][commandType]
        }
    } else {
        prefixTokens[variant] = {};
    }
    const out: number[] = [];
    const commandsOfType = getFromCommandType(commandType, commands.commands, commands.rvalues, commands.lvalues);
    
    const hasSpace = commandsOfType
        .filter(c => c.command.indexOf(' '));
    for (const {command} of hasSpace) {
        const split = command.replace(/\s\s+/, ' ')
            .split(' ');
        out.push(<number>tok(split[0]));
        if (split.length > 0) {
            out.push(<number>tok(split[0]));
        }
    }
    return prefixTokens[variant][commandType] = out;
}

/**
 * Get completions for multi-word commands
 * @param variant
 * @param commands
 * @param commandType
 * @param position
 * @param previousItems
 */
function getMultiTokenCommands(
    variant: GameVariant,
    commands: Commands,
    commandType: number,
    position: Position,
    previousItems: CommandToken[]
): CompletionItem[] {
    
    // Get the correct command container for this command type
    const commandsContainer = getFromCommandType(commandType, multiTokenCommands, multiTokenRvalues, multiTokenLvalues);
    
    // Build base completion without range
    if (!commandsContainer.hasOwnProperty(variant)) {
        const commandsOfType = getFromCommandType(commandType, commands.commands, commands.rvalues, commands.lvalues);
        commandsContainer[variant] = commandsOfType
            .filter(({command}) => command.indexOf(' ') > 0)
            .map(command => <CompletionItem>commandToCompletionItem(command))
            .filter(c => c != null);
    }
    
    // Check if there are previous tokens.
    // If not, we do not need to calculate replacement range
    if (previousItems.length < 1) {
        return commandsContainer[variant];
    }
    
    // Get previous items as tokens
    const previousTokens = previousItems.map(c => <number>tok(c.value.toLowerCase()));
    
    // Get all tokens prefix tokens from multi-word commands
    const prefixTokens = getMultiTokenPrefixTokens(variant, commands, commandType);
    
    // Get last index and last token of previous tokens
    const lastIndex = previousTokens.length - 1;
    const lastToken = previousTokens[lastIndex];
    if (prefixTokens.indexOf(lastToken) < 0) {
        return [];
    }
    
    // Get base text range for replacement
    let startTokenRange = previousItems[lastIndex].textRange;
    
    // Alter start token for three word commands
    if (variant === 'C1' || variant === 'C2') {
        const ddeIndex = previousTokens.indexOf(<number>tok('dde:'));
        if (ddeIndex >= 0) {
            if (ddeIndex != lastIndex || ddeIndex + 1 == lastIndex) {
                startTokenRange = previousItems[ddeIndex].textRange
            }
        }
    }
    
    // Create the range that will actually be used
    const range: Range = {
        start: {
            line: startTokenRange.start.line,
            character: startTokenRange.start.character
        },
        end: position
    }
    
    const token = (<string>tok(lastToken)).toUpperCase();
    // Map all commands with the replace text TextEdit object
    // This is necessary as VSCode will not replace the previous tokens without this
    return commandsContainer[variant]
        .filter((c) => c.label.indexOf(token) >= 0)
        .map(c => {
            const filterText = c.label.toLowerCase();//c.label.toLowerCase().split(/\s+/).filter((c, i) => i > lastIndex).join(' ')).trim();
            const textEdit = <TextEdit>{
                range: range,
                newText: c.insertText ?? c.label
            };
            return <CompletionItem>{
                ...c,
                filterText: filterText,
                textEdit
            }
        });
    
    
}

/**
 * Get all completion items for single token completions.
 * Items are returned without explicit range
 * @param variant
 * @param commands
 * @param commandType
 */
function getSingleTokenCommands(
    variant: GameVariant,
    commands: Commands,
    commandType: number
): CompletionItem[] {
    
    // Get commands container (command, rvalue or lvalue)
    const commandsContainer = getFromCommandType(
        commandType,
        singleTokenCommands,
        singleTokenRvalues,
        singleTokenLvalues
    );
    
    // If container already has variant options, return it
    // These only need to be calculated once
    if (commandsContainer.hasOwnProperty(variant)) {
        return commandsContainer[variant];
    }
    
    // Get commands based on type (command, rvalue or lvalue)
    const commandsOfType = getFromCommandType(
        commandType,
        commands.commands,
        commands.rvalues,
        commands.lvalues
    )
    
    // Generate completion items without range
    const items: CompletionItem[] = commandsOfType
        .filter(({command}) => {
            // Ensure is not multiword, and is not variable command
            // Variable commands are placeholders and not valid commands
            return command.indexOf(' ') < 0 && !VAR_TYPES_REGEX.test(command);
        })
        .map(command => {
            return <CompletionItem>commandToCompletionItem(command)
        })
        .filter(c => c != null);
    // Assign and return results
    return commandsContainer[variant] = items;
    
}

// noinspection JSUnusedLocalSymbols
/**
 * Formats a parameter to be a completion placeholder
 * Placeholders have a name and a text to go with them
 * TODO: Paramter name is duplicated when parameter name inline hints are visible
 * @param parameter
 */
function formatParameterSnippet(parameter: ICaosParameter): string {
    const name = parameter.name.toLowerCase();
    const type = getValueTypeName(parameter.typeId);
    if (type == null || type.length < 1) {
        return name;
    }
    if (name == type || name == "value") {
        return type;
    }
    return name + ":" + type
}


/**
 * Gets commmand completions based on
 * @param variant
 * @param commands
 * @param commandType
 * @param position
 * @param previousTokens
 * @param returnType
 */
function getCommandCompletions(
    variant: GameVariant,
    commands: Commands,
    commandType: number,
    position: Position,
    previousTokens: CommandToken[],
    returnType: number,
): CompletionItem[] {
    let out = getMultiTokenCommands(variant, commands, commandType, position, previousTokens);
    if (previousTokens.length === 0 || out.length === 0) {
        out = out.concat(getSingleTokenCommands(variant, commands, commandType));
    }
    
    return  (returnType == ANY_TYPE_ID || returnType == UNKNOWN_TYPE_ID) ? out : out.map(item => {
        const prefix = isSimilarType((<ICaosCommand>item.data)?.returnTypeId, returnType) ? '0_' : '1_';
        return {
            ...item,
            sortText: prefix + item.sortText
        }
    });
}

function addVariablesOfType(
    completions: CompletionItem[],
    command: ICaosCommand,
    prefix: string,
    max: number,
    description: Nullable<string> = null,
    priority: number
) {
    const pad = prefix.length < 3;
    for (let i = 0; i <= max; i++) {
        let number = pad ? (i + "").padStart(2, '0') : i + "";
        const text = prefix + number;
        completions.push(<CompletionItem>{
            label: text,
            kind: CompletionItemKind.Variable,
            insertText: text,
            documentation: description,
            sortText: priority + "_" + i + text,
            filterText: text,
            data: {
                ...repack(command),
                prefix,
                index: i
            }
        });
    }
    
}

const variables: VariantArray<CompletionItem> = <any>{};

function getIndexedVariableCompletions(variant: GameVariant, commands: ICaosCommand[]): CompletionItem[] {
    if (variables.hasOwnProperty(variant)) {
        return variables[variant];
    }
    const varX = commands.find(c => c.command.toLowerCase() === 'varx');
    const vaXX = commands.find(c => c.command.toLowerCase() === 'vaxx');
    const obvX = commands.find(c => c.command.toLowerCase() === 'obvx');
    const ovXX = commands.find(c => c.command.toLowerCase() === 'ovxx');
    const mvXX = commands.find(c => c.command.toLowerCase() === 'mvxx');
    let vars: [string, number, string, number, ICaosCommand?][] = [];
    switch (variant) {
        case "C1":
            vars.push(["var", 9, "Event variable", DEFAULT_VAR_PRIORITY, varX]);
            vars.push(['obv', 2, "[TARG] variable", DEFAULT_VAR_PRIORITY, obvX]);
            break;
        case "C2":
            vars.push(['var', 9, "Event variable", DEFAULT_VAR_PRIORITY, varX]);
            vars.push(['obv', 9, "[TARG] variable", DEFAULT_VAR_PRIORITY, obvX]);
            vars.push(['va', 99, "Event variable", DEFAULT_VAR_PRIORITY - 1, vaXX]);
            vars.push(['ov', 99, "[TARG] variable", DEFAULT_VAR_PRIORITY - 1, ovXX]);
            break;
        default:
            vars.push(['va', 99, "Event variable", DEFAULT_VAR_PRIORITY, vaXX]);
            vars.push(['ov', 99, "[TARG] variable", DEFAULT_VAR_PRIORITY, ovXX]);
            vars.push(['mv', 99, "[OWNR] variable", DEFAULT_VAR_PRIORITY, mvXX]);
            break;
    }
    
    const out: CompletionItem[] = [];
    for (let i = 0; i < vars.length; i++) {
        const [prefix, max, description, priority, command] = vars[i];
        if (command != null) {
            addVariablesOfType(out, command, prefix, max, description, priority);
        }
    }
    return variables[variant] = out;
}

function getRvalueCompletions(
    variant: GameVariant,
    commands: Commands,
    position: Position,
    data: CursorData,
): CompletionItem[] {
    if (data == null) {
        return [];
    }
    const parameter = data.closestParameter
    const parameterType = parameter?.typeId ?? ANY_TYPE_ID;
    const valuesListId = parameter?.valuesListId
    const valuesListValues: ValuesListValue[] = (valuesListId != null ? getValuesList(valuesListId)?.values : null) ??
        data.eqValuesList?.values ??
        [];
    let valuesListValuesCompletions: CompletionItem[] = [];
    if (valuesListValues.length > 0) {
        valuesListValuesCompletions = valuesListValues.map(function (value) {
            return <CompletionItem>{
                label: value.name.toLowerCase(),
                filterText: inflect(value.name.toLowerCase()
                    .trim()),
                insertTextMode: InsertTextMode.asIs,
                kind: CompletionItemKind.Value,
                insertText: value.value,
                insertTextRules: InsertTextFormat.PlainText,
                documentation: value.description ?? undefined,
                sortText: '__' + value.name.toLowerCase()
            }
        });
    }
    let commandCompletions: CompletionItem[] = getCommandCompletions(
        variant,
        commands,
        COMMAND_TYPE__RVALUE,
        position,
        data.previousTokens,
        parameterType,
    );
    const variableCompletions = data.previousTokens.length == 0 && data.beforeText != null && data.beforeText.length > 0
        ? getIndexedVariableCompletions(variant, commands.rvalues)
        : [];
    return [...valuesListValuesCompletions, ...commandCompletions, ...variableCompletions];
}

/**
 * Gets lvalue completions for a given variant
 * @param variant
 * @param commands
 * @param position
 */
function getLvalueCompletions(variant: GameVariant, commands: Commands, position: Position): CompletionItem[] {
    let commandCompletions: CompletionItem[] = getCommandCompletions(
        variant,
        commands,
        COMMAND_TYPE__LVALUE,
        position,
        [],
        VARIABLE_TYPE_ID,
    )
    const variableCompletions = getIndexedVariableCompletions(variant, commands.rvalues);
    return [...commandCompletions, ...variableCompletions];
}

/**
 * Gets completions for a parameter which allows prioritizing by type.
 * Falls back to command, if parameter is null
 * @param variant
 * @param commands
 * @param data
 */
function getCompletions(
    variant: GameVariant,
    commands: Commands,
    data: Nullable<CursorData>
): CompletionItem[] {
    if (data == null) {
        return [];
    }
    const position = <Position>{
        line: data.line,
        character: data.character
    };
    const firstParameter = data.closestParameter
    // If paramaeter is null, then this is possibly a command, so complete with command and not r/l values
    
    if (firstParameter == null && !data.inEqualityStatement) {
        return getCommandCompletions(
            variant,
            commands,
            COMMAND_TYPE__COMMAND,
            position,
            data.previousTokens,
            COMMAND_TYPE_ID
        );
    }
    
    // If this parameter requests a variable, safe to assume lvalue
    if (firstParameter?.typeId == VARIABLE_TYPE_ID) {
        return getLvalueCompletions(variant, commands, position)
    }
    // If parameter is not null, and it is not a variable, then it's an rvalue
    return getRvalueCompletions(variant, commands, position, data)
}

/**
 * Takes a command, and creates a completion item for it
 * This completion item has no range or position information, so client will decide what to replace
 * @param command
 * @param sortPrefix
 */
function commandToCompletionItem(command: ICaosCommand, sortPrefix: Nullable<string> = null): CompletionItem {
    const commandLower = command.command.toLowerCase();
    let args = "";
    const parameters = command.parameters.sort((a, b) => a.index - b.index);
    const parametersLength = parameters.length
    for (let i = 0; i < parametersLength; i++) {
        args += ' \${' + (i + 1) + ':' + formatParameterSnippet(parameters[i]) + '}'
    }
    let replacementText = commandLower;
    let preselect = false;
    if (sortPrefix == null || sortPrefix.length < 2) {
        sortPrefix = '' + (1000 << 16) + '_';
    }
    let type = command.returnTypeName;
    if (!type.startsWith('[')) {
        type = '(' + type + ')';
    }
    return <CompletionItem>{
        label: command.command,
        kind: CompletionItemKind.Function,
        insertText: replacementText + args,
        insertTextFormat: args.length > 0 ? InsertTextFormat.Snippet : InsertTextFormat.PlainText,
        insertTextMode: InsertTextMode.asIs,
        documentation: command.description ?? undefined,
        filterText: command.command.toLowerCase(),
        detail: type,
        preselect: preselect,
        sortText: 'x_' + sortPrefix + replacementText,
        data: {...repack(command), firstToken: <number>tok(command.command.substring(0, 4))}
    }
}

/**
 * Get completions within a CAOS2Pray statement
 * @param allComments
 * @param item
 * @param line
 * @param character
 */
export function getCaos2PrayCompletions(allComments: Caos2Comment[], item: Caos2Comment, line: number, character: number): CompletionItem[] {
    console.log("In caos 2 comment; Text: " + item.text+"; MoreSpecific: ");
    const cursor = getClosestItem(item.values, line, character, true)?.closest;
    // TODO: Actually implement completions for CAOS2Pray comments
    return [];
}

/**
 * Gets all completion items for a given position in a file
 * @param variant
 * @param commands
 * @param positionData
 * @param settings
 * @param caos2Comments
 */
export function getCompletionItemsWithCursorData(
    variant: GameVariant,
    commands: Commands,
    positionData: CursorData,
    settings: Nullable<CompletionSettings> = null,
    caos2Comments: Caos2Comment[] = [],
): CompletionItem[] {
    
    if (positionData.previousTokens.length === 0 && (positionData.beforeText ?? '').trim().length === 0) {
        return [];
    }
    
    const closestItem = positionData.closestItem
    
    let raw: CompletionItem[];
    if (closestItem && cancelComplete(positionData.closestItem!!, positionData.line, positionData.character)) {
        return [];
    }
    if (closestItem && closestItem.actualType === CAOS2_COMMENT_TYPE_ID) {
        console.log("CAOS2Comment");
        raw = getCaos2PrayCompletions(caos2Comments, closestItem as Caos2Comment, positionData.line, positionData.character);
    } else if (closestItem && inQuotes(closestItem, positionData.line, positionData.character)) {
        raw = [];
    } else {
        raw = (settings?.dumbMode === true) ?
            getDumbCompletionItems(variant, commands) :
            getCompletions(variant, commands, positionData);
    }
    
    raw = raw.filter(item => item.data?.command?.startsWith('_CD_') !== true);
    
    if (settings?.usePlaceholders !== true) {
        raw = raw.map(item => {
            const out = <CompletionItem>{
                ...item,
                insertText: item.data?.command?.toLowerCase() ?? item.insertText
            }
            delete out['data'];
            return out;
        });
    } else if (settings.parameterInlayHints === true) {
        const replaceRegex = /\$\{(\d+)\s*:[^:]+?:([{\[]?[^}]+[\])]?)}/;
        const minimumParameterCount = (settings.minimumParameterCount ?? 2);
        raw = raw.map(item => {
            let replacement = item.insertText;
            if (replacement != null && replacement.split('$').length > minimumParameterCount) {
                const tokens = replacement.split(' ');
                replacement = '';
                for (const token of tokens) {
                    replacement += ' ' + token.replace(replaceRegex, '\${$1:$2}')
                }
                replacement = replacement.trim();
            }
            
            if (replacement == null) {
                return item;
            }
            const out = <CompletionItem>{
                ...item,
                insertText: replacement,
                textEdit: item.textEdit != null ? {
                    range: (<TextEdit>item.textEdit).range,
                    newText: replacement,
                } : null
            }
            delete out['data'];
            return out;
        });
    } else {
        raw = raw.map(item => {
            const out = {...item};
            delete out['data'];
            return out;
        });
    }
    return raw;
}

/**
 * Gets subroutine data in the script where the cursor resides
 * @param variant
 * @param text
 * @param cursor
 */
export function getSubroutinesInDocument(variant: GameVariant, text: string | ParseResult | unknown, cursor: CursorData): CompletionItem[] {
    const tokens: Nullable<ParseResult> = text instanceof ParseResult ? text : (typeof text === 'string' ? parseCaos(variant, text) : null);
    if (tokens == null || tokens.items.length < 1) {
        console.error("Invalid text parameter for text. Expected ParseResult or string");
        return [];
    }
    let scripts: Script[];
    if (tokens.scripts.length === 0) {
        scripts = getScriptsFromParseResult(tokens)
    } else {
        scripts = tokens.scripts
    }
    const line = cursor.lineNumber;
    const character = cursor.column;
    const scriptTokens = scripts.find(s => inRange(s.textRange, line, character))?.items;
    return getSubroutines(scriptTokens ?? [])
        .map((t: ParserItem<any>) => {
            return <CompletionItem>{
                label: t.value,
                kind: CompletionItemKind.Value,
                insertText: t.value,
                insertTextFormat: InsertTextFormat.PlainText,
                insertTextMode: InsertTextMode.asIs,
                preselect: false,
            };
        });
}

const replace = [
    ['mouseable', 'mousable'],
    ['mousable', 'mouseable'],
    ['eaten', 'ate'],
    ['eat ', 'ate '],
    ['ate ', 'eaten'],
    ['gadget', 'machine'],
    ['machine', 'gadget'],
    ['hit', 'slap'],
    ['slap', 'hit'],
    ['pat', 'tickle'],
    ['tickle', 'pat'],
    ['tired', 'tiredness'],
    ['impregnated', 'pregnant'],
    ['pregnant', 'impregnated'],
    ['true', 'yes'],
    ['false', 'no'],
    ['string', 'text'],
    ['text', 'string'],
    ['Amorous', 'horny'],
    ['barf', 'vomit'],
    ['vomit', 'barf'],
    ['with', 'and'],
    ['and', 'with'],
    ['travelling', 'moving'],
    ['moving', 'traveling'],
    ['x', 'width'],
    ['width', 'x'],
    ['hunger', 'hungry'],
    ['hungry', 'hunger']
];

function replaceIf(text: string, search: string, replace: string): Nullable<string> {
    text = text.trim();
    const replaced = text.replace(search, replace);
    if (replaced == text) {
        return null;
    } else {
        return replaced;
    }
}

function inflect(text: string): string {
    text = text.trim();
    const replaced = replace.map(([search, replacement]) => replaceIf(text, search, replacement))
        .filter(t => t != null && t.trim().length > 0);
    return (text + ' ' + replaced.join(' ')).trim();
}

function getNamedVariableCompletionItems(getNamedVariableKeys: (prefix: NamedVarPrefix) => string[], closestItem: Nullable<ParserItem<any>>, namedVariablePrefix: 'game' | 'eame' | 'name'): CompletionItem[] {
    const keys = getNamedVariableKeys(namedVariablePrefix);
    let range: Nullable<Range>;
    const text = closestItem?.text;
    let openQuote = text != null && text.startsWith('"') ? '' : '"';
    let closeQuote = text != null && text.endsWith('"') ? '' : '"';
    if (closestItem) {
        range = {
            start: {
                line: closestItem.textRange.start.line!!,
                character: closestItem.textRange.start.character + (1 - openQuote.length)
            },
            end: {
                line: closestItem.textRange.end.line,
                character: closestItem.textRange.end.character - (1 - closeQuote.length)
            }
        }
    }
    const stringValue = closestItem?.value?.toString();
    return keys.map(key => {
        const completion = openQuote + key + closeQuote;
        const edit = range != null ? {range, newText: completion} : null;
        return <CompletionItem>{
            label: key,
            kind: CompletionItemKind.Value,
            filterText: '"' + inflect(key) + '"',
            insertText: completion,
            insertTextFormat: InsertTextFormat.PlainText,
            insertTextMode: InsertTextMode.asIs,
            preselect: false,
            sortText: '0__0' + key,
            textEdit: edit
        };
    })
        .filter(i => i.label !== stringValue);
}

/**
 * Optional parameters for getCompletionItems
 * @see getCompletionItems
 */
export type CompletionOptions = {
    readonly cursorPointer?: { cursorData?: Nullable<CursorData>; commandString?: Nullable<string>; };
    readonly getNamedVariableKeys?: (prefix: NamedVarPrefix) => string[];
    readonly parseNear?: boolean;
    readonly keepGoing?: () => boolean,
    readonly incomplete: boolean
}

/**
 * Get list of completion items for a given position in a CAOS document
 * @param variant
 * @param text
 * @param position
 * @param completionSettings
 * @param opts
 */
export function getCompletionItems(
    variant: GameVariant,
    text: string | ParseResult,
    position: Position,
    completionSettings: Nullable<CompletionSettings> = null,
    opts?: CompletionOptions
): CompletionList {
    
    const emptyCompletionList = createEmptyCompletionList()
    
    let cursor: Nullable<CursorData>;
    if (typeof text === 'string') {
        cursor = getCursorPositionFromRawText(
            variant,
            text,
            position.line,
            position.character,
            opts?.parseNear ?? true,
            opts?.incomplete ?? true,
            opts?.keepGoing
        );
    } else {
        cursor = getCursorPosition(
            text,
            position.line,
            position.character,
            opts?.incomplete ?? true
        )
    }
    
    if (cursor == null) {
        return emptyCompletionList;
    }
    
    const commandString = cursor?.command?.command?.toLowerCase();

// Get subroutine names if any near cursor
    if (commandString === 'gsub') {
        const subroutines = getSubroutinesInDocument(variant, text, cursor);
        return {
            isIncomplete: false,
            items: subroutines
        };
    }
    
    let caos2Comments: Caos2Comment[] = []
    try {
        if (cursor.closestItem instanceof Caos2Comment) {
            const originalText = getOriginalText(text);
            // Minumum length = 4 = <*#aa b|*#a=b
            if (originalText != null && originalText.length >= 5) {
                caos2Comments = getCaos2PrayComments(originalText);
            }
        }
    } catch (e) {
    
    }

// Get all normal completions for cursor position
    try {
        let items = getCompletionItemsWithCursorData(
            variant,
            getCommands(variant),
            cursor!!,
            completionSettings,
            caos2Comments
        );
        
        // If C2e, get named variable completions if any or needed
        if (opts?.getNamedVariableKeys != null && variant != 'C1' && variant != 'C2' && (commandString === 'game' || commandString === 'eame' || commandString === 'name')) {
            const namedVariableCompletions = getNamedVariableCompletionItems(opts.getNamedVariableKeys, cursor.closestItem, commandString);
            items = items.concat(namedVariableCompletions);
        }
        
        return <CompletionList>{
            isIncomplete: true,
            items: items
        };
    } catch (e) {
        if (e instanceof Error) {
            console.error("CompletionItems failed: " + e.message + "\n" + e.stack);
        } else {
            console.error("GetCompletionItems failed: " + e);
        }
        return emptyCompletionList;
    }
}


function getOriginalText(text: string | ParseResult | unknown | null | undefined): Nullable<string> {
    if (text == null) {
        return null;
    }
    let rawText: string;
    if (typeof text === 'string') {
        return text
    } else if (text instanceof ParseResult) {
        return text.originalText;
    } else {
        return null;
    }
}