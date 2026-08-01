import type {Nullable} from "../../types.js";
import {type CatalogueParseResult, parseCatalogue} from "@creatureslsp/catalogue/core";

export const createCatalogueParseResultGetter = (
    document: string | (() => Promise<Nullable<string>>)
): () => Promise<CatalogueParseResult|null> => {
    return createCacheablePromise(async (): Promise<CatalogueParseResult|null> => {
        const text = typeof document === "string" ? document : (await document());
        if (!text) {
            return null;
        }
        return parseCatalogue(text);
    });
};



const createCacheablePromise = <T>(create: () => Promise<T>|T): () => Promise<T> => {
    let promise: Nullable<Promise<T>> = null;
    
    return () => {
        if (promise) {
            return promise;
        }
        promise = new Promise(async (resolve, reject) => {
            try {
                const value = await create();
                resolve(value);
            } catch (e) {
                reject(e);
            }
        });
        return promise;
    }
};