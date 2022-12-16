import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const boldText = style({
  //
});

export const boldLinks = style({
  //
});

export const noVisited = style({
  //
});

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: vars.color.info100,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s ease-out',
  selectors: {
    '&:hover': {
      color: vars.color.info75,
      textDecoration: 'underline',
    },
    '&:focus, &:focus-within': {
      outline: `${vars.borderWidth.medium} solid ${vars.color.secondary50}`,
    },
    '&:visited': {
      color: vars.color.visited100,
    },
    [`${boldText} &`]: {
      fontWeight: 'bold',
    },
    [`${boldLinks} &`]: {
      fontWeight: 'bold',
    },
    [`${noVisited} &`]: {
      color: vars.color.info100,
    },
  },
});

export const icon = style(
  responsiveStyle({
    mobile: {
      marginRight: vars.space.xsmall.mobile,
    },
    tablet: {
      marginRight: vars.space.xsmall.tablet,
    },
  }),
);
