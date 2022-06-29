#!/usr/bin/env node
import {
    createConnection,
    DidChangeConfigurationNotification,
    InitializeParams,
    InitializeResult,
    ProposedFeatures,
    TextDocumentSyncKind
} from 'vscode-languageserver/node';
import {registerSemanticTokenHighlighter} from "./register.semantic-highlighter";
import {getSemanticTokensLegend} from "@bedalton/caos-util/semantic-highlighter";
import {registerFormattingProvider} from "./register.formatter";
import {getDocuments} from "./documents";
import {CAOS_LANGUAGE_ID, deleteDocumentSettings, registerSettingsChangeListener} from "./settings";
import {updateRecentCommandsInDocument} from "./completions-cache";
import {validateTextDocument} from "./validator";
import {registerCompletionProvider} from "./register.completions";
import {registerHoverDocumentationProvider} from "./register.hover-documentation";
import {registerInlayHintsProvider} from "./register.inlay-hints";
import {MessageType} from "@bedalton/caos-util";
import {registerGotoDefinitionsProvider} from "./register.goto";

// Create a connection for the server, using Node's IPC as transport.
// Also include all preview / proposed LSP features.
export let connection = createConnection(ProposedFeatures.all);

export const clientCapabilities = {
    hasConfigurationCapability: false,
    hasWorkspaceFolderCapability: false,
    hasDiagnosticRelatedInformationCapability: false,
    hasSemanticTokensCapabilities: false,
    hasGotoDefinition: false,
    hasFormatting: false,
    hasInlayHintsCapabilities: false,
    hasCompletionCapabilities: false,
    hasHoverCapabilities: false
};


connection.onInitialize((params: InitializeParams) => {
    
    let capabilities = params.capabilities;
    
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
    )
    
    clientCapabilities.hasHoverCapabilities = (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.hover
    )
    
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
            definitionProvider: clientCapabilities.hasGotoDefinition
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
    registerSettingsChangeListener();
    registerInlayHintsProvider(clientCapabilities.hasInlayHintsCapabilities);
    registerCompletionProvider(!noCompletions).then(() => undefined);
    registerSemanticTokenHighlighter(clientCapabilities.hasSemanticTokensCapabilities);
    registerGotoDefinitionsProvider(clientCapabilities.hasGotoDefinition);
    registerFormattingProvider(clientCapabilities.hasFormatting);
    registerHoverDocumentationProvider(clientCapabilities.hasHoverCapabilities);
    return result;
});

connection.onInitialized(() => {
    if (clientCapabilities.hasConfigurationCapability) {
        // Register for all configuration changes.
        // noinspection JSIgnoredPromiseFromCall
        connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
    if (clientCapabilities.hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(_event => {
            // connection.console.log('Workspace folder change event received.');
        });
    }
});

const documents = getDocuments();

// Only keep settings for open documents
documents.onDidClose(e  => {
    deleteDocumentSettings(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
    if (change.document.languageId !== CAOS_LANGUAGE_ID) {
        return;
    }
    // noinspection JSIgnoredPromiseFromCall
    updateRecentCommandsInDocument(change.document.uri, change.document.getText(), true);
    
    // noinspection JSIgnoredPromiseFromCall
    validateTextDocument(change.document);
});



// Called when file system changed
connection.onDidChangeWatchedFiles(_change => {
    // Monitored files have change in VS Code
});

export function showMessage(type: MessageType, message: string): void {
    // noinspection JSIgnoredPromiseFromCall
    connection.sendNotification('caos/show-message', [type, message]);
}

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();