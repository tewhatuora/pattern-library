import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { rem } from '@/src/css/helpers';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

/**
 * Align icon to text offset
 */

const variant = {
  positive: {
    color: vars.color.semantic.notifications.alert.content.positive,
  },
  info: {
    color: vars.color.semantic.notifications.alert.content.informative,
  },
  critical: {
    color: vars.color.semantic.notifications.alert.content.critical,
  },
  caution: {
    color: vars.color.semantic.notifications.alert.content.caution,
  },
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
      flexShrink: 0,
      flexGrow: 1,
    }),
    responsiveStyle({
      tablet: {
        width: '75%',
      },
    }),
  ]),
  variants: {
    variant,
  },
});

export type Variants = RecipeVariants<typeof variants>;

export const icon = recipe({
  base: responsiveStyle({
    mobile: {
      marginTop: rem(1),
      marginRight: vars.space.xsmall.mobile,
      flexShrink: 0,
      width: 24,
      height: 24,
    },
    tablet: {
      marginTop: rem(2),
      marginRight: vars.space.xsmall.mobile,
    },
  }),
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

export const content = style({
  wordBreak: 'break-word',
});
