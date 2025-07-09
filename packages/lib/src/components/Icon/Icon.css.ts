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
      height: 24,
      width: 24,
    },
    tablet: {
      height: 40,
      width: 40,
    },
  }),
  functionalIcons: responsiveStyle({
    mobile: {
      height: 16,
      width: 16,
    },
    tablet: {
      height: 24,
      width: 24,
    },
  }),
  socialIcons: responsiveStyle({
    desktop: {
      height: vars.space.large.mobile,
      width: vars.space.large.mobile,
    },
    mobile: {
      height: 32,
      width: 32,
    },
    tablet: {
      height: 32,
      width: 32,
    },
  }),
  tagIcon: responsiveStyle({
    mobile: {
      height: vars.space.xsmall.tablet,
      width: vars.space.xsmall.tablet,
    },
    tablet: {
      height: vars.space.xsmall.tablet,
      width: vars.space.xsmall.tablet,
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

export const noFill = style({});

globalStyle(`${noFill} > svg *`, {
  fill: 'none !important',
});
