import { style, styleVariants } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { getFocusSelectors } from '@/src/utils/custom';

import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const container = style([
  {
    marginBottom: rem(20),
    color: vars.color.semantic.text.copy.dark,
  },
  atoms({
    display: 'flex',
  }),
]);

export const radioButton = style([
  atoms({
    reset: 'button',
    display: 'flex',
    cursor: 'pointer',
  }),
  {
    overflow: 'hidden',
    width: rem(24),
    height: rem(24),
    marginTop: rem(4),
    borderStyle: 'solid',
    borderWidth: vars.borderWidth.small,
    borderRadius: '100%',
    borderColor: vars.color.semantic.inputs.elements.border.normal,
    flexShrink: '0',
    transition: 'border-color 0.3s ease-out, background-color 0.3s ease-out',
    selectors: {
      '&:hover': {
        borderColor: vars.color.semantic.inputs.elements.border.hover,
        backgroundColor: vars.color.semantic.inputs.elements.background['unselected-hover'],
      },
      '&[disabled]': {
        borderColor: vars.color.semantic.inputs.elements.border.disabled,
        cursor: 'not-allowed',
      },
      ...getFocusSelectors(vars.color.semantic.inputs.elements.highlight.focus),
    },
  },
]);

export const radioButtonVariant = styleVariants({
  error: [
    radioButton,
    {
      borderColor: vars.color.semantic.inputs.elements.border.error,
    },
  ],
});

export const indicator = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }),
  {
    width: '100%',
    height: '100%',
    backgroundColor: vars.color.semantic.inputs.elements.background.selected,
    transition: 'backgroundColor 0.3s ease-out',
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.semantic.inputs.elements.background['selected-hover'],
      },
      '&:after': {
        content: '""',
        display: 'block',
        width: rem(8),
        height: rem(8),
        borderRadius: '50%',
        backgroundColor: vars.color.semantic.inputs.elements.background.normal,
      },
      [`${radioButton}[disabled] &`]: {
        backgroundColor: vars.color.semantic.inputs.elements.background.disabled,
      },
    },
  },
]);

export const label = style([
  atoms({
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  }),
  {
    marginLeft: vars.space.xsmall.tablet,
  },
  responsiveStyle({
    mobile: {
      marginTop: rem(4),
    },
    tablet: {
      marginTop: '0',
    },
  }),
]);

export const labelVariant = styleVariants({
  disabled: [
    label,
    {
      color: vars.color.semantic.text.copy.disabled,
      cursor: 'not-allowed',
    },
  ],
  error: [
    label,
    {
      color: vars.color.semantic.text.copy.error,
    },
  ],
});
