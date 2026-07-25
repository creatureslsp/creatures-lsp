// noinspection JSIgnoredPromiseFromCall

import {type InitializeParams, type InitializeResult, TextDocumentSyncKind} from "vscode-languageserver/node.js";
import {getSemanticTokensLegend} from "@creatures-lsp/caos";
import {getDocuments} from "./documents.js";
import {clientCapabilities} from "./client-capabilities.js";
import {CAOS_LANGUAGE_ID, deleteCaosDocumentSettings} from "./caos/settings.js";
import {connection} from "./connection.vscode.js";
import {isFileURINaive, registerFilesWatcher} from "./files.js";
import {registerWorkspaceChangeHandlers, setWorkspaceFolders} from "./workspace-folders.js";
import type {FileOperationFilter} from "vscode-languageserver-protocol/lib/common/protocol.fileOperations.js";
import {onCaosFileChange} from "./caos/caos.file-change.js";
import {onCatalogueFileChange} from "./catalogue/catalogue.file-change.js";
import {registerProviders} from "./register.providers.js";
import {CATALOGUE_LANGUAGE_ID} from "./catalogue/settings.js";
import {
    formatUriForRead,
    getBool,
    isVsCode,
    type Nullable,
    setLspRunner,
    trimFileSchemePrefix
} from "@creatures-lsp/extension-util";
import {setDidFinishInit} from "./did-finish-init.js";
import type {RenameOptions} from "vscode-languageserver-protocol/lib/common/protocol.js";
import {Log, initLSPLogger} from "./ConnLogger.js";
import {registerCommands} from "./register.commands.js";
import {isCaosInjectSupportedForVariant} from "./caos/commands/inject/caos.inject-command.js";

initLSPLogger();

let _runner: Nullable<string> = null;
connection.onInitialize((params: InitializeParams) => {
    
    console.log("CONSOLE: Initializing new connection");
    Log.i("LOG: Initializing new connection");
    let capabilities = params.capabilities;
    
    _runner = params.initializationOptions?.runner?.toLowerCase() ?? "node";
    
    setLspRunner(_runner);
    
    clientCapabilities.sublime = _runner === "sublime";
    
    clientCapabilities.vscode = _runner != null && _runner.indexOf("vscode") === 0;
    
    clientCapabilities.node = !clientCapabilities.vscode;
    
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
    
    clientCapabilities.hasGotoDefinitionCapabilities = (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.documentLink
    );
    clientCapabilities.hasFormattingCapabilities = (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.formatting
    )
    
    clientCapabilities.hasInlayHintsCapabilities = !isVsCode() && (
        !!capabilities.textDocument &&
        !!capabilities.textDocument.inlayHint
    );
    
    let noCompletions = getBool(params.initializationOptions?.noCompletions);
    clientCapabilities.hasCompletionCapabilities = !noCompletions && (
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
    
    clientCapabilities.hasReferencesCapability = (
        !!capabilities.textDocument && !!capabilities.textDocument.references
    );
    
    clientCapabilities.useInsertReplace = capabilities
        .textDocument
        ?.completion
        ?.completionItem
        ?.insertReplaceSupport === true;
    
    clientCapabilities.hasCodeActionCapabilities = capabilities
        .textDocument
        ?.codeAction != null;
    
    const useRename = (params.initializationOptions?.enable_rename && _runner !== "sublime") ?? isVsCode();
    
    clientCapabilities.hasFileRenameCapabilities = useRename && (
        !!capabilities.textDocument && !!capabilities.textDocument.rename?.prepareSupport
    )
    
    clientCapabilities.hasSymbolRenameCapabilities = useRename && (
        !!capabilities.textDocument && !!capabilities.textDocument.rename
    )
    
    const glob = "**/*.{" + [
        "cos",
        "catalogue",
        "ps", // PRAY
        "txt", // PRAY
        "att",
        "spr",
        "s16",
        "c16",
        "blk",
        "mng",
        "wav",
    ].map((extension) => {
        let out = "";
        for (let char of extension) {
            out += (char >= "0" && char <= "9") ? char : ("[" + char.toUpperCase() + char + "]");
        }
        return out;
    })
        .join(",") + "}";
    
    const filters: FileOperationFilter[] = [
        {
            pattern: {
                glob: glob,
                matches: "file"
            },
        },
    ];
    
    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            
            // Register completion if client supports it
            completionProvider: (!clientCapabilities.hasCompletionCapabilities || noCompletions) ? undefined : {
                // triggerCharacters: triggerCharacters,
                resolveProvider: true,
                triggerCharacters: [' ', ':', '"'],
                completionItem: {
                    labelDetailsSupport: true
                }
            },
            // Register semantic tokens provider if requested by client
            semanticTokensProvider: clientCapabilities.hasSemanticTokensCapabilities ? {
                documentSelector: [
                    {language: CAOS_LANGUAGE_ID}
                ],
                legend: getSemanticTokensLegend(),
                full: true,
            } : undefined,
            
            // Server and client allows hover documentation
            hoverProvider: clientCapabilities.hasHoverCapabilities,
            
            // Server and client support inlay hints
            inlayHintProvider: clientCapabilities.hasInlayHintsCapabilities ? {
                documentSelector: [{language: CAOS_LANGUAGE_ID}, {language: CATALOGUE_LANGUAGE_ID}]
            } : undefined,
            
            // Server and client support code formatting
            documentFormattingProvider: clientCapabilities.hasFormattingCapabilities,
            
            referencesProvider: {
                workDoneProgress: true
            },
            
            // Server and client support GOTO definitions
            definitionProvider: clientCapabilities.hasGotoDefinitionCapabilities,
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
    
    if (useRename && clientCapabilities.hasSymbolRenameCapabilities) {
        result.capabilities.renameProvider = {
            prepareProvider: true
        } satisfies RenameOptions
    }
    
    if (useRename && clientCapabilities.hasFileRenameCapabilities) {
        // TODO figure out how to register rename capabilities
    }
    
    if (clientCapabilities.hasCodeActionCapabilities) {
        result.capabilities.codeActionProvider = true;
    }
    
    if (clientCapabilities.hasWatchFilesCapabilities) {
        registerFilesWatcher(clientCapabilities.hasWatchFilesCapabilities);
    }
    
    result.capabilities.executeCommandProvider = registerCommands()
    
    if (isVsCode()) {
            connection.onRequest("caos/vfs-did-init", async () => {
                console.log("Did init sent to server");
                await setWorkspaceFolders(params.workspaceFolders ?? []);
                registerWorkspaceChangeHandlers();
            });
    } else {
        setWorkspaceFolders(params.workspaceFolders ?? [])
            .then();
            registerWorkspaceChangeHandlers();
    }
    
    return result;
});


connection.onInitialized(async () => {
    setDidFinishInit();
    await registerProviders();
});

const documents = getDocuments();

try {
// Only keep settings for open documents
    documents.onDidClose(e => {
        deleteCaosDocumentSettings(e.document.uri);
    });
} catch (e) {
    console.error("Failed to set documents.onDidClose(); ", JSON.stringify(e));
}

try {
    // The content of a text document has changed. This event is emitted
// when the text document is first opened or when its content has changed.
    documents.onDidChangeContent(async change => {

        const documentUri = trimFileSchemePrefix(formatUriForRead(change.document.uri));
        if (!isFileURINaive(documentUri)) {
            return;
        }

        switch (change.document.languageId) {
            case CAOS_LANGUAGE_ID:
                await onCaosFileChange(change);
                break;
            case CATALOGUE_LANGUAGE_ID:
                await onCatalogueFileChange(change);
                break;
            default:
                Log.i("Unknown document type: " + change.document.languageId);
        }
    });
} catch (e) {
    Log.e("Failed to set documents.onDidChangeContent); " + JSON.stringify(e));
}

// try {
//     // The content of a text document has changed. This event is emitted
// // when the text document is first opened or when its content has changed.
//     connection.onDidChangeTextDocument(change => {
//
//         Log.i("Doc: " + change.textDocument.uri.split("/").pop() + ": " + JSON.stringify(change.contentChanges));
//         const documentUri = change.textDocument.uri;
//         const doc = documents.get(documentUri)
//         if (!doc) {
//             Log.e("Doc is null for onDidChangeTextDocument");
//             return;
//         }
//
//
//         if (!isFileURINaive(documentUri)) {
//             Log.e("Doc is not file native: " + documentUri);
//             return;
//         }
//
//
//         switch (doc?.languageId) {
//             case CAOS_LANGUAGE_ID:
//                 onCaosFileChangeIncremental(change);
//                 break;
//             case CATALOGUE_LANGUAGE_ID:
//                 onCatalogueFileChangeIncremental(change);
//                 break;
//             default:
//                 Log.i("Unknown document type: " + doc.languageId + "; Document: " + documentUri);
//         }
//     });
// } catch (e) {
//     Log.e("Failed to set documents.onDidChangeContent); " + JSON.stringify(e));
// }

try {
// Make the text document manager listen on the connection
// for open, change and close text document events
    documents.listen(connection);
} catch (e) {
    Log.e("Failed on documents.listen(); " + JSON.stringify(e));
}


try {
// Listen on the connection
    connection.listen();
} catch (e) {
    Log.e("Failed on connect.listen(); " + JSON.stringify(e));
}

