import React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { ThemeProvider } from '../packages/lib/src';
import { neutral, webSelfService } from '../packages/themes';
import sbParameters from './parameters';

export const parameters = sbParameters;
export const tags = ['autodocs'];

const themes = {
  neutral,
  webSelfService,
};

const preview = {
  decorators: [
    (Story, options) => {
      return (
        <ThemeProvider theme={themes[options.globals.theme ?? themes.neutral]}>
          <Story />
        </ThemeProvider>
      );
    },
    withThemeByClassName({
      themes: Object.keys(themes).reduce(
        (map, name) => ({
          ...map,
          [name]: themes[name].className,
        }),
        {},
      ),
      defaultTheme: neutral.className,
    }),
  ],
};

export default preview;
