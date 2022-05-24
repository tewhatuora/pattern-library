import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { vars } from '@/src/themes/vars.css';

import { atoms } from '../../css/atoms/atoms';
import { responsiveStyle } from '../../css/responsiveStyle';

const variant = {
  light: atoms({
    borderColor: 'primary0',
  }),
  dark: atoms({
    borderColor: 'primary25',
  }),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      borderStyle: 'none',
      borderTopStyle: 'solid',
    }),
    responsiveStyle({
      mobile: {
        borderTopWidth: vars.borderWidth.small,
        marginBottom: vars.space.medium.mobile,
      },
      desktop: {
        borderTopWidth: vars.borderWidth.medium,
        marginBottom: vars.space.medium.tablet,
      },
    }),
  ]),
  variants: {
    variant,
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;
