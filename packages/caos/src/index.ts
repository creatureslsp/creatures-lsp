// This barrel is intentionally side-effect-free: importing it never
// initializes caos-kt or loads any command-library data. Call
// one of useFullCaosLibDefinitions(), useSlimCaosLibDefinitions(), or your
// own CAOS lib loader, before calling anything exported here.
//
// Type-only re-export (never a value/bare import — see caos-kt's own
// index.mts for why the bare specifier must stay side-effect-free).
export type {GameVariant, MessageType, Nullable} from "@creatureslsp/caos-kt";

export * from "./commands.js";
export * from "./completions.js";
export * from "./constants.js";
export * from "./context-walker.js";
export * from "./cursor-data.js";
export * from "./document-symbols.js";
export * from "./formatter.js";
export * from "./goto.js";
export * from "./hover-documentation.js";
export * from "./inlay-hints.js";
export * from "./is-similar.js";
export * from "./semantic-highlighter.js";
export * from "./subroutines.js";
export * from "./is-util.js";
export * from "./command-call-positional-data.js";
export * from "./completion/caos2/completions.caos2pray.values.js"
export * from "./drillDown.js";
export * from "./token-utils.js";
export type { JectResult, JectStatus, ScriptJectResult, ScriptType } from "./ject-types.js";