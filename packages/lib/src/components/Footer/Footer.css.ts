import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';

export const firstRow = style({
  height: 72, // TODO: Convert to space
});

// TODO: Change how govt logo is implemented and update styles accordingly

export const govtLogoWrapper = style({
  width: 265,
});

export const otherLogosWrapper = style({
  height: 72,
});

// Second Row

export const secondRow = style({
  gap: 64,
});

export const lessSpace = style({
  gap: 40,
});

// Third row
export const social = style({ gap: 22 });

export const socialIcons = style({
  color: vars.color.neutral25,
});
