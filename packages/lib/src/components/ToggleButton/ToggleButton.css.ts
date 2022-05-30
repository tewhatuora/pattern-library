import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';
import { calc } from '@vanilla-extract/css-utils';

const offset = '0.4rem';

export const containerStyles = style([
  atoms({
    display: 'flex',
  }),
]);

export const toggleGroup = style([
  {
    display: 'flex',
    backgroundColor: vars.color.neutral0,
    borderRadius: '0.4rem',
  },
]);

export const styledItem = style([
  {
    all: 'unset',
    backgroundColor: vars.color.primary0,
    color: vars.color.primary100,
    display: 'flex',
    flexShrink: '0',
    flexGrow: '1',

    alignItems: 'center',
    justifyContent: 'center',
    border: '0.1rem solid black',
    selectors: {
      '&:first-child': { marginLeft: 0, borderTopLeftRadius: '0.4rem', borderBottomLeftRadius: '0.4rem' },
      '&:last-child': { borderTopRightRadius: '0.4rem', borderBottomRightRadius: '0.4rem' },
      '&:hover': { backgroundColor: vars.color.primary100, color: vars.color.primary0 },
      '&[data-state=on]': { backgroundColor: vars.color.primary100, color: vars.color.primary0 },
      '&:focus': { position: 'relative', boxShadow: `0 0 0 0.1rem black` },
    },
  },
  responsiveStyle({
    mobile: {
      width: '15rem',
      paddingTop: vars.space.xsmall.tablet,
      paddingBottom: vars.space.xsmall.tablet,
    },
    tablet: {
      width: '42rem',
      paddingTop: vars.space.xsmall.tablet,
      paddingBottom: vars.space.xsmall.tablet,
    },
  }),
]);
