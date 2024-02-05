import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

const offset = 2;
const offsetSmall = rem(offset);
const offsetLarge = rem(offset * 2);

const variant = {
  alert: {
    color: vars.color.semantic.notifications.banner.content.caution,
    backgroundColor: vars.color.semantic.notifications.banner.background.caution,
  },
  urgent: {
    color: vars.color.semantic.notifications.banner.content.critical,
    backgroundColor: vars.color.semantic.notifications.banner.background.critical,
  },
  informative: {
    color: vars.color.semantic.notifications.banner.content.informative,
    backgroundColor: vars.color.semantic.notifications.banner.background.informative,
  },
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
      flexShrink: 0,
      // flexGrow: 1,
      alignItems: 'flexStart',
      justifyContent: 'spaceBetween',
    }),
  ]),
  variants: {
    variant,
  },
});

export type Variants = RecipeVariants<typeof variants>;

export const icon = style([
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
    borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),
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

export const childrenWrapper = style([
  responsiveStyle({
    tablet: {
      marginTop: offsetLarge,
    },
  }),
]);

export const bannerInner = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
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
