import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

const variant = {
  alert: atoms({
    color: 'primary110',
    backgroundColor: 'caution100',
  }),
  urgent: atoms({
    color: 'error0',
    backgroundColor: 'error100',
  }),
  informative: atoms({
    color: 'error0',
    backgroundColor: 'neutral75',
  }),
};

const theme = {
  light: atoms({
    backgroundColor: 'secondary0',
  }),
  dark: atoms({
    backgroundColor: 'primary110',
  }),
};

export type Variant = keyof typeof variant;
export type Theme = keyof typeof theme;

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
        width: '100%',
        fontSize: '1.8rem',
        paddingLeft: vars.space.small.mobile,
        paddingRight: vars.space.small.mobile,
        paddingTop: vars.space.small.mobile,
        paddingBottom: vars.space.small.mobile,
      },
      tablet: {
        width: '100%',
        fontSize: '2rem',
        paddingLeft: vars.space.xxlarge.tablet,
        paddingRight: vars.space.xxlarge.tablet,
        paddingTop: vars.space.small.tablet,
        paddingBottom: vars.space.small.tablet,
      },
    }),
  ]),
  variants: {
    variant,
    theme,
  },
  compoundVariants: [
    {
      variants: {
        variant: 'alert',
        theme: 'light',
      },
      style: {
        color: 'primary110',
        backgroundColor: 'caution100',
      },
    },
    {
      variants: {
        variant: 'urgent',
        theme: 'light',
      },
      style: {
        color: 'error0',
        backgroundColor: 'error100',
      },
    },
    {
      variants: {
        variant: 'informative',
        theme: 'light',
      },
      style: {
        color: 'error0',
        backgroundColor: 'neutral75',
      },
    },
  ],
});

export type Variants = RecipeVariants<typeof variants>;

export const bannerIconStyles = style([
  { display: 'block', flexShrink: 0 },
  responsiveStyle({
    mobile: {
      marginLeft: vars.space.small.mobile,
      marginRight: vars.space.small.mobile,
    },
    desktop: {
      marginLeft: vars.space.large.tablet,
      marginRight: vars.space.medium.tablet,
    },
  }),
]);

export const closeIconStyles = style([
  { display: 'flex-end', flexShrink: 0 },
  responsiveStyle({
    mobile: {
      marginLeft: vars.space.xsmall.mobile,
      marginRight: vars.space.xsmall.mobile,
    },
    tablet: {
      marginLeft: vars.space.xsmall.tablet,
      marginRight: vars.space.xsmall.tablet,
    },
  }),
]);

export const hideBannerStyles = style({
  display: 'none',
});

export const spanStyles = style({
  display: 'flex',
  alignItems: 'center',
});
