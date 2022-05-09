import { createThemeContract } from '@vanilla-extract/css';

import makeVanillaTheme from './makeVanillaTheme';

import { tokens } from '../../../styles/web/neutral/tokens';

export const vars = createThemeContract(makeVanillaTheme(tokens));
