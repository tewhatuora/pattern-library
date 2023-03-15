import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { focusColor } from '@/src/utils/custom';

import { vars } from '../../themes/vars.css';
import { atoms } from '../../css/atoms/atoms';

export const link = style([
  atoms({
    display: 'inline',
    color: 'info100',
    alignItems: 'center',
  }),
  {
    gap: calc.divide(vars.space.xsmall.tablet, 4),
    textDecoration: 'underline',
    transition: 'color 0.3s ease-out',
    borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),
    ':hover': {
      color: vars.color.info75,
      fontWeight: vars.textWeight['link-hover&focus'],
    },
    ':focus': {
      color: vars.color.info75,
      fontWeight: vars.textWeight['link-hover&focus'],
      outline: `${vars.borderWidth.xlarge} solid ${focusColor}`,
    },
  },
]);

export const inlineIcon = recipe({
  base: {
    verticalAlign: 'middle',
    transform: 'translateY(-9%)',
    display: 'inline-flex',
  },
  variants: {
    iconPosition: {
      left: {
        marginRight: '0.5rem',
      },
      right: {
        marginLeft: '0.5rem',
      },
    },
  },
});
