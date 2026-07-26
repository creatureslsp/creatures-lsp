import { offsetRange, toVsRange } from "@creatureslsp/extension-util";
import { validateCatalogue } from "@creatureslsp/catalogue/validation";
import { DiagnosticSeverity } from "vscode-languageserver-types";
export function getCatalogueDocumentValidationErrors(document, _version, _range) {
    const { text, settings } = document;
    if (text.length < 1) {
        return [];
    }
    const maxNumberOfProblems = settings.maxNumberOfProblems;
    let rawErrors = validateCatalogue(text);
    if (maxNumberOfProblems != null && rawErrors.length > maxNumberOfProblems) {
        rawErrors = rawErrors.splice(maxNumberOfProblems);
    }
    return rawErrors
        .map((error) => {
        const textRange = offsetRange(error.textRange, 0, 0, 1);
        const out = {
            range: toVsRange(textRange),
            message: error.message,
            severity: DiagnosticSeverity.Error
        };
        return out;
    });
}
