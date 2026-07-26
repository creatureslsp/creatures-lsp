import { rangesIntersect } from "@creatureslsp/extension-util";
import { indexFilterDoNotDelete } from "./index.utils.js";
import { getCatalogueRange } from "@creatureslsp/catalogue";
class CatalogueIndex {
    keys = [];
    entries = {};
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
        if (typeof this.locations[catalogueName] === "undefined") {
            return [];
        }
        return this.locations[catalogueName];
    }
    /**
     * Indexes a command call if the given command is a catalogue command
     * @param documentUri document containing command
     * @param entry the command call (may not be a catalogue command)
     */
    index(documentUri, entry) {
        const range = getCatalogueRange(entry);
        this.clearInDocument(documentUri, range);
        const catalogueName = entry.catalogueName
            ?? entry.catalogueNameParserItem?.value
            ?? entry.catalogueNameParserItem?.text;
        if (!catalogueName?.length) {
            return;
        }
        this.pushCatalogueName(catalogueName);
        const parserNameItem = entry.catalogueNameParserItem;
        if (parserNameItem != null) {
            this.pushUsage(documentUri, parserNameItem);
        }
        if (typeof this.entries[catalogueName] !== "undefined") {
            this.entries[catalogueName].push(entry);
        }
        else {
            this.entries[catalogueName] = [
                entry
            ];
        }
    }
    getAllCatalogueNames() {
        return [...this.keys];
    }
    getCatalogueEntry(catalogueName) {
        return typeof this.entries[catalogueName] !== "undefined"
            ? this.entries[catalogueName]
            : [];
    }
    /**
     * Clears all indexed catalogue names in a given document in a given range
     * @param documentUri parent document of catalogue names
     * @param range range to clear, or if null, clear entire files index
     */
    clearInDocument(documentUri, range) {
        const doNotDeleteFilter = indexFilterDoNotDelete(documentUri, range);
        for (const catalogueName in this.locations) {
            if (typeof this.locations[catalogueName] === "undefined") {
                continue;
            }
            this.clearDocumentKeysInRange(catalogueName, doNotDeleteFilter);
            if (this.locations[catalogueName]?.length === 0) {
                this.prune(catalogueName);
            }
        }
        if (range) {
            for (const tag in this.entries) {
                const entries = [...(this.entries[tag] ?? [])];
                const out = [];
                for (const entry of entries) {
                    if (!rangesIntersect(entry.textRange, range)) {
                        out.push(entry);
                    }
                }
                if (out.length === 0) {
                    delete this.entries[tag];
                }
                else {
                    this.entries[tag] = out;
                }
            }
        }
    }
    /**
     * All locations for all catalogue names
     * @private
     */
    allLocations() {
        return [].concat(...Object.values(this.locations));
    }
    /**
     * Clears all catalogue names at a given position
     * Used for when a catalogue name is being changed or retyped
     * @param documentUri parent document
     * @param position the position to clear
     * @private
     */
    clearAt(documentUri, position) {
        const catalogueNames = Object.keys(this.locations);
        for (const catalogueName of catalogueNames) {
            const locations = this.locations[catalogueName];
            const locationsCount = locations.length;
            if (locationsCount === 0) {
                delete this.locations[catalogueName];
                return;
            }
            if (locationsCount > 1) {
                continue;
            }
            const location = locations[0];
            if (location.documentUri.toLowerCase() !== documentUri.toLowerCase()) {
                continue;
            }
            const locationPosition = location.range.start;
            if (locationPosition.line !== position.line) {
                continue;
            }
            if (locationPosition.character !== position.character) {
                continue;
            }
            this.prune(catalogueName);
        }
    }
    /**
     * Remove a catalogue name and all its locations from index
     * @param catalogueName catalogue name
     * @private
     */
    prune(catalogueName) {
        let index = this.keys.indexOf(catalogueName);
        if (index >= 0) {
            this.keys.splice(index, 1);
        }
        delete this.locations[catalogueName];
    }
    /**
     * Add command usage to index, including location reference
     * @param documentUri parent document
     * @param catalogueNameCaosParserItem the catalogue name AST c2e string node
     * @private
     */
    pushUsage(documentUri, catalogueNameCaosParserItem) {
        let catalogueName = catalogueNameCaosParserItem.value;
        if (catalogueName.startsWith('"') && catalogueName.endsWith('"')) {
            catalogueName = catalogueName.substring(1, catalogueName.length - 1);
        }
        this.clearAt(documentUri, catalogueNameCaosParserItem.textRange.start);
        const location = {
            documentUri: documentUri,
            range: catalogueNameCaosParserItem.textRange,
            text: catalogueName,
        };
        // Locations array for catalogue name already exists
        if (typeof this.locations[catalogueName] !== "undefined") {
            this.locations[catalogueName].push(location);
            return;
        }
        // Define locations array for catalogue name
        this.locations[catalogueName] = [
            location
        ];
    }
    /**
     * Pushes a catalogue name as string into index
     * @param catalogueName
     * @private
     */
    pushCatalogueName(catalogueName) {
        if (catalogueName.startsWith('"') && catalogueName.endsWith('"')) {
            catalogueName = catalogueName.substring(1, catalogueName.length - 1);
        }
        let alreadyDefined = this.keys.indexOf(catalogueName) >= 0;
        if (alreadyDefined) {
            return false;
        }
        this.keys.push(catalogueName);
        return true;
    }
    /**
     * Clears all catalogue locations not matching filter
     * @param catalogueName catalogue catalogueName to remove entries from
     * @param doNotDeleteFilter
     * @private
     */
    clearDocumentKeysInRange(catalogueName, doNotDeleteFilter) {
        const locations = [...this.locations[catalogueName]];
        this.locations[catalogueName] = locations
            .filter(doNotDeleteFilter);
    }
}
const indices = {};
export function indexCatalogueEntry(workspaceUri, documentUri, entry) {
    const index = getWorkspaceCatalogueIndex(workspaceUri);
    index.index(documentUri, entry);
}
export function getCatalogueLocations(workspaceUri, key) {
    return getWorkspaceCatalogueIndex(workspaceUri)
        .getUsages(key);
}
export function getCatalogueKeys(workspaceUri) {
    return getWorkspaceCatalogueIndex(workspaceUri)
        .getAllCatalogueNames();
}
export function clearCatalogueEntries(workspaceUri, documentUri, range) {
    getWorkspaceCatalogueIndex(workspaceUri)
        .clearInDocument(documentUri, range);
}
export function deleteCatalogueEntryWorkspaceIndex(workspaceUri) {
    delete indices[workspaceUri.toLowerCase()];
}
export function getCatalogueEntriesLocator(workspaceUri) {
    const index = getWorkspaceCatalogueIndex(workspaceUri);
    return (tag) => {
        return index.getCatalogueEntry(tag);
    };
}
export function getCatalogueEntry(workspaceUri, catalogueName) {
    return getWorkspaceCatalogueIndex(workspaceUri)
        .getCatalogueEntry(catalogueName);
}
function getWorkspaceCatalogueIndex(workspaceUri) {
    if (typeof indices[workspaceUri.toLowerCase()] === "undefined") {
        indices[workspaceUri.toLowerCase()] = new CatalogueIndex();
    }
    return indices[workspaceUri.toLowerCase()];
}
