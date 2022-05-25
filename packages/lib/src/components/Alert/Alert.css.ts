import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

const variant = {
  positive: atoms({
    color: 'positive100',
    backgroundColor: {
      base: 'positive5',
    },
  }),
  informative: atoms({
    color: 'info100',
    backgroundColor: {
      base: 'info5',
    },
  }),
  cautionary: atoms({
    color: 'caution0',
    backgroundColor: {
      base: 'caution5',
    },
  }),
  critical: atoms({
    color: 'error100',
    backgroundColor: {
      base: 'error5',
    },
  }),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
      alignItems: 'center',
    }),
    responsiveStyle({
      mobile: {
        gap: vars.space.xsmall.mobile,
        paddingTop: vars.space.xsmall.mobile,
        paddingBottom: vars.space.xsmall.mobile,
        paddingLeft: vars.space.small.mobile,
        paddingRight: vars.space.small.mobile,
      },
      tablet: {
        gap: vars.space.xsmall.tablet,
        paddingTop: vars.space.xsmall.tablet,
        paddingBottom: vars.space.xsmall.tablet,
        paddingLeft: vars.space.small.tablet,
        paddingRight: vars.space.small.tablet,
      },
    }),
  ]),
  variants: {
    variant,
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;

export const icon = style({
  flexShrink: 0,
});
