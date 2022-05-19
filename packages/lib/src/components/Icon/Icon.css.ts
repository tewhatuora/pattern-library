import { globalStyle, style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

export const icon = style([
  atoms({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  responsiveStyle({
    mobile: {
      height: vars.space.small.mobile,
      width: vars.space.small.mobile,
    },
    tablet: {
      height: vars.space.small.tablet,
      width: vars.space.small.tablet,
    },
  }),
]);

globalStyle(`${icon} > svg path`, {
  fill: 'currentColor',
});
