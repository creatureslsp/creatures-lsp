import {LogOutputChannel, Uri, window} from "vscode";
import type {ScriptJectResult} from "@creatures-lsp/caos";
import {pushDisposable} from "./disposables.js";
import {workspaceUriToString} from "./workspace-uri.js";
import type {Nullable} from "@creatures-lsp/extension-util";

export declare type CaosConsoleLogger = {
    error: (message: string, ...args: any) => void;
    info: (message: string, ...args: any) => void;
    warn: (message: string, ...args: any) => void;
    result: (result: ScriptJectResult) => void;
}

const loggers: Record<string, CaosConsoleLogger> = {};
let defaultLogger: Nullable<CaosConsoleLogger> = null;


const createLogger = (): CaosConsoleLogger => {
    const channel = window.createOutputChannel("CAOS Injection Console", {log: true}) as LogOutputChannel;
    pushDisposable(channel);
    channel.show(false);
    return {
        error: channel.error,
        info: channel.info,
        warn: channel.warn,
        result: (result: ScriptJectResult) => {
            const responseRaw = !result.response ? ("<<" + result.status.toUpperCase() + ">>") : result.response;
            const response = `${result.name}: ${/\n/.test(responseRaw) ? "\n" + responseRaw : responseRaw}`;
            switch (result.status) {
                case "failed":
                    channel.error(response);
                    break;
                case "ok":
                    channel.info(response);
                    break;
                case "skipped":
                    channel.warn(response);
                    break;
                case "conn_failed":
                    channel.error(response);
                    break;
                default:
                    channel.info(`(${result.status}) ${response}`);
                    break;
            }
        }
    }
}

export const getCaosLogger = (uri: Uri|string): CaosConsoleLogger  => {
    const uriString = workspaceUriToString(null, uri);
    if (!uriString) {
        if (!defaultLogger) {
            defaultLogger =  createLogger();
        }
        return defaultLogger;
    }
    if (typeof loggers[uriString] !== "undefined") {
        return loggers[uriString];
    }
    const logger = createLogger();
    loggers[uriString] = logger;
    return logger;
}