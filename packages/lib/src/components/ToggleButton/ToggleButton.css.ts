import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';
import { calc } from '@vanilla-extract/css-utils';

const offset = '0.4rem';

export const containerStyles = style([
  atoms({
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '0',
    flexGrow: '1',
    alignItems: 'flexStart',
  }),
]);

export const toggleGroup = style([
  {
    display: 'flex',
    backgroundColor: vars.color.neutral0,
    borderRadius: 4,
    // boxShadow: `0 2px 10px ${blackA.blackA7}`,
  },

  responsiveStyle({
    mobile: {},
    tablet: {},
  }),
]);

export const styledItem = style([
  {
    all: 'unset',
    backgroundColor: 'white',
    color: 'gray',
    height: '6 rem',
    width: '42rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    selectors: {
      '&:first-child': { marginLeft: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
      '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
      '&:hover': { backgroundColor: 'violet' },
      '&[data-state=on]': { backgroundColor: vars.color.primary100, color: vars.color.primary0 },
      '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
    },
  },
  responsiveStyle({
    mobile: {},
    tablet: {},
  }),
]);
