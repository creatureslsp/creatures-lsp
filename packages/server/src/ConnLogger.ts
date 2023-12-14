import {com, ILoggerObject, Nullable, setLogger} from "@bedalton/caos-util";
import {connection} from "./connection.vscode";


const console = connection.console;
const ConnLogger: ILoggerObject = {
    prependLogType: undefined,
    error(message: string, color: Nullable<com.bedalton.log.LoggerColor>): void {
        console.error(message)
    },
    getColorPrefix(color: Nullable<com.bedalton.log.LoggerColor>): Nullable<string> {
        return null;
    },
    info(replace: boolean, message: string, color: Nullable<com.bedalton.log.LoggerColor>): void {
        console.info(message)
    },
    log(replace: boolean, message: string, color: Nullable<com.bedalton.log.LoggerColor>): void {
        console.log(message);
    },
    logMemory(): void {
    },
    warning(message: string, color: Nullable<com.bedalton.log.LoggerColor>): void {
        console.warn(message);
    }
}

export function initLSPLogger() {
    setLogger(ConnLogger);
}