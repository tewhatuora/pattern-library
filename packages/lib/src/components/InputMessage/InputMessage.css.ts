import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';

export const message = style({
  display: 'flex',
  flexDirection: 'column',
});

export const helperText = style({
  color: vars.color.primary100,
});

export const errorMessage = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '1.4rem',
  color: vars.color.error100,
});

export const errorMessageIcon = style({
  marginRight: vars.space.xsmall.mobile,
});
