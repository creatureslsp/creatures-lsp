import {getClient, getFallbackClient} from "./clients.js";
import {Uri} from "vscode";

export const Log = {
    i(file: Uri| string, message: string, ... args: any[]) {
        let client = getClient(file) ?? getFallbackClient();
        if (client != null) {
            client.info(message, args, false);
        } else {
            console.info(message, ...args);
        }
    },
    
    e(file: Uri| string, message: string, ... args: any[]) {
        let client = getClient(file) ?? getFallbackClient();
        if (client != null) {
            client.error(message, args, false);
        } else {
            console.error(message, ...args);
        }
    },
    
    w(file: Uri| string, message: string, ... args: any[]) {
        let client = getClient(file) ?? getFallbackClient();
        if (client != null) {
            client.warn(message, args, false);
        } else {
            console.warn(message, ...args);
        }
    },
}