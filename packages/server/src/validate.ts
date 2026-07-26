import {type CreaturesDocument, isCaosDocument, isCatalogueDocument, unpackDocument, type UriLike} from "./document.js";
import {connection} from "./connection.vscode.js";
import type {Diagnostic} from "vscode-languageserver/node.js";
import type {Nullable} from "./types.js";
import {getCatalogueDocumentValidationErrors} from "./catalogue/catalogue.validate.js";
import {getCaosDocumentValidationErrors} from "./caos/caos.validate.js";
import {getDocuments} from "./documents.js";
import type {Range} from "vscode-languageserver";
import {LanguageDocumentData, rangesIntersect, sortTextRanges} from "@creatureslsp/extension-util";
import {VersionedDocumentData} from "@creatureslsp/extension-util/VersionedDocumentData";
import {caosInitLib} from "./caos/caos-init-lib.js";
import {Log} from "./ConnLogger.js";

const TICKS_BEFORE_REFRESH = 12;
const ticks: Map<string, number> = new Map();

const docVersions: LanguageDocumentData<number> = new LanguageDocumentData();

export function nextDocumentVersionId(languageId: string, documentURI: string): number {
    const out = docVersions.getOrCreateData(languageId, documentURI, () => 0) + 1;
    docVersions.setData(languageId, documentURI, out);
    return out;
}

/**
 * Revalidate all known or edited documents
 */
export function revalidateAllFiles() {
    // Revalidate all open text documents
    const validations = getDocuments()
        .all()
        .map(async (d) => {
            await validateDocument(d, nextDocumentVersionId(d.languageId, d.uri), null)
                .catch(e => {
                    Log.e(`Failed to validate CAOS document in revalidateAllFiles(); ${e}`);
                });
        });
    return Promise.all(validations);
}

let oldDiagnostics: VersionedDocumentData<Diagnostic[]> = new VersionedDocumentData();

const newArray: () => Diagnostic[] = () => [];

const mergeDiagnostics = async (
    language: string,
    documentURI: string,
    newVersion: Nullable<number>,
    diagnosticsInRange: Diagnostic[],
    range: Nullable<Range>
): Promise<Nullable<Diagnostic[]>> => {
    
    if (newVersion != null && oldDiagnostics.isStaleRequest(language, documentURI, newVersion)) {
        Log.i("diagnostics is stale");
        return null;
    }
    
    if (range == null) {
        oldDiagnostics.setIfNew(language, documentURI, newVersion, diagnosticsInRange);
        return diagnosticsInRange;
    }
    
    const outDiagnostics = oldDiagnostics
        .getOrCreate(language, documentURI, newVersion ?? -1, newArray)
        .filter(d => !rangesIntersect(d.range, range))
        .concat(diagnosticsInRange)
        .sort((a, b) => sortTextRanges(a.range, b.range));
    
    oldDiagnostics.setIfNew(language, documentURI, newVersion, outDiagnostics);
    return outDiagnostics;
};

const expandedRange = (language: string, documentURI: string, range: Nullable<Range>): Nullable<Range> => {
    
    // Do a full reparse occasionally.
    const tickCount = range != null
        ? ((ticks.get(documentURI) ?? 0) + 1) % TICKS_BEFORE_REFRESH
        : 0;
    
    ticks.set(documentURI, tickCount);
    
    if (range == null || tickCount == 0) {
        return null;
    }
    
    const old = oldDiagnostics
        .getOrNull(language, documentURI);
    
    if (old == null) {
        return range;
    } else if (old.length == 0) {
        return range;
    }
    
    const sorted = old.sort((a, b) => sortTextRanges(a.range, b.range));
    let first = sorted[0].range;
    const last = sorted[sorted.length - 1].range;
    const start = sortTextRanges(range, first) <= 0 ? range.start : first.start;
    const end = sortTextRanges(range, last) >= 0 ? range.start : last.end;
    return {
        start,
        end
    };
};


export async function validateDocument(documentOrUri: CreaturesDocument<any> | UriLike, documentVersion: number, range?: Nullable<Range>) {
    try {
        return await _validateDocument(documentOrUri, documentVersion, range);
    } catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to validate document; ${error}`);
    }
}

async function _validateDocument(documentOrUri: CreaturesDocument<any> | UriLike, documentVersion: number, range?: Nullable<Range>) {
    let diagnostics: Nullable<Diagnostic[]>;
    let document = await unpackDocument(documentOrUri);
    range = document ? expandedRange(document.languageId, document.documentUri, range) : range;
    
    if (isCaosDocument(document)) {
        caosInitLib();
        diagnostics = getCaosDocumentValidationErrors(document, documentVersion, range);
    } else if (isCatalogueDocument(document)) {
        diagnostics = getCatalogueDocumentValidationErrors(document, documentVersion, range);
    } else {
        Log.w(`validateDocument: IsNot Creatures Document; Found: ${document?.languageId}`);
        return;
    }
    
    diagnostics = await mergeDiagnostics(document.languageId, document.documentUri, documentVersion, diagnostics, range);
    
    if (diagnostics == null) {
        return;
    }
    
    // Send the computed diagnostics to VS Code.
    await connection.sendDiagnostics({uri: document.documentUri, diagnostics});
}