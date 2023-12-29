import {useState} from 'react';

export const useLocalStorage = (key: any, initialValue:any) => {
    const storagePrefix = 'THAI_TOUR';
    const storageKey = storagePrefix + '_' + key;

    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(storageKey);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value: any) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(storageKey, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};