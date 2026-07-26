import { InlayHint, InlayHintKind, Position, workspace } from "vscode";
import { parseCaosWithin, parseCaos, } from '@creatureslsp/caos/parser';
import { getCaosInlayHints, getCaosInlayOptions, } from "@creatureslsp/caos/inlay-hints";
function getSettings() {
    return workspace.getConfiguration('caosScript');
}
export class CaosInlayHintsProvider {
    provideInlayHints(document, range, token) {
        const text = document.getText();
        if (text.length < 9) {
            return [];
        }
        const settings = getSettings();
        const variant = settings.get('variant') ?? 'DS';
        const hintSettings = settings;
        let disabled;
        if (settings) {
            const inlayOptions = getCaosInlayOptions();
            // Get disabled type hints
            disabled = inlayOptions
                .filter((option) => {
                return option != null && hintSettings?.has(option) == true && hintSettings?.get(option) === false;
            });
        }
        else {
            disabled = [];
        }
        const minimumParameters = settings.get('inlayHints.parameterHints.minimumParameterCountForParameterInlayHints');
        const keepGoing = () => token?.isCancellationRequested != true;
        let parseResult;
        if (range != null) {
            parseResult = parseCaosWithin(variant, text, range.start.line, range.start.character, range.end.line, range.end.character, false, null, keepGoing);
        }
        else {
            parseResult = parseCaos(variant, text, keepGoing);
        }
        if (parseResult == null) {
            return [];
        }
        const raw = getCaosInlayHints(parseResult, disabled, [], minimumParameters)
            .filter(it => it != null);
        return raw.map((hint) => {
            if (hint == null) {
                return null;
            }
            try {
                return new InlayHint(new Position(hint.position.line, hint.position.character), hint.label, hint.kind ?? InlayHintKind.Parameter);
            }
            catch (e) {
                const error = e instanceof Error ? e.message + "\n" + e.stack : e;
                console.error("Failed to get inlay hint for <" + hint.label + ">;\n", error);
                return null;
            }
        }).filter(it => it != null);
    }
    resolveInlayHint(_hint, _token) {
        return null;
    }
}
