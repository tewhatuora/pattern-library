import { globalStyle, style } from '@vanilla-extract/css';

import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const icon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
});

const variant = {
  decorativeIcons: responsiveStyle({
    mobile: {
      height: vars.space.medium.mobile,
      width: vars.space.medium.mobile,
    },
    tablet: {
      height: vars.space.large.tablet,
      width: vars.space.large.tablet,
    },
  }),
  functionalIcons: responsiveStyle({
    mobile: {
      height: vars.space.small.mobile,
      width: vars.space.small.mobile,
    },
    tablet: {
      height: vars.space.small.tablet,
      width: vars.space.small.tablet,
    },
  }),
  socialIcons: responsiveStyle({
    mobile: {
      height: vars.space.large.mobile,
      width: vars.space.large.mobile,
    },
    tablet: {
      height: vars.space.large.tablet,
      width: vars.space.large.tablet,
    },
  }),
  tagIcon: responsiveStyle({
    mobile: {
      height: vars.space.small.mobile,
      width: vars.space.small.mobile,
    },
    tablet: {
      height: vars.space.small.mobile,
      width: vars.space.small.mobile,
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

globalStyle(`${icon} > svg *`, {
  fill: 'currentColor',
  stroke: 'currentColor',
});

export const clearIcon = style({});
