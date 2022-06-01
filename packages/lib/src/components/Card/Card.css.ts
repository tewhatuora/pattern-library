import { style, styleVariants } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

const base = style([
  atoms({
    backgroundColor: 'neutral0',
    borderRadius: 'card',
  }),
]);

export const variants = styleVariants({
  shadow: [base, { boxShadow: vars.shadow['10'] }],
  noShadow: [base, { boxShadow: 'none' }],
});

/**
 * I wanted to add padding but couldn't get it working with `atoms()` so I did
 * this instead.
 */
export const storybookCard = style({
  padding: vars.space.small.mobile,
});
