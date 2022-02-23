import React, { ReactNode } from 'react';

import { Box, ThemeProvider } from 'moh-design-system/components';

import { useThemeSettings } from './ThemeSettingContext';

type ToggleableThemeProviderProps = {
  children: ReactNode;
};

export function ToggleableThemeProvider({ children }: ToggleableThemeProviderProps) {
  const { theme, ready } = useThemeSettings();

  return (
    <Box opacity={!ready ? 0 : undefined} transition="fast">
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Box>
  );
}
