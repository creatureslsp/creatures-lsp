import type { Nullable} from "@creatureslsp/caos";
import type { CatalogueEntry } from "@creatureslsp/catalogue/core";
import {getCatalogueEntriesLocator} from "../../indices/index.catalogue.entries.js";
import type {GameVariant} from "@creatureslsp/caos";
import type {CaosParseResult, CommandCall} from "@creatureslsp/caos/parser";
import type {Range} from "vscode-languageserver";
import {parseCaos} from "../caos.parse.js";

export class InspectionData {
    private readonly _workspaceURI: string;
    readonly documentURI: string;
    readonly range: Nullable<Range>;
    private _catalogueEntriesLocator: Nullable<(tag: string) => CatalogueEntry[]> = null;
    private _getParseResult: () => CaosParseResult;
    
    constructor(workspaceURI: string, documentURI: string, variant: GameVariant, text: string, range: Nullable<Range>) {
        this._workspaceURI = workspaceURI;
        this.range = range;
        this.documentURI = documentURI;
        this._getParseResult = createLazyParseResult(variant, text, range);
    }
    
    get parseResult(): CaosParseResult {
        return this._getParseResult();
    }
    
    get commandCalls(): CommandCall[] {
        return this.parseResult.commandCalls;
    }
    
    getFirstCatalogueEntryForTag(tag: string): Nullable<CatalogueEntry> {
        return this.getCatalogueEntriesForTag(tag).shift();
    }
    
    getCatalogueEntriesForTag(tag: string): CatalogueEntry[] {
        if (this._catalogueEntriesLocator == null) {
            this._catalogueEntriesLocator = getCatalogueEntriesLocator(this._workspaceURI);
        }
        return this._catalogueEntriesLocator(tag);
    }
}


const createLazyParseResult = (variant: GameVariant, text: string, range?: Nullable<Range>): () => CaosParseResult => {
    let result: Nullable<CaosParseResult> = null;
    return () => {
        if (result == null) {
            result = parseCaos(variant, text, range);
        }
        return result!;
    }
}