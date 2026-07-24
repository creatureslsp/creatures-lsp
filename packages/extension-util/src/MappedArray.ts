import type {Nullable} from "./types.js";


// noinspection JSUnusedGlobalSymbols
export class MappedArray<K, T> {
    private readonly _map: Map<K, T[]> = new Map();
    
    set(key: K, newArray: T[]) {
        this._map.set(key, newArray);
    }
    
    get(key: K): T[] {
        let out = this._map.get(key);
        if (out != null) {
            return out;
        }
        out = [];
        this.set(key, out);
        return out;
    }
    
    getOrNull(key: K): Nullable<T[]> {
        return this._map.get(key);
    }
    
    /**
     * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
     */
    length(key: K): number {
        return this.getOrNull(key)?.length ?? 0;
    }
    
    mutate(key: K, work: (array:T[]) => T[]): T[] {
        const newArray = work(this.get(key));
        this.set(key, newArray);
        return newArray;
    }
    
    
    map<R>(key: K, work: (value: T, index: number, array: T[]) => R): R[] {
        return (this.getOrNull(key) ?? []).map(work);
    }
    
    clear(key: K): T[] {
        const out = this.getOrNull(key) ?? [];
        this.set(key, []);
        return out;
    }
    
    forEach(key: K, work: (value: T, index: number, array: T[]) => void, thisArg?: unknown): void {
        return (this.getOrNull(key) ?? []).forEach(work, thisArg);
    }
    /**
     * Adds all the elements of an array into a string, separated by the specified separator string.
     * @param key
     * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
     */
    join(key: K, separator?: string): string {
        return (this.getOrNull(key) ?? []).join(separator);
    }
    
    /**
     * Reverses the elements in an array in place.
     * This method mutates the array and returns a reference to the same array.
     */
    reverse(key: K): T[] {
        return this.getOrNull(key)?.reverse() ?? [];
    }
    
    /**
     * Removes the first element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     */
    shift(key: K): T | undefined {
        return this.getOrNull(key)?.shift();
    }
    
    /**
     * Returns a copy of a section of an array.
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.
     * For example, -2 refers to the second to last element of the array.
     * @param key
     * @param start The beginning index of the specified portion of the array.
     * If start is undefined, then the slice begins at index 0.
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the array.
     */
    slice(key: K, start?: number, end?: number): T[] {
        return this.getOrNull(key)?.slice(start, end) ?? [];
    }
    /**
     * Sorts an array in place.
     * This method mutates the array and returns a reference to the same array.
     * @param key
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    sort(key: K, compareFn?: (a: T, b: T) => number): T[] {
        return this.getOrNull(key)?.sort(compareFn) ?? [];
    }
    
    /**
     * Inserts new elements at the start of an array, and returns the new length of the array.
     * @param key
     * @param items Elements to insert at the start of the array.
     */
    unshift(key: K, ...items: T[]): number {
        return this.get(key).unshift(...items) ;
    }
    
    /**
     * Appends new elements to the end of an array, and returns the new length of the array.
     * @param key
     * @param items New elements to add to the array.
     */
    push(key: K, ...items: T[]): number {
        return this.get(key).push(...items)
    }
    
    /**
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
     * @param key
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
     */
    indexOf(key: K, searchElement: T, fromIndex?: number): number {
        return this.getOrNull(key)?.indexOf(searchElement, fromIndex) ?? -1;
    }
    /**
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
     * @param key
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
     */
    lastIndexOf(key: K, searchElement: T, fromIndex?: number): number {
        return this.getOrNull(key)?.lastIndexOf(searchElement, fromIndex) ?? -1;
    }
    
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param key
     * @param predicate A function that accepts up to three arguments. The every method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the 'this' keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the 'this' value.
     */
    every(key: K, predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
        return (this.getOrNull(key) ?? []).every(predicate, thisArg);
    }
    
    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param key
     * @param predicate A function that accepts up to three arguments. The `some` method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the `this` keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the `this` value.
     */
    some(key: K, predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
        return (this.getOrNull(key) ?? []).some(predicate, thisArg);
    }
    
    /**
     * Removes the last element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     */
    pop(key: K): T | undefined {
        return this.getOrNull(key)?.pop();
    }
    /**
     * Combines two or more arrays.
     * This method returns a new array without modifying any existing arrays.
     * @param key
     * @param items Additional arrays and/or items to add to the end of the array.
     */
    concat(key: K, ...items: (T | ConcatArray<T>)[]): T[] {
        return this.get(key).concat(...items)
    }
    
    splice(key: K, start: number, deleteCount: number, ...items: T[]): T[] {
        return this.get(key).splice(start, deleteCount, ...items);
    }
    
    getAt(key: K, index: number): Nullable<T> {
        const out = this.getOrNull(key);
        if (out == null || out.length <= index) {
            return null;
        }
        return out[index];
    }
    
    filter(key: K, predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[] {
        return this.get(key).filter(predicate, thisArg);
    }
    
    reduce<U>(key: K, callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        const array = this.getOrNull(key) ?? [];
        return array.reduce(callbackfn, initialValue);
    }
    
    reduceRight<U>(key: K, callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        const array = this.getOrNull(key) ?? [];
        return array.reduceRight(callbackfn, initialValue);
    }
    
}