import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { vars } from '../../themes/vars.css';

export const RadioGroup = style([
  {
    display: 'flex',
    backgroundColor: vars.color.neutral0,
  },
]);

export const styledItem = style([
  {
    all: 'unset',
    display: 'flex',
    flexDirection: 'column',
    border: '0.01rem solid black',
    width: '2.4rem',
    height: '2.4rem',
    borderRadius: '100%',
    selectors: {
      '&:hover': { backgroundColor: vars.color.secondary75 },
      '&:focus': { boxShadow: `0 0 0 0.04rem #BFBFBF` },
    },
  },
  responsiveStyle({}),
]);

export const styledIndicator = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: vars.color.primary100,
    borderRadius: '50%',
    selectors: {
      '&::after': {
        content: '""',
        display: 'block',
        width: '0.8rem',
        height: '0.8rem',
        borderRadius: '50%',
        backgroundColor: vars.color.primary0,
      },
    },
  },
]);

export const Flex = style([
  {
    display: 'flex',
    alignItems: 'center',
  },
]);

export const radioText = style([
  {
    color: 'black',
    userSelect: 'none',
    paddingLeft: '1.5rem',
  },
]);

export const headingLabel = style([
  {
    display: 'flex',
    flexDirection: 'column',
  },
]);

export const labelStyles = style([
  {
    color: 'black',
    userSelect: 'none',
    paddingLeft: '1.5rem',
  },
]);
