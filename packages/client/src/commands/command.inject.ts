import vscode, {TextEditor, TextEditorEdit, window} from "vscode";
import {getVariant} from "../settings.js";
import {Log} from "../log.js";
import type {JectResult} from "@creatures-lsp/caos-util";
import {getCaosLogger} from "../caosConsoleLogger.js";
import {pushDisposable} from "../disposables.js";
import type {Nullable} from "@creatures-lsp/extension-util";
import {generateUuid} from "vscode-languageclient/lib/common/utils/uuid.js";
import { EventEmitter } from "events";

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
    pushDisposable(vscode.commands.registerTextEditorCommand('caos.injectCAOS', injectCaos));
}

const lastJects: Record<string, number> = {};

export const injectCaos =  async (textEditor: TextEditor, edit: TextEditorEdit, ...args: unknown[]) => {

    let last = typeof lastJects[textEditor.document.uri.fsPath] !== "undefined" ? lastJects[textEditor.document.uri.fsPath] ?? 7 : 7;
    const quickPick = vscode.window.createQuickPick();
    quickPick.items = [
        { label: 'Remove Script', description: 'Runs all removes scripts', picked: (last & 1) === 1, },
        { label: 'Event Scripts', description: 'Injects all Event Scripts',  picked: (last & 2) === 2, },
        { label: "Install Scripts", description: 'Injects install scripts and loose macros', picked: (last & 4) === 4, },
    ];
    quickPick.canSelectMany = true;
    
    quickPick.onDidAccept(async () => {
        const selectedItems = quickPick.selectedItems;
        if (!selectedItems.length) {
            await window.showInformationMessage("No script types selected. Injection skipped");
            return;
        }
        const variant = getVariant();
        const documentURI = textEditor.document.uri;
        let caos: string = textEditor.document.getText();
        
        let bitmask = 0;
        if (selectedItems.some(i => i.label.toLowerCase().startsWith("remove"))) {
            bitmask |= 1;
        }
        
        if (selectedItems.some(i => i.label.toLowerCase().startsWith("event"))) {
            bitmask |= 2;
        }
        
        if (selectedItems.some(i => i.label.toLowerCase().startsWith("install"))) {
            bitmask |= 4;
        }
        lastJects[textEditor.document.uri.fsPath] = bitmask;
        quickPick.dispose();
        
        const params = {
            variant,
            caos,
            bitmask,
            serial: generateUuid()
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
            window.showErrorMessage(`Failed to inject all scripts successfully. ${result.results.map (r => "\n\t" + r.response.split(/\r?\n/).join("\n\t")).join("\t> ")}`)
        }
        const logger = getCaosLogger(documentURI);
        result.results.forEach(logger.result)
    });
    
    quickPick.show();
    
    
}



export const caosUpdateCanInject = async (canInject: boolean) => {
    await vscode.commands.executeCommand('setContext', 'caos.canInjectCAOS', canInject);
}

const progressBars: Record<string, EventEmitter> = {};

const update = (props: CaosOnInjectNotificationProps) => {
    
    console.log(JSON.stringify(props, null, 2));
    if (typeof progressBars[props.serial] !== "undefined") {
        typeof progressBars[props.serial].emit("update", props);
        return;
    }
    const task = new EventEmitter();
    progressBars[props.serial] = task;
    let last = 0;
    let progressBar: Nullable<Thenable<void>> = vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification, // Spawns pop-up loader
        title: `Injecting `,
        cancellable: false
    }, (progress, token) => {
        return new Promise<void>( (resolve) => {
            task.on("update", (data: CaosOnInjectNotificationProps) => {
                if (props.name == null && props.percent === 0) {
                    last = 0;
                    progress.report({
                        increment: 0,
                        message: `Injecting ${props.totalScripts} scripts`
                    });
                    return;
                }
                if (props.done) {
                    last = 100;
                    progress.report({
                        increment: 101 - last,
                        message: `CAOS injection finished`
                    });
                    resolve();
                    delete progressBars[props.serial];
                    progressBar = undefined;
                    return;
                }
                progress.report({
                    increment: Math.max(props.percent - last, 0),
                    message: `${props.percent}% Complete. ${props.name ? `Injected: ${props.name}`: ''}`.trim()
                })
                last = Math.max(props.percent, last);
            });
            task.emit("update", props);
        })
    });
}

export const caosOnInjectUpdate = (props: CaosOnInjectNotificationProps) => {
    update(props);
}