#!/usr/bin/env node
import {InitializeParams, InitializeResult, TextDocumentSyncKind} from 'vscode-languageserver/node';
import {registerCaosSemanticTokenHighlighter} from "./caos/register.semantic-highlighter";
import {getSemanticTokensLegend} from "@bedalton/caos-util/semantic-highlighter";
import {registerCaosFormattingProvider} from "./caos/register.formatter";
import {getDocuments} from "./documents";
import {CAOS_LANGUAGE_ID, clientCapabilities, deleteDocumentSettings} from "./settings";
import {updateRecentCommandsInDocument} from "./completions-cache";
import {validateTextDocument} from "./validator";
import {registerCaosCompletionProvider} from "./caos/register.completions";
import {registerCaosHoverDocumentationProvider} from "./caos/register.hover-documentation";
import {registerCaosInlayHintsProvider} from "./caos/register.inlay-hints";
import {registerCaosGotoDefinitionsProvider} from "./caos/register.goto";
import {connection} from './connection.vscode';
import {registerSettingsChangeListener} from "./SettingsChangeHandler";
import {registerFilesWatcher} from "./files";
import {indexCaosFile} from "./indices/index.caos";
import {registerWorkspaceChangeHandlers, setWorkspaceFolders} from "./workspace-folders";
import {FileOperationFilter} from "vscode-languageserver-protocol/lib/common/protocol.fileOperations";


connection.onInitialize((params: InitializeParams) => {
    
    const caosLibUrl = (__dirname.endsWith('web') ? '../' : '') + '../../caos-util/lib/caos.universal.lib.json';
    if (typeof self != 'undefined') {
        (<any>self).caosLibUrl = caosLibUrl
    } else if (typeof global == 'object') {
        // noinspection JSConstantReassignment
        (<any>global).self = global;
        (<any>global).self.caosLibUrl = caosLibUrl;
    }
    
    
    let capabilities = params.capabilities;
    
    // noinspection JSUnresolvedReference
    const noCompletions = params.initializationOptions?.noCompletions ?? false;
    
    // Does the client support the `workspace/configuration` request?
    // If not, we fall back using global settings.
    clientCapabilities.hasConfigurationCapability = (
        !!capabilities.workspace && !!capabilities.workspace.configuration
    );
    
    clientCapabilities.hasSemanticTokensCapabilities = (
        !!capabilities.workspace && !!capabilities.workspace.semanticTokens
    );
    
    clientCapabilities.hasWorkspaceFolderCapability = (
        !!capabilities.workspace && !!capabilities.workspace.workspaceFolders
    );
    clientCapabilities.hasDiagnosticRelatedInformationCapability = (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.publishDiagnostics &&
        !!capabilities.textDocument.publishDiagnostics.relatedInformation
    );
    
    clientCapabilities.hasGotoDefinition = (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.documentLink
    );
    clientCapabilities.hasFormatting = (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.formatting
    )
    
    clientCapabilities.hasInlayHintsCapabilities = (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.inlayHint
    );
    
    clientCapabilities.hasCompletionCapabilities = (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.completion
    );
    
    clientCapabilities.hasHoverCapabilities = (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.hover
    );
    
    clientCapabilities.hasSymbolsCapabilities = (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.documentSymbol
    );
    
    clientCapabilities.hasCompletionCapabilities = (
        !!capabilities.textDocument &&
        !!capabilities.workspace?.configuration
    );
    
    clientCapabilities.hasWatchFilesCapabilities = (
        !!capabilities.workspace || !!capabilities.workspace!.didChangeWatchedFiles
    )
    
    const glob = "**/*.{" + [
        "cos",
        "catalogue",
        "att",
        "spr",
        "s16",
        "c16",
        "blk",
        "att"
    ].map((extension) => {
        let out = "";
        for (let char of extension) {
            out += (char >= "0" && char <= "9") ? char : ("[" + char.toUpperCase() + char +"]");
        }
        return out;
    }).join(",") + "}";
    
    const filters:FileOperationFilter[] = [
        {
            pattern: {
                glob: glob,
                matches: "file"
            },
        },
    ]
    
    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            
            // Register completion if client supports it
            completionProvider: !clientCapabilities.hasCompletionCapabilities || noCompletions ? undefined : {
                // triggerCharacters: triggerCharacters,
                resolveProvider: true,
                triggerCharacters: [' ', ':', '"'],
                completionItem: {
                    labelDetailsSupport: true
                }
            },
            // Register semantic tokens provider if requested by client
            semanticTokensProvider: clientCapabilities.hasSemanticTokensCapabilities ? {
                legend: getSemanticTokensLegend(),
                full: {delta: false},
            } : undefined,
            
            // Server and client allows hover documentation
            hoverProvider: clientCapabilities.hasHoverCapabilities,
            
            // Server and client support inlay hints
            inlayHintProvider: clientCapabilities.hasInlayHintsCapabilities ? {
                documentSelector: [{language: CAOS_LANGUAGE_ID}]
            } : undefined,
            
            // Server and client support code formatting
            documentFormattingProvider: clientCapabilities.hasFormatting,
            
            // Server and client support GOTO definitions
            definitionProvider: clientCapabilities.hasGotoDefinition,
            workspace: {
                fileOperations: {
                    didDelete: {
                        filters
                    },
                    didRename: {
                        filters
                    },
                    didCreate: {
                        filters
                    }
                }
            }
        }
    };
    
    // Register workspace capabilities if client has them too
    if (clientCapabilities.hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }
    
    // Register providers
    registerCaosInlayHintsProvider(clientCapabilities.hasInlayHintsCapabilities);
    registerCaosCompletionProvider(!noCompletions)
        .then(() => undefined);
    registerCaosSemanticTokenHighlighter(clientCapabilities.hasSemanticTokensCapabilities);
    registerCaosGotoDefinitionsProvider(clientCapabilities.hasGotoDefinition);
    registerCaosFormattingProvider(clientCapabilities.hasFormatting);
    registerCaosHoverDocumentationProvider(clientCapabilities.hasHoverCapabilities);
    registerSettingsChangeListener(clientCapabilities.hasConfigurationCapability);
    
    
    if (clientCapabilities.hasWatchFilesCapabilities) {
        registerFilesWatcher(clientCapabilities.hasWatchFilesCapabilities)
            .then()
    }
    
    if (clientCapabilities.hasConfigurationCapability) {
        // Register for all configuration changes.
        // noinspection JSIgnoredPromiseFromCall
        // connection.client.register(DidChangeConfigurationNotification.type, undefined);
        // registerSettingsChangeListener();
    }
    connection.onRequest("caos/vfs-did-init", async () => {
        await setWorkspaceFolders(params.workspaceFolders ?? []);
        registerWorkspaceChangeHandlers();
    });
    
    return result;
});


const documents = getDocuments();

try {
// Only keep settings for open documents
    documents.onDidClose(e => {
        deleteDocumentSettings(e.document.uri);
    });
} catch (e) {
    console.error("Failed to set documents.onDidClose(); ", JSON.stringify(e));
}

try {
    // The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
    documents.onDidChangeContent(change => {
        if (change.document.languageId !== CAOS_LANGUAGE_ID) {
            return;
        }
        // noinspection JSIgnoredPromiseFromCall
        updateRecentCommandsInDocument(null, change.document.uri, change.document.getText(), true);
        
        // noinspection JSIgnoredPromiseFromCall
        validateTextDocument(change.document);
        
        indexCaosFile(null, change.document.uri)
            .then();
    });
} catch (e) {
    console.error("Failed to set documents.onDidChangeContent); ", JSON.stringify(e));
}


try {
// Make the text document manager listen on the connection
// for open, change and close text document events
    documents.listen(connection);
} catch (e) {
    console.error("Failed on documents.listen(); ", JSON.stringify(e));
}


try {
// Listen on the connection
    connection.listen();
} catch (e) {
    console.error("Failed on connect.listen(); ", JSON.stringify(e));
}

