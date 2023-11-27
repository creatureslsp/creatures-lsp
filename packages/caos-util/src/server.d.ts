// noinspection JSUnusedGlobalSymbols

import {Position, Range} from './caos-util';

/**
 * A text edit applicable to a text document.
 */
export interface TextEdit {
    /**
     * The range of the text document to be manipulated. To insert
     * text into a document create a range where start === end.
     */
    range: Range;
    /**
     * The string to be inserted. For delete operations use an
     * empty string.
     */
    newText: string;
}

/**
 * Describes the content type that a client supports in various
 * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
 *
 * Please note that `MarkupKinds` must not start with a `$`. These kinds
 * are reserved for internal usage.
 * 'plaintext' = Plain text is supported as a content format
 * 'markdown' = Markdown is supported as a content format
 *
 */
type MarkupKind = 'plaintext' | 'markdown';

/**
 * A tagging type for string properties that are actually document URIs.
 */
export declare type DocumentUri = string;

type InlayHintKind = 1/*type*/ | 2/*parameter*/;

/**
 * Inlay hint information.
 *
 * @since 3.17.0
 */
export declare type InlayHint = {
    /**
     * The position of this hint.
     */
    position: Position;
    /**
     * The label of this hint. A human-readable string or an array of
     * InlayHintLabelPart label parts.
     *
     * *Note* that neither the string nor the label part can be empty.
     */
    label: string | InlayHintLabelPart[];
    /**
     * The kind of this hint. Can be omitted in which case the client
     * should fall back to a reasonable default.
     */
    kind?: InlayHintKind;
    /**
     * Optional text edits that are performed when accepting this inlay hint.
     *
     * *Note* that edits are expected to change the document so that the inlay
     * hint (or its nearest variant) is now part of the document and the inlay
     * hint itself is now obsolete.
     */
    textEdits?: TextEdit[];
    /**
     * The tooltip text when you hover over this item.
     */
    tooltip?: string | MarkupContent;
    /**
     * Render padding before the hint.
     *
     * Note: Padding should use the editor's background color, not the
     * background color of the hint itself. That means padding can be used
     * to visually align/separate an inlay hint.
     */
    paddingLeft?: boolean;
    /**
     * Render padding after the hint.
     *
     * Note: Padding should use the editor's background color, not the
     * background color of the hint itself. That means padding can be used
     * to visually align/separate an inlay hint.
     */
    paddingRight?: boolean;
    /**
     * A data entry field that is preserved on an inlay hint between
     * a `textDocument/inlayHint` and a `inlayHint/resolve` request.
     */
    data?: any;
};

/**
 * An inlay hint label part allows for interactive and composite labels
 * of inlay hints.
 *
 * @since 3.17.0
 */
export declare type InlayHintLabelPart = {
    /**
     * The value of this label part.
     */
    value: string;
    /**
     * The tooltip text when you hover over this label part. Depending on
     * the client capability `inlayHint.resolveSupport` clients might resolve
     * this property late using the resolve request.
     */
    tooltip?: string | MarkupContent;
    /**
     * An optional source code location that represents this
     * label part.
     *
     * The editor will use this location for the hover and for code navigation
     * features: This part will become a clickable link that resolves to the
     * definition of the symbol at the given location (not necessarily the
     * location itself), it shows the hover that shows at the given location,
     * and it shows a context menu with further code navigation commands.
     *
     * Depending on the client capability `inlayHint.resolveSupport` clients
     * might resolve this property late using the resolve request.
     */
    location?: Location;
};

/**
 * Represents a location inside a resource, such as a line
 * inside a text file.
 */
export interface Location {
    uri: DocumentUri;
    range: Range;
}

/**
 * A `MarkupContent` literal represents a string value which content is interpreted base on its
 * kind flag. The protocol currently supports `plaintext` and `markdown` as markup kinds.
 *
 * If the kind is `markdown` then the value can contain fenced code blocks like in GitHub issues.
 * See https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting
 *
 * Here is an example how such a string can be constructed using JavaScript / TypeScript:
 * ```ts
 * let markdown: MarkdownContent = {
 *  kind: MarkupKind.Markdown,
 *  value: [
 *    '# Header',
 *    'Some text',
 *    '```typescript',
 *    'someCode();',
 *    '```'
 *  ].join('\n')
 * };
 * ```
 *
 * *Please Note* that clients might sanitize the return markdown. A client could decide to
 * remove HTML from the markdown to avoid script execution.
 */
export interface MarkupContent {
    /**
     * The type of the Markup
     */
    kind: MarkupKind;
    /**
     * The content itself
     */
    value: string;
}

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