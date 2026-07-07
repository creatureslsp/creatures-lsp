import type {LanguageDocumentIndexedData, Nullable} from "./types";

declare type VersionedData<T> = {
    version: number;
    data: T;
};

declare type VersionedLanguageData<T> = LanguageDocumentIndexedData<VersionedData<T>>;

export class VersionedDocumentData<T> {
    private readonly languageData: VersionedLanguageData<T> = {};
    
    private getVersion(language: string, documentURI: string): number {
        if (typeof this.languageData[language] === "undefined") {
            return -1;
        }
        
        if (typeof this.languageData[language][documentURI] === "undefined") {
            return -1;
        }
        
        return this.languageData[language][documentURI].version;
    }
    
    /**
     * Checks if newVersion is less than old version. Returns false if newVersion is null
     * @param languageId
     * @param documentURI
     * @param newVersion
     */
    isStaleRequest(languageId: string, documentURI: string, newVersion: Nullable<number>): boolean {
        return newVersion != null && newVersion < this.getVersion(languageId, documentURI)
    }
    
    getIfNewVersionIsStale(languageId: string, documentURI: string, newVersion: Nullable<number>): Nullable<T> {
        if (newVersion == null) {
            return null;
        }
        const rawData = this.getRaw(languageId, documentURI);
        if (rawData == null || rawData.version > newVersion) {
            return null;
        }
        return rawData.data;
    }
    
    /**
     * Sets item if new version is greater than old, or new version is null
     * @param languageId
     * @param documentURI
     * @param newVersion if null, item is set
     * @param data
     */
    setIfNew(languageId: string, documentURI: string, newVersion: Nullable<number>, data: T) {
        if (newVersion != null && this.isStaleRequest(languageId, documentURI, newVersion)) {
            return;
        }
        this.setEvenIfStale(languageId, documentURI, newVersion ?? -1, data);
    }
    
    getOrNull(languageId: string, documentURI: string): Nullable<T> {
        if (typeof this.languageData[languageId] === "undefined") {
            return null;
        }
        if (typeof this.languageData[languageId][documentURI] === "undefined") {
            return null;
        }
        return this.languageData[languageId][documentURI].data;
    }
    
    getOrCreate = (languageId: string, documentURI: string, version: number, create: (version: number) => T): T => {
        if (typeof this.languageData[languageId] === "undefined") {
            this.languageData[languageId] = {};
        }
        if (typeof this.languageData[languageId][documentURI] !== "undefined") {
            return this.languageData[languageId][documentURI].data;
        }
        const data = create(version)
        this.languageData[languageId][documentURI] ={
            version,
            data: data
        };
        return data;
    }
    
    setEvenIfStale = (languageId: string, documentURI: string, newVersion: number, data: T) => {
        if (typeof this.languageData[languageId] === "undefined") {
            this.languageData[languageId] = {};
        }
        this.languageData[languageId][documentURI] = {
            version: newVersion,
            data: data,
        };
    }
    
    private getRaw(languageId: string, documentURI: string): Nullable<VersionedData<T>> {
        if (typeof this.languageData[languageId] === "undefined") {
            return null
        }
        
        if (typeof this.languageData[languageId][documentURI] === "undefined") {
            return null
        }
        
        return this.languageData[languageId][documentURI]
    }
}