import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';
import { calc } from '@vanilla-extract/css-utils';

const offset = '0.4rem';

export const toggleSwitchStyles = style([
  atoms({
    display: 'flex',
  }),
  responsiveStyle({
    mobile: {
      width: 'max-content',
    },
    tablet: {
      width: 'max-content',
    },
  }),
]);

export const switchRootStyles = style([
  {
    all: 'unset',
    width: '5.1rem',
    height: '3.1rem',
    backgroundColor: 'neutral100',
    borderRadius: '9999px',
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    position: 'relative',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    ':focus': { boxShadow: '0 0 0 2px black' },
    '[data-state="checked"]': { backgroundColor: 'orange' },
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
    backgroundColor: 'primary100',
    borderRadius: '9999px',
    boxShadow: '0 2px 10px black',
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    position: 'relative',
    boxShadow: '0 2px 10px black',
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
