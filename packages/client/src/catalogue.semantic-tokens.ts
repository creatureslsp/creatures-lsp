import vscode from "vscode";
import {catalogueSemanticLegend, getCatalogueSemanticTokens} from "@creatures-lsp/catalogue";
import {toVsCodeRange} from "./helpers.js";

export const catalogueSemanticTokensProvider: vscode.DocumentSemanticTokensProvider = {
    provideDocumentSemanticTokens(
        document: vscode.TextDocument
    ): vscode.ProviderResult<vscode.SemanticTokens> {
        const tokensBuilder = new vscode.SemanticTokensBuilder(catalogueSemanticLegend);
        for (const item of getCatalogueSemanticTokens(document.getText())) {
            tokensBuilder.push(
                toVsCodeRange(item.range),
                item.tokenType,
                item.modifiers,
            );
        }
        return tokensBuilder.build();
    }
};