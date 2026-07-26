import { caosScriptOffsets } from "@creatureslsp/caos/parser";
import net from "net";
import fs from "fs";
import { showMessage } from "../../../showMessage.js";
import { connection } from "../../../connection.vscode.js";
import { Log } from "../../../ConnLogger.js";
const _host = "127.0.0.1";
const getPort = () => {
    let aPort = 20001;
    try {
        const homedir = require("os")
            .homedir();
        const portFile = homedir + "/.creaturesengine/port";
        if (!fs.existsSync(portFile)) {
            return aPort;
        }
        const portFileData = fs.readFileSync(portFile, "utf-8");
        aPort = parseInt(portFileData, 10);
    }
    catch (_) {
    }
    return aPort;
};
const injectRaw = (caos, aPort, host) => {
    return new Promise((resolve, reject) => {
        const port = aPort ?? getPort();
        const client = net.createConnection({ host: host ?? _host, port }, () => {
            try {
                sendMessage(client, caos);
            }
            catch (e) {
                reject(e || new Error("TCP send message failed without error"));
            }
        });
        // FIX: Properly reject the promise on connection/stream errors
        client.on("error", (e) => {
            reject(e || new Error("TCP call failed without error"));
        });
        caos = caos.trim();
        if (caos.length > 4 && caos.substring(0, 4).toLowerCase() === "rscr") {
            caos = caos.substring(4);
        }
        const terminator = "\nrscr";
        const sendMessage = (client, message) => {
            message += terminator;
            try {
                // FIX: Removed 'reject' from the callback position.
                // client.write returns false if the buffer is full, which is normal for streams,
                // but if you want to strictly treat it as a failure, you can keep the if check.
                if (!client.write(message, "latin1")) {
                    reject(new Error("Failed to write message to CAOS TCP stream (Buffer full)"));
                    return;
                }
            }
            catch (e) {
                reject(e || new Error("Failed to write message to CAOS TCP stream"));
            }
        };
        client.once("data", (data) => {
            const dataString = data.toString();
            try {
                client.destroy();
            }
            catch (e) {
                reject(e || new Error("Failed to dispose of TCP connection after injection"));
                return;
            }
            if (dataString.toLowerCase().indexOf("invalid") >= 0 && dataString.indexOf("@") >= 0) {
                resolve({ status: "failed", response: dataString });
            }
            else {
                resolve({ status: "ok", response: dataString });
            }
        });
    });
};
const inject = async (name, script, type, range, index, host, port) => {
    const response = await injectRaw(script, port, host);
    return {
        name,
        type,
        index,
        range,
        status: response.status,
        response: response.response
    };
};
export const caosJectTcpC2e = async (serial, caos, bitmask, host, port) => {
    const scriptOffsets = caosScriptOffsets(caos);
    const totalScripts = scriptOffsets.length;
    const removalScripts = bitmask & 1 ? scriptOffsets.filter(c => c.startToken?.toLowerCase() === "rscr") : [];
    const eventScripts = bitmask & 2 ? scriptOffsets.filter(c => c.startToken?.toLowerCase() === "scrp") : [];
    const installScripts = bitmask & 4 ? scriptOffsets.filter(c => c.startToken?.toLowerCase() == null || c.startToken?.toLowerCase() == "iscr") : [];
    const results = [];
    let failed = false;
    const allNotifications = [];
    const onResult = (jectResult) => {
        results.push(jectResult);
        const indexInTotal = results.length;
        Log.i(`Result: ${jectResult.name}: ${JSON.stringify(jectResult, null, 2)}`);
        allNotifications.push(connection.sendNotification("caos/onInjection", {
            name: jectResult.name,
            index: indexInTotal,
            totalScripts,
            percent: Math.floor((indexInTotal * 100.0 / totalScripts)),
            done: indexInTotal == totalScripts,
            serial,
        }));
    };
    allNotifications.push(connection.sendNotification("caos/onInjection", {
        index: 0,
        totalScripts,
        percent: 0,
        done: false,
        serial,
    }));
    const injectScripts = async (type, scripts) => {
        for (let i = 0; i < scripts.length; i++) {
            const range = scripts[i];
            const { startIndex, endIndex } = range;
            let name = type[0].toUpperCase() + type.slice(1) + " Script";
            if (endIndex - startIndex <= 1) {
                onResult({
                    name: `${name} [${i}]`,
                    type,
                    range: range,
                    index: i,
                    status: "skipped",
                    response: "<<empty script>>"
                });
                continue;
            }
            let script = caos.substring(startIndex, endIndex);
            if (range.startToken?.toLowerCase() === "scrp" && script.substring(0, 4).toLowerCase() !== "scrp") {
                script = "scrp " + script;
            }
            if (type === "event") {
                const matches = /^scrp\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/gim.exec(script);
                if (!matches) {
                    name = `${name}[${i}]`;
                }
                else {
                    let [, f, g, s, e] = matches;
                    name = `${name}[${f} ${g} ${s} ${e}]`;
                }
            }
            try {
                const response = !failed
                    ? (await inject(name, script, type, range, i, host, port))
                    : {
                        name,
                        type,
                        index: i,
                        range,
                        status: "skipped",
                        response: "",
                    };
                if (!failed && response.status === "failed") {
                    failed = true;
                }
                onResult(response);
            }
            catch (e) {
                failed = true;
                let error = "Injection failed. ";
                if (typeof e === "string") {
                    error += e;
                    console.log(error);
                }
                else if (e instanceof Error && (e.name.toLowerCase().includes("net") || e.message.includes(host ?? _host))) {
                    if (results.length > 0) {
                        error += "Game may have frozen or be stuck in a waiting state.";
                    }
                    else {
                        error += "Failed to connect to game.";
                    }
                    Log.e(`InjectionFailed: ${e.name}: ${e.message}\n${e.stack}`);
                }
                else if (e instanceof Error) {
                    Log.e(`InjectionFailed: ${e.name}: ${e.message}\n${e.stack}`);
                    error += `${e.name}: ${e.message}`;
                }
                else if (results.length > 0) {
                    error += "Failed to connect to game.";
                }
                else if (e != null) {
                    error += " " + e;
                    console.log(error);
                }
                else {
                    console.trace("Injection failed without error message");
                    error = "Injection failed without error message";
                }
                showMessage("error", error.trim());
                onResult({
                    name,
                    type,
                    index: i,
                    range,
                    status: "conn_failed",
                    response: error,
                });
                break;
            }
        }
    };
    if (bitmask & 1) {
        await injectScripts("remove", removalScripts);
    }
    if (bitmask & 2) {
        await injectScripts("event", eventScripts);
    }
    if (bitmask & 4) {
        await injectScripts("install", installScripts);
    }
    await Promise.allSettled(allNotifications);
    await connection.sendNotification("caos/onInjection", {
        index: totalScripts,
        totalScripts,
        percent: 100,
        done: true,
        name: null,
        serial,
    });
    return results;
};
