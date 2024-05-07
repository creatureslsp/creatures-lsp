import {
    CancellationToken,
    InlayHint,
    InlayHintKind,
    InlayHintsProvider,
    Position,
    ProviderResult,
    TextDocument,
    workspace,
    WorkspaceConfiguration
} from "vscode"
import {Range} from "vscode-languageserver";
import {Nullable} from "@bedalton/extension-util";
import {collectors, hints, GameVariant, ParseResult} from '@bedalton/caos-util';
import {CheckModule} from '@bedalton/caos-util/check-module';
const getInlayOptions = hints.getInlayOptions;
const parseCaosWithin = collectors.parseCaosWithin;

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
        const hintSettings: {
            get(key: string): (boolean | undefined);
            has(key: string): boolean
        } | undefined = settings;
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
        const keepGoing = () => token?.isCancellationRequested != true
        let parseResult: ParseResult;
        if (range != null) {
            parseResult = parseCaosWithin(
                variant,
                text,
                range.start.line,
                range.start.character,
                range.end.line,
                range.end.character,
                false,
                null,
                keepGoing
            )
        } else {
            parseResult = collectors.parseCaos(
                variant,
                text,
                keepGoing
            )
        }
        if (parseResult == null) {
            return [];
        }

        const raw = hints.getInlayHints(parseResult, disabled, [], minimumParameters);
        return raw.map((hint) => {
            return new InlayHint(
                new Position(hint.position.line, hint.position.character),
                <string>hint.label,
                hint.kind ?? InlayHintKind.Parameter
            )
        });
    }
    
    resolveInlayHint(_hint: InlayHint, _token: CancellationToken): ProviderResult<InlayHint> {
        return undefined;
    }
    
}