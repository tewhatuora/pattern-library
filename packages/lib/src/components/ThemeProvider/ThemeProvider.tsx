import { ReactNode } from 'react';

import { BreakpointProvider } from './BreakpointContext';
import { ThemeContext } from './ThemeContext';

// TODO: Unsure why eslint is unable to resolve this path
// eslint-disable-next-line import/no-unresolved
import '@te-whatu-ora/anatomic-themes/styles';

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
