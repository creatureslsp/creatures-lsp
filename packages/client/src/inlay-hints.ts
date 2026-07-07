import {
    type CancellationToken,
    InlayHint,
    InlayHintKind,
    type InlayHintsProvider,
    Position,
    type ProviderResult,
    type TextDocument,
    workspace,
    type WorkspaceConfiguration
} from "vscode"
import {Range} from "vscode-languageserver";
import type {Nullable} from "@creatures-lsp/extension-util";
import {
    GameVariant,
} from '@creatures-lsp/caos-util';

import {
    parseCaosWithin,
    parseCaos,
    type CaosParseResult,
} from '@creatures-lsp/caos-kt/caos-parser';

import {
    getCaosInlayHints,
    getCaosInlayOptions,
} from "@creatures-lsp/caos-kt/caos-inlay-hints";

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
        } | null = settings;
        let disabled: string[];
        if (settings) {
            const inlayOptions: string[] = getCaosInlayOptions();
            // Get disabled type hints
            disabled = inlayOptions
                .filter((option: string) => {
                    return option != null && hintSettings?.has(option) == true && hintSettings?.get(option) === false;
                });
        } else {
            disabled = [];
        }
        const minimumParameters: Nullable<number> = settings.get('inlayHints.parameterHints.minimumParameterCountForParameterInlayHints');
        const keepGoing = () => token?.isCancellationRequested != true
        let parseResult: CaosParseResult;
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
            parseResult = parseCaos(
                variant,
                text,
                keepGoing
            )
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
                return new InlayHint(
                    new Position(hint.position.line, hint.position.character),
                    <string>hint.label,
                    hint.kind ?? InlayHintKind.Parameter
                )
            } catch (e) {
                const error = e instanceof Error ? e.message + "\n" + e.stack : e;
                console.error("Failed to get inlay hint for <" + hint.label + ">;\n", error);
                return null;
            }
        }).filter(it => it != null) as InlayHint[];
    }
    
    resolveInlayHint(_hint: InlayHint, _token: CancellationToken): ProviderResult<InlayHint> {
        return null;
    }
    
}