import { style } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { focusOutline } from '@/src/utils/custom';

import { responsiveStyle } from '../../css/responsiveStyle';
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
    borderColor: vars.color.semantic.button.tertiary.border.normal,
    borderWidth: vars.borderWidth.small,
    backgroundColor: vars.color.semantic.button.tertiary.background.normal,
    color: vars.color.semantic.button.tertiary.content.normal,
    paddingTop: vars.space.xsmall.tablet,
    paddingBottom: vars.space.xsmall.tablet,

    selectors: {
      '&:first-child': {
        borderTopLeftRadius: vars.borderRadius.topLeft.button,
        borderBottomLeftRadius: vars.borderRadius.bottomLeft.button,
      },
      '&:last-child': {
        borderTopRightRadius: vars.borderRadius.topRight.button,
        borderBottomRightRadius: vars.borderRadius.bottomRight.button,
      },

      '&[data-state=on]': {
        backgroundColor: vars.color.semantic.button.primary.background.normal,
        color: vars.color.semantic.button.primary.content.normal,
      },
      '&:hover': {
        backgroundColor: vars.color.semantic.button.primary.background.hover,
        color: vars.color.semantic.button.primary.content.normal,
        borderColor: vars.color.semantic.button.primary.border.hover,
      },
      '&[data-state=on]:hover': {
        backgroundColor: vars.color.semantic.button.primary.background.hover,
        color: vars.color.semantic.button.primary.content.normal,
        borderColor: vars.color.semantic.button.primary.border.hover,
      },
      '&:focus': {
        outline: focusOutline,
        outlineOffset: calc.multiply(vars.borderWidth.xlarge, -1),
      },
      '&:focus:not(:focus-visible)': {
        outline: 'none',
      },

      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: vars.color.semantic.button.tertiary.background.disabled,
        color: vars.color.semantic.button.tertiary.content.disabled,
        borderColor: vars.color.semantic.button.tertiary.border.disabled,
      },
      '&[data-state=on]:disabled': {
        backgroundColor: vars.color.semantic.button.primary.background.disabled,
        color: vars.color.semantic.button.primary.content.disabled,
        borderColor: vars.color.semantic.button.primary.border.disabled,
      },
    },
  },
  responsiveStyle({
    mobile: {
      width: rem(150),
    },
    tablet: {
      width: rem(420),
    },
  }),
]);
