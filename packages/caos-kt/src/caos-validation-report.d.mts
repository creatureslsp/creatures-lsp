// noinspection JSUnusedGlobalSymbols

type Nullable<T> = T | null | undefined;
import type {GameVariant} from "./types.d.ts";
import type {CaosParseResult} from "./caos-parser.mjs";

/**
 * Information about where the error occurred.
 */
export declare type Source = {
    /**
     * Line or line snippet which includes the text where the error occurred.
     */
    readonly lineText: string;
    /**
     * Text to place under [lineText]. Uses `^` to mark the space in [lineText] where the error occurred.
     * Example: "    ^^^^"
     */
    readonly marker: string;
}

/**
 * A suggestion description for how to correct the error
 */
export declare type Suggestion = {
    /**
     * A description of the problem encountered
     */
    readonly description?: Nullable<string>;
    /**
     * A description of what can be done to fix the problem (NOT ACTUAL CODE)
     */
    readonly replacement?: Nullable<string>;
}


/**
 * Location of an error in code
 */
export declare type Location = {
    readonly startLine: number;
    readonly endLine: number;

    readonly startColumn: number;
    readonly endColumn: number;

    readonly startIndex: number;
    readonly endIndex: number;

    /**
     * describes whether line and columns start at 0 or 1
     */
    readonly indexing: "0-indexed" | "1-indexed",
}


/**
 * Details about an error in CAOS code
 */
export declare type Diagnostic = {
    readonly severity: string;
    readonly code: string;
    readonly message: string;
    readonly location: Location;
    readonly source?: Nullable<Source>;
    readonly suggestion?: Nullable<Suggestion>;
}


/**
 * Report designed to be fed to AI as JSON
 */
export declare type CaosDiagnosticReport = {
    readonly okay: boolean;
    readonly file?: Nullable<string>;
    readonly language: string;
    readonly variant?: Nullable<GameVariant>;
    readonly diagnostics: Diagnostic[];
    readonly indexing: string;
}


/**
 * Parse and validate CAOS script and returns array of Diagnostics
 * @param variant game variant [C1,C2,CV,C3,DS]
 * @param caos previous CAOS parse result
 * @param withSuggestions whether to include suggestion objects (useful for AI)
 * @param checkCancelled throw an exception from this callback to abort parse
 */
export declare function caosValidationAsDiagnostics(variant: GameVariant, caos: string, withSuggestions?: boolean, checkCancelled?: () => void): Diagnostic[];

/**
 * Validate a CaosParseResult object and return ana array of Diagnostic objects
 * @param variant game variant [C1,C2,CV,C3,DS]
 * @param result previous CAOS parse result
 * @param withSuggestions whether to include suggestion objects (useful for AI)
 * @param checkCancelled throw an exception from this callback to abort parse
 */
export declare function caosValidationAsDiagnostics(variant: GameVariant, result: CaosParseResult, withSuggestions?: boolean, checkCancelled?: () => void): Diagnostic[];


/**
 * Format diagnostic objects as a flat report
 * @param errors
 */
export declare function getDiagnosticsAsFlatString(errors: Diagnostic[]): string;

/**
 * Returns a diagnostic report for CAOS validation errors
 * @param variant game variant [C1, C2, CV, C3, DS]
 * @param caos raw CAOS text
 * @param checkCancelled throw an exception from this callback when validation should be canceled
 */
export function getValidationReport(variant: GameVariant, caos: string, checkCancelled: () => void): CaosDiagnosticReport;

/**
 * Returns a diagnostic report for CAOS validation errors
 * @param variant game variant
 * @param parseResult result of earlier CAOS parse
 * @param checkCancelled throw an exception from this callback when validation should be canceled
 */
export function getValidationReport(variant: GameVariant, parseResult: CaosParseResult, checkCancelled: () => void): CaosDiagnosticReport;


/**
 * Returns diagnostic messages as a flat string
 * @param variant game variant [C1, C2, CV, C3, DS]
 * @param caos raw CAOS text
 * @param checkCancelled throw an exception from this callback when validation should be canceled
 */
export function getValidationReportAsFlatString(variant: GameVariant, caos: string, checkCancelled: () => void): CaosDiagnosticReport;

/**
 * Returns diagnostic messages as a flat string
 * @param variant game variant
 * @param parseResult result of earlier CAOS parse
 * @param checkCancelled throw an exception from this callback when validation should be canceled
 */
export function getValidationReportAsFlatString(variant: GameVariant, parseResult: CaosParseResult, checkCancelled: () => void): CaosDiagnosticReport;


export as namespace caos_validation_report;

// !Processed //