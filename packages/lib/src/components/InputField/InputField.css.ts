import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';

export const field = style([
  atoms({
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
  }),
]);

export const fieldSegments = style([
  responsiveStyle({
    mobile: {
      gap: vars.space.small.mobile,
    },
    tablet: {
      gap: vars.space.xsmall.tablet,
    },
  }),
]);

export const fieldSegment = style({
  flex: 1,
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
    overflow: 'hidden',
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
    color: vars.color.primary100,
    backgroundColor: vars.color.primary0,

    selectors: {
      '&:active': {
        borderColor: vars.color.primary100,
        color: vars.color.primary100,
      },
      '&:focus, &:focus-within': {
        color: vars.color.primary100,
        borderColor: vars.color.caution100,
        boxShadow: `0 0 0 0.1rem ${vars.color.caution100}`,
        outline: 'none',
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
      '&[aria-invalid="true"]:not([disabled])': {
        borderColor: vars.color.error100,
        boxShadow: `0 0 0 0.1rem ${vars.color.error100}`,
        outline: 'none',
      },
    },
  },
]);

export const input = styleVariants({
  base: [inputBase],
  clearable: [
    inputBase,
    {
      paddingRight: calc.multiply(vars.space.xsmall.tablet, 3),
    },
  ],
  dropdown: [
    inputBase,
    {
      position: 'relative',
      zIndex: 2,
      backgroundColor: 'transparent',
      color: vars.color.primary100,
    },
    responsiveStyle({
      mobile: {
        paddingRight: calc(vars.space.xsmall.mobile).multiply(2).add(vars.space.small.mobile).toString(),
      },
      tablet: {
        paddingRight: calc(vars.space.xsmall.tablet).multiply(2).add(vars.space.small.tablet).toString(),
      },
    }),
  ],
  dropdownPlaceholder: [
    inputBase,
    {
      color: 'transparent',
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
  phone: [
    inputBase,
    {
      padding: '0',
    },
  ],
});

globalStyle(`${input.phone} ${inputBase}`, {
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
});

globalStyle(`${input.phone} select${inputBase}`, {
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
});

export const clearButtonBase = style([
  {
    position: 'absolute',
    top: '0.1rem',
    right: 0,
    display: 'flex',
    alignItems: 'center',
    height: vars.space.xxlarge.tablet,
    paddingLeft: vars.space.xsmall.tablet,
    paddingRight: vars.space.xsmall.tablet,
    cursor: 'pointer',
    zIndex: 2,
  },
]);

export const clearButton: Record<string, string> = styleVariants({
  search: [
    clearButtonBase,
    responsiveStyle({
      mobile: {
        top: '0',
        height: vars.space.xxlarge.tablet,
      },
      tablet: {
        top: '0',
        height: calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xsmall.tablet, 4)),
      },
    }),
  ],
});

export type ClearButtonVariant = keyof typeof clearButton;
