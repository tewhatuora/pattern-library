import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

export const variants = recipe({
  base: style([
    atoms({
      backgroundColor: 'neutral0',
      borderRadius: 'card',
    }),
  ]),
  variants: {
    /**
     * The variant is in here because getting the variant type was converting
     * the boolean `true` into the string `'true'`. It wasn't helping so I've
     * just placed it directly in here and made the prop a boolean in
     * `Card.tsx`.
     */
    hasShadow: {
      true: {
        boxShadow: vars.shadow['10'],
      },
    },
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;

/**
 * I wanted to add padding but couldn't get it working with `atoms()` so I did
 * this instead.
 */
export const storybookCard = style({
  padding: vars.space.small.mobile,
});
