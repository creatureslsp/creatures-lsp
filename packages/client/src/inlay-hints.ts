import {
    CancellationToken,
    InlayHint,
    InlayHintsProvider,
    Position,
    ProviderResult,
    TextDocument,
    workspace, WorkspaceConfiguration
} from "vscode"
import {Range} from "vscode-languageserver";
import {collectors, GameVariant, hints, Nullable} from '@bedalton/caos-util';
import getInlayOptions = hints.getInlayOptions;
import parseCaos = collectors.parseCaos;

function getSettings(): WorkspaceConfiguration {
    return workspace.getConfiguration('caosScript');
}

export class CaosInlayHintsProvider implements InlayHintsProvider {
    
    provideInlayHints(document: TextDocument, range: Range, token: CancellationToken): ProviderResult<InlayHint[]> {
        const text = document.getText()
    
        if (text.length < 9) {
            return [];
        }
        
        const settings = getSettings();
        const variant: GameVariant = settings.get('variant') ?? 'DS';
        const hintSettings: { get(key: string): (boolean | undefined); has(key: string): boolean } | undefined = settings;
        let disabled: string[];
        if (settings) {
            const inlayOptions = getInlayOptions();
            // Get disabled type hints
             disabled = inlayOptions
                .filter((option) => {
                    return hintSettings?.has(option) == true && hintSettings?.get(option) === false;
                });
        } else {
            disabled = [];
        }
        const minimumParameters: Nullable<number> = settings.get('inlayHints.parameterHints.minimumParameterCountForParameterInlayHints');
        const parseResult = parseCaos(variant, text)
        const raw = hints.getInlayHints(parseResult, disabled, [], minimumParameters);
        return raw.map((hint) => {
            return new InlayHint(
                new Position(hint.position.line, hint.position.character),
                <string>hint.label,
                hint.kind
            )
        });
    }
    
    resolveInlayHint(hint: InlayHint, token: CancellationToken): ProviderResult<InlayHint> {
        return undefined;
    }
    
}