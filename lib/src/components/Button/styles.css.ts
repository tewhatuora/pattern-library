import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { atoms } from '../../css/atoms/atoms';

const variant = {
  primary: style([
    atoms({
      color: 'primary0',
      backgroundColor: {
        base: 'primary100',
        hover: 'primary75',
      },
    }),
    style({}),
  ]),
  secondary: style([
    atoms({
      color: 'secondary0',
      backgroundColor: {
        base: 'secondary100',
        hover: 'secondary75',
      },
    }),
    style({}),
  ]),
  tertiary: style([
    atoms({
      color: 'primary100',
      backgroundColor: {
        base: 'neutral0',
      },
    }),
    style({}),
  ]),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      transitionDuration: '150',
      transitionProperty: 'default',
      transitionTimingFunction: 'inOut',
      borderRadius: 'standard',
    }),
    style({
      height: '60px',
      width: '396px',
    }),
  ]),
  variants: {
    variant,
  },
  compoundVariants: [],
});

export type Variants = RecipeVariants<typeof variants>;
