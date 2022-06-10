import { createVar, style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

/*
marginbottom for radio button
*/
const margin = '2rem';

export const wrapper = style([
  atoms({
    display: 'flex',
  }),
  {
    marginBottom: margin,

    selectors: {
      '&[aria-invalid="true"]': {
        color: vars.color.error100,
      },
    },
  },
]);

export const disabled = style({
  color: vars.color.primary50,
});

export const error = style({
  color: vars.color.error100,
});

export const checkBoxPrimitive = style({
  all: 'unset',
  width: '2.2rem',
  height: '2.2rem',
  borderRadius: '0.4rem',
  borderStyle: 'solid',
  borderWidth: vars.borderWidth.medium,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // Will be overridden by the selectors below
  borderColor: vars.color.primary100,
  backgroundColor: vars.color.primary0,

  ':focus': {
    boxShadow: `0 0 0 0.4rem #BFBFBF`,
    backgroundColor: vars.color.tertiary5,
  },

  ':hover': {
    backgroundColor: vars.color.tertiary25,
  },

  selectors: {
    '&:not([data-state="unchecked"])': {
      backgroundColor: vars.color.primary100,
    },
    '&:not([data-state="unchecked"]):hover': {
      backgroundColor: vars.color.primary110,
    },

    // The following override `&:not([data-state="unchecked"]):hover`.
    // Otherwise the disabled and error hover styles are wrong.
    '&:disabled, &:disabled:hover': {
      borderColor: vars.color.tertiary50,
      backgroundColor: vars.color.tertiary50,
    },
    '&[aria-invalid="true"], &[aria-invalid="true"]:hover': {
      borderColor: vars.color.error100,
    },
  },
});

export const indicator = style({
  color: vars.color.primary0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const text = style({
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
