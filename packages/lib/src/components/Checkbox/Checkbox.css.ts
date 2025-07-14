import { globalStyle, style } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { getFocusSelectors } from '@/src/utils/custom';

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
        color: vars.color.semantic.text.copy.error,
      },
    },
  },
]);

export const disabled = style({
  color: vars.color.semantic.text.copy.disabled,
});
export const error = style({
  color: vars.color.semantic.text.copy.error,
});

export const checkbox = style({
  all: 'unset',
  width: rem(20),
  height: rem(20),
  borderRadius: rem(4),
  borderStyle: 'solid',
  borderWidth: vars.borderWidth.medium,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  flexShrink: '0',

  // Will be overridden by the selectors below
  borderColor: vars.color.semantic.inputs.elements.border.normal,
  backgroundColor: vars.color.semantic.inputs.fields.background.normal,

  ':hover': {
    backgroundColor: vars.color.semantic.inputs.elements.background['unselected-hover'],
    borderColor: vars.color.semantic.inputs.elements.border.hover,
  },

  selectors: {
    '&:not([data-state="unchecked"])': {
      backgroundColor: vars.color.semantic.inputs.elements.background.selected,
    },
    '&:not([data-state="unchecked"]):hover': {
      backgroundColor: vars.color.semantic.inputs.elements.background['selected-hover'],
      color: vars.color.semantic.icons.dark,
    },

    // The following override `&:not([data-state="unchecked"]):hover`.
    // Otherwise the disabled and error hover styles are wrong.
    '&:disabled, &:disabled:hover': {
      cursor: 'not-allowed',
      borderColor: vars.color.semantic.inputs.elements.border.disabled,
      backgroundColor: vars.color.semantic.inputs.fields.background.normal,
    },
    '&:disabled:not([data-state="unchecked"]), &:disabled:not([data-state="unchecked"]):hover': {
      backgroundColor: vars.color.semantic.inputs.elements.background.disabled,
    },
    '&[aria-invalid="true"], &[aria-invalid="true"]:hover': {
      borderColor: vars.color.semantic.inputs.elements.border.error,
    },
    ...getFocusSelectors(vars.color.semantic.inputs.elements.highlight.focus),
  },
});

export const indicator = style({
  color: vars.color.semantic.icons.light,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle(`${indicator} > svg`, {
  width: rem(12),
  fill: vars.color.semantic.icons.light,
});

export const label = style({
  marginLeft: vars.space.xsmall.tablet,
});
