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
    selectors: {
      '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
        {
          display: 'none',
        },
    },
  },
  responsiveStyle({
    mobile: {
      height: vars.space.xxlarge.tablet,
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
      width: vars.space.xxlarge.tablet,
      height: vars.space.xxlarge.tablet,
    },
    tablet: {
      width: calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xsmall.mobile, 2)),
      height: calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xsmall.mobile, 2)),
    },
  }),
]);
