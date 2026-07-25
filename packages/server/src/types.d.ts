import type {CommandCall} from "@creatures-lsp/caos";
import type {Diagnostic} from "vscode-languageserver/node";
import type {InspectionData} from "./inspections/InspectionData";
import type {Nullable} from "@creatures-lsp/caos";
import type {Range} from "vscode-languageserver";

declare type Nullable<T> = T | undefined | null;

declare type CommandInspection = (context: InspectionData, commandCall: CommandCall, errors: Diagnostic[]) => Nullable<boolean>;

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