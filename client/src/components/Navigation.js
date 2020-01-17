import React from 'react';
import { useDarkMode } from '../hooks/usDarkMode';

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <button
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}

export default Navigation;