/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check
'use strict';

//@ts-check
// noinspection NodeCoreCodingAssistance
/** @typedef {import('webpack').Configuration} WebpackConfig **/

import * as path from "node:path";
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { createRequire } from 'node:module';
import {fileURLToPath} from "url";

// Reconstruct __dirname and require for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

/** @type WebpackConfig */
const shared = {
    mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
    entry: {
        server: './src/server.ts', // source of the web extension main file
        // 'test/suite/index': './src/web/test/suite/index.ts', // source of the web extension test runner
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs',
        devtoolModuleFilenameTemplate: '../../[resource-path]'
    },
    resolve: {
        mainFields: ['browser', 'module', 'main'], // look for `browser` entry point in imported node modules
        extensions: ['.ts', '.mts', '.js', '.mjs'], // support ts-files and js-files
        extensionAlias: {
            '.js': ['.ts', '.js'],
            '.mjs': ['.mts', '.mjs']
        },
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
        fallback: {
            // Webpack 5 no longer polyfills Node.js core modules automatically.
            // see https://webpack.js.org/configuration/resolve/#resolvefallback
            // for the list of Node.js core module polyfills.
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
    resolve: {
        ...shared.resolve,
        alias: {
            ...shared.resolve.alias,
            'vscode-languageclient/node': 'vscode-languageclient/browser',
            [path.resolve(__dirname, "./src/connection.vscode.ts")]: path.resolve(__dirname, "./src/connection.web.ts"),
            [path.resolve(__dirname, "./src/connection.vscode.js")]: path.resolve(__dirname, "./src/connection.web.js"),
            [path.resolve(__dirname, "./src/files.node.ts")]: path.resolve(__dirname, "./src/files.node.web.ts"),
            [path.resolve(__dirname, "./src/files.node.js")]: path.resolve(__dirname, "./src/files.node.web.js"),
            [path.resolve(__dirname, "./src/caos/commands/inject/caos.inject-c2e.ts ")]: path.resolve(__dirname, "src/caos/commands/inject/caos.inject-c2e.web.ts"),
            [path.resolve(__dirname, "src/caos/commands/inject/caos.inject-c2e.js")]: path.resolve(__dirname, "src/caos/commands/inject/caos.inject-c2e.web.js"),
            [path.resolve(__dirname, "./src/caos/commands/inject/caos.inject-command.ts")]: path.resolve(__dirname, "src/caos/commands/inject/caos.inject-command.web.ts"),
            [path.resolve(__dirname, "src/caos/commands/inject/caos.inject-command.js")]: path.resolve(__dirname, "src/caos/commands/inject/caos.inject-command.web.js"),
        }
    }
};

/** @type WebpackConfig */
const nodeExtensionConfig = {
    ...shared,
    target: 'node', // extensions run in a webworker context
    output: {
        filename: '[name].cjs',
        path: path.join(__dirname, './dist/node'),
        libraryTarget: 'commonjs',
    },
};

export default [webExtensionConfig, nodeExtensionConfig];
