import { getCaosInlayHintsWithOffset } from "@creatureslsp/caos/inlay-hints";
import { isCaosDocument, unpackDocument } from "./document.js";
import { connection } from "./connection.vscode.js";
import { caosInitLib } from "./caos/caos-init-lib.js";
import { Log } from "./ConnLogger.js";
export function registerInlayHints(canUse) {
    if (!canUse) {
        return null;
    }
    return connection.languages.inlayHint.on(onInlayHints);
}
async function onInlayHints(params) {
    try {
        return await _onInlayHints(params);
    }
    catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to get Inlay Hints; ${error}`);
        return [];
    }
}
async function _onInlayHints(params) {
    const uri = params.textDocument.uri;
    const document = await unpackDocument(uri);
    if (document == null) {
        return [];
    }
    if (isCaosDocument(document)) {
        caosInitLib();
        const minimumParameterHints = document.settings.inlayHints?.parameterHints?.minimumParameterCountForParameterInlayHints;
        return getCaosInlayHintsWithOffset(document.variant, document.text, document.settings.disabledInlayHints ?? [], minimumParameterHints);
    }
    return [];
}
