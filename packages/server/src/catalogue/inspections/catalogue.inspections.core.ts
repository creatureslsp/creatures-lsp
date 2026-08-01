import type {CatalogueInspection, Nullable} from "../../types.js";
import type {Diagnostic} from "vscode-languageserver/node.js";
import {toVsRange} from "@creatureslsp/extension-util";
import {initializeCatalogueInspections} from "./catalogue.inspections.register.js";
import type {Range} from "vscode-languageserver";
import {VersionedDocumentData} from "@creatureslsp/extension-util/VersionedDocumentData";
import {CATALOGUE_LANGUAGE_ID} from "../settings.js";
import {CatalogueInspectionData} from "./catalogue.inspections.data.js";

let oldDiagnostics: VersionedDocumentData<Diagnostic[]> = new VersionedDocumentData();

const _inspections: CatalogueInspection[] = [];

export const registerInspection = (inspection: CatalogueInspection) => {
   _inspections.push(inspection);
}

export const collectCatalogueInspectionErrors = async (
    workspaceUri: string,
    documentURI: string,
    text: string,
    version: Nullable<number>,
    range?: Nullable<Range>
): Promise<Diagnostic[]> => {
    
    initializeCatalogueInspections();
    
    // If existing data is non-null,
    //  it means this request is old
    const existingData = oldDiagnostics
        .getIfNewVersionIsStale(CATALOGUE_LANGUAGE_ID, documentURI, version);
    if (existingData != null) {
        return existingData;
    }
    
    let errors: Diagnostic[] = [];
    const context = new CatalogueInspectionData(workspaceUri, documentURI, text, range);
    
    await _runInspections(context, errors);
    
    const out = errors.map(e => {
        return {
            ...e,
            range: toVsRange(e.range, true, 1),
        } satisfies Diagnostic
    });
    oldDiagnostics.setIfNew(CATALOGUE_LANGUAGE_ID, documentURI, version, out);
    return out;
};

const _runInspections: CatalogueInspection  = async (context: CatalogueInspectionData, errors: Diagnostic[]): Promise<boolean> => {
    for (const inspection of _inspections) {
        if ((await inspection(context, errors)) === false) {
            return false
        }
    }
    return true;
}