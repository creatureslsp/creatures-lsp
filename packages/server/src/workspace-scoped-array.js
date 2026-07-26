// noinspection JSUnusedGlobalSymbols
export class WorkspaceScopedArray {
    values = {};
    getNotUndefinedCreatingIfUndefined(workspaceUri, init = []) {
        if (typeof this.values[workspaceUri] !== "undefined") {
            return this.values[workspaceUri];
        }
        if (Array.isArray(init)) {
            return this.values[workspaceUri] = init;
        }
        if (typeof init === "function") {
            return this.values[workspaceUri] = init();
        }
        const valueAsString = (typeof init === "object") ? JSON.stringify(init) : (typeof init);
        throw new Error("Invalid value passed to WorkspaceScopedArray.getNotNull(); Type: " + valueAsString);
    }
    getOrUndefined(workspaceUri) {
        if (typeof this.values[workspaceUri] !== "undefined") {
            return this.values[workspaceUri];
        }
        return undefined;
    }
    set(workspaceUri, setter) {
        if (typeof setter === "function") {
            if (typeof this.values[workspaceUri] === "undefined") {
                this.values[workspaceUri] = setter([]);
            }
            else {
                this.values[workspaceUri] = setter(this.values[workspaceUri]);
            }
        }
        else {
            this.values[workspaceUri] = setter;
        }
    }
    length(workspaceUri) {
        return this.getOrUndefined(workspaceUri)?.length ?? 0;
    }
    /**
     * Appends new elements to the end of an array, and returns the new length of the array.
     * @param workspaceUri
     * @param items New elements to add to the array.
     */
    push(workspaceUri, ...items) {
        const array = this.getNotUndefinedCreatingIfUndefined(workspaceUri);
        return array.push(...items);
    }
    /**
     * Removes the last element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     */
    pop(workspaceUri) {
        return this.getOrUndefined(workspaceUri)
            ?.pop() ?? undefined;
    }
    /**
     * Removes the first element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     */
    shift(workspaceUri) {
        return this.getOrUndefined(workspaceUri)
            ?.shift();
    }
    /**
     * Inserts new elements at the start of an array, and returns the new length of the array.
     * @param workspaceUri
     * @param values
     */
    unshift(workspaceUri, ...values) {
        return this.getNotUndefinedCreatingIfUndefined(workspaceUri)
            .unshift(...values);
    }
    /**
     * Removes the last element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     */
    remove(workspaceUri, ...items) {
        const array = this.getOrUndefined(workspaceUri);
        if (array == null) {
            return;
        }
        for (const item of items) {
            let index = -1;
            do {
                index = array.indexOf(item);
                if (index < 0) {
                    return;
                }
                array.splice(index, 1);
            } while (index >= 0);
        }
    }
    /**
     * Returns a copy of a section of an array.
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.
     * For example, -2 refers to the second to last element of the array.
     * @param workspaceUri
     * @param start The beginning index of the specified portion of the array.
     * If start is undefined, then the slice begins at index 0.
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the array.
     */
    slice(workspaceUri, start, end) {
        return this.getOrUndefined(workspaceUri)
            ?.slice(start, end ?? undefined) ?? [];
    }
    splice(workspaceUri, start, end) {
        return this.getOrUndefined(workspaceUri)
            ?.splice(start, end ?? undefined) ?? [];
    }
    /**
     * Combines two or more arrays.
     * This method returns a new array without modifying any existing arrays.
     * @param workspaceUri
     * @param items Additional arrays and/or items to add to the end of the array.
     */
    concat(workspaceUri, ...items) {
        return (this.getOrUndefined(workspaceUri) ?? []).concat(...items);
    }
    /**
     * Adds all the elements of an array into a string, separated by the specified separator string.
     * @param workspaceUri
     * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
     */
    join(workspaceUri, separator) {
        return this.getOrUndefined(workspaceUri)
            ?.join(separator) ?? "";
    }
    /**
     * Reverses the elements in an array in place.
     * This method mutates the array and returns a reference to the same array.
     */
    reverse(workspaceUri) {
        return this.getOrUndefined(workspaceUri)
            ?.reverse() ?? [];
    }
    /**
     * Reverses the elements in a copy of the workspace array
     * This method mutates the array and returns a reference to the same array.
     */
    reversed(workspaceUri) {
        const array = this.getOrUndefined(workspaceUri);
        const copy = array != undefined ? [...array] : [];
        copy.reverse();
        return copy;
    }
    /**
     * Sorts an array in place.
     * This method mutates the array and returns a reference to the same array.
     * @param workspaceUri
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    sort(workspaceUri, compareFn) {
        return this.getOrUndefined(workspaceUri)
            ?.sort(compareFn) ?? [];
    }
    /**
     * Sorts a copy of the workspace array
     * This method mutates the array and returns a reference to the same array.
     * @param workspaceUri
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    sorted(workspaceUri, compareFn) {
        const array = this.getOrUndefined(workspaceUri);
        const copy = array != undefined ? [...array] : [];
        return copy.sort(compareFn);
    }
    /**
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
     * @param workspaceUri
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
     */
    indexOf(workspaceUri, searchElement, fromIndex) {
        return this.getOrUndefined(workspaceUri)
            ?.indexOf(searchElement, fromIndex) ?? -1;
    }
    /**
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
     * @param workspaceUri
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
     */
    lastIndexOf(workspaceUri, searchElement, fromIndex) {
        return this.getOrUndefined(workspaceUri)
            ?.lastIndexOf(searchElement, fromIndex) ?? -1;
    }
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param workspaceUri
     * @param predicate A function that accepts up to three arguments. The every method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the "this" keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the "this" value.
     */
    every(workspaceUri, predicate, thisArg) {
        return (this.getOrUndefined(workspaceUri) ?? []).every(predicate, thisArg);
    }
    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param workspaceUri
     * @param predicate A function that accepts up to three arguments. The "some" method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the "this" keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the "this" value.
     */
    some(workspaceUri, predicate, thisArg) {
        return (this.getOrUndefined(workspaceUri) ?? []).some(predicate, thisArg);
    }
    /**
     * Performs the specified action for each element in an array.
     * @param workspaceUri
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the "this" keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the "this" value.
     */
    forEach(workspaceUri, callbackfn, thisArg) {
        return this.getOrUndefined(workspaceUri)
            ?.forEach(callbackfn, thisArg);
    }
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param workspaceUri
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the "this" keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the "this" value.
     */
    map(workspaceUri, callbackfn, thisArg) {
        return this.getOrUndefined(workspaceUri)
            ?.map(callbackfn, thisArg) ?? [];
    }
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param workspaceUri
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the "this" keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the "this" value.
     */
    filter(workspaceUri, predicate, thisArg) {
        return this.getOrUndefined(workspaceUri)
            ?.filter(predicate, thisArg) ?? [];
    }
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param workspaceUri
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduce(workspaceUri, callbackfn, initialValue) {
        return (this.getOrUndefined(workspaceUri) ?? []).reduce(callbackfn, initialValue);
    }
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param workspaceUri
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduceRight(workspaceUri, callbackfn, initialValue) {
        return (this.getOrUndefined(workspaceUri) ?? []).reduceRight(callbackfn, initialValue);
    }
    containsWorkspace(workspaceUri) {
        return typeof this.values[workspaceUri] !== "undefined";
    }
}
