// The example settings
import {connection} from "./connection.vscode";
import {GameVariant, com, Nullable} from "@bedalton/caos-util";
import hints = com.bedalton.creatures.caos.hints;
import getInlayOptions = hints.getInlayOptions;
import {revalidateAll} from "./validator";
import {HashUtil} from "@bedalton/caos-util/hash-util";


export const clientCapabilities = {
    hasConfigurationCapability: false,
    hasWorkspaceFolderCapability: false,
    hasDiagnosticRelatedInformationCapability: false,
    hasSemanticTokensCapabilities: false,
    hasGotoDefinition: false,
    hasFormatting: false,
    hasInlayHintsCapabilities: false,
    hasCompletionCapabilities: false,
    hasHoverCapabilities: false,
    hasSymbolsCapabilities: false
};

const DEFAULT_INDENT_COMMENTS = true;

export const CAOS_LANGUAGE_ID = 'caos';

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
    switch (string.toUpperCase()) {
        case 'C1':
            return 'C1';
        case 'C2':
            return 'C2';
        case 'CV':
            return 'CV';
        case 'C3':
            return 'C3';
        case 'DS':
            return 'DS';
        case 'SM':
            return 'SM';
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
        if (arg === '-t' || arg === '--variant') {
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
    variant: getCLIVariant() ?? 'DS',
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


export function registerSettingsChangeListener() {

/// Called one configuration/settings change
/// Invalidates cached settings on change
    connection.onDidChangeConfiguration(change => {
        if (clientCapabilities.hasConfigurationCapability) {
            // Reset all cached document settings
            documentSettings.clear();
        } else {
            globalSettings = <CaosSettings>(change.settings.caosScript || defaultSettings);
        }
        revalidateAll();
    });
}

/**
 * Get the settings for this resource, or the global default if no setting
 * @param resource
 */
export function getDocumentSettings(resource: string): Thenable<CaosSettings> {
    if (!clientCapabilities.hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource
        });
        if (!result) {
            result = connection.workspace.getConfiguration()
        }
        documentSettings.set(resource, result);
    }
    return new Promise(async (resolve) => {
        try {
            const clientConfig = await result;
            const config: CaosSettings & { [key: string]: any } = clientConfig?.caosScript ?? globalSettings
            config.minimumParameterCount = config.minimumParameterCount ?? config?.inlayHints?.parameterHints.minimumParameterCountForParameterInlayHints ?? 3
            config.disabledInlayHints = getDisabledInlayHints(clientConfig ?? {inlayHints: {}}) ?? globalSettings.disabledInlayHints;
            if (config.formatting == null) {
                config.formatting = {
                    indentComments: DEFAULT_INDENT_COMMENTS
                };
            } else if (config.formatting.indentComments == null) {
                config.formatting.indentComments = DEFAULT_INDENT_COMMENTS
            }
            resolve(config);
        } catch (e) {
            resolve(globalSettings);
        }
    });
}

function getDisabledInlayHints(settings: { [id:string]: any }): string[] {
    return getInlayOptions()
        .filter((option) => {
            const value = HashUtil.get(settings, option) ?? HashUtil.get(settings, 'caosScript.' + option);
            return value === false
        });
}

export function deleteDocumentSettings(documentUri: string) {
    documentSettings.delete(documentUri);
}