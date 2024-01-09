'use client';

import { createContext, useState, useContext } from 'react';

import { DARK, LIGHT } from '../constants/theme';

const ThemeContext = createContext({
  theme: LIGHT,
  onThemeToggle: function () {},
});

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState(LIGHT);

  const onThemeToggle = function () {
    setTheme(function (prevTheme) {
      return prevTheme === LIGHT ? DARK : LIGHT;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, onThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
