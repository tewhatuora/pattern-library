import { ReactNode } from 'react';

import { Theme } from '@/src/types';

import { BreakpointProvider } from './BreakpointContext';
import { ThemeContext } from './ThemeContext';

type ThemeProviderProps = {
  theme: Theme;
  children: ReactNode;
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  if (!theme) {
    throw new Error('ThemeProvider requires a theme prop');
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme.className}>
        <BreakpointProvider>{children}</BreakpointProvider>
      </div>
    </ThemeContext.Provider>
  );
};
