import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const options = style(
  responsiveStyle({
    mobile: { marginTop: vars.space.small.mobile },
    tablet: { marginTop: vars.space.xsmall.tablet },
  }),
);
