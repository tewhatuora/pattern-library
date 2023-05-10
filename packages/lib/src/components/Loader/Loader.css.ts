import { keyframes, style, styleVariants } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const container = style({
  width: rem(224),
});

const spinnerStyles = style([
  {
    marginBottom: rem(16),
    animation: `${rotate} 1s linear infinite`,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderStyle: 'solid',
    borderRadius: '100%',
  },
  responsiveStyle({
    mobile: {
      width: rem(36),
      height: rem(36),
      borderWidth: vars.borderWidth.medium,
    },
    desktop: {
      width: rem(72),
      height: rem(72),
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
