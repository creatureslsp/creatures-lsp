import type {LanguageDocumentIndexedData, Nullable} from "./types";

declare type LanguageData<T> = LanguageDocumentIndexedData<T>;

// noinspection JSUnusedGlobalSymbols
export class LanguageDocumentData<T> {
    private readonly languageData: LanguageData<T> = {};
    
    getDataOrNull(languageId: string, documentURI: string): Nullable<T> {
        if (typeof this.languageData[languageId] === "undefined") {
            return null;
        }
        if (typeof this.languageData[languageId][documentURI] === "undefined") {
            return null;
        }
        return this.languageData[languageId][documentURI];
    }
    
    getOrCreateData = (languageId: string, documentURI: string, create: () => T): T => {
        if (typeof this.languageData[languageId] === "undefined") {
            this.languageData[languageId] = {};
        }
        if (typeof this.languageData[languageId][documentURI] !== "undefined") {
            return this.languageData[languageId][documentURI];
        }
        const data = create()
        this.languageData[languageId][documentURI] = data;
        return data;
    }
    
    setData = (languageId: string, documentURI: string, data: T) => {
        if (typeof this.languageData[languageId] === "undefined") {
            this.languageData[languageId] = {};
        }
        this.languageData[languageId][documentURI] = data;
    }
}