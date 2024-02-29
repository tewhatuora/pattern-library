import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { rem } from '@/src/css/helpers';

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
  neutral: {
    color: vars.color.semantic.text.copy.dark,
    backgroundColor: vars.color.semantic.card.background,
  },
  caution: {
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
      display: 'inlineFlex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 'tags',
    }),
    responsiveStyle({
      mobile: {
        height: rem(22),
        paddingLeft: vars.space.xsmall.mobile,
        paddingRight: vars.space.xsmall.mobile,
      },
      tablet: {
        height: rem(26),
        paddingLeft: vars.space.xsmall.tablet,
        paddingRight: vars.space.xsmall.tablet,
      },
    }),
  ]),
  variants: {
    variant,
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;
