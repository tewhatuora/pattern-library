import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';

export const field = style({
  position: 'relative',
  display: 'flex',
  gap: vars.space.xsmall.tablet,
});
