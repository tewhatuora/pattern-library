import { createThemeContract } from '@vanilla-extract/css';

import makeVanillaTheme from './makeVanillaTheme';

import { tokens } from './themes/neutral/web/tokens';

export const contract = createThemeContract(makeVanillaTheme(tokens));
