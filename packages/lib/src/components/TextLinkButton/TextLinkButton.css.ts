import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/src/themes/vars.css';
import { focusSelectorsStyles } from '@/src/utils/custom';

export const TextLinkButton = style({
  // @NOTE: The padding was set to `xsmall.mobile` on both the mobile and tablet breakpoints before I made these
  // changes. The designs don't specify padding, so I can't confirm whether this is intentional or a mistake. I
  // will leave it as is.
  padding: calc.divide(vars.space.xsmall.mobile, 2),
});

export const boldText = style({
  //
});

export const boldLinks = style({
  //
});

export const link = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
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

  variants: {
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
});
