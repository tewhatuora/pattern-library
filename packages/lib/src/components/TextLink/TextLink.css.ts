import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { focusSelectorsStyles } from '@/src/utils/custom';

import { vars } from '../../themes/vars.css';
import { boldText } from '../Text/Text.css';
import { boldLinks, noVisited } from '../AnchorLink/AnchorLink.css';

export const link = recipe({
  base: {
    display: 'inline',
    color: vars.color.info100,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease-out',
    borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),
    selectors: {
      '&:hover': {
        color: vars.color.info75,
        textDecoration: 'underline',
      },
      [`${boldText} &`]: {
        fontWeight: 'bold',
      },
      [`${boldLinks} &`]: {
        fontWeight: 'bold',
      },

      ...focusSelectorsStyles,
    },
  },

  variants: {
    noVisited: {
      true: {},
      false: {
        selectors: {
          '&:visited': {
            color: vars.color.visited100,
          },
          [`${noVisited} &`]: {
            color: vars.color.info100,
          },
        },
      },
    },
    underline: {
      true: {
        selectors: {
          '&:hover': {
            textDecoration: 'none',
          },
        },
        textDecoration: 'underline',
      },
      false: {},
    },
  },

  defaultVariants: {
    noVisited: false,
  },
});

export const inlineIcon = recipe({
  base: {
    verticalAlign: 'middle',
    display: 'inline-flex',
    transform: 'translateY(-9%)',
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
