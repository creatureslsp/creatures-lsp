import type {CommandInspection, Nullable} from "../../types.js";
import {tok} from "@creatures-lsp/caos";
import type {GameVariant} from "@creatures-lsp/caos";
import type {CommandToken} from "@creatures-lsp/caos/core";
import type {CommandCall} from "@creatures-lsp/caos/parser";
import type {Diagnostic} from "vscode-languageserver/node.js";
import {InspectionData} from "./InspectionData.js";
import {toVsRange} from "@creatures-lsp/extension-util";
import {initializeCaosInspections} from "./inspections.register.js";
import {Log} from "../../ConnLogger.js";
import type {Range} from "vscode-languageserver";
import {VersionedDocumentData} from "@creatures-lsp/extension-util/VersionedDocumentData";
import {CAOS_LANGUAGE_ID} from "../settings.js";

let oldDiagnostics: VersionedDocumentData<Diagnostic[]> = new VersionedDocumentData();

declare type validateTokens = (tokens: number[]) => boolean
const singleTokenInspections: {[token: number]: CommandInspection[]} = {};
const multiTokenInspections: {[token: number]: [validateTokens, CommandInspection][]} = {};

export const registerInspection = (tokens: number[], inspection: CommandInspection) => {
    if (tokens.length === 1) {
        if (typeof singleTokenInspections[tokens[0]] === 'undefined') {
            singleTokenInspections[tokens[0]] = [];
        }
        singleTokenInspections[tokens[0]].push(inspection);
    } else {
        if (typeof multiTokenInspections[tokens[0]] === 'undefined') {
            multiTokenInspections[tokens[0]] = [];
        }
        const path = makeTokenFilter(tokens);
        multiTokenInspections[tokens[0]].push([path, inspection]);
    }
}

export const collectCaosInspectionErrors = (
    workspaceUri: string,
    documentURI: string,
    version: Nullable<number>,
    variant: GameVariant,
    text: string,
    range?: Nullable<Range>
): Diagnostic[] => {
    
    initializeCaosInspections();
    
    // If existing data is non-null,
    //  it means this request is old
    const existingData = oldDiagnostics
        .getIfNewVersionIsStale(CAOS_LANGUAGE_ID, documentURI, version);
    if (existingData != null) {
        return existingData;
    }
    
    let errors: Diagnostic[] = [];
    const context = new InspectionData(workspaceUri, documentURI, variant, text, range);
    for (const commandCall of context.commandCalls) {
        _runInspections(context, commandCall, errors);
    }
    
    const out = errors.map(e => {
        return {
            ...e,
            range: toVsRange(e.range, true, 1),
        } satisfies Diagnostic
    });
    oldDiagnostics.setIfNew(CAOS_LANGUAGE_ID, documentURI, version, out);
    return out;
};

const makeTokenFilter = (_tokens: number[]): validateTokens => {
    const tokenCount = _tokens.length;
    return (tokens: number[]): boolean => {
        if (tokens.length !== tokenCount) {
            return false;
        }
        
        for (let i=0; i<tokenCount; i++) {
            if (tokens[i] != _tokens[i]) {
                return false;
            }
        }
        return true;
    }
}



const _runInspections: CommandInspection  = (context: InspectionData, commandCall: CommandCall, errors: Diagnostic[]): boolean => {
    const tokens = (commandCall.tokens as CommandToken[]).map(token => token.token);
    if (tokens.length === 1) {
        const inspections = singleTokenInspections[tokens[0]];
        if (inspections) {
            Log.i("Running " + inspections.length + " inspections for token " + tok(tokens[0]));
            for (const inspection of inspections) {
                if (inspection(context, commandCall, errors) === false) {
                    return false
                }
            }
        }
    } else {
        const inspections = multiTokenInspections[tokens[0]];
        const commandString = tokens.map(i => tok(i)).join(" ");
        if (inspections) {
            Log.i("Running " + inspections.length + " inspections for token " + commandString);
            for (const [check, inspection] of inspections) {
                if (check(tokens)) {
                    if (inspection(context, commandCall, errors) === false) {
                        return false
                    }
                }
            }
        }
    }
    return true;
}