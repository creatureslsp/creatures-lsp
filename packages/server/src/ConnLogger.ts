import {log, ILoggerObject, setLogger} from "@bedalton/caos-util";
import {connection} from "./connection.vscode";
import {Nullable} from "@bedalton/extension-util";
import LoggerColor = log.LoggerColor;

if (typeof self != 'undefined') {
    self.console.log("Init ConnLogger");
}

const console = connection.console;
const ConnLogger: ILoggerObject = {
    prependLogType: undefined,
    error(message: string, _color: Nullable<typeof LoggerColor>): void {
        console.error(message)
    },
    getColorPrefix(_color: Nullable<typeof LoggerColor>): Nullable<string> {
        return undefined;
    },
    info(_replace: boolean, message: string, _color: Nullable<typeof LoggerColor>): void {
        console.info(message)
    },
    log(_replace: boolean, message: string, _color: Nullable<typeof LoggerColor>): void {
        console.log(message);
    },
    logMemory(): void {
    },
    warning(message: string, _color: Nullable<log.LoggerColor>): void {
        console.warn(message);
    }
}

export function initLSPLogger() {
    setLogger(ConnLogger);
}

if (typeof self != 'undefined') {
    self.console.log("Did init ConnLogger");
}