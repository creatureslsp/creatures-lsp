import {getClient} from "./clients";
import {Uri} from "vscode";
import {LanguageClient} from "vscode-languageclient/node";
import {Nullable} from "@bedalton/extension-util";


let lastClient: Nullable<LanguageClient> = null

export const Log = {
    i(file: Uri| string, message: string, ... args: any[]) {
        let client = getClient(file) ?? lastClient;
        if (!client) {
            client = lastClient;
        } else {
            lastClient = client;
        }
        if (client) {
            client.info(message, args);
        } else {
            console.info(message, args);
        }
    },
    
    e(file: Uri| string, message: string, ... args: any[]) {
        let client = getClient(file) ?? lastClient;
        if (!client) {
            client = lastClient;
        } else {
            lastClient = client;
        }
        if (client) {
            client.error(message, args, false);
        } else {
            console.error(message, ...args);
        }
    },
    
    w(file: Uri| string, message: string, ... args: any[]) {
        let client = getClient(file) ?? lastClient;
        if (!client) {
            client = lastClient;
        } else {
            lastClient = client;
        }
        if (client) {
            client.warn(message, args);
        } else {
            console.warn(message, args);
        }
    },
}