import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { focusSelectorsStyles } from '@/src/utils/custom';

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
    // overflow: 'hidden',
    width: '100%',
    // height: rem(),
    lineHeight: 1.6,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: vars.borderRadiusAll.inputs,
    borderWidth: vars.borderWidth.small,
    borderColor: vars.color.primary50,
    borderStyle: 'solid',
    color: vars.color.neutral100,
    backgroundColor: vars.color.primary0,

    selectors: {
      '&:active': {
        borderColor: vars.color.primary100,
        color: vars.color.neutral100,
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
        boxShadow: `0 0 0 ${rem(1)} ${vars.color.error100}`,
      },
      ...focusSelectorsStyles,
    },
  },
]);

export const input = styleVariants({
  base: [inputBase],
  clearable: [
    inputBase,
    responsiveStyle({
      mobile: {
        paddingRight: 48,
      },
      tablet: {
        paddingRight: 56,
      },
    }),
  ],
  dropdown: [
    inputBase,
    {
      position: 'relative',
      zIndex: 2,
      // backgroundColor: 'transparent',
      color: vars.color.neutral100,
    },
    responsiveStyle({
      mobile: {
        paddingRight: 32,
      },
      tablet: {
        paddingRight: 40,
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
        paddingTop: rem(14),
        paddingBottom: rem(14),
        minHeight: rem(131),
        lineHeight: vars.textSize.medium.mobile.lineHeight,
      },
      tablet: {
        paddingTop: rem(12),
        paddingBottom: rem(12),
        minHeight: rem(166),
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

export const errorBorder = style({
  borderColor: vars.color.error100,
  boxShadow: `0 0 0 ${rem(1)} ${vars.color.error100}`,
});

globalStyle(`${input.phone} ${inputBase}`, {
  border: 'none',
  boxShadow: 'none',
});

globalStyle(`${input.phone} input${inputBase}`, {
  borderTopLeftRadius: '0',
  borderBottomLeftRadius: '0',
});
globalStyle(`${input.phone} select${inputBase}`, {
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
});

export const clearButtonBase = style([
  {
    position: 'absolute',
    top: '50%',
    right: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 24,
    minHeight: 24,
    // height: vars.space.xxlarge.tablet,
    // paddingLeft: vars.space.xsmall.tablet,
    // paddingRight: vars.space.xsmall.tablet,
    borderRadius: '50%',
    cursor: 'pointer',
    transform: 'translateY(-50%)',
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
