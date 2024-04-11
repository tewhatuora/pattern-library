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

export const base = style({
  animation: `${rotate} 1s linear infinite`,
  borderRightColor: 'transparent',
  borderBottomColor: 'transparent',
  borderStyle: 'solid',
  borderRadius: '100%',
});

export const baseVariant = styleVariants({
  light: [
    base,
    {
      borderLeftColor: vars.color.semantic.controls.background.light,
      borderTopColor: vars.color.semantic.controls.background.light,
    },
  ],
  dark: [
    base,
    {
      borderLeftColor: vars.color.semantic.controls.background.active,
      borderTopColor: vars.color.semantic.controls.background.active,
    },
  ],
});

const spinnerBase = style([
  {
    marginBottom: rem(16),
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
  light: [baseVariant.light, spinnerBase],
  dark: [baseVariant.dark, spinnerBase],
});

export const label = styleVariants({
  light: {
    color: vars.color.semantic.controls.background.light,
  },
  dark: {
    color: vars.color.semantic.controls.background.active,
  },
});

export type Variant = keyof typeof spinner;
