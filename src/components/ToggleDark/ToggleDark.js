// components/DarkModeToggle.js
import { useState, useEffect } from 'react';
import {FaMoon,FaSun} from 'react-icons/fa'
import style from './toggledark.module.scss'
const DarkModeToggle = () => {
    const storedDarkMode = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('dark-mode')) || false : false;
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <button
    className={`${isDarkMode?style.darkmode:style.lightmode} ${style.darklightbtn} cursor`}
    onClick={toggleDarkMode}
    style={{
      backgroundColor: isDarkMode ? 'var(--dark-background)' : 'var(--light-background)',
      color: isDarkMode ? 'var(--dark-text)' : 'var(--light-text)',
    }}
  >
    {isDarkMode ? <FaMoon /> : <FaSun />}
  </button>
  );
};

export default DarkModeToggle;
