import type {CommandCall} from "@creatureslsp/caos";
import type {Diagnostic} from "vscode-languageserver/node";
import type {Nullable} from "@creatureslsp/caos";
import type {Range} from "vscode-languageserver";
import type {CatalogueInspectionData} from "./catalogue/inspections/InspectionData.js";
import type {CaosInspectionData} from "./caos/inspections/CaosInspectionData.js";

declare type Nullable<T> = T | undefined | null;

declare type CommandInspection = (context: CaosInspectionData, commandCall: CommandCall, errors: Diagnostic[]) => Nullable<boolean>;
declare type CatalogueInspection = (context: CatalogueInspectionData, errors: Diagnostic[]) => Promise<Nullable<boolean>>;

declare type DocumentContentChange = {
    /**
     * The range of the document that changed.
     */
    range: Range;
    /**
     * The optional length of the range that got replaced.
     *
     * @deprecated use range instead.
     */
    rangeLength?: uinteger;
    /**
     * The new text for the provided range.
     */
    text: string;
}