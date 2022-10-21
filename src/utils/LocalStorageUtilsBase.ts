/**
 * KeyObjectPair - type object that define pair const string type and value type
 */
export class LocalStorageUtilsBase<KeyObjectPair extends Record<string, any>> {
    public getObject(
        key: Extract<keyof KeyObjectPair, string>,
    ): KeyObjectPair[typeof key] | null {
        const stringItem = localStorage.getItem(key);
        if (!stringItem)
            return null;

        try {
            const objectItem = JSON.parse(stringItem);
            if (objectItem instanceof Object)
                return objectItem;
        } catch (e) {}
        return null;
    }

    /**
     * KeyObjectPair - type object that define pair const string type and value type
     * @param key
     * @param value
     */
    public setItem(
        key: Extract<keyof KeyObjectPair, string>,
        value: KeyObjectPair[keyof KeyObjectPair],
    ) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * get item (string) from local storage
     * @param key
     */
    public getItem(
        key: Extract<keyof KeyObjectPair, string>,
    ) {
        localStorage.getItem(key);
    }
}