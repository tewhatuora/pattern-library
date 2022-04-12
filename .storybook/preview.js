import {addDecorator} from "@storybook/react";
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'moh-design-system-poc/src';
import neutral, { neutralThemeTokens } from 'moh-design-system-poc/src/themes/neutral';
import myCovidRecord, { myCovidRecordThemeTokens } from 'moh-design-system-poc/src/themes/myCovidRecord';
import myHealthAccount, { myHealthAccountThemeTokens } from 'moh-design-system-poc/src/themes/myHealthAccount';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
  },
};

const themeMap = {
  neutral,
  myCovidRecord,
  myHealthAccount,
};

// Wrap story components with <ThemeProvider>, with vanilla-extract theme applied.
const providerFn = ({ theme, children }) => <ThemeProvider theme={themeMap[theme.name]}>{children}</ThemeProvider>;

// create decorator
addDecorator(withThemes(null, [neutralThemeTokens, myCovidRecordThemeTokens, myHealthAccountThemeTokens], { providerFn }));
