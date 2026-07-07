/*---------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check
// noinspection NodeCoreCodingAssistance
/** @typedef {import('webpack').Configuration} WebpackConfig **/

import path from 'node:path';
import { fileURLToPath } from 'url';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { createRequire } from 'node:module';

// Reconstruct __dirname and require for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

/** @type WebpackConfig */
const shared = {
    mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
    entry: {
        extension: './src/extension.ts', // source of the web extension main file
    },
    output: {
        filename: '[name].cjs',
        path: path.join(__dirname, './dist/web'),
        // Note: If you are entirely moving the output bundle to ESM, 
        // you would use library: { type: 'module' }, but VS Code web extensions 
        // often still require 'commonjs'. Keeping 'commonjs' for safety here.
        libraryTarget: 'commonjs',
        devtoolModuleFilenameTemplate: '../../[resource-path]'
    },
    resolve: {
        mainFields: ['browser', 'module', 'main'], // look for `browser` entry point in imported node modules
        extensions: ['.ts', '.js', '.mts', '.mjs'], // support ts-files and js-files
        extensionAlias: {
            '.js': ['.ts', '.js'],
            '.mjs': ['.mts', '.mjs']
        },
        fallback: {
            // Webpack 5 no longer polyfills Node.js core modules automatically.
            assert: require.resolve('assert'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
    externals: {
        vscode: 'commonjs vscode', // ignored because it doesn't exist
    },
    performance: {
        hints: false,
    },
    devtool: 'nosources-source-map', // create a source map that points to the original source file
};

/** @type WebpackConfig */
const webExtensionConfig = {
    ...shared,
    target: 'webworker', // extensions run in a webworker context
    output: {
        filename: '[name].cjs',
        path: path.join(__dirname, './dist/web'),
        libraryTarget: 'commonjs',
    },
    plugins: [
        new NodePolyfillPlugin({
            excludeAliases: ['console']
        })
    ],
};

// Fixed assignment syntax for standard object extension
webExtensionConfig.resolve = {
    ...webExtensionConfig.resolve,
    alias: {
        'vscode-languageclient/node': 'vscode-languageclient/browser',
        [path.resolve(__dirname, "./src/spinUpServer.vscode.ts")]: path.resolve(__dirname, "./src/spinUpServer.web.ts"),
        [path.resolve(__dirname, "./src/spinUpServer.vscode.js")]: path.resolve(__dirname, "./src/spinUpServer.web.js"),
    }
};

/** @type WebpackConfig */
const nodeExtensionConfig = {
    ...shared,
    target: 'node', // extensions run in a node context
    output: {
        filename: '[name].cjs',
        path: path.join(__dirname, './dist/node'),
        libraryTarget: 'commonjs',
    },
};

export default [webExtensionConfig, nodeExtensionConfig];