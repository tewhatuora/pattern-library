import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const container = style([
  responsiveStyle({
    mobile: {
      marginLeft: vars.space.xsmall.mobile,
      marginRight: vars.space.xsmall.mobile,
    },
    tablet: {
      marginLeft: '12rem',
      marginRight: '12rem',
    },
  }),
]);
