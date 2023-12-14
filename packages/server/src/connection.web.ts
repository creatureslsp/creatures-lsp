import { createConnection, BrowserMessageReader, BrowserMessageWriter } from 'vscode-languageserver/browser';

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

console.log("Creating connect WEB");
export const connection = createConnection(messageReader, messageWriter);