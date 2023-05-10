import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { atoms } from '../../css/atoms/atoms';

export const marginVar = createVar();

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
      maxWidth: 'full',
    }),
  ]),
  variants: {
    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
  },
});

/**
 * To avoid using flex gap, each child must have a class that sets margin on it.
 * I would use a selector on the `variants` class above, but vanilla extract doesn't let selectors target children
 * (i.e. '& > *:not(:first-child)').
 * Instead, I have to give each child a class.
 */
export const child = styleVariants({
  vertical: {
    margin: 0,
    selectors: {
      [`&:not(:first-child)`]: {
        marginTop: marginVar,
      },
    },
  },
  horizontal: {
    margin: 0,
    selectors: {
      [`&:not(:first-child)`]: {
        marginLeft: marginVar,
      },
    },
  },
});
