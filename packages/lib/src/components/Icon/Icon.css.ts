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
      height: vars.space.xsmall.tablet,
      width: vars.space.xsmall.tablet,
    },
    tablet: {
      height: vars.space.small.tablet,
      width: vars.space.small.tablet,
    },
  }),
  socialIcons: responsiveStyle({
    desktop: {
      height: vars.space.large.mobile,
      width: vars.space.large.mobile,
    },
    mobile: {
      height: vars.space.large.mobile,
      width: vars.space.large.mobile,
    },
    tablet: {
      height: vars.space.large.mobile,
      width: vars.space.large.mobile,
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

export const clearIcon = style({});

export const noFill = style({});

globalStyle(`${noFill} > svg *`, {
  fill: 'none !important',
});
