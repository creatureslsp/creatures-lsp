// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {type FileSystemWatcher, type OutputChannel, type TextDocument, window, workspace} from 'vscode';
import {LanguageClient, type LanguageClientOptions} from "vscode-languageclient/node.js";
import {CaosInlayHintsProvider} from "./inlay-hints.js";
import {CaosSymbolProvider} from "./caos.outliner.js";
import {spinUpServer} from "./spinUpServer.vscode.js";
import {closeDisposables, pushDisposable} from "./disposables.js";
import {deleteClient, getClient, getClients} from "./clients.js";
import {registerCommands} from "./commands/register-commands.js";
import type {Nullable} from "@creatures-lsp/extension-util";
import {CatalogueSymbolProvider} from "./catalogue.outliner.js";
import {catalogueSemanticLegend} from "@creatures-lsp/catalogue";
import {catalogueSemanticTokensProvider} from "./catalogue.semantic-tokens.js";
import {initVfs} from "./vfs.js";
import {useFullCaosLibDefinitions} from "@creatures-lsp/caos/libsfile-full";

let defaultClient: LanguageClient;

useFullCaosLibDefinitions()

export function setDefaultClient(client: LanguageClient) {
    defaultClient = client;
}

export function getDefaultClient() {
    return defaultClient;
}

const caosSelector = { language: "caos" };
const catalogueSelector = { language: "creatures-catalogue" };

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// noinspection JSUnusedGlobalSymbols
export async function activate(context: vscode.ExtensionContext) {
    const outputChannel: OutputChannel = window.createOutputChannel('caos-language-server');
    
    const watcher = getWatcher();
    
    // Options to control the language client
    const clientOptions: LanguageClientOptions = {
        // Register the server for plain text documents
        documentSelector: [caosSelector, catalogueSelector],
        initializationOptions: {
            // noCompletions: true
        },
        synchronize: {
            // Notify the server about file changes to creatures files contained in the workspace
            fileEvents: watcher,
        },
        outputChannel: outputChannel
    };
    
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
            let client = getClient(folder.uri.toString());
            if (client) {
                deleteClient(folder.uri.toString());
                await client.stop();
                await spinUpServer(context, folder.uri.toString(), defaultClient, clientOptions);
                client = getClient(folder.uri.toString());
            }
            pushDisposable(initVfs(folder.uri.toString(), client!));
            client?.sendRequest("vfs:workspace/added", {workspace: JSON.stringify(folder)});
        }
    }));
    
    
    registerCommands()

    // CAOS
    pushDisposable(vscode.languages.registerInlayHintsProvider(caosSelector, new CaosInlayHintsProvider()));
    pushDisposable(vscode.languages.registerDocumentSymbolProvider(caosSelector, new CaosSymbolProvider()));


    // Catalogue
    pushDisposable(vscode.languages.registerDocumentSymbolProvider(catalogueSelector, new CatalogueSymbolProvider()));
    pushDisposable(vscode.languages.registerDocumentSemanticTokensProvider(catalogueSelector, catalogueSemanticTokensProvider, catalogueSemanticLegend));
    
    // Misc
    pushDisposable(watcher);
    
    async function didOpenTextDocument(document: TextDocument) {
        try {
            await spinUpServer(context, document, defaultClient, clientOptions);
        } catch (error) {
            console.error("Error inside spinUpServer:", error);
            outputChannel.appendLine(`Critical spin-up failure: ${error}`);
        }
    }
    
    // Init client/server when documents are opened
    pushDisposable(workspace.onDidOpenTextDocument(didOpenTextDocument));
    
    
    // Init server/client for files already open
    const activationPromises = workspace.textDocuments.map(async (doc) => {
        try {
            await didOpenTextDocument(doc);
        } catch (err) {
            console.error(`Failed to spin up server for ${doc.fileName}:`, err);
            outputChannel.appendLine(`Server spin-up error: ${err}`);
        }
    });
    await Promise.all(activationPromises);
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
        "s32",
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