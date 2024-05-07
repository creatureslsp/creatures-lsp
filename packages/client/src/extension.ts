// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {FileSystemWatcher, OutputChannel, TextDocument, window, workspace} from 'vscode';
import {LanguageClient, LanguageClientOptions} from "vscode-languageclient/node";
import {CaosInlayHintsProvider} from "./inlay-hints";
import {CaosSymbolProvider} from "./breadcrumbs";
import {spinUpServer} from "./spinUpServer.vscode";
import {closeDisposables, pushDisposable} from "./disposables";
import {deleteClient, getClient, getClients} from "./clients";
import {registerCommands} from "./commands/register-commands";
import {Nullable} from "@bedalton/extension-util";
import {Log} from "./log";

let defaultClient: LanguageClient;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// noinspection JSUnusedGlobalSymbols
export function activate(context: vscode.ExtensionContext) {
    
    const outputChannel: OutputChannel = window.createOutputChannel('caos-language-server');
    
    const watcher = getWatcher();
    
    // Options to control the language client
    const clientOptions: LanguageClientOptions = {
        // Register the server for plain text documents
        documentSelector: [{language: 'caos'}],
        initializationOptions: {
            // noCompletions: true
        },
        synchronize: {
            // Notify the server about file changes to creatures files contained in the workspace
            fileEvents: watcher,
        },
        outputChannel: outputChannel
    };
    
    
    function didOpenTextDocument(document: TextDocument) {
        spinUpServer(context, document, defaultClient, clientOptions)
            .then (() => {
               Log.i(document.uri, "Spun up server for CAOS document in node");
            });
    }
    
    // Init client/server when documents are opened
    pushDisposable(workspace.onDidOpenTextDocument(didOpenTextDocument));
    
    // Init server/client for files already open
    workspace.textDocuments.forEach(didOpenTextDocument);
    
    // Close associated server/client when workspace is closed
    pushDisposable(workspace.onDidChangeWorkspaceFolders(async (event) => {
        for (const folder of event.removed) {
            const client = getClient(folder.uri.toString());
            if (client) {
                deleteClient(folder.uri.toString());
                await client.stop();
            }
            client?.sendRequest("vfs:workspace/removed", {workspace: JSON.stringify(folder)});
        }
        for (const folder of event.added) {
            const client = getClient(folder.uri.toString());
            if (client) {
                deleteClient(folder.uri.toString());
                await client.stop();
            }
            client?.sendRequest("vfs:workspace/removed", {workspace: JSON.stringify(folder)});
        }
    }));
    
    registerCommands()
    
    pushDisposable(vscode.languages.registerInlayHintsProvider({language: 'caos'}, new CaosInlayHintsProvider()));
    
    pushDisposable(vscode.languages.registerDocumentSymbolProvider({language: 'caos'}, new CaosSymbolProvider()));
    
    pushDisposable(watcher);
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

let watcher: Nullable<FileSystemWatcher> = null;

function getWatcher(): FileSystemWatcher {
    if (watcher) {
        return watcher;
    }
    const filesWatcherExtensions = [
        "cos",
        "spr",
        "s16",
        "c16",
        "blk",
        "att",
        "catalogue",
        "wav",
        "mng",
        "caoslint.json",
    ].map (ext => {
        let out = ""
        for (let i=0; i < ext.length; i++) {
            const char = ext[i]
            if (char >= '0' && char <= '9') {
                out += char;
            } else {
                out += "[" + char.toUpperCase() + char + "]";
            }
        }
        return out;
    }).join(",");
    return watcher = vscode.workspace.createFileSystemWatcher("**/*.{" + filesWatcherExtensions + "}");
}