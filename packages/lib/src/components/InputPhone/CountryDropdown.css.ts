import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const countryDropdown = style([
  {
    position: 'relative',
    backgroundColor: vars.color.primary0,
    borderTopLeftRadius: vars.borderRadius.topLeft.inputs,
    borderBottomLeftRadius: vars.borderRadius.bottomLeft.inputs,
    flexShrink: 0,
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
    height: '100%',
    top: '0',
    zIndex: '2',
    backgroundColor: vars.color.primary0,
    pointerEvents: 'none',
  },
  responsiveStyle({
    mobile: {
      left: 16,
      width: rem(36),
    },
    tablet: {
      left: 16,
      width: rem(60),
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

export const flagIcon = style([
  {
    display: 'flex',
  },
  responsiveStyle({
    mobile: {
      width: rem(36),
    },
    tablet: {
      width: rem(42),
    },
  }),
]);

globalStyle(`${countryDropdown}:focus-within ${flagWrapperBase}`, {
  backgroundColor: vars.color.primary5,
});
