# @creatures-lsp/caos-kt

Core CAOS and catalogue language tooling for JavaScript and TypeScript. It exposes parser, formatter, validation, completion, cursor, and command-library modules used by the CAOS language server.

## Install

```sh
npm install @creatures-lsp/caos-kt
```

## Usage

The root export provides shared types. Import functionality from the documented subpath exports.

```ts
import { useFullCaosLibDefinitions } from "@creatures-lsp/caos-kt/caos-libsfile-full";
import { parseCaos } from "@creatures-lsp/caos-kt/caos-parser";

// Load command and value definitions once before parsing or using other CAOS APIs.
useFullCaosLibDefinitions();

const result = parseCaos("DS", 'scrp 2 11 10 1\nouts "Hello, world!"\nendm');
console.log(result.errors);
```

For smaller bundles, import `useSlimCaosLibDefinitions` from `@creatures-lsp/caos-kt/caos-libsfile-slim` instead. The root module is intentionally side-effect-free and does not load command-library data.

## Public modules

- `caos-parser`: Parse complete documents, nearby scopes, or ranges.
- `caos-tokenizer`: Tokenize CAOS text.
- `caos-formatter`: Format CAOS text.
- `caos-validation` and `caos-validation-report`: Validate CAOS and report diagnostics.
- `caos-completion`, `caos-cursor-data`, `caos-inlay-hints`, and `caos-infer-targ`: Building blocks for editor features.
- `catalogue-core`, `catalogue-index`, `catalogue-cursor`, `catalogue-formatter`, and `catalogue-validation`: Catalogue language tooling.
- `caos-libs`, `caos-libsfile-full`, and `caos-libsfile-slim`: CAOS command-library data and loaders.

Refer to the generated TypeScript declarations shipped with the package for each module's API.

## Requirements

This package is ESM and ships TypeScript declarations. Use it with an environment that supports ES modules.

## License

MIT
