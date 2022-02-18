import { createContext, useContext } from 'react';

export const ThemeContext = createContext<string | null>(null);

export const useTheme = () => {
  const Theme = useContext(ThemeContext);

  if (Theme === null) {
    throw new Error('No theme available on context');
  }

  return Theme;
};
