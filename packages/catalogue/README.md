# @creatures-lsp/catalogue

Editor tooling for Creatures catalogue files. The package provides completion helpers, semantic tokens, ranges, and predicates for integrations built on the Language Server Protocol.

## Install

```sh
npm install @creatures-lsp/catalogue
```

## Usage

Use the package with LSP positions and completion lists. Parsing is handled by `@creatures-lsp/caos-kt` internally when you provide source text.

```ts
import { getCatalogueCompletionItems } from "@creatures-lsp/catalogue";

const completions = await getCatalogueCompletionItems(
  '"Agent Help 1 2 3" "Example"',
  { line: 0, character: 8 },
);

console.log(completions.items);
```

## Exports

- `getCatalogueCompletionItems(...)`: Get completion items at a position.
- `getCatalogueSemanticTokens(...)` and `getCatalogueDocumentSemanticTokens(...)`: Get semantic tokens.
- `getSemanticTokensLegend()`: Get the corresponding semantic-token legend.
- `catalogue.range`: Range helpers for catalogue documents.
- `is`: Predicates for catalogue parser results and items.

## License

MIT
