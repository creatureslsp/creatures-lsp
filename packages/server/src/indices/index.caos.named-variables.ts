// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import type {DocumentUri, Position, Range} from "vscode-languageserver";
import type {CommandIndex, IndexedItemLocation} from "./indices.js";
import {Is} from "@creatureslsp/caos/is-util";
import {type NamedVarPrefix} from "@creatureslsp/caos/completions";
import {tok} from "@creatureslsp/caos/token-utils";
import type {C2eStringVal} from "@creatureslsp/caos/core";
import type {Argument, CommandCall} from "@creatureslsp/caos/parser";
import {getFileName, type Nullable} from "@creatureslsp/extension-util";
import {indexFilterDoNotDelete} from "./index.utils.js";
import {Log} from "../ConnLogger.js";


class NamedVariableIndex implements CommandIndex {
    
    private readonly defined: string[] = [];
    private readonly allUsed: string[] = [];
    private readonly usedButNotDefined: string[] = [];
    private readonly command: string
    private readonly locations: { [key: string]: IndexedItemLocation[] } = {};
    private _allKeys: Nullable<string[]> = null;
    
    constructor(command: string) {
        this.command = command.toUpperCase();
    }
    
    
    getUsages(key?: Nullable<string>): IndexedItemLocation[] {
        if (key == null) {
            return this.allLocations();
        }
        
        if (typeof this.locations[key] === "undefined") {
            return [];
        }
        
        return this.locations[key]!;
    }
    
    
    index(documentUri: DocumentUri, commandCall: CommandCall, recursive: boolean) {
        // Command as token for "faster" compare
        if (commandCall == null) {
            console.error("Command call is null");
            return;
        }
        if (commandCall.commandString == null) {
            console.error("Command call command string is null; Data: " + JSON.stringify(commandCall));
            return;
        }
        const command = commandCall.commandString.toLowerCase();
        const token: Nullable<number> = command.length === 4 ? tok(command) as number : null;
        
        // Is this call to variable the first in SETV, etc
        const isDefinition = token != null ? CAOS_SETTERS.indexOf(token) >= 0 : false;
        
        // Index this command directly
        const changed = this._indexArgument(documentUri, commandCall, isDefinition, recursive, true);
        if (changed) {
            this.clearAllKeysCache();
        }
    }
    
    getDefinedKeys(): string[] {
        return [...this.defined];
    }
    
    getKeysOnlyUsedButNotDefined(): string[] {
        return [...this.usedButNotDefined];
    }
    
    getDefinedKeysInUse(): string[] {
        const used = this.allUsed;
        const defined = this.defined;
        return defined.filter(key => used.indexOf(key) >= 0);
    }
    
    getAllKeys(): string[] {
        let allKeys = this._allKeys;
        if (allKeys != null) {
            return allKeys;
        }
        const out = [...this.allUsed];
        for (const key of this.defined) {
            if (out.indexOf(key) < 0) {
                out.push(key);
            }
        }
        this._allKeys = out;
        return out;
    }
    
    clearAllKeysCache() {
        this._allKeys = null;
    }
    
    clearInDocument(documentUri: DocumentUri, range?: Nullable<Range>) {
        
        const doNotDeleteFilter: (location: IndexedItemLocation) => boolean = indexFilterDoNotDelete(documentUri, range);
        for (const key in this.locations) {
            
            if (typeof this.locations[key] === "undefined") {
                continue;
            }
            
            this.clearDocumentKeysInRange(key, doNotDeleteFilter);
            
            if (this.locations[key]?.length === 0) {
                this.prune(key);
            }
        }
    }
    
    private allLocations(): IndexedItemLocation[] {
        let out: IndexedItemLocation[] = [];
        const locations = this.locations;
        for (const key in locations) {
            out = out.concat(locations[key] ?? []);
        }
        return out;
    }
    
    /**
     *
     * @param documentUri
     * @param argument
     * @param isDefinition TRUE if this command is the first argument in a SETV call
     * @param recursive recursively index this command and all arguments and their arguments, etc
     * @param isOriginalCall if argument is original command call, index its arguments regardless or recursive
     * @private
     */
    private _indexArgument(documentUri: DocumentUri, argument: Argument, isDefinition: boolean, recursive: boolean, isOriginalCall: boolean): boolean {
        if (!Is.commandCall(argument)) {
            return true;
        }
        
        let changed = false;
        const args = [...argument.arguments];
        if (this.command === argument.commandString) {
            if (args.length >= 1) {
                const rawKey = args[0].parserItem;
                const start = args[0].textRange.start;
                this.clearAt(documentUri, start);
                if (Is.c2eStringVal(rawKey)) {
                    if (this.pushKey(rawKey.value, isDefinition)) {
                        changed = true;
                    }
                    this.pushUsage(documentUri, rawKey);
                }
            }
            return changed;
        }
        
        
        // Index the original call or if recursive
        if (isOriginalCall || recursive) {
            
            // is Definition should only be called on original arguments
            isDefinition = isDefinition && isOriginalCall;
            
            for (const argument of args) {
                
                // Index this argument if needed
                if (this._indexArgument(documentUri, argument, isDefinition, recursive, false)) {
                    changed = true;
                }
                // Only first argument can be definition
                isDefinition = false;
            }
        }
        return changed;
    }
    
    
    private clearAt(documentUri: DocumentUri, position: Position) {
        const keys = Object.keys(this.locations);
        for (const key of keys) {
            const locations = this.locations[key];
            
            for (const location of locations){
                const start = location.range.start;
                if (start.line === position.line && start.character === position.character) {
                    const index = this.locations[key].indexOf(location);
                    if (index >= 0) {
                        this.locations[key].splice(index, 1);
                    }
                }
            }
            
            const locationsCount = this.locations[key].length;
            if (locationsCount > 0) {
                continue;
            }
            
            delete this.locations[key];
            this.prune(key);
        }
    }
    
    private prune(key: string) {
        let index = this.usedButNotDefined.indexOf(key);
        if (index >= 0) {
            this.usedButNotDefined.splice(index, 1);
        }
        
        index = this.allUsed.indexOf(key);
        if (index >= 0) {
            this.allUsed.splice(index, 1);
        }
        
        index = this.defined.indexOf(key);
        if (index >= 0) {
            this.defined.splice(index, 1);
        }
        
        delete this.locations[key];
    }
    
    private pushUsage(documentUri: DocumentUri, keyItem: C2eStringVal) {
        let key = keyItem.value;
        if (key.startsWith('"') && key.endsWith('"')) {
            key = key.substring(1, key.length - 1);
        }
        
        this.clearAt(documentUri, keyItem.textRange.start);
        
        const location = {
            documentUri: documentUri,
            range: keyItem.textRange,
            text: key,
        } satisfies IndexedItemLocation;
        
        // Location key already exists
        if (typeof this.locations[key] !== "undefined") {
            this.locations[key].push(location);
            return;
        }
        // Define key with this location
        this.locations[key] = [
            location
        ];
    }
    
    
    private pushKey(key: string, isDefinition: boolean): boolean {
        if (key.startsWith('"') && key.endsWith('"')) {
            key = key.substring(1, key.length - 1);
        }
        let changed = false;
        let alreadyDefined = this.defined.indexOf(key) >= 0
        if (isDefinition && !alreadyDefined) {
            this.defined.push(key);
            alreadyDefined = true;
            changed = true;
        }
        
        if (alreadyDefined) {
            const index = this.usedButNotDefined.indexOf(key);
            if (index >= 0) {
                this.usedButNotDefined.splice(index, 1);
                changed = true;
            }
            return changed;
        }
        
        if (isDefinition) {
            return changed;
        }
        
        if (this.allUsed.indexOf(key) < 0) {
            this.allUsed.push(key);
            changed = true;
        }
        
        if (this.usedButNotDefined.indexOf(key) < 0) {
            this.usedButNotDefined.push(key);
            return true;
        }
        return changed;
    }
    
    private clearDocumentKeysInRange(key: string, doNotDeleteFilter: (location: IndexedItemLocation) => boolean) {
        const locations = [...this.locations[key]];
        
        this.locations[key] = locations
            .filter(doNotDeleteFilter);
    }
    
}


// noinspection JSUnusedGlobalSymbols
class WorkspaceNamedVariables {
    
    private readonly gameIndex = new NamedVariableIndex("GAME");
    private readonly eameIndex = new NamedVariableIndex("EAME");
    private readonly nameIndex = new NamedVariableIndex("NAME");
    
    indexNamedVariable(documentUri: DocumentUri, commandCall: CommandCall, recursive: boolean) {
        this.gameIndex.index(documentUri, commandCall, recursive);
        this.eameIndex.index(documentUri, commandCall, recursive);
        this.nameIndex.index(documentUri, commandCall, recursive);
    }
    
    getNamedVariableKeysForType(type: NamedVarPrefix, definedOnly: boolean): string[] {
        
        const index: Nullable<NamedVariableIndex> = this.getIndexForType(type);
        
        if (index == null) {
            return [];
        }
        
        return definedOnly
            ? index.getDefinedKeys()
            : index.getAllKeys();
    }
    
    getNamedVariableLocationsForType(type: NamedVarPrefix, key?: Nullable<string>): IndexedItemLocation[] {
        const index = this.getIndexForType(type);
        if (index == null) {
            return [];
        }
        return index.getUsages(key);
    }
    
    getDefinedKeys(type: NamedVarPrefix): string[] {
        const index = this.getIndexForType(type);
        if (index == null) {
            return [];
        }
        return index?.getDefinedKeys()
    }
    
    getKeysOnlyUsedButNotDefined(type: NamedVarPrefix): string[] {
        const index = this.getIndexForType(type);
        if (index == null) {
            return [];
        }
        return index.getKeysOnlyUsedButNotDefined();
    }
    
    getDefinedKeysInUse(type: NamedVarPrefix): string[] {
        const index = this.getIndexForType(type);
        if (index == null) {
            return [];
        }
        return index.getDefinedKeysInUse();
    }
    
    clearInDocument(documentUri: DocumentUri, range?: Nullable<Range>) {
        this.gameIndex.clearInDocument(documentUri, range);
        this.eameIndex.clearInDocument(documentUri, range);
        this.nameIndex.clearInDocument(documentUri, range);
    }
    
    private getIndexForType(type: NamedVarPrefix): Nullable<NamedVariableIndex> {
        switch (type.toUpperCase()) {
            case "GAME":
                return this.gameIndex;
            case "EAME":
                return this.eameIndex;
            case "NAME":
            case "MAME":
                return this.nameIndex;
            default:
                Log.e("Requested invalid named variable index of type: " + type.toUpperCase());
                return null;
        }
    }
}

const indices: { [workspace: string]: WorkspaceNamedVariables } = {};

export function indexNamedVariablesInDocument(
    workspaceUri: DocumentUri,
    documentUri: DocumentUri,
    commandCalls: CommandCall[],
    recursive: boolean
) {
    const index = getWorkspaceNamedVariableIndex(workspaceUri);
    
    for (const commandCall of commandCalls) {
        index.indexNamedVariable(documentUri, commandCall, recursive);
    }
}

export function getNamedVariableKeysForType(workspaceUri: DocumentUri, type: NamedVarPrefix, definedOnly: boolean): string[] {
    const index = getWorkspaceNamedVariableIndex(workspaceUri);
    return index.getNamedVariableKeysForType(type, definedOnly);
}

export function getNamedVariableLocationsForType(workspaceUri: DocumentUri, type: NamedVarPrefix, key?: Nullable<string>): IndexedItemLocation[] {
    return getWorkspaceNamedVariableIndex(workspaceUri)
        .getNamedVariableLocationsForType(type, key);
}

export function clearNamedVariables(workspaceUri: DocumentUri, documentUri: DocumentUri, range?: Nullable<Range>) {
    getWorkspaceNamedVariableIndex(workspaceUri)
        .clearInDocument(documentUri, range);
}

export function getWorkspaceNamedVariableIndex(workspaceUri: string): WorkspaceNamedVariables {
    const workspaceUriLower = workspaceUri.toLowerCase();
    if (typeof indices[workspaceUriLower] !== "undefined") {
        return indices[workspaceUriLower]!;
    }
    const index = new WorkspaceNamedVariables();
    indices[workspaceUriLower] = index;
    return index;
}

export function deleteWorkspaceNamedVariableIndex(workspaceUri: string): void {
    delete indices[workspaceUri.toLowerCase()];
}

const CAOS_SETTERS: number[] = [
    tok("setv") as number,
    tok("addv") as number,
    tok("subv") as number,
    tok("mulv") as number,
    tok("divv") as number,
    tok("rndv") as number,
    tok("modv") as number,
    tok("negv") as number,
    tok("absv") as number,
    tok("orrv") as number,
    tok("andv") as number,
    tok("notv") as number,
    tok("seta") as number,
    tok("sets") as number,
    tok("adds") as number
]

const formatIndexedItemLocationWithName = (location: IndexedItemLocation) => formatIndexedItemLocation(location, true);

const formatIndexedItemLocationWithoutName = (location: IndexedItemLocation) => formatIndexedItemLocation(location, false);

const formatIndexedItemLocation = (location: IndexedItemLocation, withName: boolean) => {
    let out = "["
    out += withName ? ("Text=" + location.text + "; ") : "";
    out += "File=" + getFileName(location.documentUri) + "; ";
    out += "Position=" + location.range.start.line + ":" + location.range.start.character;
    out += "]"
    return out;
}