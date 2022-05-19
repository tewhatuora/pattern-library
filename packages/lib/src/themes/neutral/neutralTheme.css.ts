/**
 * Do not edit directly
 * Generated on Wed, 18 May 2022 22:39:41 GMT
 */

import { createTheme } from '@vanilla-extract/css';

import makeVanillaTheme from '../makeVanillaTheme';
import { vars } from '../vars.css';
import { tokens } from './tokens';

export default createTheme(vars, makeVanillaTheme(tokens));
