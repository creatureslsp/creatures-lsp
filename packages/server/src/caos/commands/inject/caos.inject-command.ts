import {connection} from "../../../connection.vscode.js";
import {readTextFile} from "../../../files.js";
import {Log} from "../../../ConnLogger.js";
import type {JectResult, JectStatus, ScriptJectResult} from "@creatureslsp/caos";
import {type GameVariant, isC3DSVariant} from "@creatureslsp/caos";
import type {Nullable} from "@creatureslsp/caos";
import {isLinux, isMacOS, isUnix, isWin} from "../../../os.js";
import {caosJectTcpC2e} from "./caos.inject-c2e.js";
import {ExecuteCommandParams} from "vscode-languageserver-protocol";
import {extname} from "@creatureslsp/extension-util";

export function isCaosInjectSupportedForVariant(variant: GameVariant): boolean {
    if (isC3DSVariant(variant)) {
        return isUnix;
    }
    return false;
}

declare type JectArgs = Record<string, unknown> & {
    serial: string;
    variant: GameVariant;
    caos: string;
    bitmask: number;
};

async function injectWindows(
    _args: JectArgs,
): Promise<Nullable<ScriptJectResult[]>> {
    connection.window.showErrorMessage("Cannot inject on Windows");
    return null;
}

async function injectC2eUnix(
    args: JectArgs,
): Promise<Nullable<ScriptJectResult[]>> {
    return await caosJectTcpC2e(
        args.serial,
        args.caos,
        args.bitmask,
        (args.host ?? null) as Nullable<string>,
        (args.port ?? null) as Nullable<number>,
    );
}

async function injectLinux(
    args: JectArgs,
): Promise<Nullable<ScriptJectResult[]>> {
    if (isC3DSVariant(args.variant)) {
        return await injectC2eUnix(args);
    }
    connection.window.showErrorMessage("Cannot inject non C3DS variants on Unix");
    return null;
}

async function injectMac(
    args: JectArgs,
): Promise<Nullable<ScriptJectResult[]>> {
    if (isC3DSVariant(args.variant)) {
        return await injectC2eUnix(args);
    }
    connection.window.showErrorMessage("Cannot inject non C3DS variants on Unix");
    return null;
}

function getArgs(params: ExecuteCommandParams): Nullable<Record<string, unknown>> {
    const argsArray = params.arguments;
    
    if (!argsArray || argsArray.length !== 1) {
        console.log("caos/injectCAOS: ", JSON.stringify(argsArray));
        return null;
    }
    const args = argsArray.shift();
    if (typeof args === "object") {
        return args;
    }
    if (typeof argsArray[0] !== "string" || !args || args[0] !== "{") {
        return null;
    }
    try {
        return JSON.parse(argsArray[0]);
    } catch (e) {
        Log.i(`Failed to parse CAOS inject args JSON parameter. ${e};` + (e instanceof Error ? "\n" + e.stack : ""));
        return null;
    }
}

export async function caosInjectCommand(params: ExecuteCommandParams): Promise<JectResult | false> {
    
    const args = getArgs(params);
    if (!args) {
        connection.window.showErrorMessage("CAOS inject args invalid. Expected JSON string");
        return false;
    }
    
    const filename = args.filename as string;
    if (!filename || extname(filename) !== ".cos") {
        connection.window.showErrorMessage("Cannot inject non-CAOS file");
        return false;
    }
    
    const variant = args.variant as GameVariant;
    if (!variant) {
        connection.window.showErrorMessage("Cannot inject CAOS without game variant");
        return false;
    }
    
    if (!isCaosInjectSupportedForVariant(variant)) {
        connection.window.showErrorMessage("Caos injection not supported for this variant and/or this OS");
        return false;
    }
    
    const serial = args.serial as string;
    if (!serial) {
        connection.window.showErrorMessage("Cannot inject CAOS without injection serial id");
        return false;
    }
    const file = args.file as Nullable<string>;
    let caos: Nullable<string> = args.caos as Nullable<string>;
    if (!caos && file) {
        try {
            caos = await readTextFile(file);
        } catch (e) {
            Log.i(`Failed to read CAOS file at ${file}; ${e}`);
            connection.window.showErrorMessage(`Failed to read CAOS file at ${file}`);
            return false;
        }
    } else if (caos == null) {
        connection.window.showErrorMessage(`CAOS script not received for inject`);
        return false;
    }
    
    if (caos == null) {
        connection.window.showInformationMessage(`CAOS script is empty and was not injected`);
        return false;
    }
    
    let bitmask = parseInt((args.bitmask as Nullable<string>) ?? "7", 10);
    
    const jectArgs: JectArgs = {
        ...args,
        variant,
        bitmask,
        caos,
        serial,
    };
    
    let responses: Nullable<ScriptJectResult[]>;
    if (isWin) {
        responses = await injectWindows(jectArgs);
    } else if (isMacOS) {
        responses = await injectMac(jectArgs);
    } else if (isLinux) {
        responses = await injectLinux(jectArgs);
    } else {
        connection.window.showErrorMessage(`Operating system not supported for CAOS injection`);
        responses = null;
    }
    
    if (responses == null) {
        return false;
    }
    
    if (responses.length == 0) {
        return false;
    }
    
    const messages = responses
        .filter(r => r.status === "ok")
        .map(r => r.response?.trim())
        .filter(r => r.length !== 0);
    
    const errors = responses
        .filter(r => r.status === "failed")
        .map(r => r.response?.trim())
        .filter(r => r.length !== 0);
    
    const skipped = responses
        .filter(r => r.status === "skipped")
        .length;
    
    let status: JectStatus = "ok";
    
    if (responses.some(c => c.status === "failed")) {
        status = "failed";
    } else if (responses.length > 0 && responses.every(c => c.status === "skipped")) {
        status = "skipped";
    }
    
    return {
        status: status,
        skipped,
        errors,
        messages,
        results: responses,
    } satisfies JectResult;
}