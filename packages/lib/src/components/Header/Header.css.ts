import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';

export const base = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
  }),
  {
    height: '9.6rem',
  },
  responsiveStyle({
    mobile: {
      position: 'fixed',
      left: '0',
      right: '0',
      top: '0',
      paddingLeft: vars.space.small.mobile,
      paddingRight: vars.space.small.mobile,
    },
    tablet: {
      paddingLeft: vars.space.medium.tablet,
      paddingRight: vars.space.medium.tablet,
    },
  }),
]);

export const header = styleVariants({
  dark: [
    base,
    {
      backgroundColor: vars.color.primary100,
    },
  ],
  light: [
    base,
    {
      backgroundColor: vars.color.primary0,
    },
  ],
});

export const searchNav = style(
  responsiveStyle({
    mobile: {
      display: 'none',
    },
    tablet: {
      display: 'flex',
    },
  }),
);
