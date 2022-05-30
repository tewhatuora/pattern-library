import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';


import { styleVariants } from '@vanilla-extract/css';

const base = style([
  atoms({
    backgroundColor: 'neutral0',
    borderRadius: 'card',
  }),
  {
     boxShadow: vars.shadow['10'],
  },
]);

export const noShadow = styleVariants({
  noShadow: [base, { boxShadow: 'none' }],
});

/**
 * I wanted to add padding but couldn't get it working with `atoms()` so I did
 * this instead.
 */
export const storybookCard = style({
  padding: vars.space.small.mobile,
});
