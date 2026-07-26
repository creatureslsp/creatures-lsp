// noinspection JSUnusedGlobalSymbols
import { indexFilterDoNotDelete } from "./index.utils.js";
import { Is, tok } from "@creatureslsp/caos";
const READ = tok("read");
const REAQ = tok("reaq");
const REAN = tok("rean");
class CaosCatalogueUsagesIndex {
    keys = [];
    defined = {};
    locations = {};
    /**
     * Gets catalogue name locations for a catalogue name if given.
     * If catalogue name is null, returns locations for all catalogue names
     * @param catalogueName if non-null, finds locations of matching catalogue file names
     */
    getUsages(catalogueName) {
        if (catalogueName == null) {
            return this.allLocations();
        }
        if (typeof this.locations[catalogueName] == "undefined") {
            return [];
        }
        return this.locations[catalogueName];
    }
    /**
     * Indexes a command call if the given command is a catalogue command
     * @param documentUri document containing command
     * @param commandCall
     * @param recursive
     */
    index(documentUri, commandCall, recursive) {
        // Command as token for "faster" compare
        const command = commandCall.commandString.toLowerCase();
        const token = (command.length === 4) ? tok(command) : null;
        // Index this command directly
        this._indexArgument(documentUri, commandCall, token === REAQ, recursive, true);
    }
    getDefined(key) {
        if (key) {
            if (typeof this.defined[key] === "undefined") {
                return [];
            }
            return [...this.defined[key]];
        }
        let out = [];
        for (const key in this.defined) {
            if (typeof this.defined[key] !== "undefined") {
                out = out.concat(...this.defined[key]);
            }
        }
        return out;
    }
    getAllKeys() {
        return [...this.keys];
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
        const command = tok(argument.commandString.toLowerCase());
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
    clearAt(documentUri, position) {
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
    clearAtIn(documentUri, data, key, position) {
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
    prune(key) {
        let index = this.keys.indexOf(key);
        if (index >= 0) {
            this.keys.splice(index, 1);
        }
        delete this.locations[key];
    }
    pushUsage(documentUri, keyItem, isDefinition) {
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
        }
        else {
            // Define key with this location
            this.locations[key] = [
                location
            ];
        }
        if (isDefinition) {
            if (typeof this.defined[key] !== "undefined") {
                this.defined[key].push(location);
            }
            else {
                this.defined[key] = [
                    location
                ];
            }
        }
    }
    pushKey(key) {
        if (key.startsWith('"') && key.endsWith('"')) {
            key = key.substring(1, key.length - 1);
        }
        let changed = false;
        let alreadyDefined = this.keys.indexOf(key) >= 0;
        if (alreadyDefined) {
            return changed;
        }
        if (this.keys.indexOf(key) < 0) {
            this.keys.push(key);
            changed = true;
        }
        return changed;
    }
    clearDocumentKeysInRange(key, doNotDeleteFilter) {
        const locations = [...this.locations[key]];
        this.locations[key] = locations
            .filter(doNotDeleteFilter);
    }
}
const indices = {};
export function indexCaosCatalogueUsagesInDocument(workspaceUri, documentUri, commandCalls, recursive) {
    const index = getCaosCatalogueUsagesIndex(workspaceUri);
    for (const commandCall of commandCalls) {
        index.index(documentUri, commandCall, recursive);
    }
}
export function getCaosCatalogueLocations(workspaceUri, key) {
    return getCaosCatalogueUsagesIndex(workspaceUri)
        .getUsages(key);
}
export function getCaosCatalogueReferencedKeys(workspaceUri) {
    return getCaosCatalogueUsagesIndex(workspaceUri)
        .getAllKeys();
}
export function getCaosCatalogueUsageDefinitions(workspaceUri, key) {
    return getCaosCatalogueUsagesIndex(workspaceUri)
        .getDefined(key);
}
export function clearCaosCatalogueUsages(workspaceUri, documentUri, range) {
    return getCaosCatalogueUsagesIndex(workspaceUri)
        .clearInDocument(documentUri, range);
}
export function deleteCaosCatalogueWorkspaceIndex(workspaceUri) {
    delete indices[workspaceUri.toLowerCase()];
}
function getCaosCatalogueUsagesIndex(workspaceUri) {
    if (typeof indices[workspaceUri.toLowerCase()] === "undefined") {
        indices[workspaceUri.toLowerCase()] = new CaosCatalogueUsagesIndex();
    }
    return indices[workspaceUri.toLowerCase()];
}
