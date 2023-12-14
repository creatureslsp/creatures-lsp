import {CompletionItem, CompletionList, TextDocumentPositionParams} from "vscode-languageserver";
import {EMPTY_DOCUMENT_URI, getAllDocuments, getDocuments} from "./documents";
import {CAOS_LANGUAGE_ID, getDocumentSettings} from "./settings";
import {
    CompletionOptions,
    CompletionSettings,
    createEmptyCompletionList,
    getCompletionItems,
    NamedVarPrefix
} from "@bedalton/caos-util/completions";
import {getNamedVariableKeys, updateRecent, updateRecentCommandsInDocument} from "./completions-cache";
import {connection} from "./server";
import {com} from "@bedalton/caos-util";
import ICaosCommand = com.bedalton.creatures.caos.libs.ICaosCommand;

// The current attempt id for completion item requests
const completionAttempts: { [id: string]: number; } = {};


/**
 * Register an LSP server callback for getting completion items
 */
export async function registerCompletionProvider(init: boolean = true) {
    if (!init) {
        return;
    }
    
    
    for (const document of getAllDocuments()) {
        const text = document.getText();
        const uri = document.uri;
        await updateRecentCommandsInDocument(uri, text);
    }
    
    connection.onCompletion((params: TextDocumentPositionParams): Promise<CompletionList> => {
        return new Promise<CompletionList>(async (resolve) => {
            const uri = params.textDocument.uri;
            const textDocument = getDocuments()
                .get(params.textDocument.uri);
            
            if (textDocument?.languageId != CAOS_LANGUAGE_ID) {
                resolve(createEmptyCompletionList());
                return;
            }
            const currentAttempt = completionAttempts.hasOwnProperty(uri) ? completionAttempts[uri] + 1 : 1;
            completionAttempts[uri] = currentAttempt;
            
            const keepGoing = () => {
                return completionAttempts[uri] <= currentAttempt;
            };
            
            // Get document text
            const text = textDocument?.getText()
            
            // Ensure there is enough text
            if (textDocument == null || text == null || text.length < 1) {
                resolve(createEmptyCompletionList());
                return;
            }
            
            let settings = await getDocumentSettings(textDocument.uri);
            const variant = settings.variant ?? 'DS';
            
            const completionSettings: CompletionSettings = {
                parameterInlayHints: settings.disabledInlayHints.indexOf('inlayHints.parameterHints.showParameterHints') < 0,
                usePlaceholders: settings.usePlaceholders ?? true,
                dumbMode: settings.dumbMode ?? false,
                minimumParameterCount: settings.minimumParameterCount ?? 2
            };
            const options: CompletionOptions = {
                parseNear: true,
                keepGoing: keepGoing,
                incomplete: true,
                getNamedVariableKeys: (prefix: NamedVarPrefix) => getNamedVariableKeys(null, prefix)
            }
            resolve(getCompletionItems(
                variant,
                text,
                params.position,
                completionSettings,
                options
            ));
        });
    });


// This handler resolves additional information for the item selected in
// the completion list.
    connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
        const command = (<ICaosCommand>item.data);
        if (command?.command != null) {
            updateRecent(EMPTY_DOCUMENT_URI, command, []);
        }
        if (item.detail == null) {
            item.detail = '';
        }
        return item;
    });
}