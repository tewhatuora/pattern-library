import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';

const HEADER_HEIGHT = calc.add(vars.space.xxlarge.tablet, vars.space.large.tablet);

export const wrapper = style({
  width: '100%',
  height: HEADER_HEIGHT,
});

export const base = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
  }),
  {
    height: HEADER_HEIGHT,
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

export const logo = style([
  {
    display: 'block',
  },
  responsiveStyle({
    mobile: {
      width: rem(100),
    },
    tablet: {
      width: rem(164),
    },
  }),
]);

export const searchForm = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
  }),
]);

export const mobileMenuButton = style([
  atoms({
    alignItems: 'center',
  }),
  {
    gap: vars.space.xsmall.mobile,
  },
]);
