import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

const variant = {
  positive: atoms({
    color: 'positive100',
  }),
  info: atoms({
    color: 'info100',
  }),
  critical: atoms({
    color: 'error100',
  }),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
      flexShrink: '0',
      alignItems: 'center',
      justifyContent: 'spaceBetween',
    }),
    responsiveStyle({
      mobile: {
        fontSize: '1.8rem',
      },
      tablet: {
        fontSize: '2rem',
      },
    }),
  ]),
  variants: {
    variant,
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;

export const noticeIcon = style([
  { float: 'left', display: 'inline' },
  responsiveStyle({
    mobile: {
      marginLeft: vars.space.xsmall.mobile,
      marginRight: vars.space.xsmall.tablet,
    },
    tablet: {
      marginLeft: vars.space.xsmall.tablet,
      marginRight: vars.space.xsmall.tablet,
    },
  }),
]);
