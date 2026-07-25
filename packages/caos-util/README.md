# @creatures-lsp/caos-util

Editor-oriented utilities for the Creatures CAOS language. It builds on `@creatures-lsp/caos-kt` to provide completions, formatting, hover documentation, inlay hints, document symbols, navigation, and semantic tokens.

## Install

```sh
npm install @creatures-lsp/caos-util
```

## Usage

Load CAOS definitions before calling APIs that inspect commands or values. The following formats a CAOS document into Language Server Protocol text edits:

```ts
import { useFullCaosLibDefinitions } from "@creatures-lsp/caos-kt/caos-libsfile-full";
import { format } from "@creatures-lsp/caos-util";

useFullCaosLibDefinitions();

const edits = format("DS", 'scrp 2 11 10 1\nouts "Hello"\nendm', {
  tabSize: 4,
  insertSpaces: true,
  indentComments: true,
  keepSameLine: true,
});
```

For direct parser access, import from `@creatures-lsp/caos-kt/caos-parser`.

## Highlights

- `getCommands(variant)`: Retrieve command definitions for a CAOS variant.
- `format(variant, text, settings)`: Produce LSP `TextEdit` values for formatted CAOS.
- `getCompletionItems(...)`: Produce CAOS completion items at a document position.
- `getHoverItem(...)`: Produce hover documentation at a document position.
- `getCaosInlayHintsWithOffset(...)`: Produce inlay hints with a given char offset.
- `getCaosDocumentSemanticTokens(...)`: Produce semantic tokens.

The package uses ESM and LSP types from `vscode-languageserver-types`.

## License

MIT
