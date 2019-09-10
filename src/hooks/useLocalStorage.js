import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const item = localStorage.getItem(key);
    const [storedValue, setStoredValue] = useState(JSON.parse(item) || initialValue);

    const setValue = value => {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }
    return [storedValue, setValue];
}