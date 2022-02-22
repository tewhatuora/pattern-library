import { createTheme } from '@vanilla-extract/css';

import makeVanillaTheme from '../makeVanillaTheme';

import { vars } from '../vars.css';

import tokens from './tokens';

export default createTheme(vars, makeVanillaTheme(tokens));
