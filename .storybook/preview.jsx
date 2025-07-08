import React from 'react';
import { withThemeByClassName, withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from '../packages/lib/src';
import { neutral, webSelfService } from '../packages/themes';

import sbParameters from './parameters';

export const parameters = sbParameters;
export const tags = ['autodocs', 'autodocs'];

import '@healthnz/pattern-library/styles';
import '@healthnz/pattern-library-themes/styles';


export const decorators = [ withThemeFromJSXProvider({
  themes: {
    ['Neutral']: neutral,
    ['Web Self-Service']: webSelfService,
  },
  defaultTheme: "Web Self-Service",
  Provider: ThemeProvider,
})
]

const preview = {};

export default preview;
