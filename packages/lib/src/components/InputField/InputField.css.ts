import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { focusSelectorsStyles, getFocusSelectors } from '@/src/utils/custom';

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
    width: '100%',
    height: vars.space.xxlarge.tablet,
    lineHeight: vars.space.xxlarge.tablet,
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: vars.space.xsmall.tablet,
    paddingRight: vars.space.xsmall.tablet,
    borderRadius: vars.borderRadiusAll.inputs,
    borderWidth: vars.borderWidth.small,
    borderColor: vars.color.semantic.inputs.fields.border.normal,
    borderStyle: 'solid',
    color: vars.color.semantic.text.copy.dark,
    backgroundColor: vars.color.semantic.inputs.fields.background.normal,

    selectors: {
      '&:disabled': {
        color: vars.color.semantic.text.copy.disabled,
        borderColor: vars.color.semantic.inputs.fields.border.disabled,
        backgroundColor: vars.color.semantic.inputs.fields.background.normal,
        cursor: 'not-allowed',
      },
      '&::placeholder': {
        color: vars.color.semantic.text.copy.placeholder,
      },
      '&[aria-invalid="true"]:not([disabled])': {
        borderColor: vars.color.semantic.inputs.fields.border.error,
        boxShadow: `0 0 0 ${rem(1)} ${vars.color.semantic.inputs.fields.border.error}`,
      },
      ...getFocusSelectors(vars.color.semantic.inputs.fields.highlight.focus),
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
      color: vars.color.semantic.text.copy.dark,
    },
    responsiveStyle({
      mobile: {
        paddingRight: calc(vars.space.small.mobile) // Functional icon width
          .add(vars.space.small.mobile) // + icon right
          .add(vars.space.small.mobile) // + gap between copy and icon (icon right)
          .toString(),
      },
      tablet: {
        paddingRight: calc(vars.space.small.tablet) // Functional icon width
          .add(vars.space.xsmall.tablet) // + icon right
          .add(vars.space.xsmall.tablet) // + gap between copy and icon (icon right)
          .toString(),
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
      height: 'auto',
      padding: '0',
    },
  ],
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

globalStyle(`.PhoneInput--disabled.${input.phone}`, {
  borderColor: vars.color.semantic.inputs.elements.border.disabled,
});

globalStyle(`.PhoneInput--error.${input.phone}`, {
  borderColor: vars.color.semantic.inputs.fields.border.error,
  boxShadow: `0 0 0 ${rem(1)} ${vars.color.semantic.inputs.fields.border.error}`,
});

export const clearButtonBase = style([
  {
    position: 'absolute',
    top: rem(1),
    right: 0,
    display: 'flex',
    alignItems: 'center',
    height: vars.space.xxlarge.tablet,
    paddingLeft: vars.space.xsmall.tablet,
    paddingRight: vars.space.xsmall.tablet,
    borderRadius: vars.borderRadiusAll.inputs,
    cursor: 'pointer',
    zIndex: 2,
    selectors: {
      ...focusSelectorsStyles,
    },
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
