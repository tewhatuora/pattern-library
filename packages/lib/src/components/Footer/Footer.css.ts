import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';

// TODO: Update all hardcoded number pixel values to tokens

export const firstRow = style({
  height: 72,
});

// TODO: Change how govt logo is implemented and update styles accordingly

export const govtLogoWrapper = style({
  height: 64,
  width: 265,
});

export const otherLogosWrapper = style({
  height: 72,
  gap: 56,
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

export const imprintItems = style({ gap: 48 });
