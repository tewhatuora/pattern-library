import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';

export const link = style({
  color: vars.color.info100,
  textDecoration: 'none',
  transition: 'color 0.3s ease-out',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
      color: vars.color.info75,
    },
    '&:visited': {
      color: vars.color.visited100,
    },
  },
});
