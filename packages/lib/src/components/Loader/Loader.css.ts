import { keyframes, style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const container = style({
  width: '22.4rem',
});

const spinnerStyles = style([
  {
    marginBottom: '1.6rem',
    animation: `${rotate} 1s linear infinite`,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderStyle: 'solid',
    borderRadius: '100%',
  },
  responsiveStyle({
    mobile: {
      width: '3.6rem',
      height: '3.6rem',
      borderWidth: vars.borderWidth.medium,
    },
    desktop: {
      width: '7.2rem',
      height: '7.2rem',
      borderWidth: vars.borderWidth.large,
    },
  }),
]);

export const spinner = styleVariants({
  light: [
    spinnerStyles,
    {
      borderLeftColor: vars.color.primary0,
      borderTopColor: vars.color.primary0,
    },
  ],
  dark: [
    spinnerStyles,
    {
      borderLeftColor: vars.color.primary100,
      borderTopColor: vars.color.primary100,
    },
  ],
});

export const label = styleVariants({
  light: {
    color: vars.color.primary0,
  },
  dark: {
    color: vars.color.primary100,
  },
});

export type Variant = keyof typeof spinner;
