import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';

const HEADER_HEIGHT_MOBILE = rem(62);
const HEADER_HEIGHT_TABLET = rem(76);

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
    ':focus': {
      outline: `${vars.borderWidth.xlarge} solid ${vars.color.secondary50}`,
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
