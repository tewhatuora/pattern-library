import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const message = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: rem(4),
});

export const helperText = style({
  color: vars.color.semantic.text.copy.dark,
});

export const errorMessage = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: calc.divide(vars.space.xsmall.tablet, 4),
});

export const errorMessageIcon = style(
  responsiveStyle({
    mobile: { marginRight: calc.divide(vars.space.xsmall.mobile, 2) },
    tablet: { marginRight: calc.divide(vars.space.xsmall.tablet, 2) },
  }),
);
