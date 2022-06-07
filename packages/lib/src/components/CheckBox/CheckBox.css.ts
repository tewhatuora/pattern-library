import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

/*
marginbottom for radio button
*/
const margin = '2rem';

const state = {
  default: atoms({
    borderColor: 'primary100',
    color: 'primary100',
  }),
  disabled: atoms({
    borderColor: 'primary50',
    color: 'primary50',
  }),
  error: atoms({
    borderColor: 'error100',
    color: 'error100',
  }),
};

export type Variant = keyof typeof state;

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
    }),
    responsiveStyle({
      mobile: {
        marginBottom: margin,
      },
      tablet: {
        marginBottom: margin,
      },
    }),
  ]),
  variants: {
    variant: state,
  },
});

export type Variants = RecipeVariants<typeof variants>;

export const checkBoxPrimitive = style({
  all: 'unset',
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '0.4rem',
  borderStyle: 'solid',
  borderWidth: vars.borderWidth.small,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    '&[data-state=checked]': { backgroundColor: vars.color.primary100 },
    '&:hover': { backgroundColor: vars.color.tertiary25 },
    '&:focus': { boxShadow: `0 0 0 0.4rem #BFBFBF` },
  },
});

export const indicator = style({
  color: vars.color.primary0,
});

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: vars.space.xsmall.tablet,
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const label = style({
  paddingLeft: '1.5rem',
  userSelect: 'none',
});
