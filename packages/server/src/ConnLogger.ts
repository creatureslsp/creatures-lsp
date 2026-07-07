import {type ILoggerObject, setLogger, LoggerColor} from "@creatures-lsp/caos-kt/bedalton-common-log";
import {connection} from "./connection.vscode.js";
import type {Nullable} from "@creatures-lsp/extension-util";


if (typeof self != 'undefined') {
    globalThis.console.log("Init ConnLogger");
}

const console = connection.console;
const ConnLogger: ILoggerObject = {
    prependLogType: undefined,
    error(message: string, _color: Nullable<typeof LoggerColor>): void {
        console.error(message);
        globalThis.console.error(message);
    },
    getColorPrefix(_color: Nullable<typeof LoggerColor>): Nullable<string> {
        return null;
    },
    info(_replace: boolean, message: string, _color: Nullable<typeof LoggerColor>): void {
        console.info(message)
        globalThis.console.info(message);
    },
    log(_replace: boolean, message: string, _color: Nullable<typeof LoggerColor>): void {
        console.log(message);
        globalThis.console.log(message);
    },
    logMemory(): void {
    },
    warning(message: string, _color: Nullable<LoggerColor>): void {
        console.warn(message);
        globalThis.console.warn(message);
    }
}

export const Log = {
    i(message: string): void {
        ConnLogger.info(false, message, null);
    },
    w(message: string): void {
        ConnLogger.info(false, message, null);
    },
    e(message: string): void {
        ConnLogger.info(false, message, null);
    }
}

export function initLSPLogger() {
    setLogger(ConnLogger);
}

if (typeof self != 'undefined') {
    globalThis.console.log("Did init ConnLogger");
}