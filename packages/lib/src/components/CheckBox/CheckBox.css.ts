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
    color: 'primary100',
    borderColor: 'primary100',
  }),
  disabled: atoms({
    color: 'primary50',
    borderColor: 'primary50',
  }),
  error: atoms({
    color: 'error100',
    borderColor: 'error100',
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
  width: 25,
  height: 25,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    '&:hover': { backgroundColor: 'violet' },
    '&:focus': { boxShadow: `0 0 0 2px black` },
  },
});

export const indicator = style({
  color: 'violet',
});

export const radioText = style({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: vars.space.xsmall.tablet,
});

export const container = style({
  display: 'flex',
});

export const label = style({
  paddingLeft: '1.5rem',
  userSelect: 'none',
});
