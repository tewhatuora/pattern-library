import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

const variant = {
  primary: atoms({
    color: 'brandAccentContrast',
    backgroundColor: {
      base: 'brandAccent100',
      hover: 'brandAccent75',
      active: 'brandAccent110',
    },
  }),
  secondary: atoms({
    color: 'brandSecondaryContrast',
    backgroundColor: {
      base: 'brandSecondary100',
      hover: 'brandSecondary75',
      active: 'brandSecondary110',
    },
  }),
  tertiary: style([
    atoms({
      color: 'brandPrimary100',
      backgroundColor: {
        base: 'neutral0',
      },
      borderColor: 'brandPrimary100',
      borderWidth: 'standard',
    }),
    style({
      borderStyle: 'solid',
    }),
  ]),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transitionDuration: '150',
      transitionProperty: 'default',
      transitionTimingFunction: 'inOut',
      borderRadius: 'standard',
    }),
    responsiveStyle({
      mobile: {
        height: '3.5rem',
        width: '100%',
      },
      tablet: {
        height: '3.75rem',
        width: '24.75rem',
      },
    }),
  ]),
  variants: {
    variant,
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;
