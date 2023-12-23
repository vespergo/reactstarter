export interface ThemeState {
  theme: 'dark' | 'light';
}

export interface ThemeAction {
  type: string;
  payload?: any;
}

export function themeReducer(
  state: ThemeState,
  action: ThemeAction,
): ThemeState {
  switch (action.type) {
    case 'setTheme':
      return { theme: action.payload };
    case 'toggleTheme':
      return { theme: state.theme === 'dark' ? 'light' : 'dark' };
    default:
      throw Error('Unknown action');
  }
}
