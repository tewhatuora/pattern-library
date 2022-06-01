import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from '../packages/lib/src';
// Themes
import neutral, { neutralThemeTokens } from '../packages/lib/src/themes/neutral';


// Add themes for vanilla-extract here
const themeMap = {
  // neutral,
  neutral,
  // myCovidRecord,
  // myHealthAccount,
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

export const argTypes = {
  as: {
    table: {
      disable: true,
    },
    control: false,
  },
  onPress: {
    table: {
      disable: true,
    },
    control: false,
  },
};

// Wrap story components with <ThemeProvider>, with vanilla-extract theme applied.
const providerFn = ({ theme, children }) => <ThemeProvider theme={themeMap[theme.name]}>{children}</ThemeProvider>;

// Create decorator with theme tokens
addDecorator(
  withThemes(
    null,
    [neutralThemeTokens],//, myCovidRecordThemeTokens, myHealthAccountThemeTokens],
    {
      providerFn,
    },
  ),
);
