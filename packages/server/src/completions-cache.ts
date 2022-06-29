import {getDocumentSettings} from "./settings";
import {Argument, collectors, libs, Nullable} from "@bedalton/caos-util";
import {tok} from "@bedalton/caos-util/constants";
import parseCaos = collectors.parseCaos;
import ICaosCommand = libs.ICaosCommand;
import ParserItem = collectors.ParserItem;
import {NamedVarPrefix} from "@bedalton/caos-util/completions";


const defaultWorkspaceUri =  "__NULL__";

type NamedVarKeys = {[namedVar in NamedVarPrefix]?: { key: string; documentUri: string}[]}

const recent: { [documentUri: string]: number[]; } = {};
const used: { [token: number]: number } = {};
const namedVariables: { [workspaceUri: string]: NamedVarKeys } = {};

const updateRecentTimeouts: {[documentUri: string]: NodeJS.Timeout } = {};
const refreshTimeout = 300;

export async function updateRecentCommandsInDocument(documentUri: string, text: string, force: boolean = false) {
    clearTimeout(updateRecentTimeouts[documentUri] ?? -1);
    updateRecentTimeouts[documentUri] = setTimeout(() => _updateRecentCommandsInDocument(documentUri, text, force), refreshTimeout);
}

async function _updateRecentCommandsInDocument(documentUri: string, text: string, force: boolean = false) {
    // Only index first run if requested
    if (recent.hasOwnProperty(documentUri) && !force) {
        return;
    }
    const settings = await getDocumentSettings(documentUri);
    const variant = settings.variant ?? 'DS';
    const result = parseCaos(variant, text);
    if (result == null) {
        return;
    }
    if (namedVariables.hasOwnProperty(defaultWorkspaceUri)) {
        const set = namedVariables[defaultWorkspaceUri];
        set.game?.splice(0);
        set.eame?.splice(0);
        set.name?.splice(0);
    }
    for (const call of result.commandCalls) {
        updateRecent(documentUri, call.command, call.arguments);
    }
}

export function updateRecent(documentUri: string, command: Nullable<ICaosCommand>, args: Argument[]) {
    const commandString = command?.command?.toLowerCase()
    
    if (commandString == null) {
        return;
    }
    const commandFirstToken = commandString?.substring(0, 4);
    
    if (!recent.hasOwnProperty(documentUri)) {
        recent[documentUri] = [];
    }
    const token = <number>tok(commandFirstToken);
    const previousIndex = recent[documentUri].indexOf(token);
    if (previousIndex > 0) {
        recent[documentUri].splice(previousIndex, 1);
        recent[documentUri].unshift(token);
    }
    if (!used.hasOwnProperty(token)) {
        used[token] = 1;
    } else {
        used[token]++;
    }
    switch (commandString) {
        case 'name':
        case 'mame':
            cacheNamedVariable(defaultWorkspaceUri, documentUri, 'name', args.length === 1 ? args[0] : null);
            break;
        case 'game':
            cacheNamedVariable(defaultWorkspaceUri, documentUri, 'game', args.length === 1 ? args[0] : null);
            break;
        case 'eame':
            cacheNamedVariable(defaultWorkspaceUri, documentUri, 'eame', args.length === 1 ? args[0] : null);
            break;
    }
}

function cacheNamedVariable(workspaceUri: Nullable<string>, documentUri: string, commandString: NamedVarPrefix, arg: Nullable<Argument>) {
    workspaceUri = workspaceUri ?? defaultWorkspaceUri;
    if (arg == null || !(arg.parserItem instanceof ParserItem.C2eStringVal)) {
        return;
    }
    let key = arg.parserItem?.value;
    if (typeof key != 'string') {
        return;
    }
    if (key.startsWith('"') && key.endsWith('"')) {
        key = key.substring(1, key.length - 1);
    }
    if (!namedVariables.hasOwnProperty(workspaceUri)) {
        namedVariables[workspaceUri] = {
            game: [],
            eame: [],
            name: []
        };
    }
    const keys = namedVariables[workspaceUri]!!;
    const lastIndex = keys[commandString]!!.findIndex(i => i.key === key);
    if (lastIndex === 0) {
        return;
    } else if (lastIndex > 0) {
        keys[commandString]!!.splice(lastIndex, 1);
    }
    keys[commandString]!!.unshift({documentUri, key});
}

export function getNamedVariableKeys(workspaceUri: Nullable<string>, prefix: NamedVarPrefix): string[] {
    workspaceUri = workspaceUri ?? defaultWorkspaceUri;
    if (!namedVariables.hasOwnProperty(workspaceUri)) {
        return [];
    }
    return namedVariables[workspaceUri][prefix]?.map(r => r.key) ?? [];
}