'use client';

import React, { Dispatch } from 'react';
import { ThemeAction, ThemeState } from './reducer';

export type ThemeContextType = {
  themeState: ThemeState;
  dispatchThemeChange: Dispatch<ThemeAction>;
} | null;

const ThemeContext = React.createContext<ThemeContextType>(null);

export default ThemeContext;
