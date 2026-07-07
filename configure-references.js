#!/usr/bin/env node

// @ts-check
/* eslint-disable */

const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const isCI = require('is-ci');

const loadConfig = (path) => {
    const content = fs.readFileSync(path).toString();

    // strip comments
    const data = content.replace(
        /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
        (m, g) => (g ? '' : m),
    );

    try {
        return JSON.parse(data);
    } catch (e) {
        console.log("Failed to load config with JSON: " + data);
        throw e;
    }
};

const config = loadConfig('tsconfig.json');
config.files = [];
config.references = [];

(async function() {
    if (isCI) {
        // dont run it on CI
        return;
    }

    const { stdout, stderr } = await exec('yarn workspaces info --json');

    const lines = stdout.split('\n');
    lines.shift()
    lines.pop()
    lines.pop()
    let workspacesTemp;
    try {
        var text = lines.join("\n");
        if (text.length && text[0] !== "{") {
            text = "{" + text + "}";
        }
        workspacesTemp = JSON.parse(text);
    } catch (e) {
        console.error("Failed to JSON parse workspace. ",
            e instanceof Error ? e.message : e,
            ";\nJSON:\n<" + lines.join("\n") + ">"
        );
        workspacesTemp = [];
    }
    for (const name of Object.keys(workspacesTemp)) {
        const workspace = workspacesTemp[name];
        const location = path.resolve(process.cwd(), workspace.location);
        const tsconfigPath = path.resolve(location, 'tsconfig.json');
        if (fs.existsSync(tsconfigPath)) {
            config.references.push({
                path: workspace.location,
            });
            const workspaceConfig = loadConfig(tsconfigPath);
            workspaceConfig.compilerOptions.composite = true;
            workspaceConfig.references = [];
            for (const dependency of workspace.workspaceDependencies) {
                const dependencyLocation = path.resolve(
                    process.cwd(),
                    workspacesTemp[dependency].location,
                );
                if (
                    fs.existsSync(
                        path.resolve(dependencyLocation, 'tsconfig.json'),
                    )
                ) {
                    workspaceConfig.references.push({
                        path: path.relative(location, dependencyLocation),
                    });
                }
            }
            fs.writeFileSync(
                tsconfigPath,
                JSON.stringify(workspaceConfig, undefined, 4),
            );
        }
    }
    fs.writeFileSync('tsconfig.json', JSON.stringify(config, undefined, 4));
})();
