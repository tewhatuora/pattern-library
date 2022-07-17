import { createVar, style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { vars } from '../../themes/vars.css';
import { atoms } from '../../css/atoms/atoms';
import { responsiveStyle } from '../../css/responsiveStyle';

const thicknessVar = createVar();

const variant = {
  light: atoms({
    backgroundColor: 'primary0',
  }),
  dark: atoms({
    backgroundColor: 'primary25',
  }),
};

export type Variant = keyof typeof variant;

const dividerStyle = style({
  vars: {
    [thicknessVar]: vars.borderWidth.small,
  },
  selectors: {
    '&[data-orientation=horizontal]': {
      width: '100%',
      height: thicknessVar,
    },
    '&[data-orientation=vertical]': {
      width: thicknessVar,
      height: '100%',
    },
  },
});

export const variants = recipe({
  base: style([
    dividerStyle,
    responsiveStyle({
      mobile: {
        vars: {
          [thicknessVar]: vars.borderWidth.small,
        },
      },
      desktop: {
        vars: {
          [thicknessVar]: vars.borderWidth.medium,
        },
      },
    }),
  ]),
  variants: {
    variant,
  },
});

export type Variants = RecipeVariants<typeof variants>;
