# @creatureslsp/server

Language Server Protocol implementation for the Creatures CAOS language and catalogue files. It provides diagnostics, completions, hover documentation, formatting, semantic tokens, inlay hints, symbols, definitions, references, and rename support.

## Install

```sh
npm install @creatureslsp/server
```

## Use with an editor client

The package exposes a `caos-language-server` executable and a Node/browser server bundle. It is designed to be launched by an LSP-compatible client, such as the accompanying `caos-vscode-client` package.

```sh
npx caos-language-server
```

The Node server uses the transport configured by `vscode-languageserver` for its host integration. Editor clients should launch the executable through their LSP client library instead of treating it as a command-line tool with a human-readable interface.

## Configuration

Clients may provide CAOS settings through the LSP configuration mechanism. The primary setting is:

```json
{
  "caosScript": {
    "variant": "DS"
  }
}
```

Supported variants are `C1`, `C2`, `CV`, `C3`, `DS`, and `DS:CE`.

## License

MIT
