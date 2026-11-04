import { ReactNode, Ref, forwardRef } from 'react';

import { Theme } from '@/src/types';

import { BreakpointProvider } from './BreakpointContext';
import { ThemeContext } from './ThemeContext';

export type ThemeProviderProps = {
  /** Theme to apply, e.g. `neutral` from `@healthnz/pattern-library-themes`. Its class goes on a wrapper `div`. */
  theme: Theme;
  children: ReactNode;
};

/**
 * Applies a theme to everything inside it and tracks the current breakpoint, which components need. Wrap
 * the app in it once, with both stylesheets imported. `ref` is forwarded to the wrapper `div`.
 *
 * @example
 * import '@healthnz/pattern-library/styles';
 * import '@healthnz/pattern-library-themes/styles';
 * import { ThemeProvider } from '@healthnz/pattern-library';
 * import { neutral } from '@healthnz/pattern-library-themes';
 *
 * <ThemeProvider theme={neutral}>
 *   <App />
 * </ThemeProvider>
 */
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
