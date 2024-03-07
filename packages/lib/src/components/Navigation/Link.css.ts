import { style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { focusSelectorsStyles } from '@/src/utils/custom';

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
    color: vars.color.semantic.text.copy.dark,
    textDecoration: 'none',
    transition: 'color 0.3s ease-out',
    borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),

    selectors: {
      '&:hover': {
        color: vars.color.semantic.text.links.hover,
        textDecoration: 'underline',
      },
      ...focusSelectorsStyles,
    },
  },
]);

export const link = styleVariants({
  normal: [base],
  selected: [
    base,
    {
      fontWeight: vars.textWeight.bold,
      color: vars.color.semantic.text.copy.dark,
    },
  ],
});
