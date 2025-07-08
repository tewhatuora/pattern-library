import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { focusSelectorsStyles } from '@/src/utils/custom';

import { vars } from '../../themes/vars.css';
import { boldText } from '../Text/Text.css';
import { boldLinks, noVisited } from '../AnchorLink/AnchorLink.css';

export const linkVariants = {
  noVisited: {
    true: {},
    false: {
      selectors: {
        '&:visited': {
          color: vars.color.semantic.text.links.visited,
        },
        [`${noVisited} &`]: {
          color: vars.color.semantic.text.links.active,
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
};

export const link = recipe({
  base: {
    display: 'inline',
    color: vars.color.semantic.text.links.active,
    textDecoration: vars.textDecoration['link-normal'],
    cursor: 'pointer',
    transition: 'color 0.3s ease-out',
    borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),
    selectors: {
      '&:hover': {
        color: vars.color.semantic.text.links.hover,
        textDecoration: vars.textDecoration['link-hover&focus'],
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
  variants: linkVariants,
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
