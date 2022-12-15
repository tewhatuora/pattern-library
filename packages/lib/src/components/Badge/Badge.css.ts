import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { rem } from '@/src/css/helpers';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

const variant = {
  positive: atoms({
    color: 'positive0',
    backgroundColor: {
      base: 'positive100',
    },
  }),
  info: atoms({
    color: 'info0',
    backgroundColor: {
      base: 'info100',
    },
  }),
  neutral: atoms({
    color: 'neutral100',
    backgroundColor: {
      base: 'neutral5',
    },
  }),
  caution: atoms({
    color: 'caution0',
    backgroundColor: {
      base: 'caution100',
    },
  }),
  critical: atoms({
    color: 'error0',
    backgroundColor: {
      base: 'error100',
    },
  }),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      display: 'inlineFlex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 'tags',
    }),
    responsiveStyle({
      mobile: {
        height: rem(22),
        paddingLeft: vars.space.xsmall.mobile,
        paddingRight: vars.space.xsmall.mobile,
      },
      tablet: {
        height: rem(26),
        paddingLeft: vars.space.xsmall.tablet,
        paddingRight: vars.space.xsmall.tablet,
      },
    }),
  ]),
  variants: {
    variant,
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;
