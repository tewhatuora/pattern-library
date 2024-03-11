import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { getFocusSelectors } from '@/src/utils/custom';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

const COUNTRY_FLAG_WIDTH = {
  mobile: rem(36),
  tablet: rem(48),
};

export const countryDropdown = style([
  {
    position: 'relative',
    backgroundColor: vars.color.semantic.inputs.fields.background.normal,
    color: 'transparent',
    borderTopLeftRadius: vars.borderRadius.topLeft.inputs,
    borderBottomLeftRadius: vars.borderRadius.topLeft.inputs,
    flexShrink: 0,
    borderRight: `${vars.borderWidth.small} solid ${vars.color.semantic.inputs.elements.border.normal}`,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.semantic.inputs.fields.background.hover,
      },
      ...getFocusSelectors(vars.color.semantic.inputs.fields.highlight.focus),
    },
  },
  responsiveStyle({
    /**
     * Country Dropdown width:
     * | l padding | flag width | gap | chevron width | r padding |
     */
    mobile: {
      width: calc(vars.space.small.mobile) // left padding
        .add(COUNTRY_FLAG_WIDTH.mobile) // + flag width
        .add(rem(8)) // + gap
        .add(vars.space.small.mobile) // + icon width (functional)
        .add(vars.space.small.mobile) // + right padding
        .toString(),
    },
    tablet: {
      width: calc(vars.space.xsmall.tablet) // left padding
        .add(COUNTRY_FLAG_WIDTH.tablet) // + flag width
        .add(rem(8)) // + gap
        .add(vars.space.small.tablet) // + icon width (functional)
        .add(vars.space.xsmall.tablet) // + right padding
        .toString(),
    },
  }),
]);

export const select = style({
  color: 'transparent', // hides the select option text
  backgroundColor: 'transparent', // hides the select option text
  zIndex: 2,
});

globalStyle(`.PhoneInput--disabled .${countryDropdown}`, {
  borderColor: vars.color.semantic.inputs.elements.border.disabled,
});

export const flagWrapperBase = style([
  {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    top: '0',
    zIndex: '2',
    pointerEvents: 'none',
  },
  responsiveStyle({
    mobile: {
      left: vars.space.small.mobile,
      width: COUNTRY_FLAG_WIDTH.mobile,
    },
    tablet: {
      left: vars.space.xsmall.tablet,
      width: COUNTRY_FLAG_WIDTH.tablet,
    },
  }),
]);

export const flagWrapper = styleVariants({
  base: [flagWrapperBase],
  international: [
    flagWrapperBase,
    {
      color: vars.color.semantic.icons.dark,
    },
  ],
});
