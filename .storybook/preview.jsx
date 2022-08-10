import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';

import sbParameters from './parameters';

export const parameters = sbParameters;

addDecorator(withThemes);
