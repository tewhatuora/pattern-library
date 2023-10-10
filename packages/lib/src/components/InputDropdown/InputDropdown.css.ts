import { globalStyle, style } from '@vanilla-extract/css';

import { input } from '../InputField/InputField.css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const chevron = style([
  {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: vars.color.primary100,
    cursor: 'pointer',
    zIndex: 2,
  },
  responsiveStyle({
    mobile: {
      right: 8,
    },
    // tablet: {
    //   right: vars.space.xsmall.tablet,
    // },
  }),
]);

export const placeholder = style([
  {
    position: 'absolute',
    height: vars.space.xxlarge.tablet,
    lineHeight: vars.space.xxlarge.tablet,
    paddingLeft: vars.space.xsmall.tablet,
    paddingRight: vars.space.xsmall.tablet,
    color: vars.color.neutral50,
  },
  responsiveStyle({
    mobile: {
      fontSize: vars.textSize.medium.mobile.fontSize,
    },
    tablet: {
      fontSize: vars.textSize.medium.tablet.fontSize,
    },
  }),
]);

globalStyle(`${input.dropdown}:focus + ${placeholder}`, {
  color: 'transparent',
});
