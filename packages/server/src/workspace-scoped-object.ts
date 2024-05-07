// noinspection JSUnusedGlobalSymbols

import {DocumentUri} from "vscode-languageserver";
import {Nullable} from "@bedalton/extension-util";

export class WorkspaceScopedObject<K extends number | string, V> {
    
    private readonly values: { [workspaceUri: DocumentUri]: { [key: number | string]: V } };
    private readonly create: () => Nullable<V>;
    
    constructor(initialValues: { [workspaceUri: DocumentUri]: { [key: number | string]: V } } = {}, create?: () => V) {
        this.values = initialValues;
        this.create = create ?? (() => undefined);
    }
    
    get(workspaceUri: DocumentUri, key: K, defaultValue?: Nullable<V>): Nullable<V> {
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
    
    setIfNotSet(workspaceUri: DocumentUri, key: K, value: V): void {
        if (this.containsKeyNotNull(workspaceUri, key)) {
            return;
        }
        this.set(workspaceUri, key, value);
    }
    
    set(workspaceUri: DocumentUri, key: K, value: V): void {
        if (typeof this.values[workspaceUri] === "undefined") {
            this.values[workspaceUri] = {};
        }
        this.values[workspaceUri][key] = value;
    }
    
    deleteWorkspace(workspaceUri: DocumentUri): void {
        if (typeof this.values[workspaceUri] === "undefined") {
            return;
        }
        delete this.values[workspaceUri];
    }
    
    delete(workspaceUri: DocumentUri, key: K): void {
        if (typeof this.values[workspaceUri] === "undefined" || typeof this.values[workspaceUri][key] === "undefined") {
            return;
        }
        delete this.values[workspaceUri][key];
    }
    
    containsWorkspace(workspaceUri: DocumentUri): boolean {
        return typeof this.values[workspaceUri] !== "undefined";
    }
    
    containsKey(workspaceUri: DocumentUri, key: K): boolean {
        return typeof this.values[workspaceUri] !== "undefined" && this.values[workspaceUri].hasOwnProperty(key);
    }
    
    containsKeyNotNull(workspaceUri: DocumentUri, key: K): boolean {
        return this.containsKey(workspaceUri, key)
            && this.values[workspaceUri][key] != null;
    }
}


export class WorkspaceScopedProperty<T> {
    
    private readonly values: { [workspaceUri: DocumentUri]: T } = {};
    private readonly create: () => T
    
    constructor(create: () => T) {
        this.create = create;
    }
    
    getNotNull(workspaceUri: DocumentUri, construct: () => T = this.create): T {
        if (typeof this.values[workspaceUri] === "undefined") {
            this.values[workspaceUri] = construct();
        }
        return this.values[workspaceUri];
    }
    
    getOrNull(workspaceUri: DocumentUri): Nullable<T> {
        if (typeof this.values[workspaceUri] !== "undefined") {
            return this.values[workspaceUri];
        }
        return undefined;
    }
    
    set(workspaceUri: DocumentUri, setter: Nullable<T> | ((value: T) => T)) {
        if (typeof setter === "function") {
            if (typeof this.values[workspaceUri] === "undefined") {
                this.values[workspaceUri] = (setter as Function)(this.create());
            } else {
                this.values[workspaceUri] = (setter as Function)(this.values[workspaceUri])
            }
        } else {
            this.values[workspaceUri] = setter as T;
        }
    }
    
    
    containsWorkspace(workspaceUri: DocumentUri): boolean {
        return typeof this.values[workspaceUri] !== "undefined";
    }
    
}



