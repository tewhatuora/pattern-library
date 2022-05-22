import { globalStyle, style } from '@vanilla-extract/css';

import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

export const icon = style([
  atoms({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
]);

const variant = {
  decorativeIcons: responsiveStyle({
    mobile: {
      height: '2.4rem',
      width: '2.4rem',
    },
    tablet: {
      height: '4rem',
      width: '4rem',
    },
  }),
  functionalIcons: responsiveStyle({
    mobile: {
      height: '1.6rem',
      width: '1.6rem',
    },
    tablet: {
      height: '2.4rem',
      width: '2.4rem',
    },
  }),
  socialIcons: responsiveStyle({
    mobile: {
      height: '3.2rem',
      width: '3.2rem',
    },
    tablet: {
      height: '4rem',
      width: '4rem',
    },
  }),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: icon,
  variants: {
    variant,
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;

globalStyle(`${icon} > svg`, {
  width: '100%',
  height: '100%',
});

globalStyle(`${icon} > svg path`, {
  fill: 'currentColor',
});
