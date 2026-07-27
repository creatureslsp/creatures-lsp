import type {CatalogueDocument} from "./catalogue.document.js";
import type {Diagnostic} from "vscode-languageserver/node.js";
import {toVsRange} from "@creatureslsp/extension-util";
import {type CatalogueError, validateCatalogue} from "@creatureslsp/catalogue/validation";
import {DiagnosticSeverity} from "vscode-languageserver-types";
import type {Nullable} from "../types.js";
import type {Range} from "vscode-languageserver";

export function getCatalogueDocumentValidationErrors(
    document: CatalogueDocument,
    _version: Nullable<number>,
    _range: Nullable<Range>,
): Diagnostic[] {
    
    const {text, settings} = document;
    
    if (text.length < 1) {
        return [];
    }
    
    const maxNumberOfProblems = settings.maxNumberOfProblems;
    
    let rawErrors = validateCatalogue(text)
    
    if (maxNumberOfProblems != null && rawErrors.length > maxNumberOfProblems) {
        rawErrors = rawErrors.splice(maxNumberOfProblems);
    }

    return rawErrors
        .map((error: CatalogueError) => {
            const textRange = error.textRange;
            const out: Diagnostic = {
                range: toVsRange(textRange),
                message: error.message,
                severity: DiagnosticSeverity.Error
            } satisfies Diagnostic;
            return out;
        });
}
