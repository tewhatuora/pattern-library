/**
 * Do not edit directly
 * Generated on Tue, 03 May 2022 22:01:18 GMT
 */

import { createTheme } from '@vanilla-extract/css';

import makeVanillaTheme from '../../../lib/src/themes/makeVanillaTheme';
import { contract } from '../../../lib/src/themes/themeContract.css';
import { tokens } from './tokens';

export default createTheme(contract, makeVanillaTheme(tokens));
