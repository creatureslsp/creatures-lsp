import {Nullable} from "@bedalton/extension-util";
import {Disposable} from "vscode-languageserver";
import {connection} from "../connection.vscode";
import {getDocument, getDocumentText} from "../documents";
import {CAOS_LANGUAGE_ID, getDocumentSettings} from "../settings";
import {getInlayHints} from "@bedalton/caos-util/inlay-hints";

/**
 * Register an inlay hint provider for the LSP server's client
 * @param canUse
 */
export function registerCaosInlayHintsProvider(canUse: boolean): Nullable<Disposable> {
    if (!canUse) {
        return null;
    }
    return connection.languages.inlayHint.on(async (e) => {
        const documentUri = e.textDocument.uri;
        const document = getDocument(documentUri);
        if (document != null && document.languageId !== CAOS_LANGUAGE_ID) {
            return [];
        }
        const text = document?.getText() ?? (await getDocumentText(documentUri));
        if (text == null) {
            return [];
        }
        const settings = await getDocumentSettings(documentUri);
        const variant = settings.variant ?? 'DS';
        return getInlayHints(variant, text, settings.disabledInlayHints ?? []);
    });
}
