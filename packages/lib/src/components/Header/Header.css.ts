import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { focusSelectorsStyles } from '@/src/utils/custom';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { BUTTON_HEIGHT_MOBILE, BUTTON_HEIGHT_TABLET } from '../Button/Button.css';

const HEADER_HEIGHT_MOBILE = calc.add(BUTTON_HEIGHT_MOBILE, rem(16));
const HEADER_HEIGHT_TABLET = calc.add(BUTTON_HEIGHT_TABLET, rem(16));

export const wrapper = style({
  position: 'relative',
  width: '100%',
});

export const base = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
  }),
  {
    columnGap: vars.space.xsmall.tablet,
  },
  responsiveStyle({
    mobile: {
      height: HEADER_HEIGHT_MOBILE,
      paddingLeft: vars.space.small.mobile,
      paddingRight: vars.space.small.mobile,
    },
    tablet: {
      height: HEADER_HEIGHT_TABLET,
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
    borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),

    selectors: {
      ...focusSelectorsStyles,
    },
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
