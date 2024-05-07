// noinspection JSUnusedGlobalSymbols
/**
 * Value-object describing what options formatting should use.
 */
export interface FormattingOptions {
    /**
     * Size of a tab in spaces.
     */
    tabSize: number;
    /**
     * Whether to prefer spaces or tabs.
     */
    insertSpaces: boolean;
    /**
     * Trim trailing whitespaces on a line.
     *
     * @since 3.15.0
     */
    trimTrailingWhitespace?: boolean;
    /**
     * Insert a newline character at the end of the file if one does not exist.
     *
     * @since 3.15.0
     */
    insertFinalNewline?: boolean;
    /**
     * Trim all newlines after the final newline at the end of the file.
     *
     * @since 3.15.0
     */
    trimFinalNewlines?: boolean;
    /**
     * Signature for further properties.
     */
    [key: string]: boolean | number | string | undefined;
}