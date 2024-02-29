import { globalStyle, style } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/src/themes/vars.css';

import { atoms } from '../../css/atoms/atoms';

export const input = style([
  atoms({
    display: 'flex',
  }),
]);

export const clearable = style({});

globalStyle(`.${clearable} input`, {
  paddingRight: calc.multiply(vars.space.xsmall.tablet, 3),
});
