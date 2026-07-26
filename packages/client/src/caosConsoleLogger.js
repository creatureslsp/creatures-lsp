import { window } from "vscode";
import { pushDisposable } from "./disposables.js";
import { workspaceUriToString } from "./workspace-uri.js";
const loggers = {};
let defaultLogger = null;
const createLogger = () => {
    const channel = window.createOutputChannel("CAOS Injection Console", { log: true });
    pushDisposable(channel);
    channel.show(false);
    return {
        error: channel.error,
        info: channel.info,
        warn: channel.warn,
        result: (result) => {
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
    };
};
export const getCaosLogger = (uri) => {
    const uriString = workspaceUriToString(null, uri);
    if (!uriString) {
        if (!defaultLogger) {
            defaultLogger = createLogger();
        }
        return defaultLogger;
    }
    if (typeof loggers[uriString] !== "undefined") {
        return loggers[uriString];
    }
    const logger = createLogger();
    loggers[uriString] = logger;
    return logger;
};
