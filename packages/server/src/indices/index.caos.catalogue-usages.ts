// noinspection JSUnusedGlobalSymbols

import type {DocumentUri, Position, Range} from "vscode-languageserver";
import type {Nullable} from "@creatures-lsp/extension-util";
import type {CommandIndex, IndexedItemLocation} from "./indices.js";
import {indexFilterDoNotDelete} from "./index.utils.js";
import type {Argument, CommandCall} from "@creatures-lsp/caos/parser";
import type {  C2eStringVal } from "@creatures-lsp/caos/core";
import {Is, tok} from "@creatures-lsp/caos";

const READ = tok("read") as number;
const REAQ = tok("reaq") as number;
const REAN = tok("rean") as number;

class CaosCatalogueUsagesIndex implements CommandIndex {
    
    private readonly keys: string[] = [];
    private readonly defined: { [key: string]: IndexedItemLocation[] } = {};
    private readonly locations: { [name: string]: IndexedItemLocation[] } = {};
    
    /**
     * Gets catalogue name locations for a catalogue name if given.
     * If catalogue name is null, returns locations for all catalogue names
     * @param catalogueName if non-null, finds locations of matching catalogue file names
     */
    getUsages(catalogueName?: Nullable<string>): IndexedItemLocation[] {
        if (catalogueName == null) {
            return this.allLocations();
        }
        
        if (typeof this.locations[catalogueName] == "undefined") {
            return [];
        }
        
        return this.locations[catalogueName]!
    }
    
    /**
     * Indexes a command call if the given command is a catalogue command
     * @param documentUri document containing command
     * @param commandCall
     * @param recursive
     */
    index(documentUri: string, commandCall: CommandCall, recursive: boolean) {
        // Command as token for "faster" compare
        const command = commandCall.commandString.toLowerCase();
        const token: Nullable<number> = (command.length === 4) ? (tok(command) as number) : null;
        // Index this command directly
        this._indexArgument(documentUri, commandCall, token === REAQ, recursive, true);
    }
    
    getDefined(key?: Nullable<string>): IndexedItemLocation[] {
        
        if (key) {
            if (typeof this.defined[key] === "undefined") {
                return [];
            }
            return [...this.defined[key]];
        }
        
        let out: IndexedItemLocation[] = [];
        for (const key in this.defined) {
            if (typeof this.defined[key] !== "undefined") {
                out = out.concat(...this.defined[key]);
            }
        }
        return out;
    }
    
    getAllKeys(): string[] {
        return [...this.keys];
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
        const command = (tok(argument.commandString.toLowerCase()) as number);
        if (command === READ || command === REAQ || command === REAN) {
            if (args.length > 0) {
                const rawKey = args[0].parserItem;
                const start = args[0].textRange.start;
                this.clearAt(documentUri, start);
                if (Is.c2eStringVal(rawKey)) {
                    if (this.pushKey(rawKey.value)) {
                        changed = true;
                    }
                    this.pushUsage(documentUri, rawKey, isDefinition);
                }
            }
        }
        
        args.splice(0, 1);
        
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
            this.clearAtIn(documentUri, this.locations, key, position);
            this.clearAtIn(documentUri, this.defined, key, position);
            let shouldPrune = true;
            if (typeof this.locations[key] !== "undefined") {
                shouldPrune = false;
            }
            if (typeof this.defined[key] !== "undefined") {
                shouldPrune = false;
            }
            if (shouldPrune) {
                this.prune(key);
            }
        }
    }
    
    private clearAtIn(
        documentUri: DocumentUri,
        data: { [key: string]: IndexedItemLocation[] },
        key: string,
        position: Position
    ) {
        
        if (typeof data[key] === "undefined") {
            return;
        }
        
        const locations = [...data[key]];
        
        for (const location of locations) {
            if (documentUri !== location.documentUri) {
                continue;
            }
            const start = location.range.start;
            if (start.line === position.line && start.character === position.character) {
                const index = data[key].indexOf(location);
                if (index >= 0) {
                    data[key].splice(index, 1);
                }
            }
        }
        
        const locationsCount = data[key].length;
        if (locationsCount > 0) {
            return;
        }
        
        delete data[key];
    }
    
    private prune(key: string) {
        let index = this.keys.indexOf(key);
        if (index >= 0) {
            this.keys.splice(index, 1);
        }
        delete this.locations[key];
    }
    
    private pushUsage(documentUri: DocumentUri, keyItem: C2eStringVal, isDefinition: boolean) {
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
        } else {
            // Define key with this location
            this.locations[key] = [
                location
            ];
        }
        
        if (isDefinition) {
            if (typeof this.defined[key] !== "undefined") {
                this.defined[key].push(location);
            } else {
                this.defined[key] = [
                    location
                ];
            }
        }
    }
    
    
    private pushKey(key: string): boolean {
        if (key.startsWith('"') && key.endsWith('"')) {
            key = key.substring(1, key.length - 1);
        }
        
        let changed = false;
        
        let alreadyDefined = this.keys.indexOf(key) >= 0
        if (alreadyDefined) {
            return changed;
        }
        
        if (this.keys.indexOf(key) < 0) {
            this.keys.push(key);
            changed = true;
        }
        return changed;
    }
    
    private clearDocumentKeysInRange(key: string, doNotDeleteFilter: (location: IndexedItemLocation) => boolean) {
        const locations = [...this.locations[key]];
        
        this.locations[key] = locations
            .filter(doNotDeleteFilter);
    }
}

const indices: { [workspaceUri: string]: CaosCatalogueUsagesIndex } = {};

export function indexCaosCatalogueUsagesInDocument(
    workspaceUri: DocumentUri,
    documentUri: DocumentUri,
    commandCalls: CommandCall[],
    recursive: boolean
) {
    const index = getCaosCatalogueUsagesIndex(workspaceUri)
    for (const commandCall of commandCalls) {
        index.index(documentUri, commandCall, recursive);
    }
}

export function getCaosCatalogueLocations(workspaceUri: DocumentUri, key?: Nullable<string>): IndexedItemLocation[] {
    return getCaosCatalogueUsagesIndex(workspaceUri)
        .getUsages(key);
}

export function getCaosCatalogueReferencedKeys(workspaceUri: DocumentUri): string[] {
    return getCaosCatalogueUsagesIndex(workspaceUri)
        .getAllKeys();
}

export function getCaosCatalogueUsageDefinitions(workspaceUri: DocumentUri, key?: Nullable<string>): IndexedItemLocation[] {
    return getCaosCatalogueUsagesIndex(workspaceUri)
        .getDefined(key);
}

export function clearCaosCatalogueUsages(workspaceUri: DocumentUri, documentUri: DocumentUri, range?: Nullable<Range>) {
    return getCaosCatalogueUsagesIndex(workspaceUri)
        .clearInDocument(documentUri, range);
}

export function deleteCaosCatalogueWorkspaceIndex(workspaceUri: DocumentUri) {
    delete indices[workspaceUri.toLowerCase()];
}

function getCaosCatalogueUsagesIndex(workspaceUri: DocumentUri): CaosCatalogueUsagesIndex {
    if (typeof indices[workspaceUri.toLowerCase()] === "undefined") {
        indices[workspaceUri.toLowerCase()] = new CaosCatalogueUsagesIndex();
    }
    return indices[workspaceUri.toLowerCase()]!;
}