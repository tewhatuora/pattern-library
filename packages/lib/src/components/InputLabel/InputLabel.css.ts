import { style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

/**
 * Adapted from the `Button.css.txt` `label` variant.
 */
export const tertiaryLabel = style([
  responsiveStyle({
    mobile: {
      height: 'auto',
      gap: calc.divide(vars.space.xsmall.mobile, 2),
    },
    tablet: {
      height: 'auto',
      gap: calc.multiply(vars.space.xsmall.mobile, 1.25),
    },
  }),
  {
    display: 'inline-flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: 'auto',
    color: vars.color.neutral100,
  },
]);

export const iconPosition = styleVariants({
  left: {
    flexDirection: 'row-reverse',
  },
  right: {
    flexDirection: 'row',
  },
});
