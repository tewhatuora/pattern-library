/**
 * Do not edit directly
 * Generated on Wed, 04 May 2022 04:52:45 GMT
 */

import { createTheme } from '@vanilla-extract/css';

import makeVanillaStyleDictionaryTheme from '../../../lib/src/themes/makeVanillaStyleDictionaryTheme';
import { contract } from '../../../lib/src/themes/themeContract.css';
import { tokens } from './tokens';

export default createTheme(contract, makeVanillaStyleDictionaryTheme(tokens));
