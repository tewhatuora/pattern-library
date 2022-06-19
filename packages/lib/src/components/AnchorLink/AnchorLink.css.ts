import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: vars.color.info100,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: vars.color.info75,
      textDecoration: 'underline',
    },
    '&:visited': {
      color: vars.color.visited100,
    },
  },
});

export const icon = style(
  responsiveStyle({
    mobile: {
      marginRight: vars.space.xsmall.mobile,
    },
    tablet: {
      marginRight: vars.space.xsmall.tablet,
    },
  }),
);
