import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

const variant = {
  primary: atoms({
    color: 'primary0',
    backgroundColor: {
      base: 'primary100',
      hover: 'primary75',
      active: 'primary110',
    },
  }),
  secondary: atoms({
    color: 'secondary0',
    backgroundColor: {
      base: 'secondary100',
      hover: 'secondary75',
      active: 'secondary110',
    },
  }),
  tertiary: style([
    atoms({
      color: 'primary100',
      backgroundColor: {
        base: 'neutral0',
      },
      borderColor: 'primary100',
      borderWidth: 'small',
    }),
    style({
      borderStyle: 'solid',
    }),
  ]),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transitionDuration: '150',
      transitionProperty: 'default',
      transitionTimingFunction: 'inOut',
      borderRadius: 'button',
    }),
    responsiveStyle({
      mobile: {
        height: '3.5rem',
        width: '100%',
      },
      tablet: {
        height: '3.75rem',
        width: '24.75rem',
      },
    }),
  ]),
  variants: {
    variant,
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;

export const buttonIcon = style([
  responsiveStyle({
    mobile: {
      marginLeft: vars.space.xsmall.mobile,
    },
    tablet: {
      marginLeft: vars.space.xsmall.tablet,
    },
  }),
]);
