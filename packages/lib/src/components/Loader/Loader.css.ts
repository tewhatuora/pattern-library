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

export const spinner = style([
  {
    animation: `${rotate} 1s linear infinite`,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderStyle: 'solid',
    borderRadius: '100%',
  },
  responsiveStyle({
    mobile: {
      width: '4rem',
      height: '4rem',
      borderWidth: '0.2rem', // TODO: use tokens
    },
    desktop: {
      width: '8rem',
      height: '8rem',
      borderWidth: '0.4rem', // TODO: use tokens
    },
  }),
]);

export const variant = styleVariants({
  light: [
    spinner,
    {
      borderLeftColor: vars.color.primary0,
      borderTopColor: vars.color.primary0,
    },
  ],
  dark: [
    spinner,
    {
      borderLeftColor: vars.color.primary100,
      borderTopColor: vars.color.primary100,
    },
  ],
});

export const labelVariant = styleVariants({
  light: {
    color: vars.color.primary0,
  },
  dark: {
    color: vars.color.primary100,
  },
});

export type Variant = keyof typeof variant;
