/**
 * Do not edit directly
 * Generated on Tue, 10 May 2022 22:56:25 GMT
 */

import { createTheme } from '@vanilla-extract/css';

import makeVanillaTheme from '../../../lib/src/themes/makeVanillaTheme';
import { vars } from '../../../lib/src/themes/vars.css';
import { tokens } from './tokens';

export default createTheme(vars, makeVanillaTheme(tokens));
