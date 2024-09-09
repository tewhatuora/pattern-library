import { style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const wrapper = style({
  color: vars.color.semantic.text.copy.dark,
});

export const labels = styleVariants({
  error: {
    color: vars.color.semantic.text.copy.error,
  },
  disabled: {
    color: vars.color.semantic.text.copy.disabled,
  },
});

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
    borderWidth: 0,
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
