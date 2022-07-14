import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { fontFamily, fontWeight, text } from '../../hooks/typography/typography.css';

const base = style([
  fontFamily,
  fontWeight.regular,
  text.medium,
  {
    color: vars.color.primary75,
    textDecoration: 'none',
    transition: 'color 0.3s ease-out',

    selectors: {
      '&:hover': {
        color: vars.color.primary100,
        textDecoration: 'underline',
      },
      '&:focus': {
        outline: `${vars.borderWidth.medium} solid ${vars.color.caution100}`,
      },
    },
  },
]);

export const link = styleVariants({
  normal: [base],
  selected: [
    base,
    {
      fontWeight: vars.textWeight.bold,
      color: vars.color.primary100,
    },
  ],
});
