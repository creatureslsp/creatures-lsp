import type {CatalogueDocument} from "./catalogue.document.js";
import type {Diagnostic} from "vscode-languageserver/node.js";
import {toVsRange} from "@creatureslsp/extension-util";
import {type CatalogueError, validateCatalogue} from "@creatureslsp/catalogue/validation";
import {DiagnosticSeverity} from "vscode-languageserver-types";
import type {Nullable} from "../types.js";
import type {Range} from "vscode-languageserver";
import {collectCatalogueInspectionErrors} from "./inspections/catalogue.inspections.core.js";
import {getWorkspaceUriForFile} from "../workspace-folders.js";

export async function getCatalogueDocumentValidationErrors(
    document: CatalogueDocument,
    version: Nullable<number>,
    range: Nullable<Range>,
): Promise<Diagnostic[]> {
    
    const {text, settings} = document;
    
    if (text.length < 1) {
        return [];
    }
    
    console.log("Validating catalogue document");
    
    const maxNumberOfProblems = settings.maxNumberOfProblems;
    
    let rawErrors = validateCatalogue(text)
    
    if (maxNumberOfProblems != null && rawErrors.length > maxNumberOfProblems) {
        rawErrors = rawErrors.splice(maxNumberOfProblems);
    }
    
    const workspaceUri = getWorkspaceUriForFile(document.documentUri);
    const inspectionErrors = await collectCatalogueInspectionErrors(
        workspaceUri,
        document.documentUri,
        document.text,
        version,
        range,
    )

    const errors: Diagnostic[] = rawErrors
        .map((error: CatalogueError) => {
            const textRange = error.textRange;
            const out: Diagnostic = {
                range: toVsRange(textRange),
                message: error.message,
                severity: DiagnosticSeverity.Error
            } satisfies Diagnostic;
            return out;
        });
    return errors.concat(inspectionErrors);
}
