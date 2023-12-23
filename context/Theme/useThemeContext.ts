import React from 'react';

import ThemeContext, { ThemeContextType } from './ThemeContext';

const useThemeContext: () => ThemeContextType = () =>
  React.useContext(ThemeContext);

export default useThemeContext;
