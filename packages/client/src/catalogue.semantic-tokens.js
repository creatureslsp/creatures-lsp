import vscode from "vscode";
import { catalogueSemanticLegend, getCatalogueSemanticTokens } from "@creatureslsp/catalogue";
import { toVsCodeRange } from "./helpers.js";
export const catalogueSemanticTokensProvider = {
    provideDocumentSemanticTokens(document) {
        const tokensBuilder = new vscode.SemanticTokensBuilder(catalogueSemanticLegend);
        for (const item of getCatalogueSemanticTokens(document.getText())) {
            tokensBuilder.push(toVsCodeRange(item.range), item.tokenType, item.modifiers);
        }
        return tokensBuilder.build();
    }
};
