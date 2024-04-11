import { style } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '@/src/css/responsiveStyle';

import { vars } from '../../themes/vars.css';

export const field = style({
  position: 'relative',
  display: 'flex',
  gap: vars.space.xsmall.tablet,
});

export const fieldLabel = style([
  responsiveStyle({
    mobile: {
      marginBottom: calc.divide(vars.space.xsmall.mobile, 2),
    },
    tablet: {
      marginBottom: calc.divide(vars.space.xsmall.tablet, 2),
    },
  }),
]);

export const fieldMessage = style([
  responsiveStyle({
    mobile: {
      marginTop: calc.divide(vars.space.xsmall.mobile, 2),
    },
    tablet: {
      marginTop: calc.divide(vars.space.xsmall.tablet, 2),
    },
  }),
]);
