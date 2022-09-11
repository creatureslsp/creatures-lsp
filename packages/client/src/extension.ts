// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as path from 'path';
import * as vscode from 'vscode';
import {Disposable, OutputChannel, TextDocument, Uri, window, workspace, WorkspaceFolder} from 'vscode';
import {LanguageClient, LanguageClientOptions, ServerOptions, TransportKind} from "vscode-languageclient/node";
import {CaosInlayHintsProvider} from "./inlay-hints";
import {Nullable} from "@bedalton/caos-util";
import {CaosSymbolProvider} from "./breadcrumbs";

const disposables: Disposable[] = [];

let defaultClient: LanguageClient;
const clients: Map<string, LanguageClient> = new Map();
let nextListenerId = 0;

let _sortedWorkspaceFolders: Nullable<string[]>;
function getSortedWorkspaceFolders(): string[] {
    if (_sortedWorkspaceFolders == null) {
        _sortedWorkspaceFolders = workspace.workspaceFolders ? workspace.workspaceFolders.map(folder => {
            let result = folder.uri.toString();
            if (result.charAt(result.length - 1) !== '/') {
                result = result + '/';
            }
            return result;
        }).sort(
            (a, b) => {
                return a.length - b.length;
            }
        ) : [];
    }
    return _sortedWorkspaceFolders;
}


disposables.push(workspace.onDidChangeWorkspaceFolders(() => _sortedWorkspaceFolders = null));

function getOuterMostWorkspaceFolder(folder: WorkspaceFolder): WorkspaceFolder {
    const sorted = getSortedWorkspaceFolders();
    for (const element of sorted) {
        let uri = folder.uri.toString();
        if (uri.charAt(uri.length - 1) !== '/') {
            uri = uri + '/';
        }
        if (uri.startsWith(element)) {
            return workspace.getWorkspaceFolder(Uri.parse(element))!;
        }
    }
    return folder;
}


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The server is implemented in node
    const serverModule = context.asAbsolutePath(
        path.join('packages', 'server', 'dist', 'server.js')
    );
    const outputChannel: OutputChannel = window.createOutputChannel('caos-language-server');

    
    // Options to control the language client
    const clientOptions: LanguageClientOptions = {
        // Register the server for plain text documents
        documentSelector: [{language: 'caos'}],
        initializationOptions: {
            // noCompletions: true
        },
        synchronize: {
            // Notify the server about file changes to '.cos files contained in the workspace
            fileEvents: workspace.createFileSystemWatcher('**/*.cos')
        },
        outputChannel: outputChannel
    };
    
    
    function didOpenTextDocument(document: TextDocument) {
        // Do not start client for non-CAOS files
        if (document.languageId !== 'caos' || (document.uri.scheme !== 'file' && document.uri.scheme !== 'untitled')) {
            return;
        }
        
        const uri = document.uri;
    
        
        // Untitled/unsaved  files go to a default client.
        if (uri.scheme === 'untitled') {
            if (defaultClient) {
                return;
            }
            const untitledFileClientOptions = {
                ...clientOptions,
                documentSelector: [
                    { scheme: 'untitled', language: 'caos' }
                ]
            };
            // If the extension is launched in debug mode then the debug server options are used
            // Otherwise the run options are used
            const debugOptions = { execArgv: ["--nolazy", "--inspect=6010"] };
            const serverOptions: ServerOptions = {
                run: { module: serverModule, transport: TransportKind.ipc },
                debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions}
            };
            defaultClient = new LanguageClient(
                'caos-language-server',
                'CAOS Language Server',
                serverOptions,
                untitledFileClientOptions
            );
            defaultClient.start();
            return;
        }
        let folder = workspace.getWorkspaceFolder(uri);
        
        // Files outside a folder can't be handled. This might depend on the language.
        // Single file languages like JSON might handle files outside the workspace folders.
        if (!folder) {
            return;
        }
        
        // If we have nested workspace folders we only start a server on the outermost workspace folder.
        folder = getOuterMostWorkspaceFolder(folder);
        
        if (!clients.has(folder.uri.toString())) {
            clients.set(folder.uri.toString(), <any>null);
            // Initialize options with a specific workspace folder
            const clientWithFolderOptions: LanguageClientOptions = {...clientOptions, workspaceFolder: folder};
            // If the extension is launched in debug mode then the debug server options are used
            // Otherwise the run options are used
            const debugOptions = { execArgv: ["--nolazy", `--inspect=${6011 + nextListenerId++}`] };
            const serverOptions: ServerOptions = {
                run: { module: serverModule, transport: TransportKind.ipc },
                debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions}
            };
            // Create the language client and start the client.
            const client = new LanguageClient(
                'caos-language-server',
                'CAOS Language Server',
                serverOptions,
                clientWithFolderOptions
            );
    
            // Register notification listener to allow server to show message in VS Code
            client.onReady().then(() => {
                disposables.push(client.onNotification('caos/show-message', (params: string[]) => {
                    let [type, message] = params;
                    type = type.toLowerCase();
                    if (type == 'error') {
                        vscode.window.showErrorMessage(message);
                    } else if (type == 'warn' || type === 'warning') {
                        vscode.window.showWarningMessage(message);
                    } else {
                        vscode.window.showInformationMessage(message);
                    }
                }));
            })
            clients.set(folder.uri.toString(), client);
            client.start();
        }
    }
    
    // Init client/server when documents are opened
    disposables.push(workspace.onDidOpenTextDocument(didOpenTextDocument));
    
    // Init server/client for files already open
    workspace.textDocuments.forEach(didOpenTextDocument);
    
    // Close associated server/client when workspace is closed
    disposables.push(workspace.onDidChangeWorkspaceFolders((event) => {
        for (const folder  of event.removed) {
            const client = clients.get(folder.uri.toString());
            if (client) {
                clients.delete(folder.uri.toString());
                client.stop().then(() => undefined);
            }
        }
    }));
    disposables.push(vscode.commands.registerCommand('caos.setVariant', async () => {
        vscode.commands.executeCommand( 'workbench.action.openSettings', 'caosScript.variant' )
    }));
    disposables.push(vscode.languages.registerInlayHintsProvider({language: 'caos'}, new CaosInlayHintsProvider()));
    
    disposables.push(vscode.languages.registerDocumentSymbolProvider({language: 'caos'}, new CaosSymbolProvider()));
    
}

/**
 * Close all registered disposables
 */
function closeDisposables() {
    for (const disposable of disposables) {
        disposable.dispose();
    }
}

// this method is called when your extension is deactivated
export function deactivate(): Thenable<void> {
    const promises: Thenable<void>[] = [];
    if (defaultClient) {
        promises.push(defaultClient.stop());
    }
    for (const client of clients.values()) {
        promises.push(client.stop());
    }
    // After all clients are stopped, close all disposables
    return Promise.all(promises).then(closeDisposables);
}