import { ReactNode, Ref, forwardRef } from 'react';

import { Theme } from '@/src/types';

import { BreakpointProvider } from './BreakpointContext';
import { ThemeContext } from './ThemeContext';

import '@healthnz/pattern-library/styles';

export type ThemeProviderProps = {
  theme: Theme;
  children: ReactNode;
};

export const ThemeProvider = forwardRef(function ThemeProvider(
  { theme, children }: ThemeProviderProps,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme.className} ref={ref}>
        <BreakpointProvider>{children}</BreakpointProvider>
      </div>
    </ThemeContext.Provider>
  );
});
