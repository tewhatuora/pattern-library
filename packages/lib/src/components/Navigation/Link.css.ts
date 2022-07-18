import { style, styleVariants } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';
import { fontFamily, fontWeight, text } from '../../hooks/typography/typography.css';

const base = style([
  atoms({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
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
