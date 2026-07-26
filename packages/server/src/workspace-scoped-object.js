// noinspection JSUnusedGlobalSymbols
export class WorkspaceScopedObject {
    values;
    create;
    constructor(initialValues = {}, create) {
        this.values = initialValues;
        this.create = create ?? (() => undefined);
    }
    get(workspaceUri, key, defaultValue) {
        if (typeof this.values[workspaceUri] === "undefined") {
            this.values[workspaceUri] = {};
        }
        if (typeof this.values[workspaceUri][key] === "undefined") {
            if (defaultValue == null) {
                defaultValue = this.create();
                if (defaultValue) {
                    this.values[workspaceUri][key] = defaultValue;
                }
            }
            return defaultValue;
        }
        return this.values[workspaceUri][key];
    }
    setIfNotSet(workspaceUri, key, value) {
        if (this.containsKeyNotNull(workspaceUri, key)) {
            return;
        }
        this.set(workspaceUri, key, value);
    }
    set(workspaceUri, key, value) {
        if (typeof this.values[workspaceUri] === "undefined") {
            this.values[workspaceUri] = {};
        }
        this.values[workspaceUri][key] = value;
    }
    deleteWorkspace(workspaceUri) {
        if (typeof this.values[workspaceUri] === "undefined") {
            return;
        }
        delete this.values[workspaceUri];
    }
    delete(workspaceUri, key) {
        if (typeof this.values[workspaceUri] === "undefined" || typeof this.values[workspaceUri][key] === "undefined") {
            return;
        }
        delete this.values[workspaceUri][key];
    }
    containsWorkspace(workspaceUri) {
        return typeof this.values[workspaceUri] !== "undefined";
    }
    containsKey(workspaceUri, key) {
        return typeof this.values[workspaceUri] !== "undefined" && this.values[workspaceUri].hasOwnProperty(key);
    }
    containsKeyNotNull(workspaceUri, key) {
        return this.containsKey(workspaceUri, key)
            && this.values[workspaceUri][key] != null;
    }
}
export class WorkspaceScopedProperty {
    values = {};
    create;
    constructor(create) {
        this.create = create;
    }
    getNotNull(workspaceUri, construct = this.create) {
        if (typeof this.values[workspaceUri] === "undefined") {
            this.values[workspaceUri] = construct();
        }
        return this.values[workspaceUri];
    }
    getOrNull(workspaceUri) {
        if (typeof this.values[workspaceUri] !== "undefined") {
            return this.values[workspaceUri];
        }
        return null;
    }
    set(workspaceUri, setter) {
        if (typeof setter === "function") {
            if (typeof this.values[workspaceUri] === "undefined") {
                this.values[workspaceUri] = setter(this.create());
            }
            else {
                this.values[workspaceUri] = setter(this.values[workspaceUri]);
            }
        }
        else {
            this.values[workspaceUri] = setter;
        }
    }
    containsWorkspace(workspaceUri) {
        return typeof this.values[workspaceUri] !== "undefined";
    }
}
