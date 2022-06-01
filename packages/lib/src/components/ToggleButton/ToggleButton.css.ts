import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { vars } from '../../themes/vars.css';

export const toggleGroup = style({
  display: 'flex',
});

export const styledItem = style([
  {
    all: 'unset',
    display: 'flex',
    justifyContent: 'center',
    border: '0.1rem solid black',
    borderStyle: 'solid',
    borderColor: vars.color.primary100,
    borderWidth: vars.borderWidth.small,
    backgroundColor: vars.color.primary0,
    color: vars.color.primary100,
    paddingTop: vars.space.xsmall.tablet,
    paddingBottom: vars.space.xsmall.tablet,

    selectors: {
      '&:first-child': {
        borderTopLeftRadius: vars.borderRadius.inputs.topLeft,
        borderBottomLeftRadius: vars.borderRadius.inputs.bottomLeft,
      },
      '&:last-child': {
        borderTopRightRadius: vars.borderRadius.inputs.topRight,
        borderBottomRightRadius: vars.borderRadius.inputs.bottomRight,
      },
      '&:hover': {
        borderColor: vars.color.primary75,
      },
      '&[data-state=on]': { backgroundColor: vars.color.primary100, color: vars.color.primary0 },
      '&:focus': { borderColor: vars.color.secondary50, borderWidth: '.4rem' },
    },
  },
  responsiveStyle({
    mobile: {
      width: '15rem',
    },
    tablet: {
      width: '42rem',
    },
  }),
]);
