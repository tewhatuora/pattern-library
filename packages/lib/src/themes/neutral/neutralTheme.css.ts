/**
 * Do not edit directly
 * Generated on Mon, 13 Jun 2022 21:37:12 GMT
 */

import { createTheme } from '@vanilla-extract/css';

import makeVanillaTheme from '../makeVanillaTheme';
import { vars } from '../vars.css';
import { tokens } from './tokens';

export default createTheme(vars, makeVanillaTheme(tokens));
