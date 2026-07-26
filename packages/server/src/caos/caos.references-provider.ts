// noinspection ES6MissingAwait

import {Location} from "vscode-languageserver";
import {ReferenceParams} from "vscode-languageserver-protocol";
import {inRange, sortTextRanges} from "@creatureslsp/extension-util";
import {Is} from "@creatureslsp/caos";
import {parseCaosNear} from "@creatureslsp/caos/parser";
import {getJournalFileNameReferences} from "./references/references.journal.js";
import {getNamedVariableReferences} from "./references/references.named-variable.js";
import {formatCommandToLocation, getAllCommandUsages} from "./references/references.util.js";
import {getCaosCatalogueNameReferences} from "./references/references.catalogue.js";
import {CreaturesDocument, isCaosDocument} from "../document.js";
import {caosInitLib} from "./caos-init-lib.js";
import type {Nullable} from "@creatureslsp/extension-util";
import {getCaosCursorPosition} from "@creatureslsp/caos/cursor-data";
import type {C2eStringVal, CaosParserItem} from "@creatureslsp/caos/core";
import {Log} from "../ConnLogger.js";

// export async function getRawCaosLocations(
//     params: ReferenceParams,
//     workspaceUri: string,
//     document: CreaturesDocument<any>
// ): Promise<Location[]> {
//
//     if (!isCaosDocument(document)) {
//         return [];
//     }
//     caosInitLib();
//     const {text, variant} = document;
//
//     const {line, character} = params.position;
//
//     const parseResult = parseCaosNear(variant, text, line, character, false);
//
//     const commandCall: Nullable<CommandCall> = getCommandBeneathCursor(
//         document.variant,
//         parseResult.commandCalls,
//         {line, character},//: Math.max(character - 2, 0)},
//         false
//     );
//
//     if (commandCall == null) {
//         return [];
//     }
//
//
//     const commandStringUpper: string = commandCall.commandString.toUpperCase();
//
//     const out: Location[] = [];
//
//     if (inRange(commandCall.tokenTextRange, line, character)) {
//         const commands = await getAllCommandUsages(
//             workspaceUri,
//             variant,
//             commandStringUpper,
//             commandCall.callTypeId == CommandCallType.getInstance().COMMAND,
//             params
//         );
//
//         for (const file in commands) {
//             out.push(...formatCommandToLocation(file, commands[file], null));
//         }
//         return out;
//     }
//
//     const closestItem = (commandCall.arguments as Argument[])
//         .filter(a => inRange(a.textRange, line, character, false, true))
//         .sort((a, b) => sortTextRangesReversed(a.textRange, b.textRange))
//         .pop()
//         ?.parserItem;
//
//     if (closestItem == null) {
//         return [];
//     }
//
//     switch (commandStringUpper) {
//         case "FILE OOPE":
//         case "FILE IOPE":
//         case "FILE JDEL":
//             return getJournalFileNameReferences(
//                 workspaceUri,
//                 variant,
//                 commandCall,
//                 closestItem,
//             );
//         case "GAME":
//         case "EAME":
//         case "NAME":
//         case "MAME":
//             if (!Is.c2eStringVal(closestItem)) {
//                 return [];
//             }
//
//             return getNamedVariableReferences(
//                 workspaceUri,
//                 commandStringUpper,
//                 closestItem.value
//             );
//         case "READ":
//         case "REAN":
//         case "REAQ":
//             if (!Is.c2eStringVal(closestItem)) {
//                 return [];
//             }
//             return getCaosCatalogueNameReferences(
//                 workspaceUri,
//                 commandCall,
//                 closestItem
//             );
//         case "GSUB":
//         default:
//             return [];
//     }
// }

export async function getRawCaosLocations(
    params: ReferenceParams,
    workspaceUri: string,
    document: CreaturesDocument<any>
): Promise<Location[]> {
    
    if (!isCaosDocument(document)) {
        return [];
    }
    caosInitLib();
    const {text, variant} = document;
    
    const {line, character} = params.position;
    //
    // const parseResult = parseCaosNear(variant, text, line, character, false);
    //
    // const commandCall: Nullable<CommandCall> = getCommandBeneathCursor(
    //     document.variant,
    //     parseResult.commandCalls,
    //     {line, character},//: Math.max(character - 2, 0)},
    //     false
    // );
    //
    // if (commandCall == null) {
    //     return [];
    // }
    //
    //
    // const commandStringUpper: string = commandCall.commandString.toUpperCase();
    
    const parseResult = parseCaosNear(variant, text, line, character, false);
    
    const cursorData = getCaosCursorPosition(parseResult, line, character, false);
    
    const command = cursorData.command
    if (command == null) {
        console.log("Command null in reference provider")
        return [];
    }
    
    const closestItem: Nullable<CaosParserItem> = cursorData.closestItem;
    if (closestItem == null) {
        console.log("Closest item null in reference provider")
        return [];
    }
    
    if (!inRange(closestItem.textRange, line, character, false, true)) {
        console.log("Closest item not under cursor in reference provider");
        return [];
    }
    
    const out: Location[] = [];
    
    if (Is.commandToken(closestItem)) {
        console.log("Closest item is a command token");
        const commands = await getAllCommandUsages(
            workspaceUri,
            variant,
            command.command,
            command.isCommand,
            params
        );
        
        for (const file in commands) {
            out.push(...formatCommandToLocation(file, commands[file], null));
        }
        return out;
    }
    
    const commandStringUpper = command.command;
    
    const commandCall = parseResult
        .commandCalls
        .filter(c => {
            return c.commandString == commandStringUpper && inRange(c.textRange, line, character, false, false);
        })
        .sort((a, b) => sortTextRanges(a.textRange, b.textRange))
        .pop();
    
    if (!commandCall) {
        console.log("Command call not null in reference provider");
        return [];
    }
    
    switch (commandStringUpper) {
        case "FILE OOPE":
        case "FILE IOPE":
        case "FILE JDEL":
            return (await getJournalFileNameReferences(
                workspaceUri,
                variant,
                commandCall,
                closestItem,
            )).concat(closestItem ? {
                range: (closestItem as CaosParserItem)!.textRange,
                uri: document.documentUri,
            } satisfies Location : []);
        case "GAME":
        case "EAME":
        case "NAME":
        case "MAME":
            if (!Is.c2eStringVal(closestItem)) {
                return [];
            }
            
            return getNamedVariableReferences(
                workspaceUri,
                commandStringUpper,
                (closestItem as C2eStringVal).value as string
            ).concat(closestItem ? {
                range: (closestItem as C2eStringVal)!.textRange,
                uri: document.documentUri,
            } satisfies Location : []);
        case "READ":
        case "REAN":
        case "REAQ":
            if (!Is.c2eStringVal(closestItem)) {
                Log.i(`${command.command} parameter is not C2e string. Was: ${JSON.stringify(closestItem, null, 2)}`);
                return [];
            }
            Log.i(`${command.command} parameter is a C2e string. Was: ${(closestItem as C2eStringVal).value}`);
            return (await getCaosCatalogueNameReferences(
                workspaceUri,
                commandCall,
                closestItem as C2eStringVal,
            ))/*.concat(closestItem ? {
                range: (closestItem as C2eStringVal).textRange,
                uri: document.documentUri,
            } satisfies Location : [])*/;
        case "GSUB":
        default:
            return [];
    }
}
