/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check
'use strict';

//@ts-check
// noinspection NodeCoreCodingAssistance
/** @typedef {import('webpack').Configuration} WebpackConfig **/

const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

/** @type WebpackConfig */
const shared = {
    mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
    entry: {
        extension: './src/extension.ts', // source of the web extension main file
        // 'test/suite/index': './src/web/test/suite/index.ts', // source of the web extension test runner
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist/web'),
        libraryTarget: 'commonjs',
        devtoolModuleFilenameTemplate: '../../[resource-path]'
    },
    resolve: {
        mainFields: ['browser', 'module', 'main'], // look for `browser` entry point in imported node modules
        extensions: ['.ts', '.js'], // support ts-files and js-files
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
        filename: '[name].js',
        path: path.join(__dirname, './dist/web'),
        libraryTarget: 'commonjs',
    },
    resolve: {
        mainFields: ['browser', 'module', 'main'], // look for `browser` entry point in imported node modules
        extensions: ['.ts', '.js'], // support ts-files and js-files

        fallback: {
            // Webpack 5 no longer polyfills Node.js core modules automatically.
            // see https://webpack.js.org/configuration/resolve/#resolvefallback
            // for the list of Node.js core module polyfills.
            assert: require.resolve('assert'),
        },
    },
    plugins: [
        new NodePolyfillPlugin({
            excludeAliases: ['console']
        })
    ],
};

webExtensionConfig.resolve.alias = {
    'vscode-languageclient/node': 'vscode-languageclient/browser',
    [path.resolve(__dirname, "./src/spinUpServer.vscode.ts")]: path.resolve(__dirname, "./src/spinUpServer.web.ts"),
};


/** @type WebpackConfig */
const nodeExtensionConfig = {
    ...shared,
    target: 'node', // extensions run in a webworker context
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist/node'),
        libraryTarget: 'commonjs',
    },
};

module.exports = [webExtensionConfig, nodeExtensionConfig];
