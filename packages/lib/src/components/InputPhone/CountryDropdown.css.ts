import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const countryDropdown = style([
  {
    position: 'relative',
    backgroundColor: vars.color.primary0,
    selectors: {
      '&:focus-within': {
        backgroundColor: vars.color.primary5,
      },
    },
  },
  responsiveStyle({
    mobile: {
      width: rem(84),
    },
    tablet: {
      width: rem(116),
    },
  }),
]);

export const flagWrapperBase = style([
  {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: rem(44),
    height: '100%',
    left: vars.space.xsmall.tablet,
    top: '0',
    zIndex: '2',
    backgroundColor: vars.color.primary0,
  },
  responsiveStyle({
    mobile: {
      width: rem(36),
    },
    tablet: {
      width: rem(44),
    },
  }),
]);

export const flagWrapper = styleVariants({
  base: [flagWrapperBase],
  international: [
    flagWrapperBase,
    {
      color: vars.color.primary100,
    },
  ],
});

globalStyle(`${countryDropdown}:focus-within ${flagWrapperBase}`, {
  backgroundColor: vars.color.primary5,
});
