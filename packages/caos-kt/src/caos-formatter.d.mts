// noinspection JSUnusedGlobalSymbols

import type {GameVariant, Nullable} from "./types.d.ts";
import type {FormatResult} from "./common-lsp-formatter.mjs";



/**
 * Formats a CAOS string using the CAOS formatter options
 * @param variant game variant [C1,C2,CV,C3,DS]
 * @param text raw CAOS text
 * @param options formatting options
 */
export function formatCaos(
    variant: GameVariant,
    text: string,
    options?: CaosFormatterOptions
): FormatResult<CaosEditReason>

export type CaosFormatterOptions = {

    readonly tabSize: number;

    readonly insertSpaces: boolean;

    readonly trimTrailingWhitespace?: Nullable<boolean>;

    readonly insertFinalNewline?: Nullable<boolean>;

    readonly trimFinalNewlines?: Nullable<boolean>;

    /**
     * Allow multiple commands on a single line
     */
    readonly keepSameLine?: Nullable<boolean>;

    readonly maxBlankLines?: Nullable<number>;

    readonly indentComments?: Nullable<boolean>;

    readonly continuationIndent?: Nullable<number>;

    readonly spaceBetweenByteStingBrackets?: Nullable<boolean>;

    readonly minBlankLines?: Nullable<number>;

    readonly newLineChar?: Nullable<string>;

    readonly forceMinBlankLinesAfterComments?: Nullable<boolean>;

    readonly listBraceSpacing?: Nullable<ListBraceSpacing>;

    readonly listAlignment?: Nullable<ListAlignment>
}


/**
 * How to align the list.
 *  - open-brace aligns the open and close brace when the closing brace is on its own line
 *  - rvalue - aligns the closing brace with the start token of its parent rvalue command
 *  - command - aligns the closing brace with the parent most command
 */
export type ListAlignment = "open-brace" | "rvalue" | "command";

/**
 * Spacing between braces and items in list
 * - space-between - adds a space between the braces and first and last item in list: `{ va00 va01 }`
 * - trim-space - removes spacing between the braces `{va00 va01}`
 * - keep - keep whatever spaces existing between the braces and items: `{    va00 va01}`
 */
export type ListBraceSpacing = "space-between" | "trim-space" | "keep";

export type CaosEditReason = "DANGLING_AUTO_COMPLETE"
    | "FORMAT_CAOS2"
    | "COMMENT"
    | "SPACE_BETWEEN_BRACKETS"
    | "SPACES_BETWEEN_COMMANDS"
    | "SPACE_NEEDED"
    | "SPACE_TOO_MANY"
    | "NEWLINES_NEEDED"
    | "NEWLINES_TOO_MANY"
    | "SPACE_TOKEN"
    | "CASE_COMMAND"
    | "CASE_VARIABLE"
    | "TAB_CHANGE";

export as namespace caos_formatter;