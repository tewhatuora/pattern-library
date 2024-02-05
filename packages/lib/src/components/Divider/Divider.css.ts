import { createVar, style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

const thicknessVar = createVar();

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
    variant: {
      light: {
        backgroundColor: vars.color.semantic.structure.divider.dark,
      },
      dark: {
        backgroundColor: vars.color.semantic.structure.divider.light,
      },
    },
  },
});

export type Variants = RecipeVariants<typeof variants>;
