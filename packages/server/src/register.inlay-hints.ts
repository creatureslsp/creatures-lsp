import {Nullable} from "@bedalton/caos-util";
import {Disposable} from "vscode-languageserver";
import {connection} from "./connection.vscode";
import {getDocument} from "./documents";
import {CAOS_LANGUAGE_ID, getDocumentSettings} from "./settings";
import {getInlayHints} from "@bedalton/caos-util/inlay-hints";

/**
 * Register an inlay hint provider for the LSP server's client
 * @param canUse
 */
export function registerInlayHintsProvider(canUse: boolean): Nullable<Disposable> {
    if (!canUse) {
        return null;
    }
    const disposable = connection.languages.inlayHint.on(async (e) => {
        const documentUri = e.textDocument.uri;
        const document = getDocument(documentUri);
        if (document == null || document.languageId !== CAOS_LANGUAGE_ID) {
            return [];
        }
        const text = document.getText();
        if (text == null) {
            return [];
        }
        const settings = await getDocumentSettings(documentUri);
        const variant = settings.variant ?? 'DS';
        const inlayHint = getInlayHints(variant, text, settings.disabledInlayHints ?? []);
        return inlayHint;
    });
    return disposable;
}
