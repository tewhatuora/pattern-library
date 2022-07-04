import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';

export const message = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '0.4rem',
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
