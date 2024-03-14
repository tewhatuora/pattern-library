import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

const variant = {
  positive: {
    color: vars.color.semantic.notifications.alert.content.positive,
    backgroundColor: vars.color.semantic.notifications.alert.background.positive,
  },
  informative: {
    color: vars.color.semantic.notifications.alert.content.informative,
    backgroundColor: vars.color.semantic.notifications.alert.background.informative,
  },
  cautionary: {
    color: vars.color.semantic.notifications.alert.content.caution,
    backgroundColor: vars.color.semantic.notifications.alert.background.caution,
  },
  critical: {
    color: vars.color.semantic.notifications.alert.content.critical,
    backgroundColor: vars.color.semantic.notifications.alert.background.critical,
  },
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
      alignItems: 'flexStart',
      justifyContent: 'spaceBetween',
      borderRadius: 'standard',
    }),
    responsiveStyle({
      mobile: {
        gap: vars.space.xsmall.mobile,
        paddingTop: vars.space.small.mobile,
        paddingBottom: vars.space.small.mobile,
        paddingLeft: vars.space.small.mobile,
        paddingRight: vars.space.small.mobile,
      },
      tablet: {
        gap: vars.space.small.tablet,
        paddingTop: vars.space.small.tablet,
        paddingBottom: vars.space.small.tablet,
        paddingLeft: vars.space.small.tablet,
        paddingRight: vars.space.small.tablet,
      },
    }),
  ]),
  variants: {
    variant,
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;

export const icon = style([
  {
    flexShrink: 0,
    width: 24,
    height: 24,
  },
  responsiveStyle({
    mobile: {
      marginTop: 1,
    },
    tablet: {
      marginTop: 2,
    },
  }),
]);

export const contentWrapper = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
  },
  responsiveStyle({
    mobile: {
      gap: vars.space.xsmall.mobile,
    },
    desktop: {
      gap: vars.space.xsmall.mobile,
    },
  }),
]);

export const content = style({
  wordBreak: 'break-word',
});

export const closeButton = style([
  {
    color: 'currentColor',
  },
  responsiveStyle({
    mobile: {
      marginTop: 5,
    },
    tablet: {
      marginTop: 2,
    },
  }),
]);
