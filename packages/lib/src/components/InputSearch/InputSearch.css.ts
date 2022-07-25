import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';

const focusStyle = {
  outline: `${vars.borderWidth.small} solid ${vars.color.caution100}`,
  boxShadow: `inset 0 0 0 0.1rem ${vars.color.caution100}`,
  zIndex: 2,
};

const controlStyle = style({
  position: 'relative',
  border: '0',
  zIndex: 1,
  selectors: {
    '&:focus': focusStyle,
  },
});

export const container = style([
  atoms({
    display: 'flex',
    flexDirection: 'row',
  }),
  {
    borderRadius: vars.borderRadiusAll.inputs,
    border: `${vars.borderWidth.small} solid ${vars.color.primary50}`,
  },
  responsiveStyle({
    mobile: {
      boxShadow: vars.shadow.primary,
    },
    tablet: {
      boxShadow: 'none',
    },
  }),
]);

export const input = style([
  controlStyle,
  {
    borderBottomLeftRadius: vars.borderRadius.bottomLeft.inputs,
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
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
  controlStyle,
  {
    borderTopRightRadius: vars.borderRadius.topRight.inputs,
    borderBottomRightRadius: vars.borderRadius.bottomRight.inputs,
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
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
