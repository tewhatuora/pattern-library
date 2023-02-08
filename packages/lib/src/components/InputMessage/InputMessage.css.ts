import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { vars } from '../../themes/vars.css';

export const message = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: rem(4),
});

export const helperText = style({
  color: vars.color.primary100,
});

export const errorMessage = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: calc.divide(vars.space.xsmall.tablet, 4),
  color: vars.color.error100,
});

export const errorMessageIcon = style({
  marginRight: vars.space.xsmall.mobile,
});
