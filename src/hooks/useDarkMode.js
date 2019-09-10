import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

 export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark', false);

    useEffect(() => {
        const body = document.querySelector('body');
        body.classList.toggle('dark-mode');
    }, [darkMode]);

    const toggleDark = () => {
        setDarkMode(!darkMode);
    }

    return [darkMode, toggleDark];
}