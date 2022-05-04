import { createThemeContract } from '@vanilla-extract/css';

import makeVanillaStyleDictionaryTheme from './makeVanillaStyleDictionaryTheme';

import { tokens } from '../../../styles/web/neutralv2/tokens';

export const contract = createThemeContract(makeVanillaStyleDictionaryTheme(tokens));
