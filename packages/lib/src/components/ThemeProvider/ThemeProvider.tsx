import React, { ReactNode } from 'react';

import { BreakpointProvider } from './BreakpointContext';
import { ThemeContext } from './ThemeContext';

type ThemeProviderProps = {
  theme: string;
  children: ReactNode;
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme}>
        <BreakpointProvider>{children}</BreakpointProvider>
      </div>
    </ThemeContext.Provider>
  );
};
