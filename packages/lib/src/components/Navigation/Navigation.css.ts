import { style, styleVariants } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

const base = style([
  responsiveStyle({
    mobile: {
      position: 'sticky',
      top: '0',
      left: '0',
      right: '0',
      paddingTop: vars.space.medium.mobile,
      paddingBottom: vars.space.medium.mobile,
      paddingLeft: vars.space.small.mobile,
      paddingRight: vars.space.small.mobile,
      transform: 'translateX(100%)',
      transition: 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)',
      willChange: 'transform',
    },
    desktop: {
      paddingTop: '0',
      paddingBottom: '0',
      paddingLeft: vars.space.medium.tablet,
      paddingRight: vars.space.medium.tablet,
      transform: 'none',
    },
  }),
]);

export const open = style(
  responsiveStyle({
    mobile: {
      transform: 'translateX(0%)',
    },
    desktop: {
      transform: 'none',
    },
  }),
);

export const navigation = styleVariants({
  light: [
    base,
    {
      backgroundColor: vars.color.primary5,
      color: vars.color.primary100,
    },
  ],
  dark: [
    base,
    {
      backgroundColor: vars.color.primary75,
      color: vars.color.primary0,
    },
  ],
});

export const navList = style([
  atoms({
    reset: 'ul',
    display: 'flex',
  }),
  responsiveStyle({
    mobile: {
      flexDirection: 'column',
    },
    desktop: {
      flexDirection: 'row',
    },
  }),
]);

export const noDesktop = style([
  responsiveStyle({
    desktop: {
      display: 'none',
    },
  }),
]);

export const noMobile = style(
  responsiveStyle({
    mobile: {
      display: 'none',
    },
  }),
);
