import vscode, {type QuickPickItem, TextEditor, TextEditorEdit, window} from "vscode";
import {getVariant} from "../settings.js";
import {Log} from "../log.js";
import {type JectResult, ScriptJectResult} from "@creatures-lsp/caos";
import {getCaosLogger} from "../caosConsoleLogger.js";
import {pushDisposable} from "../disposables.js";
import {type Nullable, toVsRange, inRange} from "@creatures-lsp/extension-util";
import {generateUuid} from "vscode-languageclient/lib/common/utils/uuid.js";
import { EventEmitter } from "events";
import type {Range} from "vscode-languageserver";
import type {BlockRange} from "@creatures-lsp/caos/core";
import {caosScriptOffsets} from "@creatures-lsp/caos/parser";
import {toVsCodeRange} from "../helpers.js";
import {validateCaos} from "@creatures-lsp/caos/validation";

declare type CaosOnInjectNotificationProps = {
    serial: string;
    name?: Nullable<string>;
    index: number;
    totalScripts: number;
    percent: number;
    done: boolean;
    precent: number;
}

export function registerInjectCaosCommand() {
    pushDisposable(vscode.commands.registerTextEditorCommand('caos.injectCaos', _injectCaosAll));
    pushDisposable(vscode.commands.registerTextEditorCommand('caos.injectCaosSnippet', _injectCaosSnippet));
    pushDisposable(vscode.commands.registerTextEditorCommand('caos.injectCaosEventScript', _injectCaosEventScript));
}

const lastJects: Record<string, number> = {};

let injectDangerouslyForThisSession = false;

const _injectCaosAll =  async (textEditor: TextEditor, edit: TextEditorEdit, ...args: unknown[]) => {
    await _injectCaos(textEditor, undefined);
}

const _injectCaosSnippet =  async (textEditor: TextEditor, edit: TextEditorEdit, ...args: unknown[]) => {
    await _injectCaos(textEditor, textEditor.selection);
}

const _injectCaosEventScript = async (textEditor: TextEditor, edit: TextEditorEdit, ...args: unknown[]) => {
    const scripts: BlockRange[] = caosScriptOffsets(textEditor.document.getText());
    const {line, character} = textEditor.selection.active;
    const range: Range|undefined = scripts
        .find(r => r.startToken == "scrp" && inRange(toVsRange(r), line, character, true));
    if (range == null) {
        vscode.window.showInformationMessage("No containing event script found.");
        return;
    }
    
    await _injectCaos(textEditor, toVsCodeRange(range));
}



const _injectCaos = async (textEditor: TextEditor, range: vscode.Range|undefined) => {
    if (textEditor.document.languageId !== "caos") {
        vscode.window.showErrorMessage("Cannot inject non-CAOS file");
        return;
    }
    
    const variant = getVariant();
    const documentURI = textEditor.document.uri;
    let caos: string = textEditor.document.getText(range);
    
    if (!caos.trim()) {
        window.showInformationMessage("CAOS content was empty")
        return;
    }
    
    if (!injectDangerouslyForThisSession) {
        const errors = validateCaos(variant, caos);
        
        if (errors.length > 0) {
            // 2. Trigger the modal dialog block
            const selection = await vscode.window.showInformationMessage(
                "There are errors in your CAOS script. Would you like to ignore errors and continue?",
                {modal: true},
                "Ignore once",
                "Ignore for this session"
            );
            if (selection === "Ignore for this session") {
                injectDangerouslyForThisSession = true;
            } else if (selection !== "Ignore once") {
                return;
            }
        }
    }
    
    let bitmask = 7;
    if (range == null) {
        
        const lastJectKey = textEditor.document.uri.fsPath;
        let last = typeof lastJects[lastJectKey] !== "undefined" ? lastJects[lastJectKey] ?? 7 : 7;
        
        const items = [
            {label: 'Remove Script', description: 'Runs all removes scripts', picked: (last & 1) === 1,},
            {label: 'Event Scripts', description: 'Injects all Event Scripts', picked: (last & 2) === 2,},
            {
                label: "Install Scripts",
                description: 'Injects install scripts and loose macros',
                picked: (last & 4) === 4,
            },
        ];
        
        const selectedItems: Nullable<QuickPickItem[]> = await vscode.window.showQuickPick(items, {
            canPickMany: true,
            title: "Choose Script Types to Inject",
            matchOnDetail: true,
            matchOnDescription: true,
        });
        
        if (!selectedItems || !selectedItems.length) {
            await window.showInformationMessage("No script types selected. Injection skipped");
            return;
        }
        
        bitmask = 0;
        
        if (selectedItems.some(i => i.label.toLowerCase()
            .startsWith("remove"))) {
            bitmask |= 1;
        }
        
        if (selectedItems.some(i => i.label.toLowerCase()
            .startsWith("event"))) {
            bitmask |= 2;
        }
        
        if (selectedItems.some(i => i.label.toLowerCase()
            .startsWith("install"))) {
            bitmask |= 4;
        }
        
        lastJects[lastJectKey] = bitmask;
    }
    Log.i(textEditor.document.uri.fsPath, "Bitmask: " + bitmask);
    
    const params = {
        variant,
        caos,
        bitmask,
        serial: generateUuid(),
        filename: textEditor.document.uri.fsPath,
    }
    
    // Target the specific server command register ID
    const commandId = 'caos/injectCAOS';
    
    // VS Code forwards 'workspace/executeCommand' directly to the server
    const resultOrBoolean: JectResult|boolean = await vscode.commands.executeCommand(commandId, params);
    if (!resultOrBoolean) {
        Log.i(documentURI, "Injection not attempted");
        return;
    }
    const result = resultOrBoolean as JectResult;
    Log.i(documentURI, `InjectionResult: ${result.status}; ` + JSON.stringify(result, null, 2));
    if (result.status === "failed") {
        window.showErrorMessage(`Failed to inject all scripts successfully. ${result.results.map ((r: ScriptJectResult) => "\n\t" + r.response.split(/\r?\n/).join("\n\t")).join("\t> ")}`)
    }
    const logger = getCaosLogger(documentURI);
    let connFailed = false;
    for (const res of result.results) {
        logger.result(res);
        if (res.status === "conn_failed") {
            connFailed = true;
            break;
        }
    }
    
    if (connFailed && result.skipped) {
        logger.error(`Skipped ${result.skipped} script${result.skipped == 1 ? "": "s"} due to connection error`);
    }
}

export const caosUpdateCanInject = async (canInject: boolean) => {
    await vscode.commands.executeCommand('setContext', 'caos.canInjectCAOS', canInject);
}

const progressBars: Record<string, EventEmitter> = {};

const update = (initialData: CaosOnInjectNotificationProps) => {
    
    console.log(JSON.stringify(initialData, null, 2));
    if (typeof progressBars[initialData.serial] !== "undefined") {
        typeof progressBars[initialData.serial].emit("update", initialData);
        return;
    }
    const task = new EventEmitter();
    progressBars[initialData.serial] = task;
    let last = 0;
    let progressBar: Nullable<Thenable<void>> = null;
    progressBar = vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification, // Spawns pop-up loader
        title: `Injecting `,
        cancellable: false,
    }, (progress) => {
        return new Promise<void>( (resolve) => {
            task.on("update", (data: CaosOnInjectNotificationProps) => {
                if (data.name == null && data.percent != null && data.percent === 0) {
                    last = 0;
                    progress.report({
                        increment: 0,
                        message: `Injecting ${data.totalScripts} scripts`
                    });
                    return;
                }
                if (data.done) {
                    last = 100;
                    progress.report({
                        increment: 101 - last,
                        message: `CAOS injection finished`
                    });
                    delete progressBars[data.serial];
                    progressBar = undefined;
                    resolve();
                    return;
                }
                progress.report({
                    increment: Math.max(data.percent - last, 0),
                    message: `${data.percent}% Complete. ${data.name ? `Injected: ${data.name}`: ''}`.trim()
                })
                last = Math.max(data.percent, last);
            });
            task.emit("update", initialData);
        });
    });
}

export const caosOnInjectUpdate = (props: CaosOnInjectNotificationProps) => {
    update(props);
}