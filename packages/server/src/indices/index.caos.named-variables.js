// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import { Is } from "@creatureslsp/caos/is-util";
import { tok } from "@creatureslsp/caos/token-utils";
import { getFileName } from "@creatureslsp/extension-util";
import { indexFilterDoNotDelete } from "./index.utils.js";
import { Log } from "../ConnLogger.js";
class NamedVariableIndex {
    defined = [];
    allUsed = [];
    usedButNotDefined = [];
    command;
    locations = {};
    _allKeys = null;
    constructor(command) {
        this.command = command.toUpperCase();
    }
    getUsages(key) {
        if (key == null) {
            return this.allLocations();
        }
        if (typeof this.locations[key] === "undefined") {
            return [];
        }
        return this.locations[key];
    }
    index(documentUri, commandCall, recursive) {
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
        const token = command.length === 4 ? tok(command) : null;
        // Is this call to variable the first in SETV, etc
        const isDefinition = token != null ? CAOS_SETTERS.indexOf(token) >= 0 : false;
        // Index this command directly
        const changed = this._indexArgument(documentUri, commandCall, isDefinition, recursive, true);
        if (changed) {
            this.clearAllKeysCache();
        }
    }
    getDefinedKeys() {
        return [...this.defined];
    }
    getKeysOnlyUsedButNotDefined() {
        return [...this.usedButNotDefined];
    }
    getDefinedKeysInUse() {
        const used = this.allUsed;
        const defined = this.defined;
        return defined.filter(key => used.indexOf(key) >= 0);
    }
    getAllKeys() {
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
    clearInDocument(documentUri, range) {
        const doNotDeleteFilter = indexFilterDoNotDelete(documentUri, range);
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
    allLocations() {
        let out = [];
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
    _indexArgument(documentUri, argument, isDefinition, recursive, isOriginalCall) {
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
    clearAt(documentUri, position) {
        const keys = Object.keys(this.locations);
        for (const key of keys) {
            const locations = this.locations[key];
            for (const location of locations) {
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
    prune(key) {
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
    pushUsage(documentUri, keyItem) {
        let key = keyItem.value;
        if (key.startsWith('"') && key.endsWith('"')) {
            key = key.substring(1, key.length - 1);
        }
        this.clearAt(documentUri, keyItem.textRange.start);
        const location = {
            documentUri: documentUri,
            range: keyItem.textRange,
            text: key,
        };
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
    pushKey(key, isDefinition) {
        if (key.startsWith('"') && key.endsWith('"')) {
            key = key.substring(1, key.length - 1);
        }
        let changed = false;
        let alreadyDefined = this.defined.indexOf(key) >= 0;
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
    clearDocumentKeysInRange(key, doNotDeleteFilter) {
        const locations = [...this.locations[key]];
        this.locations[key] = locations
            .filter(doNotDeleteFilter);
    }
}
// noinspection JSUnusedGlobalSymbols
class WorkspaceNamedVariables {
    gameIndex = new NamedVariableIndex("GAME");
    eameIndex = new NamedVariableIndex("EAME");
    nameIndex = new NamedVariableIndex("NAME");
    indexNamedVariable(documentUri, commandCall, recursive) {
        this.gameIndex.index(documentUri, commandCall, recursive);
        this.eameIndex.index(documentUri, commandCall, recursive);
        this.nameIndex.index(documentUri, commandCall, recursive);
    }
    getNamedVariableKeysForType(type, definedOnly) {
        const index = this.getIndexForType(type);
        if (index == null) {
            return [];
        }
        return definedOnly
            ? index.getDefinedKeys()
            : index.getAllKeys();
    }
    getNamedVariableLocationsForType(type, key) {
        const index = this.getIndexForType(type);
        if (index == null) {
            return [];
        }
        return index.getUsages(key);
    }
    getDefinedKeys(type) {
        const index = this.getIndexForType(type);
        if (index == null) {
            return [];
        }
        return index?.getDefinedKeys();
    }
    getKeysOnlyUsedButNotDefined(type) {
        const index = this.getIndexForType(type);
        if (index == null) {
            return [];
        }
        return index.getKeysOnlyUsedButNotDefined();
    }
    getDefinedKeysInUse(type) {
        const index = this.getIndexForType(type);
        if (index == null) {
            return [];
        }
        return index.getDefinedKeysInUse();
    }
    clearInDocument(documentUri, range) {
        this.gameIndex.clearInDocument(documentUri, range);
        this.eameIndex.clearInDocument(documentUri, range);
        this.nameIndex.clearInDocument(documentUri, range);
    }
    getIndexForType(type) {
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
const indices = {};
export function indexNamedVariablesInDocument(workspaceUri, documentUri, commandCalls, recursive) {
    const index = getWorkspaceNamedVariableIndex(workspaceUri);
    for (const commandCall of commandCalls) {
        index.indexNamedVariable(documentUri, commandCall, recursive);
    }
}
export function getNamedVariableKeysForType(workspaceUri, type, definedOnly) {
    const index = getWorkspaceNamedVariableIndex(workspaceUri);
    return index.getNamedVariableKeysForType(type, definedOnly);
}
export function getNamedVariableLocationsForType(workspaceUri, type, key) {
    return getWorkspaceNamedVariableIndex(workspaceUri)
        .getNamedVariableLocationsForType(type, key);
}
export function clearNamedVariables(workspaceUri, documentUri, range) {
    getWorkspaceNamedVariableIndex(workspaceUri)
        .clearInDocument(documentUri, range);
}
export function getWorkspaceNamedVariableIndex(workspaceUri) {
    const workspaceUriLower = workspaceUri.toLowerCase();
    if (typeof indices[workspaceUriLower] !== "undefined") {
        return indices[workspaceUriLower];
    }
    const index = new WorkspaceNamedVariables();
    indices[workspaceUriLower] = index;
    return index;
}
export function deleteWorkspaceNamedVariableIndex(workspaceUri) {
    delete indices[workspaceUri.toLowerCase()];
}
const CAOS_SETTERS = [
    tok("setv"),
    tok("addv"),
    tok("subv"),
    tok("mulv"),
    tok("divv"),
    tok("rndv"),
    tok("modv"),
    tok("negv"),
    tok("absv"),
    tok("orrv"),
    tok("andv"),
    tok("notv"),
    tok("seta"),
    tok("sets"),
    tok("adds")
];
const formatIndexedItemLocationWithName = (location) => formatIndexedItemLocation(location, true);
const formatIndexedItemLocationWithoutName = (location) => formatIndexedItemLocation(location, false);
const formatIndexedItemLocation = (location, withName) => {
    let out = "[";
    out += withName ? ("Text=" + location.text + "; ") : "";
    out += "File=" + getFileName(location.documentUri) + "; ";
    out += "Position=" + location.range.start.line + ":" + location.range.start.character;
    out += "]";
    return out;
};
