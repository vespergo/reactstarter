'use client';

import { useReducer } from 'react';
import ThemeContext from './ThemeContext';
import { themeReducer } from './reducer';

interface ThemeProviderArgs {
  children: React.ReactNode;
}
export const ThemeProvider: React.FunctionComponent<ThemeProviderArgs> = ({
  children,
}) => {
  const [themeState, dispatchThemeChange] = useReducer(themeReducer, {
    theme: 'light',
  });

  return (
    <ThemeContext.Provider value={{ themeState, dispatchThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
