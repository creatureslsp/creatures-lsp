// The example settings
import {connection} from "../connection.vscode.js";
import {clientCapabilities} from "../client-capabilities.js";
import type {GameVariant,} from "@creatures-lsp/caos-kt";
import {getCaosInlayOptions} from "@creatures-lsp/caos-kt/caos-inlay-hints";
import {HashUtil, type Nullable} from "@creatures-lsp/extension-util";

const DEFAULT_INDENT_COMMENTS = true;

export const CAOS_LANGUAGE_ID = "caos";

export interface CaosSettings {
    variant: GameVariant,
    strictSpaces: boolean,
    maxNumberOfProblems: number;
    disabledInlayHints: string[];
    minimumParameterCount?: Nullable<number>,
    dumbMode: boolean,
    usePlaceholders: boolean,
    formatting: {
        tabSize?: number;
        insertSpaces?: boolean;
        trimTrailingWhitespace?: Nullable<boolean>;
        insertFinalNewline?: Nullable<boolean>;
        trimFinalNewlines?: Nullable<boolean>;
        keepSameLine?: Nullable<boolean>;
        maximumEmptyLines?: Nullable<number>;
        indentComments?: Nullable<boolean>;
        continuationIndent?: Nullable<number>;
        spaceBetweenByteStingBrackets?: Nullable<boolean>;
        minBlankLines?: Nullable<number>;
        newLineChar?: Nullable<string>;
        forceMinBlankLinesAfterComments?: Nullable<boolean>;
    }
    inlayHints?: {
        bitFlagValues: boolean,
        parameterHints: {
            showParameterHints: boolean,
            minimumParameterCountForParameterInlayHints: 2
        },
        setvParameterHints: boolean,
        genusName: boolean,
        valueName: boolean,
        eventScriptName: boolean,
        ddePictDimensions: boolean,
        c1ClasValue: boolean,
        rvalueReturnValue: boolean,
        equality: {
            bitFlagValues: boolean
        },
        equalityValueName?: boolean,
    },
    
    [id: string]: any;
}

function getIfVariant(string: string): Nullable<GameVariant> {
    const variant = string.toUpperCase();
    switch (variant) {
        case "C1":
        case "C2":
        case "CV":
        case "C3":
        case "DS":
        case "SM":
        case "DS:CE":
            return variant;
        default:
            return null;
    }
}

function getCLIVariant(): Nullable<GameVariant> {
    const args = process.argv ?? [];
    if (args.length < 1) {
        return null;
    }
    let variant = getIfVariant(args[0]);
    for (let i = 0; i < args.length - 1; i++) {
        const arg = args[i];
        if (arg === "-t" || arg === "--variant") {
            return getIfVariant(args[i + 1]);
        }
    }
    for (const arg of args) {
        variant = getIfVariant(arg);
    }
    return variant;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: CaosSettings = {
    variant: getCLIVariant() ?? "DS",
    strictSpaces: false,
    maxNumberOfProblems: 1000,
    disabledInlayHints: [],
    usePlaceholders: true,
    dumbMode: false,
    formatting: {
        indentComments: DEFAULT_INDENT_COMMENTS
    }
};

let globalSettings: CaosSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<CaosSettings>> = new Map();


/**
 * Get the settings for this resource, or the global default if no setting
 * @param resource
 */
export async function getCaosDocumentSettings(resource: string): Promise<CaosSettings> {
    if (!clientCapabilities.hasConfigurationCapability) {
        return globalSettings;
    }
    
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: "caosScript"
        });
        if (!result) {
            result = connection.workspace.getConfiguration({
                section: "caosScript"
            })
        }
        documentSettings.set(resource, result);
    }
    return new Promise(async (resolve) => {
        try {
            let clientConfig: Nullable<CaosSettings> = await result;
            const config: CaosSettings & { [key: string]: any } = clientConfig ?? globalSettings;
            config.minimumParameterCount = config.minimumParameterCount ?? config?.inlayHints?.parameterHints.minimumParameterCountForParameterInlayHints ?? 3;
            config.disabledInlayHints = getDisabledCaosInlayHints(clientConfig ?? {inlayHints: {}}) ?? globalSettings.disabledInlayHints;
            if (config.formatting == null) {
                config.formatting = {
                    indentComments: DEFAULT_INDENT_COMMENTS
                };
            } else if (config.formatting.indentComments == null) {
                config.formatting.indentComments = DEFAULT_INDENT_COMMENTS;
            }
            resolve(config);
        } catch {
            resolve(globalSettings);
        }
    });
}

function getDisabledCaosInlayHints(settings: { [id: string]: any }): string[] {
    return getCaosInlayOptions()
        .filter((option: any) => {
            const value = HashUtil.get(settings, option) ?? HashUtil.get(settings, "caosScript." + option);
            return value === false;
        });
}

export function deleteCaosDocumentSettings(documentUri: string): boolean {
    return documentSettings.delete(documentUri);
}


export function clearCaosDocumentSettings() {
    documentSettings.clear();
}

export function setGlobalCaosSettings(newSettings: Nullable<CaosSettings>) {
    globalSettings = <CaosSettings>(newSettings || defaultSettings || globalSettings);
}

export function getGlobalCaosSettings(): CaosSettings {
    return globalSettings;
}