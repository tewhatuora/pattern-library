/**
 * Do not edit directly
 * Generated on Thu, 11 Aug 2022 04:37:47 GMT
 */

import { createTheme } from '@vanilla-extract/css';

import makeVanillaTheme from '../makeVanillaTheme';
import { vars } from '../vars.css';
import { tokens } from './tokens';

export default createTheme(vars, makeVanillaTheme(tokens));
