import { getCatalogueEntriesLocator } from "../../indices/index.catalogue.entries.js";
import { parseCaos } from "../caos.parse.js";
export class InspectionData {
    _workspaceURI;
    documentURI;
    range;
    _catalogueEntriesLocator = null;
    _getParseResult;
    constructor(workspaceURI, documentURI, variant, text, range) {
        this._workspaceURI = workspaceURI;
        this.range = range;
        this.documentURI = documentURI;
        this._getParseResult = createLazyParseResult(variant, text, range);
    }
    get parseResult() {
        return this._getParseResult();
    }
    get commandCalls() {
        return this.parseResult.commandCalls;
    }
    getFirstCatalogueEntryForTag(tag) {
        return this.getCatalogueEntriesForTag(tag).shift();
    }
    getCatalogueEntriesForTag(tag) {
        if (this._catalogueEntriesLocator == null) {
            this._catalogueEntriesLocator = getCatalogueEntriesLocator(this._workspaceURI);
        }
        return this._catalogueEntriesLocator(tag);
    }
}
const createLazyParseResult = (variant, text, range) => {
    let result = null;
    return () => {
        if (result == null) {
            result = parseCaos(variant, text, range);
        }
        return result;
    };
};
