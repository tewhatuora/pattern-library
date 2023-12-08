import { style } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { focusOutline } from '@/src/utils/custom';

import { vars } from '../../themes/vars.css';

export const group = style({
  display: 'flex',
});

export const buttonText = style({
  paddingLeft: rem(4),
  paddingRight: rem(4),
});

export const button = style([
  {
    all: 'unset',
    display: 'flex',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: vars.color.primary100,
    borderWidth: vars.borderWidth.small,
    backgroundColor: vars.color.primary0,
    color: vars.color.primary100,
    paddingTop: vars.space.xsmall.tablet,
    paddingBottom: vars.space.xsmall.tablet,
    cursor: 'pointer',
    width: '100%',

    selectors: {
      '&:first-child': {
        borderTopLeftRadius: vars.borderRadius.topLeft.standard,
        borderBottomLeftRadius: vars.borderRadius.bottomLeft.standard,
      },
      '&:last-child': {
        borderTopRightRadius: vars.borderRadius.topRight.standard,
        borderBottomRightRadius: vars.borderRadius.bottomRight.standard,
      },
      '&:hover': {
        borderColor: vars.color.primary75,
      },
      '&[data-state=on]': { backgroundColor: vars.color.primary100, color: vars.color.primary0 },
      '&:focus': {
        outline: focusOutline,
        outlineOffset: calc.multiply(vars.borderWidth.xlarge, -1),
      },
      '&:focus:not(:focus-visible)': {
        outline: 'none',
      },

      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: vars.color.primary0,
        color: vars.color.primary25,
        borderColor: vars.color.primary25,
      },
      '&[data-state=on]:disabled': {
        backgroundColor: vars.color.tertiary25,
        color: vars.color.primary0,
        borderColor: vars.color.tertiary25,
      },
    },
  },
]);
