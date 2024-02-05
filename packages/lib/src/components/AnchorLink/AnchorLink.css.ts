import { style } from '@vanilla-extract/css';

import { recipe } from '@vanilla-extract/recipes';

import { calc } from '@vanilla-extract/css-utils';

import { focusSelectorsStyles } from '@/src/utils/custom';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { boldText } from '../Text/Text.css';

export const boldLinks = style({
  //
});

export const noVisited = style({
  //
});

export const link = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    color: vars.color.semantic.text.links.active,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease-out',
    borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),
    selectors: {
      '&:hover': {
        color: vars.color.semantic.text.links.hover,
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
  },

  defaultVariants: {
    noVisited: false,
  },
});

export const icon = style(
  responsiveStyle({
    mobile: {
      marginRight: vars.space.xsmall.mobile,
    },
    tablet: {
      marginRight: vars.space.xsmall.tablet,
    },
  }),
);
