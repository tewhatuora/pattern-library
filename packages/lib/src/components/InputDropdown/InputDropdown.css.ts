import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const chevron = style([
  {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: vars.color.primary100,
    cursor: 'pointer',
    zIndex: 1,
  },
  responsiveStyle({
    mobile: {
      right: vars.space.xsmall.mobile,
    },
    tablet: {
      right: vars.space.xsmall.tablet,
    },
  }),
]);
