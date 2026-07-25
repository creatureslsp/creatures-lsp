import type {DocumentUri, Position, Range} from "vscode-languageserver";
import type {CommandIndex, IndexedItemLocation} from "./indices.js";
import type {Nullable} from "@creatures-lsp/extension-util";
import type {C2eStringVal} from "@creatures-lsp/caos/core";
import type {CommandCall} from "@creatures-lsp/caos/parser";
import {Is} from "@creatures-lsp/caos";
import {indexFilterDoNotDelete} from "./index.utils.js";


const _workspaceIndices: { [workspace: string]: WorkspaceJournalNames } = {};


class WorkspaceJournalNames {
    private readonly indices: {[directoryTypeInt: number]: JournalFileNamesIndex} = {};
    
    
    /**
     * Attempt to index command
     * Called for every command, but only indexes journal commands
     * @param documentUri
     * @param commandCall
     */
    indexCommand(documentUri: DocumentUri, commandCall: CommandCall) {
        switch (commandCall.commandString.toUpperCase()) {
            case "FILE OOPE":
            case "FILE IOPE":
            case "FILE JDEL":
                this._index(documentUri, commandCall);
                break;
            default:
                return;
        }
    }
    
    /**
     * Gets all journal names defined for a given journal directory
     * @param directoryTypeInt
     */
    getJournalNamesForDirectoryType(directoryTypeInt: number): string[] {
        if (typeof this.indices[directoryTypeInt] === "undefined") {
            return [];
        }
        const index = this.indices[directoryTypeInt];
        return index.getAllJournalNames();
    }
    
    /**
     * Clears journal entries for a document in a given range
     * @param documentUri
     * @param range
     */
    clearInDocument(documentUri: DocumentUri, range: Nullable<Range>) {
        for (const directoryType in this.indices) {
            if (typeof this.indices[directoryType] === "undefined") {
                continue;
            }
            this.indices[directoryType].clearInDocument(documentUri, range);
        }
    }
    
    /**
     * Gets journal name locations for a given directory
     * @param directoryTypeInt game journal directory int
     * @param journalName if non-null, finds locations of matching journal file names
     */
    getJournalFileNameLocationsForDirectoryType(directoryTypeInt: number, journalName: Nullable<string>): IndexedItemLocation[] {
        if (typeof this.indices[directoryTypeInt] === "undefined") {
            return [];
        }
        const index = this.indices[directoryTypeInt];
        return index.getUsages(journalName);
    }
    
    /**
     * Attempts to index this journal command
     * @param documentUri
     * @param call
     * @private
     */
    private _index(documentUri: string, call: CommandCall,) {
        const args = call.arguments ?? [];
        
        if (args.length < 2) {
            return;
        }
        
        const directoryCaosParserItem = args[0].parserItem;
        if (directoryCaosParserItem == null || !Is.intVal(directoryCaosParserItem)) {
            return;
        }
        
        const directoryInt = directoryCaosParserItem.value;
        const index = this.getJournalForDirectory(directoryInt);
        
        const journalNameCaosParserItem = args[1].parserItem;
        if (!Is.c2eStringVal(journalNameCaosParserItem)) {
            return;
        }
        index.pushUsage(documentUri, journalNameCaosParserItem);
        index.pushJournalName(journalNameCaosParserItem.value);
    }
    
    /**
     * Gets the journal index for a given game journal folder
     * @param directoryTypeInt
     * @private
     */
    private getJournalForDirectory(directoryTypeInt: number): JournalFileNamesIndex {
        if (typeof this.indices[directoryTypeInt] === "undefined") {
            this.indices[directoryTypeInt] = new JournalFileNamesIndex(directoryTypeInt);
        }
        return this.indices[directoryTypeInt];
    }
}

class JournalFileNamesIndex implements CommandIndex {
    
    private readonly directoryInt: number;
    
    private readonly fileNames: string[] = [];
    
    private readonly locations: {[name: string]: IndexedItemLocation[]} = {};
    
    /**
     * @param directoryInt command int for game journal directory
     */
    constructor(directoryInt: number) {
        this.directoryInt = directoryInt;
    }
    
    /**
     * Gets journal name locations for a journal name if given.
     * If journal name is null, returns locations for all journal names
     * @param journalName if non-null, finds locations of matching journal file names
     */
    getUsages(journalName?: Nullable<string>): IndexedItemLocation[] {
        if (journalName == null) {
            return this.allLocations();
        }
        
        if (typeof this.locations[journalName] == "undefined") {
            return [];
        }
        
        return this.locations[journalName]!
    }
    
    /**
     * Indexes a command call if the given command is a journal command
     * @param _documentUri document containing command
     * @param _call the command call (may not be a journal command)
     * @param _recursive not used as journal commands are top level
     */
    index(_documentUri: string, _call: CommandCall, _recursive: boolean = false) {
        throw new Error("JournalFileNamesIndex.index should not be called");
    }
    
    
    getAllJournalNames(): string[] {
        return [...this.fileNames];
    }
    
    /**
     * Clears all indexed journal names in a given document in a given range
     * @param documentUri parent document of journal names
     * @param range range to clear, or if null, clear entire files index
     */
    clearInDocument(documentUri: DocumentUri, range?: Nullable<Range>) {
        const doNotDeleteFilter: (location: IndexedItemLocation) => boolean = indexFilterDoNotDelete(documentUri, range);
        for (const journalName in this.locations) {
            
            if (typeof this.locations[journalName] === "undefined") {
                continue;
            }
            
            this.clearDocumentKeysInRange(journalName, doNotDeleteFilter);
            
            if (this.locations[journalName]?.length === 0) {
                this.prune(journalName);
            }
        }
    }
    
    /**
     * Attempts to index this journal command
     * @private
     * @param _documentUri
     * @param _call
     */
    private _index(_documentUri: string, _call: CommandCall,) {
        
        throw new Error("JournalFileNamesIndex._index should not be called as index");
        // const args = call.arguments ?? [];
        // if (args.length < 2) {
        //     return;
        // }
        // const directoryCaosParserItem = args[0];
        // if (directoryCaosParserItem == null || !Is.intVal(directoryCaosParserItem)) {
        //     return;
        // }
        // const directoryInt = directoryCaosParserItem.value;
        // if (directoryInt !== this.directoryInt) {
        //     return;
        // }
        //
        // const journalNameCaosParserItem = args[1];
        // if (!Is.c2eStringVal(journalNameCaosParserItem)) {
        //     return;
        // }
        // this.pushUsage(documentUri, journalNameCaosParserItem);
        // this.pushJournalName(journalNameCaosParserItem.value);
    }
    
    /**
     * All locations for all journal names
     * @private
     */
    private allLocations(): IndexedItemLocation[] {
        let out: IndexedItemLocation[] = [];
        const locations = this.locations;
        for (const journalName in locations) {
            out = out.concat(locations[journalName] ?? []);
        }
        return out;
    }
    
    /**
     * Clears all journal names at a given position
     * Used for when a journal name is being changed or retyped
     * @param documentUri parent document
     * @param position the position to clear
     * @private
     */
    private clearAt(documentUri: DocumentUri, position: Position) {
        const journalNames = Object.keys(this.locations);
        for (const journalName of journalNames) {
            const locations = this.locations[journalName];
            const locationsCount = locations.length;
            if (locationsCount === 0) {
                delete this.locations[journalName];
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
            this.prune(journalName);
        }
    }
    
    /**
     * Remove a journal name and all its locations from index
     * @param journalName journal name
     * @private
     */
    private prune(journalName: string) {
        let index = this.fileNames.indexOf(journalName);
        if (index >= 0) {
            this.fileNames.splice(index, 1);
        }
        delete this.locations[journalName];
    }
    
    /**
     * Add command usage to index, including location reference
     * @param documentUri parent document
     * @param journalNameCaosParserItem the journal name AST c2e string node
     * @private
     */
    pushUsage(documentUri: DocumentUri, journalNameCaosParserItem: C2eStringVal) {
        let journalName = journalNameCaosParserItem.value;
        if (journalName.startsWith('"') && journalName.endsWith('"')) {
            journalName = journalName.substring(1, journalName.length - 1);
        }
        
        this.clearAt(documentUri, journalNameCaosParserItem.textRange.start);
        
        const location = {
            documentUri: documentUri,
            range: journalNameCaosParserItem.textRange,
            text: journalName,
        } satisfies IndexedItemLocation;
        
        // Locations array for journal name already exists
        if (typeof this.locations[journalName] !== "undefined") {
            this.locations[journalName].push(location);
            return;
        }
        // Define locations array for journal name
        this.locations[journalName] = [
            location
        ];
    }
    
    /**
     * Pushes a journal name as string into index
     * @param journalName
     * @private
     */
    pushJournalName(journalName: string): boolean {
        if (journalName.startsWith('"') && journalName.endsWith('"')) {
            journalName = journalName.substring(1, journalName.length - 1);
        }
        
        let alreadyDefined = this.fileNames.indexOf(journalName) >= 0
        if (alreadyDefined) {
            return false;
        }
        
        this.fileNames.push(journalName);
        return true;
    }
    
    /**
     * Clears all journal locations not matching filter
     * @param journalName journal journalName to remove entries from
     * @param doNotDeleteFilter
     * @private
     */
    private clearDocumentKeysInRange(journalName: string, doNotDeleteFilter: (location: IndexedItemLocation) => boolean) {
        const locations = [...this.locations[journalName]];
        
        this.locations[journalName] = locations
            .filter(doNotDeleteFilter);
    }
    
}

export function indexJournalNamesInDocument(
    workspaceUri: DocumentUri,
    documentUri: DocumentUri,
    commandCalls: CommandCall[],
) {
    const index = getWorkspaceJournalFileNamesIndex(workspaceUri)
    for (const commandCall of commandCalls) {
        index.indexCommand(documentUri, commandCall);
    }
}

export function getJournalFileNames(workspaceUri: DocumentUri, directoryTypeInt: number): string[] {
    const index = getWorkspaceJournalFileNamesIndex(workspaceUri);
    return index.getJournalNamesForDirectoryType(directoryTypeInt);
}

export function getJournalFileNameLocations(workspaceUri: DocumentUri, directoryTypeInt: number, journalName?: Nullable<string>): IndexedItemLocation[] {
    return getWorkspaceJournalFileNamesIndex(workspaceUri)
        .getJournalFileNameLocationsForDirectoryType(directoryTypeInt, journalName);
}

export function clearJournalFileNames(workspaceUri: DocumentUri, documentUri: DocumentUri, range?: Nullable<Range>) {
    getWorkspaceJournalFileNamesIndex(workspaceUri)
        .clearInDocument(documentUri, range);
}

function getWorkspaceJournalFileNamesIndex(workspaceUri: string): WorkspaceJournalNames {
    const workspaceUriLower = workspaceUri.toLowerCase();
    if (typeof _workspaceIndices[workspaceUriLower] !== "undefined") {
        return _workspaceIndices[workspaceUriLower]!;
    }
    const index = new WorkspaceJournalNames();
    _workspaceIndices[workspaceUriLower] = index;
    return index;
}

export function deleteWorkspaceJournalNameIndex(workspaceUri: string): void {
    delete _workspaceIndices[workspaceUri.toLowerCase()];
}
