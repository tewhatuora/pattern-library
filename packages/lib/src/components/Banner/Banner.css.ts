import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

const offset = 0.2;
const offsetSmall = `${offset}rem`;
const offsetLarge = `${offset * 2}rem`;

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
      flexGrow: '1',
      alignItems: 'flexStart',
      justifyContent: 'spaceBetween',
    }),
  ]),
  variants: {
    variant,
    theme,
  },
  //for light theme only although no tokens yet, uses the dark theme tokens
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

export const bannerIcon = style([
  {
    display: 'block',
    flexShrink: 0,
  },
  responsiveStyle({
    mobile: {
      marginRight: vars.space.small.mobile,
    },
    tablet: {
      marginRight: vars.space.medium.tablet,
    },
  }),
]);

export const closeButton = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  responsiveStyle({
    mobile: {
      paddingTop: calc.subtract(vars.space.medium.mobile, offsetSmall),
      paddingBottom: calc.subtract(vars.space.medium.mobile, offsetSmall),
      paddingRight: vars.space.small.mobile,
      paddingLeft: vars.space.small.mobile,
    },
    tablet: {
      paddingTop: calc.add(vars.space.small.tablet, offsetLarge),
      paddingBottom: calc.add(vars.space.small.tablet, offsetLarge),
      paddingRight: vars.space.xxlarge.tablet,
      paddingLeft: vars.space.medium.tablet,
    },
  }),
]);

export const hideBanner = style({
  display: 'none',
});

export const bannerText = style([
  responsiveStyle({
    tablet: {
      marginTop: offsetLarge,
    },
  }),
]);

export const bannerInner = style([
  atoms({
    display: 'flex',
    alignItems: 'flexStart',
  }),
  responsiveStyle({
    mobile: {
      paddingTop: vars.space.small.mobile,
      paddingLeft: vars.space.small.mobile,
      paddingBottom: vars.space.small.mobile,
    },
    tablet: {
      width: '75%',
      paddingTop: calc.subtract(vars.space.small.tablet, offsetLarge),
      paddingLeft: vars.space.xxlarge.tablet,
      paddingBottom: calc.subtract(vars.space.small.tablet, offsetLarge),
    },
  }),
]);
