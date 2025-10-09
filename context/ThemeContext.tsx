import { createContext, useEffect, useState, ReactNode } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggle: () => setDarkMode(!darkMode) }}>
      {children}
    </ThemeContext.Provider>
  );
};
