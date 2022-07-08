import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const container = style(
  responsiveStyle({
    mobile: {
      boxShadow: vars.shadow.primary,
    },
    tablet: {
      boxShadow: 'none',
    },
  }),
);

export const input = style([
  {
    borderTopLeftRadius: vars.borderRadius.topLeft.inputs,
    borderBottomLeftRadius: vars.borderRadius.bottomLeft.inputs,
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    borderRightWidth: '0',
    selectors: {
      '&:focus': {
        borderWidth: vars.borderWidth.small,
        borderColor: vars.color.caution100,
        outline: 'none',
        boxShadow: `inset 0 0 0 0.1rem ${vars.color.caution100}`,
      },
    },
  },
  responsiveStyle({
    mobile: {
      height: vars.space.xxlarge.mobile,
    },
    tablet: {
      height: calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xsmall.tablet, 4)),
    },
  }),
]);

export const button = style([
  {
    borderTopRightRadius: vars.borderRadius.topRight.inputs,
    borderBottomRightRadius: vars.borderRadius.bottomRight.inputs,
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    selectors: {
      '&:focus': {
        borderWidth: vars.borderWidth.small,
        borderColor: vars.color.caution100,
        outline: 'none',
        boxShadow: `inset 0 0 0 0.1rem ${vars.color.caution100}`,
      },
    },
  },
  responsiveStyle({
    mobile: {
      width: vars.space.xxlarge.mobile,
      height: vars.space.xxlarge.mobile,
    },
    tablet: {
      width: calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xxlarge.tablet, 4)),
      height: calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xsmall.tablet, 4)),
    },
  }),
]);
