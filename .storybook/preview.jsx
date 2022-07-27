import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';

import { ThemeProvider } from '../packages/lib/src';
// Themes
import neutral, { neutralThemeTokens } from '../packages/lib/src/themes/neutral';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'Neutral',
    list: [
      {
        name: 'Neutral',
        class: neutral,
        color: neutralThemeTokens.color.primary100,
      },
    ],
    Decorator: (props) => <ThemeProvider theme={props.themeClasses}>{props.children}</ThemeProvider>,
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

addDecorator(withThemes);
