import {
    type CaosCursorData,
    getCaosCursorPosition,
} from "@creatureslsp/caos/cursor-data";

import type {
    CaosParserItem
} from "@creatureslsp/caos/core";

import {
    type CaosParseResult,
    parseCaosNear,
} from "@creatureslsp/caos/parser";

import {
    getGotoInformation,
    isInCaosCatalogueKey
} from "@creatureslsp/caos";

import {caosInitLib} from "./caos/caos-init-lib.js";

import type {DefinitionParams, DocumentUri, Position} from "vscode-languageserver";
import type {Definition, LocationLink} from "vscode-languageserver-types";
import {connection} from "./connection.vscode.js";
import {isCaosDocument, unpackDocument} from "./document.js";
import type {CaosDocument} from "./caos/caos.document.js";
import {inRange, isVsCode, Nullable, toFileUri, toVsRange} from "@creatureslsp/extension-util";
import {getWorkspaceUriForFile} from "./workspace-folders.js";
import {getCatalogueLocations} from "./indices/index.catalogue.entries.js";
import {Log} from "./ConnLogger.js";


export function registerGotoDefinitionsProvider(init: boolean) {
    if (!init) {
        return;
    }
    return connection.onDefinition(onDefinition);
}


async function onDefinition(params: DefinitionParams): Promise<Definition | LocationLink[] | undefined | null> {
    try {
        return await _onDefinition(params);
    } catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to get definition; ${error}`);
        return null;
    }
}

async function _onDefinition(params: DefinitionParams): Promise<Definition | LocationLink[] | undefined | null> {
    const uri = params.textDocument.uri;
    const document = await unpackDocument(uri);
    
    if (document == null) {
        return null;
    }
    
    const position = params.position;
    
    if (isCaosDocument(document)) {
        caosInitLib();
        return getCaosGotoDefinitions(uri, document, position)
    }
}


function getCaosGotoDefinitions(
    uri: DocumentUri,
    document: CaosDocument,
    position: Position,
): Nullable<Definition | LocationLink[]> {
    try {
        let definitions = getGotoInformation(
            uri,
            document.variant,
            document.text,
            position.line,
            position.character
        );
        
        if (definitions == null) {
            definitions = getIndexedDefinition(
                document,
                position
            );
        }
        
        if (definitions == null) {
            return null;
        }
        
        if (isVsCode()) {
            return definitions;
        }
        
        if (Array.isArray(definitions)) {
            return (<LocationLink[]>definitions)?.map((loc) => {
                return {
                    ...loc,
                    targetUri: toFileUri(loc.targetUri)
                } satisfies LocationLink
            })
        } else {
            /** @var {Definition} definition */
            return {
                ...definitions,
                uri: toFileUri(definitions.uri)
            } satisfies Definition
        }
    } catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        console.error("Failed to get GOTO; ", error);
        return null;
    }
}


function getIndexedDefinition(
    document: CaosDocument,
    position: Position,
): Nullable<LocationLink[]> {
    const {variant, text} = document;
    let parseResult = parseCaosNear(
        variant,
        text as string,
        position.line,
        position.character,
        false,
    );
    
    if (parseResult == null) {
        return null;
    }
    
    const commandCalls = parseResult.commandCalls
    
    if (commandCalls.length === 0) {
        return null;
    }
    
    const cursor: Nullable<CaosCursorData> = getCaosCursorPosition(
        parseResult,
        position.line,
        position.character,
        false,
    );
    
    if (cursor == null) {
        return null;
    }
    
    const command = cursor.command?.command?.toUpperCase();
    if (command == null) {
        return null;
    }
    
    const closestItemText = cursor.closestItem?.text?.trim() ?? '';
    if (closestItemText.length === 0) {
        return null;
    }
    switch (command) {
        case "READ":
        case "REAN":
        case "REAF":
            const workspaceUri = getWorkspaceUriForFile(document.documentUri);
            return getCatalogueNameSymbol(
                workspaceUri,
                document.documentUri,
                parseResult,
                command,
                cursor?.closestItem,
                position,
            );
        default:
            break;
    }
}

function getCatalogueNameSymbol(
    workspaceUri: DocumentUri,
    documentUri: string,
    parseResult: CaosParseResult,
    command: string,
    closestItem: Nullable<CaosParserItem>,
    position: Position,
): LocationLink[] | undefined | null {
    if (closestItem == null) {
        return null;
    }
    const {line, character} = position;
    const commandCall = parseResult.commandCalls.find(c => c.commandString.toUpperCase() === command && inRange(c.textRange, line, character, false, true));
    
    if (!isInCaosCatalogueKey(commandCall, closestItem)) {
        return null;
    }
    
    const key = closestItem.value;
    if (key == null || key.length === 0) {
        return;
    }
    
    const originSelectionRange = toVsRange(closestItem.textRange);
    const result = getCatalogueLocations(workspaceUri, key);
    return result.map(location => {
        return <LocationLink>{
            targetUri: location.documentUri,
            targetSelectionRange: toVsRange(location.range),
            targetRange: toVsRange(location.range),
            originSelectionRange
        };
    });
}
