// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {OutputChannel, TextDocument, Uri, window, workspace} from 'vscode';
import {LanguageClient, LanguageClientOptions} from "vscode-languageclient/node";
import {CaosInlayHintsProvider} from "./inlay-hints";
import {CaosSymbolProvider} from "./breadcrumbs";
import {spinUpServer} from "./spinUpServer.vscode";
import {closeDisposables, pushDisposable} from "./disposables";
import {deleteClient, getClient, getClients} from "./clients";

let defaultClient: LanguageClient;


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    
    (<any>self).caosLibUrl = Uri.joinPath(context.extensionUri, 'packages', 'caos-util', 'lib', 'caos.universal.lib.json')
        .toString(true);
    
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
        spinUpServer(context, document, defaultClient, clientOptions)
    }
    
    // Init client/server when documents are opened
    pushDisposable(workspace.onDidOpenTextDocument(didOpenTextDocument));
    
    // Init server/client for files already open
    workspace.textDocuments.forEach(didOpenTextDocument);
    
    // Close associated server/client when workspace is closed
    pushDisposable(workspace.onDidChangeWorkspaceFolders((event) => {
        for (const folder  of event.removed) {
            const client = getClient(folder.uri.toString());
            if (client) {
                deleteClient(folder.uri.toString());
                client.stop().then(() => undefined);
            }
        }
    }));
    pushDisposable(vscode.commands.registerCommand('caos.setVariant', async () => {
        vscode.commands.executeCommand( 'workbench.action.openSettings', 'caosScript.variant' )
    }));
    pushDisposable(vscode.languages.registerInlayHintsProvider({language: 'caos'}, new CaosInlayHintsProvider()));
    
    pushDisposable(vscode.languages.registerDocumentSymbolProvider({language: 'caos'}, new CaosSymbolProvider()));
    
}


// this method is called when your extension is deactivated
export async function deactivate(): Promise<void> {
    const promises: Thenable<void>[] = [];
    if (defaultClient) {
        promises.push(defaultClient.stop());
    }
    for (const client of getClients()) {
        promises.push(client.stop());
    }
    // After all clients are stopped, close all disposables
    await Promise.all(promises);
    return closeDisposables();
}