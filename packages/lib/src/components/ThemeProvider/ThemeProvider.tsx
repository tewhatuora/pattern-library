import { ReactNode } from 'react';

import { Theme } from '@/src/types';

import { BreakpointProvider } from './BreakpointContext';
import { ThemeContext } from './ThemeContext';

// TODO: Unsure why eslint is unable to resolve this path
// eslint-disable-next-line import/no-unresolved
import '@te-whatu-ora/anatomic-themes/styles';

type ThemeProviderProps = {
  theme: Theme;
  children: ReactNode;
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme.className}>
        <BreakpointProvider>{children}</BreakpointProvider>
      </div>
    </ThemeContext.Provider>
  );
};
