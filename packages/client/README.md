# caos-vscode-client

The Visual Studio Code client for the CAOS Language Server. It is the extension-host component that starts the server and registers CAOS and catalogue editor features.

## Install

This package is intended to be consumed as part of the **Creatures CAOS and Agenteering** VS Code extension. It is published to support the workspace's package layout, not as a standalone VS Code extension.

```sh
npm install caos-vscode-client
```

## Integration

The package's entry point exports the extension lifecycle. A VS Code extension can delegate activation to it:

```ts
import * as vscode from "vscode";
import { activate, deactivate } from "caos-vscode-client";

export { activate, deactivate };
```

The client expects the CAOS language-server bundle and the configuration contributed by the parent extension. For a complete integration, use this repository's root extension manifest as the reference implementation.

## License

MIT
