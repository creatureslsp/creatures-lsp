import type { Nullable} from "@creatureslsp/caos";
import type {CatalogueEntry, CatalogueParseResult} from "@creatureslsp/catalogue/core";
import {getCatalogueEntriesLocator} from "../../indices/index.catalogue.entries.js";
import type {DocumentUri, Range} from "vscode-languageserver";
import { getCatalogueNamesCollector } from "../../indices/index.catalogue.entries.js"
import {createCatalogueParseResultGetter} from "./catalogue.parse-result-async.js";

export class CatalogueInspectionData {
    private readonly _workspaceURI: string;
    readonly documentURI: string;
    readonly range: Nullable<Range>;
    readonly text: string;
    private _catalogueEntriesLocator: Nullable<(tag: string, documentUri?: Nullable<DocumentUri>) => CatalogueEntry[]> = null;
    private _catalogueNamesCollector: Nullable<((filter?: ((name: string) => boolean), documentUri?: Nullable<DocumentUri>) => string[])> = null;
    private _catalogueParserResult: () => Promise<CatalogueParseResult| null>;
    constructor(workspaceURI: string, documentURI: string, text: string, range: Nullable<Range>) {
        this._workspaceURI = workspaceURI;
        this.range = range;
        this.documentURI = documentURI;
        this.text = text;
        this._catalogueParserResult = createCatalogueParseResultGetter(text);
    }
    
    getCatalogueEntriesForTag(tag: string, inDocument: boolean = true): CatalogueEntry[] {
        if (this._catalogueEntriesLocator == null) {
            this._catalogueEntriesLocator = getCatalogueEntriesLocator(this._workspaceURI);
        }
        if (inDocument) {
            return this._catalogueEntriesLocator(tag, this.documentURI);
        } else {
            return this._catalogueEntriesLocator(tag);
        }
    }
    
    getCatalogueNames(filter?: (name: string) => boolean, inDocument: boolean = true): string[] {
        if (this._catalogueNamesCollector == null) {
            this._catalogueNamesCollector = getCatalogueNamesCollector(this._workspaceURI);
        }
        return this._catalogueNamesCollector(filter, inDocument ? this.documentURI : null);
    }
    
    getCatalogueEntries(filter?: (name: string) => boolean, inDocument: boolean = true): CatalogueEntry[] {
        const names = this.getCatalogueNames(filter, inDocument);
        return names.flatMap(name => this.getCatalogueEntriesForTag(name, inDocument));
    }
    
    async getCatalogueParseResult(): Promise<CatalogueParseResult|null> {
        return await this._catalogueParserResult();
    }
}