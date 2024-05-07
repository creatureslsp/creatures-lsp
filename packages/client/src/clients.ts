import {LanguageClient} from "vscode-languageclient/node";
import {pushDisposable} from "./disposables";
import * as vscode from "vscode";
import {Uri} from "vscode";
import {Nullable, trimLeadingSlashOnFileSchema} from "@bedalton/extension-util";

export const clients: Map<string, LanguageClient> = new Map();

export function putClient(uri: string, client: LanguageClient) {
    const oldClient = clients.get(uri)
    oldClient?.stop();
    clients.set(uri, client);
}

export function getClient(uri: string | Uri): Nullable<LanguageClient> {
    return clients.get(trimLeadingSlashOnFileSchema(typeof uri === "string" ? uri : uri.path));
}

export function deleteClient(uri: string) {
    clients.delete(uri);
}

export function getClients(): Iterable<LanguageClient> {
    return clients.values()
}

export function hasClient(uri: string): boolean {
    return clients.has(uri)
}

export function registerClientDisposable(client: LanguageClient) {
    // Register notification listener to allow server to show message in VS Code
    client.start().then(() => {
        pushDisposable(client.onNotification('caos/show-message', (params: string[]) => {
            let [type, message] = params;
            type = type.toLowerCase();
            if (type == 'error') {
                vscode.window.showErrorMessage(message)
                    .then();
            } else if (type == 'warn' || type === 'warning') {
                vscode.window.showWarningMessage(message)
                    .then();
            } else {
                vscode.window.showInformationMessage(message)
                    .then();
            }
        }));
    });
}