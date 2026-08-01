import type {Diagnostic} from "vscode-languageserver/node.js";
import type {CatalogueInspection} from "../../types.js";
import {registerInspection} from "./catalogue.inspections.core.js";
import {CatalogueInspectionData} from "./catalogue.inspections.data.js";
import type {Nullable} from "@creatureslsp/caos";
import {DiagnosticSeverity} from "vscode-languageserver-types";
import type {CatalogueEntry} from "@creatureslsp/catalogue/core";

export const MALFORMED_AGENT_HELP_TAG_ERROR_CODE = "MALFORMED_AGENT_HELP_TAG";

export const registerCatalogueAgentHelpInspection = (): void => {
    registerInspection(catalogueAgentHelpInspection);
}

const fuzzyRegex = /^agents?\s*help\s*(\d+)\s*(\d+)\s*(\d+)\s*$/i
const validRegex = /^Agent Help \d+ \d+ \d+$/


type AgentHelpData = {
    name: string;
    parts: RegExpExecArray;
    catalogue: CatalogueEntry;
}

const catalogueAgentHelpInspection: CatalogueInspection = async (context: CatalogueInspectionData, errors: Diagnostic[]): Promise<Nullable<boolean>> => {
    const entriesRaw = (await context.getCatalogueParseResult())?.catalogueEntries;
    if (!entriesRaw) {
        return;
    }
    const entries: AgentHelpData[]  = entriesRaw.filter((entry) => {
        const name = entry.catalogueName;
        if (name && fuzzyRegex.test(name)) {
            return true;
        }
        return false;
    })
        .filter((catalogue) => !validRegex.test(catalogue.catalogueName ?? ""))
        .map((catalogue) => {
            const name = catalogue.catalogueName;
            if (!name) {
                return null;
            }
            const parts = fuzzyRegex.exec(name)
            if (!parts) {
                return null;
            }
            return {name, parts, catalogue}
        })
        .filter((c): c is NonNullable<typeof c>   => c != null) as AgentHelpData[];
    
    if (!entries) {
        return true;
    }
    
    for (const {parts, catalogue} of entries) {
        const expected = `Agent Help ${parts[1]} ${parts[2]} ${parts[3]}`;
        const message = `Agent help tag is malformed. It should be \`${expected}\`}`
        const range = catalogue.catalogueNameParserItem!.textRange;
        const error: Diagnostic = {
            range: range,
            severity: DiagnosticSeverity.Warning,
            code: MALFORMED_AGENT_HELP_TAG_ERROR_CODE,
            message: message,
            data: { expected, documentURI: context.documentURI, name: catalogue.catalogueName! },
        } satisfies Diagnostic;
        errors.push(error)
    }
}