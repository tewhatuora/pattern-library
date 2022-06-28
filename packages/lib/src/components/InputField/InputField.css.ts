import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const field = style({
  position: 'relative',
  display: 'flex',
  gap: vars.space.xsmall.tablet,
});

export const inputBase = style([
  responsiveStyle({
    mobile: {
      fontSize: vars.textSize.medium.mobile.fontSize,
    },
    tablet: {
      fontSize: vars.textSize.medium.tablet.fontSize,
    },
  }),
  {
    appearance: 'none',
    width: '100%',
    height: vars.space.xxlarge.tablet,
    lineHeight: vars.space.xxlarge.tablet,
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: vars.space.xsmall.tablet,
    paddingRight: vars.space.xsmall.tablet,
    borderRadius: vars.borderRadiusAll.inputs,
    borderWidth: vars.borderWidth.small,
    borderColor: vars.color.primary50,
    borderStyle: 'solid',
    color: vars.color.neutral50,
    backgroundColor: vars.color.primary0,

    selectors: {
      '&:active': {
        borderColor: vars.color.primary100,
        color: vars.color.primary100,
      },
      '&:focus': {
        color: vars.color.primary100,
        borderColor: vars.color.caution100,
        outline: `${vars.borderWidth.small} solid ${vars.color.caution100}`,
      },
      '&:disabled': {
        color: vars.color.secondary50,
        borderColor: vars.color.secondary50,
        backgroundColor: vars.color.primary0,
        cursor: 'not-allowed',
      },
      '&::placeholder': {
        color: vars.color.neutral50,
      },
    },
  },
]);

export const input = styleVariants({
  base: [inputBase],
  dropdown: [
    inputBase,
    {
      position: 'relative',
      zIndex: 2,
      backgroundColor: 'transparent',
      paddingRight: calc(vars.space.xsmall.tablet).multiply(2).add(vars.space.small.tablet).toString(),
    },
  ],
  multiline: [
    inputBase,
    {
      height: 'auto',
    },
    responsiveStyle({
      mobile: {
        paddingTop: '1.4rem',
        paddingBottom: '1.4rem',
        minHeight: '13.1rem',
        lineHeight: vars.textSize.medium.mobile.lineHeight,
      },
      tablet: {
        paddingTop: '1.2rem',
        paddingBottom: '1.2rem',
        minHeight: '16.6rem',
        lineHeight: vars.textSize.medium.tablet.lineHeight,
      },
    }),
  ],
  error: [
    inputBase,
    {
      borderColor: vars.color.error100,
      outline: `${vars.borderWidth.small} solid ${vars.color.error100}`,
    },
  ],
});

export const clearButton = style({
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  paddingLeft: vars.space.xsmall.tablet,
  paddingRight: vars.space.xsmall.tablet,
  cursor: 'pointer',
});
