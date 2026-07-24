import type {Nullable} from "./types.js";

let _lspRunner: Nullable<string>= null;
let _isVsCode: boolean = false;
let _isSublime: boolean = false;

export function setLspRunner(runner: Nullable<string>){
    console.log("Runner: " + runner);
    _lspRunner = runner ?? ""
    _isVsCode = _lspRunner.indexOf("vscode") === 0;
    _isSublime = _lspRunner.toLowerCase() === "sublime";
}

export function isVsCode(): boolean {
    return _isVsCode;
}

export function isSublime(): boolean {
    return _isSublime;
}

export function getRangeStartOffset(): number {
    return _isSublime ? 1 : 0;
}
