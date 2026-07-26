import { parseCatalogue } from "@creatureslsp/catalogue/core";
import { getCatalogueLocations } from "../indices/index.catalogue.entries.js";
import { isVsCode, getWorkspaceEdits, inRange } from "@creatureslsp/extension-util";
import { getCaosCatalogueLocations } from "../indices/index.caos.catalogue-usages.js";
import { getWorkspaceUriForFile } from "../workspace-folders.js";
import { offsetRenameRange } from "@creatureslsp/extension-util";
import { pushInto } from "@creatureslsp/extension-util/array-util";
export function renameInCatalogueDocument(document, position, newTagName) {
    const workspaceUri = getWorkspaceUriForFile(document.documentUri);
    const parseResult = parseCatalogue(document.text);
    const { line, character } = position;
    const tag = parseResult
        .catalogueEntries
        .find(entry => {
        if (entry.catalogueNameParserItem == null) {
            return false;
        }
        return inRange(entry.catalogueNameParserItem.textRange, line, character, false, true);
    });
    if (tag == null) {
        return null;
    }
    const oldTagName = tag.catalogueNameParserItem?.value;
    if (oldTagName == null) {
        return null;
    }
    const out = renameCatalogueInCatalogueAndCaosFiles(workspaceUri, oldTagName, newTagName) ?? { changes: {} };
    if (out.changes == null) {
        out.changes = {};
    }
    if (isVsCode()) {
        if (typeof out.changes[document.documentUri] !== "undefined") {
            const { line, character } = position;
            out.changes[document.documentUri] = out.changes[document.documentUri]
                .filter(it => !inRange(it.range, line, character));
        }
    }
    else {
        const thisEdit = {
            newText: "\"" + newTagName + "\"",
            range: offsetRenameRange(tag.catalogueNameParserItem.textRange)
        };
        pushInto(out.changes, document.documentUri, thisEdit, edit => edit != null);
    }
    return out;
}
export function renameCatalogueInCatalogueAndCaosFiles(workspaceUri, oldTag, newTag) {
    const catalogueFileLocations = getCatalogueLocations(workspaceUri, oldTag);
    const caosCatalogueTagUsages = getCaosCatalogueLocations(workspaceUri, oldTag);
    const locations = catalogueFileLocations
        .concat(...caosCatalogueTagUsages);
    if (locations.length === 0) {
        return null;
    }
    return getWorkspaceEdits(locations, "\"" + newTag + "\"");
}
