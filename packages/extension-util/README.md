# @creatureslsp/extension-util

Shared utilities for the CAOS language-server workspace. This package is published because other workspace packages depend on it, but it is primarily an internal implementation dependency rather than a general-purpose, stability-guaranteed utility library.

## Install

Most consumers should not install this package directly. If you are building an integration that already depends on its APIs:

```sh
npm install @creatureslsp/extension-util
```

## Usage

Import only the specific utility module your integration needs.

```ts
import { filterNotNull } from "@creatureslsp/extension-util/array-util";
import { quoteString } from "@creatureslsp/extension-util/string-util";

const names = filterNotNull(["Ettin", null, "Norn"]);
const quotedName = quoteString(names[0]);
```

## Available utilities

- Array, string, number, boolean, path, hash, and file helpers.
- LSP position, range, token-range, and workspace-edit helpers.
- Virtual-file-system, document-data, and collection utilities.
- Object repacking and inflection helpers.

The API may change alongside the language-server packages. Pin compatible versions if you choose to depend on it directly.

## License

MIT
