import type {IndexedItemLocation} from "./indices.js";
import {type Nullable, rangesIntersect} from "@creatureslsp/extension-util";
import type {DocumentUri, Position, Range} from "vscode-languageserver";
import {indexFilterDoNotDelete} from "./index.utils.js";
import type {CatalogueEntry, CatalogueParserItem} from "@creatureslsp/catalogue/core";
import {getCatalogueRange} from "@creatureslsp/catalogue";


type IndexedCatalogueEntry = {
    entry: CatalogueEntry;
    documentUri: DocumentUri;
}

class CatalogueIndex {
    
    private readonly keys: string[] = [];
    private readonly entries: { [tag: string]: IndexedCatalogueEntry[] } = {};
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
        
        if (typeof this.locations[catalogueName] === "undefined") {
            return [];
        }
        
        return this.locations[catalogueName]!
    }
    
    /**
     * Indexes a command call if the given command is a catalogue command
     * @param documentUri document containing command
     * @param entry the command call (may not be a catalogue command)
     */
    index(documentUri: string, entry: CatalogueEntry) {
        const range = getCatalogueRange(entry);
        this.clearInDocument(documentUri, range);
        const catalogueName = entry.catalogueName
            ?? entry.catalogueNameParserItem?.value
            ?? entry.catalogueNameParserItem?.text
        
        if (!catalogueName?.length) {
            return;
        }
        
        this.pushCatalogueName(catalogueName)
        const parserNameItem = entry.catalogueNameParserItem
        if (parserNameItem != null) {
            this.pushUsage(documentUri, parserNameItem)
        }
        if (typeof this.entries[catalogueName] !== "undefined") {
            this.entries[catalogueName].push({entry, documentUri});
        } else {
            this.entries[catalogueName] = [
                {entry, documentUri},
            ];
        }
    }
    
    
    getAllCatalogueNames(documentUri: Nullable<DocumentUri> = null): string[] {
        const keys = [...this.keys];
        if (!documentUri) {
            return keys;
        }
        documentUri = documentUri.toLowerCase();
        return keys.filter(name => {
            return this.locations.hasOwnProperty(name)
                ? this.locations[name]
                    .find((location) => location.documentUri.toLowerCase() === documentUri) != null
                : false;
        });
    }
    
    
    getCatalogueEntry(catalogueName: string, documentUri: Nullable<DocumentUri> = null): CatalogueEntry[] {
        if (typeof this.entries[catalogueName] === "undefined") {
            return [];
        }
        let entries = this.entries[catalogueName];
        if (documentUri) {
            documentUri = documentUri.toLowerCase();
            entries = entries.filter(e => {
                return e.documentUri.toLowerCase() === documentUri;
            });
        }
        return entries.map(e => e.entry);
    }
    
    /**
     * Clears all indexed catalogue names in a given document in a given range
     * @param documentUri parent document of catalogue names
     * @param range range to clear, or if null, clear entire files index
     */
    clearInDocument(documentUri: DocumentUri, range?: Nullable<Range>) {
        const doNotDeleteFilter: (location: IndexedItemLocation) => boolean = indexFilterDoNotDelete(documentUri, range);
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
                    if (!rangesIntersect(entry.entry.textRange, range)) {
                        out.push(entry)
                    }
                }
                if (out.length === 0) {
                    delete this.entries[tag];
                } else {
                    this.entries[tag] = out;
                }
            }
        }
    }
    
    /**
     * All locations for all catalogue names
     * @private
     */
    private allLocations(): IndexedItemLocation[] {
        return ([] as IndexedItemLocation[]).concat(...Object.values(this.locations));
    }
    
    /**
     * Clears all catalogue names at a given position
     * Used for when a catalogue name is being changed or retyped
     * @param documentUri parent document
     * @param position the position to clear
     * @private
     */
    private clearAt(documentUri: DocumentUri, position: Position) {
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
            const locationPosition = location.range.start
            if (locationPosition.line !== position.line) {
                continue
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
    private prune(catalogueName: string) {
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
    pushUsage(documentUri: DocumentUri, catalogueNameCaosParserItem: CatalogueParserItem) {
        let catalogueName = catalogueNameCaosParserItem.value;
        if (catalogueName.startsWith('"') && catalogueName.endsWith('"')) {
            catalogueName = catalogueName.substring(1, catalogueName.length - 1);
        }
        
        this.clearAt(documentUri, catalogueNameCaosParserItem.textRange.start);
        
        const location = {
            documentUri: documentUri,
            range: catalogueNameCaosParserItem.textRange,
            text: catalogueName,
        } satisfies IndexedItemLocation;
        
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
    pushCatalogueName(catalogueName: string): boolean {
        if (catalogueName.startsWith('"') && catalogueName.endsWith('"')) {
            catalogueName = catalogueName.substring(1, catalogueName.length - 1);
        }
        
        let alreadyDefined = this.keys.indexOf(catalogueName) >= 0
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
    private clearDocumentKeysInRange(catalogueName: string, doNotDeleteFilter: (location: IndexedItemLocation) => boolean) {
        const locations = [...this.locations[catalogueName]];
        
        this.locations[catalogueName] = locations
            .filter(doNotDeleteFilter);
    }
}

const indices: { [workspaceUri: string]: CatalogueIndex } = {};

export function indexCatalogueEntry(workspaceUri: DocumentUri, documentUri: DocumentUri, entry: CatalogueEntry) {
    const index = getWorkspaceCatalogueIndex(workspaceUri);
    index.index(documentUri, entry);
}

export function getCatalogueLocations(workspaceUri: DocumentUri, key?: Nullable<string>): IndexedItemLocation[] {
    return getWorkspaceCatalogueIndex(workspaceUri)
        .getUsages(key);
}

export function getCatalogueKeys(workspaceUri: DocumentUri, documentUri?: Nullable<DocumentUri>): string[] {
    return getWorkspaceCatalogueIndex(workspaceUri)
        .getAllCatalogueNames(documentUri);
}

export function clearCatalogueEntries(workspaceUri: DocumentUri, documentUri: DocumentUri, range?: Nullable<Range>) {
    getWorkspaceCatalogueIndex(workspaceUri)
        .clearInDocument(documentUri, range);
}

export function deleteCatalogueEntryWorkspaceIndex(workspaceUri: DocumentUri){
    delete indices[workspaceUri.toLowerCase()];
}

export function getCatalogueEntriesLocator(workspaceUri: DocumentUri, defaultDocumentUri?: Nullable<DocumentUri>): (tag: string, documentUri: Nullable<DocumentUri>) => CatalogueEntry[] {
    const index = getWorkspaceCatalogueIndex(workspaceUri)
    return (tag: string, documentUri?: Nullable<DocumentUri>) => {
        return index.getCatalogueEntry(tag, documentUri ?? defaultDocumentUri);
    }
}

export function getCatalogueNamesCollector(workspaceUri: DocumentUri, defaultDocumentUri?: Nullable<DocumentUri>): (filter?: ((name: string) => boolean)) => string[] {
    const index = getWorkspaceCatalogueIndex(workspaceUri)
    return (filter?: ((name: string) => boolean), documentUri?: Nullable<DocumentUri>) => {
        let names = index.getAllCatalogueNames(documentUri ?? defaultDocumentUri);
        if (!filter) {
            return names;
        }
        return names.filter(filter);
    }
}

export function getCatalogueEntry(workspaceUri: DocumentUri, catalogueName: string, documentUri: Nullable<DocumentUri>): CatalogueEntry[] {
    return getWorkspaceCatalogueIndex(workspaceUri)
        .getCatalogueEntry(catalogueName, documentUri)
}

function getWorkspaceCatalogueIndex(workspaceUri: DocumentUri): CatalogueIndex {
    if (typeof indices[workspaceUri.toLowerCase()] === "undefined") {
        indices[workspaceUri.toLowerCase()] = new CatalogueIndex();
    }
    return indices[workspaceUri.toLowerCase()]!;
}
