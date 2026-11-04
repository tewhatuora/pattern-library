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
  info: {
    color: vars.color.semantic.notifications.alert.content.informative,
    backgroundColor: vars.color.semantic.notifications.alert.background.informative,
  },
  critical: {
    color: vars.color.semantic.notifications.alert.content.critical,
    backgroundColor: vars.color.semantic.notifications.alert.background.critical,
  },
  caution: {
    color: vars.color.semantic.notifications.alert.content.caution,
    backgroundColor: vars.color.semantic.notifications.alert.background.caution,
  },
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    {
      borderRadius: vars.borderRadiusAll.standard,
      alignItems: 'center',
    },
    atoms({
      display: 'flex',
      flexShrink: 0,
      flexGrow: 1,
    }),
    responsiveStyle({
      mobile: {
        padding: vars.space.small.mobile,
        gap: vars.space.xsmall.mobile,
      },
      tablet: {
        padding: vars.space.small.tablet,
        gap: vars.space.xsmall.tablet,
      },
    }),
  ]),
  variants: {
    variant,
  },
});

export type Variants = RecipeVariants<typeof variants>;

export const icon = recipe({
  base: {
    flexShrink: 0,
    width: vars.space.small.tablet,
    height: vars.space.small.tablet,
  },
  variants: {
    variant: {
      positive: {
        color: vars.color.semantic.notifications.alert.icons.positive,
      },
      info: {
        color: vars.color.semantic.notifications.alert.icons.informative,
      },
      critical: {
        color: vars.color.semantic.notifications.alert.icons.critical,
      },
      caution: {
        color: vars.color.semantic.notifications.alert.icons.caution,
      },
    },
  },
});
