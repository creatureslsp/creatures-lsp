
import type {Nullable} from "./types.d.ts";
import type {Position } from "./index.mjs";
import type { TextEdit } from "./common-lsp-edit.mts";

export declare enum InlayKind {
    /**
     * An inlay hint that for a type annotation.
     */
    Type = 1,
    /**
     * An inlay hint that is for a parameter.
     */
    Parameter = 2,
}

interface InlayHint {
    /**
     * The position of this hint.
     */
    readonly position: Position;

    /**
     * The label of this hint. A human-readable string or an array of
     * InlayHintLabelPart label parts.
     *
     * *Note* that neither the string nor the label part can be empty.
     */
    readonly label: string;

    /**
     * The kind of this hint. Can be omitted in which case the client
     * should fall back to a reasonable default.
     */
    readonly kind?: Nullable<InlayKind>;

    /**
     * Optional text edits that are performed when accepting this inlay hint.
     *
     * *Note* that edits are expected to change the document so that the inlay
     * hint (or its nearest variant) is now part of the document and the inlay
     * hint itself is now obsolete.
     */
    readonly textEdits?: Nullable<TextEdit[]>;

    /**
     * The tooltip text when you hover over this item.
     */
    readonly tooltip?: Nullable<string>;

    /**
     * Render padding before the hint.
     *
     * Note: Padding should use the editor's background color, not the
     * background color of the hint itself. That means padding can be used
     * to visually align/separate an inlay hint.
     */
    readonly paddingLeft?: boolean;

    /**
     * Render padding after the hint.
     *
     * Note: Padding should use the editor's background color, not the
     * background color of the hint itself. That means padding can be used
     * to visually align/separate an inlay hint.
     */
    readonly paddingRight?: Nullable<boolean>;
}


// export declare interface HintsProvider<T> {
//     isApplicable(element: T): boolean;
//     provideHints(element: T): InlayHint[];
//     readonly description: string;
//     readonly option: string;
//     readonly priority: number;
// }
