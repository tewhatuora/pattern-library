import { createContext, useContext } from 'react';

import { Theme } from '@/src/types';

export const ThemeContext = createContext<Theme | null>(null);

export const useTheme = () => {
  const Theme = useContext(ThemeContext);

  if (Theme === null) {
    throw new Error('No theme available on context');
  }

  return Theme;
};
