import { createThemeContract } from '@vanilla-extract/css';

import makeVanillaTheme from './makeVanillaTheme';

import { tokens } from '../../../styles/web/neutralv2/tokens';

export const contract = createThemeContract(makeVanillaTheme(tokens));
