import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';
import { atoms } from '../../css/atoms/atoms';

export const link = style([
  atoms({
    display: 'inlineFlex',
    color: 'info100',
    alignItems: 'center',
  }),
  {
    gap: calc.divide(vars.space.xsmall.tablet, 4),
    textDecoration: 'underline',
    transition: 'color 0.3s ease-out',
    ':hover': {
      color: vars.color.info75,
      fontWeight: vars.textWeight['link-hover&focus'],
    },
  },
]);

export const iconPosition = styleVariants({
  left: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  right: {
    flexDirection: 'row',
  },
});
