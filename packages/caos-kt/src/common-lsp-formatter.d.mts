import type {Nullable} from "./types.d.ts";
import type {TextEdit} from "./common-lsp-edit.mjs";

export declare type FormatResult<EditReason> = {
    readonly formattedText: string,
    readonly oldText: string,
    readonly edits: TextEdit[],
    readonly editReasons: EditReason[]
}

export declare type FormatterOptions = {
    /**
     * Size of a tab in spaces.
     */
    readonly tabSize: number;

    /**
     * Prefer spaces to tabs.
     */
    readonly insertSpaces: boolean;

    /**
     * Trim trailing whitespaces on a line.
     */

    readonly trimTrailingWhitespace?: Nullable<boolean>

    /**
     * Insert a newline character at the end of the file if one does not exist.
     */
    readonly insertFinalNewline?: Nullable<boolean>

    /**
     * Trim all newlines after the final newline at the end of the file.
     */
    readonly trimFinalNewlines?: Nullable<boolean>

    /**
     * The minimum number of newlines between block lines
     */
    readonly minBlankLines?: Nullable<number>

    /**
     * The maximum number of blank lines between comments, commands, and scripts
     */
    readonly maxBlankLines?: Nullable<number>

    /**
     * Whether to adjust indent on comments
     */
    readonly indentComments?: Nullable<boolean>

    /**
     * What kind of indent to add to a continuation
     */
    readonly continuationIndent?: Nullable<number>

    /**
     * Newline char or chars to use
     */
    readonly newLineChar?: Nullable<string>

    /**
     * Whether to enforce the minimum-blank-lines after a comment
     * If false, it is possible to have no blank lines between a comment and the command that follows
     */
    readonly forceMinBlankLinesAfterComments?: Nullable<boolean>

}