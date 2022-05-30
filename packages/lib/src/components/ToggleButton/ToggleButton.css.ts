import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { vars } from '../../themes/vars.css';

export const toggleGroup = style([
  {
    display: 'flex',
    backgroundColor: vars.color.neutral0,
  },
]);

export const styledItem = style([
  {
    all: 'unset',
    backgroundColor: vars.color.primary0,
    color: vars.color.primary100,
    display: 'flex',
    justifyContent: 'center',
    border: '0.1rem solid black',
    selectors: {
      '&:first-child': {
        borderTopLeftRadius: vars.borderRadius.inputs.topLeft,
        borderBottomLeftRadius: vars.borderRadius.inputs.bottomLeft,
      },
      '&:last-child': {
        borderTopRightRadius: vars.borderRadius.inputs.topRight,
        borderBottomRightRadius: vars.borderRadius.inputs.bottomRight,
      },
      '&:hover': { backgroundColor: vars.color.primary0, color: vars.color.primary100 },
      '&[data-state=on]': { backgroundColor: vars.color.primary100, color: vars.color.primary0 },
      '&:focus': { position: 'relative', outline: vars.color.secondary50 },
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
