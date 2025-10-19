'use client';
import { createContext, useEffect, useState, ReactNode } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      const isDark = storedTheme === 'dark';
      setDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  // Apply theme when toggled
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggle = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
