import {DocumentUri} from "vscode-languageserver";

type SetterInit<T> = T[] | Set<T> | ((value: T[]) => (T[] | Set<T>))

export class WorkspaceScopedSet<T> {
    
    private readonly _values: { [workspaceUri: DocumentUri]: Set<T> } = {};
    
    private getNotUndefinedCreatingIfUndefined(workspaceUri: DocumentUri, init: Set<T> | (() => Set<T>) = () => new Set()): Set<T> {
        if (typeof this._values[workspaceUri.toLowerCase()] !== "undefined") {
            return this._values[workspaceUri.toLowerCase()];
        }
        
        return this._values[workspaceUri.toLowerCase()] = this.getValueFromInit(workspaceUri, init);
    }
    
    private getOrUndefined(workspaceUri: DocumentUri): Set<T> | undefined {
        if (typeof this._values[workspaceUri.toLowerCase()] !== "undefined") {
            return this._values[workspaceUri.toLowerCase()];
        }
        return undefined;
    }
    
    
    /**
     * Sets the workspace Set value
     * @param workspaceUri
     * @param setter if setter is a function, it receives a copy of the sets values
     */
    set(workspaceUri: DocumentUri, setter: SetterInit<T>): void {
        this._values[workspaceUri.toLowerCase()] = this.getValueFromInit(workspaceUri, setter);
    }
    
    private getValueFromInit(workspaceUri: DocumentUri, init: SetterInit<T>): Set<T> {
        let values: any = init;
        if (typeof init === "function") {
            values = (init as Function)(this.valuesOrUndefined(workspaceUri) ?? []);
        }
        if (Array.isArray(values)) {
            return new Set(values as T[]);
        } else if (values instanceof Set) {
            return init as Set<T>;
        } else {
            const valueAsString = (typeof init);
            throw new Error("Invalid value passed to WorkspaceScopedSet.getNotNull(); Type: <" + valueAsString + "> is not a set");
        }
    }
    
    /**
     * Appends a new element with a specified value to the end of the Set.
     */
    add(workspaceUri: DocumentUri, value: T) {
        this.getNotUndefinedCreatingIfUndefined(workspaceUri)
            .add(value);
    }
    
    /**
     * Clears all elements in the set
     */
    clear(workspaceUri: DocumentUri): void {
        this.getOrUndefined(workspaceUri)
            ?.clear();
    }
    
    /**
     * Removes a specified value from the Set.
     * @returns Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
     */
    delete(workspaceUri: DocumentUri, value: T | ((item: T) => boolean)): boolean {
        const set =  this.getOrUndefined(workspaceUri.toLowerCase());
        if (set == null) {
            return false;
        }
        
        if (typeof value !== "function") {
            return set.delete(value) ?? false;
        }
        
        let didDelete = false;
        for (const v of set.values()) {
            if ((value as Function)(v)) {
                didDelete = true;
                set.delete(v);
            }
        }
        return didDelete;
    }
    
    deleteWorkspace(workspaceUri: DocumentUri) {
        delete this._values[workspaceUri.toLowerCase()];
    }
    
    /**
     * Executes a provided function once per each value in the Set object, in insertion order.
     */
    forEach(workspaceUri: DocumentUri, callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void {
        return this.getOrUndefined(workspaceUri)
            ?.forEach(callbackfn, thisArg);
    }
    
    /**
     * @returns a boolean indicating whether an element with the specified value exists in the Set or not.
     */
    has(workspaceUri: DocumentUri, value: T): boolean {
        return this.getOrUndefined(workspaceUri)
            ?.has(value) ?? false;
    }
    
    /**
     * @returns the number of (unique) elements in Set.
     */
    size(workspaceUri: DocumentUri): number {
        return this.getOrUndefined(workspaceUri)?.size ?? 0;
    }
    
    
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param workspaceUri
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the "this" keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the "this" value.
     */
    map<U>(workspaceUri: DocumentUri, callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
        return this.valuesNotUndefined(workspaceUri)
            .map(callbackfn, thisArg) ?? [];
    }
    
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param workspaceUri
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the "this" keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the "this" value.
     */
    filter(workspaceUri: DocumentUri, predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[] {
        return this.valuesNotUndefined(workspaceUri)
            .filter(predicate, thisArg) ?? [];
    }
    
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param workspaceUri
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduce<U>(workspaceUri: DocumentUri, callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        return this.valuesNotUndefined(workspaceUri)
            .reduce(callbackfn, initialValue);
    }
    
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param workspaceUri
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduceRight<U>(workspaceUri: DocumentUri, callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        return this.valuesNotUndefined(workspaceUri)
            .reduceRight(callbackfn, initialValue);
    }
    
    valuesNotUndefined(workspaceUri: DocumentUri): T[] {
        const set = this.getOrUndefined(workspaceUri);
        return set != null ? [...set.values()] : [];
    }
    
    
    valuesOrUndefined(workspaceUri: DocumentUri): T[] | undefined {
        const set = this.getOrUndefined(workspaceUri);
        return set != null ? [...set.values()] : undefined;
    }
    
    
    containsWorkspace(workspaceUri: DocumentUri): boolean {
        return typeof this._values[workspaceUri] !== "undefined";
    }
}
