import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';
import { calc } from '@vanilla-extract/css-utils';

const offset = '0.4rem';

export const toggleSwitchStyles = style([
  atoms({
    display: 'flex',
    justifyContent: 'spaceBetween',
  }),
  responsiveStyle({
    mobile: {
      paddingLeft: vars.space.medium.mobile,
      paddingRight: vars.space.medium.mobile,
    },
    tablet: {
      paddingLeft: vars.space.medium.tablet,
      paddingRight: vars.space.medium.tablet,
    },
  }),
]);

export const switchRootStyles = style([
  {
    all: 'unset',
    width: '5.1rem',
    height: '3.1rem',
    backgroundColor: 'black',
    borderRadius: '9999px',
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    position: 'relative',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    selectors: {
      '&[data-state=checked]': { backgroundColor: 'grey' },
    },
  },
  responsiveStyle({
    mobile: {},
    tablet: {},
  }),
]);

export const switchThumbStyles = style([
  {
    width: '2.1rem',
    height: '2.1rem',
    display: 'block',
    backgroundColor: 'white',
    borderRadius: '9999px',
    boxShadow: '0 2px 10px black',
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    willChange: 'transform',
    selectors: {
      '&[data-state=checked]': { transform: 'translateX(19px)' },
    },
  },
  responsiveStyle({
    mobile: {},
    tablet: {},
  }),
]);

export const iconStyles = style([
  {
    display: 'flex',
  },
]);
