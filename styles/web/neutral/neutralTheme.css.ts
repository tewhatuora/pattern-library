/**
 * Do not edit directly
 * Generated on Fri, 13 May 2022 00:55:19 GMT
 */

import { createTheme } from '@vanilla-extract/css';

import makeVanillaTheme from '../../../lib/src/themes/makeVanillaTheme';
import { vars } from '../../../lib/src/themes/vars.css';
import { tokens } from './tokens';

export default createTheme(vars, makeVanillaTheme(tokens));
