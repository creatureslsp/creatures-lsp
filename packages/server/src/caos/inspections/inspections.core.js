import { tok } from "@creatureslsp/caos";
import { InspectionData } from "./InspectionData.js";
import { toVsRange } from "@creatureslsp/extension-util";
import { initializeCaosInspections } from "./inspections.register.js";
import { Log } from "../../ConnLogger.js";
import { VersionedDocumentData } from "@creatureslsp/extension-util/VersionedDocumentData";
import { CAOS_LANGUAGE_ID } from "../settings.js";
let oldDiagnostics = new VersionedDocumentData();
const singleTokenInspections = {};
const multiTokenInspections = {};
export const registerInspection = (tokens, inspection) => {
    if (tokens.length === 1) {
        if (typeof singleTokenInspections[tokens[0]] === 'undefined') {
            singleTokenInspections[tokens[0]] = [];
        }
        singleTokenInspections[tokens[0]].push(inspection);
    }
    else {
        if (typeof multiTokenInspections[tokens[0]] === 'undefined') {
            multiTokenInspections[tokens[0]] = [];
        }
        const path = makeTokenFilter(tokens);
        multiTokenInspections[tokens[0]].push([path, inspection]);
    }
};
export const collectCaosInspectionErrors = (workspaceUri, documentURI, version, variant, text, range) => {
    initializeCaosInspections();
    // If existing data is non-null,
    //  it means this request is old
    const existingData = oldDiagnostics
        .getIfNewVersionIsStale(CAOS_LANGUAGE_ID, documentURI, version);
    if (existingData != null) {
        return existingData;
    }
    let errors = [];
    const context = new InspectionData(workspaceUri, documentURI, variant, text, range);
    for (const commandCall of context.commandCalls) {
        _runInspections(context, commandCall, errors);
    }
    const out = errors.map(e => {
        return {
            ...e,
            range: toVsRange(e.range, true, 1),
        };
    });
    oldDiagnostics.setIfNew(CAOS_LANGUAGE_ID, documentURI, version, out);
    return out;
};
const makeTokenFilter = (_tokens) => {
    const tokenCount = _tokens.length;
    return (tokens) => {
        if (tokens.length !== tokenCount) {
            return false;
        }
        for (let i = 0; i < tokenCount; i++) {
            if (tokens[i] != _tokens[i]) {
                return false;
            }
        }
        return true;
    };
};
const _runInspections = (context, commandCall, errors) => {
    const tokens = commandCall.tokens.map(token => token.token);
    if (tokens.length === 1) {
        const inspections = singleTokenInspections[tokens[0]];
        if (inspections) {
            Log.i("Running " + inspections.length + " inspections for token " + tok(tokens[0]));
            for (const inspection of inspections) {
                if (inspection(context, commandCall, errors) === false) {
                    return false;
                }
            }
        }
    }
    else {
        const inspections = multiTokenInspections[tokens[0]];
        const commandString = tokens.map(i => tok(i)).join(" ");
        if (inspections) {
            Log.i("Running " + inspections.length + " inspections for token " + commandString);
            for (const [check, inspection] of inspections) {
                if (check(tokens)) {
                    if (inspection(context, commandCall, errors) === false) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
};
