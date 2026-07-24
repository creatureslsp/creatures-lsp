import {Is, tok} from "@creatures-lsp/caos-util";
import type {
    CommandCall,
    Argument,
} from "@creatures-lsp/caos-kt/caos-parser";

import type {
    CaosParserItem,
} from "@creatures-lsp/caos-kt/caos-core";

import type {Diagnostic} from "vscode-languageserver/node.js";
import type {CommandInspection} from "../../types.js";
import {registerInspection} from "./inspections.core.js";
import {InspectionData} from "./InspectionData.js";
import type {Nullable} from "@creatures-lsp/caos-kt";



export const registerCaosCatalogueReferenceInspections = (): void => {
    registerInspection([tok("read")], caosCatalogueReadInspection);
}

const caosCatalogueReadInspection: CommandInspection = (context: InspectionData, commandCall: CommandCall, errors: Diagnostic[]): Nullable<boolean> => {
    if (commandCall.arguments.length < 2) {
        console.log("Not enough arguments for read command; Found: " + commandCall.arguments.length);
        return;
    }
    
    /**
     * @var {CaosParserItem} tag
     * @var {CaosParserItem} index
     */
    const [tag, index] = (commandCall.arguments as Argument[])
            .map ((it: Argument) => it.parserItem as CaosParserItem) as CaosParserItem[];
    
    if (!Is.c2eStringVal(tag) || !Is.intVal(index)) {
        let errors: string[] = [];
        if (!Is.c2eStringVal(tag)) {
            errors.push("Tag is not a string: <" + (tag as Nullable<CaosParserItem>)?.text + ">; Type: " + (tag as Nullable<CaosParserItem>)?.typeToken);
        }
        if (!Is.intVal(index)) {
            errors.push("Index is not an int: <" + (index as Nullable<CaosParserItem>)?.text + ">; Type: " + (index as Nullable<CaosParserItem>)?.typeToken);
        }
        console.log("Cannot check catalogue read command. Errors: " + errors.join(", "));
        return true;
    }
    
    const entries = context.getCatalogueEntriesForTag(tag.value);
    if (!entries) {
        return true;
    }
    
    const counts = entries.map(entry => (entry.valuesCount));
    const max = Math.max(...counts)
    if (max >= index.value || !isFinite(max) || isNaN(max)) {
        return true;
    }
    const error: Diagnostic = {
        range: index.textRange,
        message: `Index out of range. Max index for tag ${tag.text} is ${max}`
    } satisfies Diagnostic;
    errors.push(error)
}