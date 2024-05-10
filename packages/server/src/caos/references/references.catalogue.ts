import {CommandCall, GameVariant, IParserItem} from "@bedalton/caos-util";
import {Nullable} from "@bedalton/extension-util/src/types";
import {Location} from "vscode-languageserver";
import {Is} from "@bedalton/caos-util/is";


export async function getCatalogueReferences(
    workspaceUri: string,
    targetVariant: GameVariant,
    commandCall: CommandCall,
    closestItem: Nullable<IParserItem<any>>
): Promise<Location[]> {
    if (!Is.c2eStringVal(closestItem)) {
        return [];
    }
    const args = commandCall.commandArguments;
    if (args.length === 0) {
        return [];
    }
    if (args[0].textRange.start.line !== closestItem.textRange.start.line) {
        return [];
    }
    if (args[0].textRange.start.character !== closestItem.textRange.start.character) {
        return [];
    }
    catalogueI
}