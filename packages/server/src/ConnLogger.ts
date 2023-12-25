import {com, ILoggerObject, Nullable, setLogger} from "@bedalton/caos-util";
import {connection} from "./connection.vscode";

if (typeof self != 'undefined') {
    self.console.log("Init ConnLogger");
}

const console = connection.console;
const ConnLogger: ILoggerObject = {
    prependLogType: undefined,
    error(message: string, _color: Nullable<com.bedalton.log.LoggerColor>): void {
        console.error(message)
    },
    getColorPrefix(_color: Nullable<com.bedalton.log.LoggerColor>): Nullable<string> {
        return null;
    },
    info(_replace: boolean, message: string, _color: Nullable<com.bedalton.log.LoggerColor>): void {
        console.info(message)
    },
    log(_replace: boolean, message: string, _color: Nullable<com.bedalton.log.LoggerColor>): void {
        console.log(message);
    },
    logMemory(): void {
    },
    warning(message: string, _color: Nullable<com.bedalton.log.LoggerColor>): void {
        console.warn(message);
    }
}

export function initLSPLogger() {
    setLogger(ConnLogger);
}

if (typeof self != 'undefined') {
    self.console.log("Did init ConnLogger");
}