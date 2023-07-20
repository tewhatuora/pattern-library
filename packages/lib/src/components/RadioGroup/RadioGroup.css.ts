import { style, styleVariants } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { focusSelectorsStyles } from '@/src/utils/custom';

import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const container = style([
  {
    marginBottom: rem(20),
  },
  atoms({
    display: 'flex',
    color: 'primary100',
    borderColor: 'primary100',
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
    borderColor: vars.color.primary100,
    flexShrink: '0',
    transition: 'border-color 0.3s ease-out, outline-color 0.3s ease-out, background-color 0.3s ease-out',
    selectors: {
      '&:hover': {
        borderColor: vars.color.primary75,
        backgroundColor: vars.color.primary25,
      },
      '&[disabled]': {
        borderColor: vars.color.primary50,
        cursor: 'not-allowed',
      },
      ...focusSelectorsStyles,
    },
  },
]);

export const radioButtonVariant = styleVariants({
  error: [
    radioButton,
    {
      borderColor: vars.color.error100,
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
    backgroundColor: vars.color.primary100,
    transition: 'backgroundColor 0.3s ease-out',
    selectors: {
      '&:after': {
        content: '""',
        display: 'block',
        width: rem(8),
        height: rem(8),
        borderRadius: '50%',
        backgroundColor: vars.color.primary0,
      },
      [`${radioButton}[disabled] &`]: {
        backgroundColor: vars.color.primary50,
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
      color: vars.color.primary50,
      cursor: 'not-allowed',
    },
  ],
  error: [
    label,
    {
      color: vars.color.error100,
    },
  ],
});
