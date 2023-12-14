import {createConnection, ProposedFeatures} from "vscode-languageserver/node";

// Create a connection for the server, using Node's IPC as transport.
// Also include all preview / proposed LSP features.
export let connection = createConnection(ProposedFeatures.all);