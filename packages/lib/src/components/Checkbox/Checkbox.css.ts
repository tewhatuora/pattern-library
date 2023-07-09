import { globalStyle, style } from '@vanilla-extract/css';

import { focusSelectorsStyles } from '@/src/utils/custom';
import { rem } from '@/src/css/helpers';

import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

export const wrapper = style([
  atoms({
    display: 'flex',
  }),
  {
    marginBottom: rem(20),

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

export const checkbox = style({
  all: 'unset',
  width: rem(22),
  height: rem(22),
  borderRadius: rem(4),
  borderStyle: 'solid',
  borderWidth: vars.borderWidth.medium,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  // Will be overridden by the selectors below
  borderColor: vars.color.primary100,
  backgroundColor: vars.color.primary0,

  ':hover': {
    backgroundColor: vars.color.tertiary25,
    borderColor: vars.color.primary110,
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
      cursor: 'not-allowed',
      borderColor: vars.color.tertiary50,
      backgroundColor: vars.color.primary0,
    },
    '&:disabled:not([data-state="unchecked"]), &:disabled:not([data-state="unchecked"]):hover': {
      backgroundColor: vars.color.tertiary50,
    },
    '&[aria-invalid="true"], &[aria-invalid="true"]:hover': {
      borderColor: vars.color.error100,
    },

    // Focus styles
    ...focusSelectorsStyles,
  },
});

export const indicator = style({
  color: vars.color.primary0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle(`${indicator} > svg`, {
  width: rem(12),
  fill: vars.color.primary0,
});

export const label = style({
  marginLeft: vars.space.xsmall.tablet,
});
