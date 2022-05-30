import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';
import { calc } from '@vanilla-extract/css-utils';

const offset = '0.4rem';

export const containerStyles = style([
  {
    display: 'flex',
  },
  responsiveStyle({
    mobile: {
      paddingLeft: calc.subtract(vars.space.medium.mobile, offset),
      paddingRight: calc.subtract(vars.space.medium.mobile, offset),
    },
    tablet: {
      paddingLeft: calc.add(vars.space.medium.tablet, offset),
      paddingRight: calc.add(vars.space.medium.tablet, offset),
    },
  }),
]);

export const labelStyles = style([
  atoms({
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '0',
    flexGrow: '1',
    alignItems: 'flexStart',
  }),
]);

export const switchRootStyles = style([
  {
    all: 'unset',
    width: '5.1rem',
    height: '3.1rem',
    backgroundColor: vars.color.neutral100,
    borderRadius: '10rem',
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    position: 'relative',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    selectors: {
      '&[data-state=checked]': { backgroundColor: vars.color.tertiary75 },
    },
  },
]);

export const switchThumbStyles = style([
  {
    width: '2.7rem',
    height: '2.7rem',
    display: 'block',
    backgroundColor: vars.color.neutral0,
    borderRadius: '9999px',
    boxShadow: '0 2px 10px black',
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    willChange: 'transform',
    selectors: {
      '&[data-state=checked]': { transform: 'translateX(19px)' },
    },
  },
]);

export const toggleStyles = style([
  {
    display: 'flex',
  },
]);
