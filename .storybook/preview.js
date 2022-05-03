import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from '@mohnz/design-system/src';
// Themes
import neutral, { neutralThemeTokens } from '@mohnz/design-system/src/themes/neutral';
import myCovidRecord, { myCovidRecordThemeTokens } from '@mohnz/design-system/src/themes/myCovidRecord';
import myHealthAccount, { myHealthAccountThemeTokens } from '@mohnz/design-system/src/themes/myHealthAccount';

import neutralv2, { tokens as neutralv2ThemeTokens } from '../styles/web/neutralv2/neutralv2Theme.css';

// Add themes for vanilla-extract here
const themeMap = {
  neutral,
  myCovidRecord,
  myHealthAccount,
  neutralv2,
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Wrap story components with <ThemeProvider>, with vanilla-extract theme applied.
const providerFn = ({ theme, children }) => <ThemeProvider theme={themeMap[theme.name]}>{children}</ThemeProvider>;

// Create decorator with theme tokens
addDecorator(
  withThemes(
    null,
    [neutralThemeTokens, myCovidRecordThemeTokens, myHealthAccountThemeTokens, neutralv2ThemeTokens],
    {
      providerFn,
    },
  ),
);
