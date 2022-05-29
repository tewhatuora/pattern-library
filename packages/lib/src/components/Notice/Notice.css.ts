import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

/**
 * Align icon to text offset
 */
const offset = '0.2rem';

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
      flexGrow: '1',
    }),
    responsiveStyle({
      tablet: {
        width: '75%',
      },
    }),
  ]),
  variants: {
    variant,
  },
});

export type Variants = RecipeVariants<typeof variants>;

export const noticeIcon = style([
  responsiveStyle({
    mobile: {
      marginTop: offset,
      marginLeft: vars.space.xsmall.mobile,
      marginRight: vars.space.xsmall.mobile,
    },
    tablet: {
      marginTop: offset,
      marginLeft: vars.space.xsmall.tablet,
      marginRight: vars.space.xsmall.tablet,
    },
  }),
]);
