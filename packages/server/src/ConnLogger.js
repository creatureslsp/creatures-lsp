import { setLogger } from "@creatureslsp/caos-kt/bedalton-common-log";
import { connection } from "./connection.vscode.js";
if (typeof self != 'undefined') {
    globalThis.console.log("Init ConnLogger");
}
const console = connection.console;
const ConnLogger = {
    prependLogType: undefined,
    error(message, _color) {
        console.error(message);
        globalThis.console.error(message);
    },
    getColorPrefix(_color) {
        return null;
    },
    info(_replace, message, _color) {
        console.info(message);
        globalThis.console.info(message);
    },
    log(_replace, message, _color) {
        console.log(message);
        globalThis.console.log(message);
    },
    logMemory() {
    },
    warning(message, _color) {
        console.warn(message);
        globalThis.console.warn(message);
    }
};
export const Log = {
    i(message) {
        ConnLogger.info(false, message, null);
    },
    w(message) {
        ConnLogger.info(false, message, null);
    },
    e(message) {
        ConnLogger.info(false, message, null);
    }
};
export function initLSPLogger() {
    setLogger(ConnLogger);
}
if (typeof self != 'undefined') {
    globalThis.console.log("Did init ConnLogger");
}
