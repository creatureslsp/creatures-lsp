# CAOS and Agenteering for Visual Studio Code

Language support for the Creatures series' CAOS scripting language and catalogue files. This repository contains the Visual Studio Code extension, its language server, and reusable npm packages for CAOS and catalogue tooling.

## Features

- Syntax highlighting, diagnostics, formatting, and semantic tokens for CAOS and catalogue files
- Completions, hover documentation, document symbols, definitions, references, and inlay hints
- Support for Creatures 1, Creatures 2, Creatures Village, Creatures 3, Docking Station, and Docking Station: Community Edition
- Commands for selecting a CAOS variant and, where supported, injecting CAOS into a running game

## Install the extension

Install **Creatures CAOS and Agenteering** from the Visual Studio Code Marketplace, then open a workspace containing CAOS or catalogue files. Choose **CAOS: Set CAOS Variant** from the Command Palette to set the workspace variant.

## Configuration

The extension contributes settings under `caosScript`, including:

- `caosScript.variant`: Workspace CAOS variant. Defaults to `DS`.
- `caosScript.maxNumberOfProblems`: Maximum number of diagnostics to report.
- `caosScript.formatting.indentComments` and `caosScript.formatting.keepSameLine`: Formatting behavior.
- `caosScript.inlayHints.*`: Controls for parameter, value, event, bit-flag, and return-value hints.

Use the Settings editor and search for `CAOSScript` for the complete, current list.

## npm packages

Packages are published independently for integrations that need CAOS or catalogue language tooling:

- [`@creatures-lsp/caos-kt`](./packages/caos-kt): CAOS and catalogue parser, formatter, validation, and command-library bindings.
- [`@creatures-lsp/caos`](./packages/caos): CAOS editor features built on `caos-kt`, such as completions, formatting, hovers, and semantic tokens.
- [`@creatures-lsp/catalogue`](./packages/catalogue): Catalogue editor features, including completions and semantic tokens.
- [`@creatures-lsp/extension-util`](./packages/extension-util): Shared utilities used by this project; published for dependency resolution, not intended as a broadly stable API.
- [`@creatures-lsp/server`](./packages/server): The CAOS Language Server Protocol implementation.
- [`@creatures-lsp/vs-client`](./packages/client): The VS Code client used by the extension.

Each package directory has its own npm-focused README with installation and usage notes.

## Development

This is a Yarn workspace. Install dependencies and build all packages with:

```sh
yarn install
yarn build
```

Useful commands:

```sh
yarn lint
yarn package
```

`yarn package` builds the extension and creates a VSIX package.

## License

[MIT](./LICENSE)
