import {CompletionItem, CompletionList, TextDocumentPositionParams} from "vscode-languageserver";
import {EMPTY_DOCUMENT_URI, getAllDocuments, getDocuments} from "../documents";
import {CAOS_LANGUAGE_ID, getDocumentSettings} from "../settings";
import {
    CompletionOptions,
    CompletionSettings,
    createEmptyCompletionList,
    getCompletionItems,
    NamedVarPrefix
} from "@bedalton/caos-util/completions";
import {updateRecent, updateRecentCommandsInDocument} from "../completions-cache";
import {connection} from "../connection.vscode";
import {CursorData, ICaosCommand} from "@bedalton/caos-util";
import {getNamedVariableKeysForType} from "../indices/index.caos.named-variables";
import * as path from "path";
import {getFiles, readTextFile} from "../files";
import {initIndices} from "../indices/index.utils";
import {getWorkspaceUriForFile} from "../workspace-folders";
import {defaultWorkspaceUri, Nullable, trimLeadingSlashOnFileSchema} from "@bedalton/extension-util";


// The current attempt id for completion item requests
const completionAttempts: { [id: string]: number; } = {};


/**
 * Register an LSP server callback for getting completion items
 */
export async function registerCaosCompletionProvider(init: boolean = true) {
    if (!init) {
        return;
    }
    
    for (const document of getAllDocuments()) {
        const text = document.getText();
        const uri = document.uri;
        await updateRecentCommandsInDocument(null, uri, text);
    }
    
    connection.onCompletion((params: TextDocumentPositionParams): Promise<CompletionList> => {
        return new Promise<CompletionList>(async (resolve) => {
            const uri = params.textDocument.uri;
            const thisFileName = uri.split(/[/\\]+/).pop()!;
            const textDocument = getDocuments()
                .get(params.textDocument.uri);
            
            if (textDocument != null && textDocument?.languageId != CAOS_LANGUAGE_ID) {
                resolve(createEmptyCompletionList());
                return;
            }
            
            const currentAttempt = completionAttempts.hasOwnProperty(uri) ? completionAttempts[uri] + 1 : 1;
            completionAttempts[uri] = currentAttempt;
            
            const keepGoing = () => {
                return completionAttempts[uri] <= currentAttempt;
            };
            
            // Get document text
            const text = textDocument?.getText() ?? (await readTextFile(uri));
            
            // Ensure there is enough text
            if (text == null || text.length < 1) {
                resolve(createEmptyCompletionList());
                return;
            }
            
            let settings = await getDocumentSettings(uri);
            const variant = settings.variant ?? 'DS';
            
            const completionSettings: CompletionSettings = {
                parameterInlayHints: settings.disabledInlayHints.indexOf('inlayHints.parameterHints.showParameterHints') < 0,
                usePlaceholders: settings.usePlaceholders ?? true,
                dumbMode: settings.dumbMode ?? false,
                minimumParameterCount: settings.minimumParameterCount ?? 2
            };
            
            const workspaceUri = trimLeadingSlashOnFileSchema(getWorkspaceUriForFile(uri));
            
            await initIndices(workspaceUri);
            
            const getNamedVariables = (prefix: NamedVarPrefix, definedOnly: boolean) => {
                return getNamedVariableKeysForType(workspaceUri, prefix, definedOnly)
            };
            
            
            const options: CompletionOptions = {
                parseNear: true,
                keepGoing: keepGoing,
                incomplete: true,
                getNamedVariableKeys: getNamedVariables,
                directory: path.dirname(trimLeadingSlashOnFileSchema(uri)),
                getFiles: (extensions?: Nullable<string[]>) => getFiles(workspaceUri, extensions),
            }
            
            const cursorPointer: {cursor: Nullable<CursorData>} = {
                cursor: null
            }
            
            let completionItems = await getCompletionItems(
                thisFileName,
                variant,
                text,
                params.position,
                options,
                completionSettings,
                cursorPointer
            );
            
            resolve(completionItems);
        });
    });
    
    
    
// This handler resolves additional information for the item selected in
// the completion list.
    connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
        const command = (<ICaosCommand>item.data);
        if (command?.command != null) {
            updateRecent(defaultWorkspaceUri, EMPTY_DOCUMENT_URI, command, []);
        }
        if (item.detail == null) {
            item.detail = '';
        }
        return item;
    });
}


