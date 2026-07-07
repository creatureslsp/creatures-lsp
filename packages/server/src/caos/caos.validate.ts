/* eslint-disable eqeqeq */
import type {
    GameVariant,
} from "@creatures-lsp/caos-kt";
import type {
    CaosParserItem,
} from "@creatures-lsp/caos-kt/caos-core";
import {
    ERROR_TYPE_TYPE_ERROR,
    hasSubroutine,
    RequestCancelledException,
} from "@creatures-lsp/caos-util"
import {
    type CaosParseResult,
    parseCaos,
    parseCaosWithin,
} from "@creatures-lsp/caos-kt/caos-parser";
import {
    validateCaos
} from "@creatures-lsp/caos-kt/caos-validation";

import type {Diagnostic} from "vscode-languageserver/node.js";
import {type Nullable, offsetRange, sortTextRanges, toVsRange} from "@creatures-lsp/extension-util";
import {DiagnosticSeverity} from "vscode-languageserver-types";
import type {Range} from "vscode-languageserver";
import type {ErrorVal} from "@creatures-lsp/caos-kt/caos-core";
import {CaosDocument} from "./caos.document.js";
import {collectCaosInspectionErrors} from "./inspections/inspections.core.js";
import {getWorkspaceUriForFile} from "../workspace-folders.js";
import {sign} from "node:crypto";


declare type AbortSignalData = {
    version: number;
    controller: AbortController;
};

const typeHintText = /Unexpected value '([a-zA-Z\d_$]+:[a-zA-Z\d_$]+)'/;
const validationSignals: Map<string, AbortSignalData[]> = new Map();

const continueWhileCallback = (
    documentURI: string,
    version: number
): [() => boolean, AbortSignalData] => {
    const controller = new AbortController();
    let keepGoing = true;
    controller.signal.addEventListener("abort", () => {
        keepGoing = false;
    });
    const data: AbortSignalData = {
        version,
        controller,
    } satisfies AbortSignalData;
    const existing = validationSignals.get(documentURI);
    if (existing != null) {
        existing.push(data);
    } else {
        validationSignals.set(documentURI, [
            data
        ]);
    }
    const signal = controller.signal;
    return [() => {
        signal.throwIfAborted()
        return keepGoing;
    }, data];
};

/**
 * Check for errors in the document
 * @param document
 * @param documentVersion validation request index, should be unique and increment upwards
 * @param range
 */
export function getCaosDocumentValidationErrors(
    document: CaosDocument,
    documentVersion: number,
    range?: Nullable<Range>
): Diagnostic[] {
    const {settings, text} = document;
    const errors = validateWithConstraints(
        document.documentUri,
        documentVersion,
        settings.variant,
        text,
        settings.strictSpaces ?? false,
        settings.maxNumberOfProblems,
        range
    );
    
    const workspaceUri = getWorkspaceUriForFile(document.documentUri);
    
    const inspectionErrors = collectCaosInspectionErrors(
        workspaceUri,
        document.documentUri,
        documentVersion,
        settings.variant,
        text,
        range
    );
    
    return errors.concat(inspectionErrors);
}

/**
 * Validates a CAOS script
 * @param documentURI
 * @param index validation request index, should be unique and increment upwards
 * @param variant
 * @param code
 * @param strictSpaces
 * @param maxNumberOfProblems
 * @param range
 */
function validateWithConstraints(
    documentURI: string,
    index: number,
    variant: GameVariant,
    code: string,
    strictSpaces?: boolean,
    maxNumberOfProblems: number = Number.MAX_VALUE,
    range?: Nullable<Range>
): Diagnostic[] {
    let errors: Diagnostic[] = [];
    try {
        errors = validateParserResult(documentURI, index, variant, code, strictSpaces ?? variant === "C1", range);
    } catch (e) {
        if ((e as Partial<Error>).name === 'AbortError') {
            return [];
        }
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to validate parser result; " + error);
    }
    if (errors.length <= maxNumberOfProblems) {
        return errors;
    }
    return errors.slice(0, maxNumberOfProblems);
}

function abortOldRequests(documentURI: string, newVersion: number) {
    const signals = validationSignals.get(documentURI);
    if (signals == null) {
        return;
    }
    for (let i = 0; i < signals.length; i++) {
        const {controller, version: oldVersion} = signals[i];
        if (oldVersion >= newVersion) {
            continue;
        }
        controller.abort();
        signals.splice(i, 1);
    }
    validationSignals.set(documentURI, signals);
}

function validateParserResult(
    documentURI: string,
    index: number,
    variant: GameVariant,
    text: string,
    strictSpaces: boolean,
    range?: Nullable<Range>,
): Diagnostic[] {
    
    if (text == null) {
        return [];
    }
    
    if (text.length < 1) {
        return [];
    }
    let parseResult: CaosParseResult;
    let signal: AbortSignal;
    if (range != null) {
        // Calls are aborted on full document checks, but not on partial checks
        //  so do not call abortOldRequests
        const [, controllerAndIndex] = continueWhileCallback(documentURI, index);
        signal = controllerAndIndex.controller.signal;
        signal.throwIfAborted()
        parseResult = parseCaosWithin(
            variant,
            text,
            range.start.line,
            range.start.character,
            range.end.line,
            range.end.character,
        );
    } else {
        abortOldRequests(documentURI, Number.MAX_SAFE_INTEGER);
        const [continueCallback, controllerAndIndex] = continueWhileCallback(documentURI, index);
        signal = controllerAndIndex.controller.signal;
        signal.throwIfAborted()
        parseResult = parseCaos(variant, text, continueCallback);
    }
    
    signal.throwIfAborted()
    const errors: ErrorVal[] = parseResult
        .controlStatementErrors
        .concat(
            ...validateCaos(parseResult.variant, parseResult, () => { signal.throwIfAborted() })
        );
    
    let errorMarkers: Diagnostic[] = errors
        .filter(e => {
            const message = e.message.toString();
            return !typeHintText.test(message);
        })
        .map(error => {
            signal.throwIfAborted()
            const textRange = toVsRange(error.textRange, true);
            const out: Diagnostic = {
                range: textRange,
                message: error.message,
                code: error.errorCode,
                severity: error.errorCode == ERROR_TYPE_TYPE_ERROR ? DiagnosticSeverity.Warning : DiagnosticSeverity.Error
            };
            return out;
        });
    
    const gsubs = parseResult.commandCalls.filter((c) => {
        return c.commandString === "GSUB" || c.commandString === "GOTO";
    });
    
    for (let gsub of gsubs) {
        signal.throwIfAborted()
        if (gsub.arguments.length == 1) {
            const arg = gsub.arguments[0];
            const textRange = arg.textRange;
            if (!hasSubroutine(parseResult, arg.text.trim(), textRange.start.line, textRange.start.character)) {
                errorMarkers.push({
                    range: offsetRange(arg.textRange, 0, 1),
                    message: "Subroutine '" + arg.text.trim() + "' was not found in containing script",
                    severity: DiagnosticSeverity.Error
                });
            }
        }
    }
    if (strictSpaces) {
        signal.throwIfAborted()
        let last: Nullable<CaosParserItem> = null;
        for (const item of parseResult.items.sort((a, b) => sortTextRanges(a.textRange, b.textRange))) {
            if (last != null) {
                const error = getSpacingError(last, item);
                if (error != null) {
                    errorMarkers.push(error);
                }
            }
            last = item;
        }
    }
    signal.throwIfAborted()
    return errorMarkers;
}


function getSpacingError(last: CaosParserItem, item: CaosParserItem): Nullable<Diagnostic> {
    if (last.textRange.end.line !== item.textRange.start.line) {
        return null;
    }
    const distance = item.textRange.start.character - last.textRange.end.character;
    if (distance == 1) {
        return null;
    }
    const line = item.textRange.start.line;
    if (distance == 0) {
        return <Diagnostic>{
            range: <Range>{
                start: {
                    line: line,
                    character: last.textRange.end.character - 1
                },
                end: {
                    line: line,
                    character: item.textRange.start.character
                }
            },
            message: "Missing space",
            severity: DiagnosticSeverity.Error
        };
    }
    return {
        range: <Range>{
            start: {
                line: line,
                character: last.textRange.end.character
            },
            end: {
                line: line,
                character: item.textRange.start.character
            }
        },
        message: "Too many spaces...",
        severity: DiagnosticSeverity.Error
    };
}

