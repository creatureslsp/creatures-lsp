import {createConnection, ProposedFeatures} from "vscode-languageserver/node.js";

// Create a connection for the server, using Node's IPC as transport.
// Also include all preview / proposed LSP features.
console.log("Creating connection");
export let connection = createConnection(ProposedFeatures.all);