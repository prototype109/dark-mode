import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

 export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark', initialValue);

    useEffect(() => {
        const body = document.querySelector('body');
        body.classList.toggle('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];
}