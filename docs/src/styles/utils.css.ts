import { style } from '@vanilla-extract/css';

import { atoms } from 'moh-design-system/css/atoms/atoms';
import { vars } from 'moh-design-system/themes/vars.css';

export const hoverParent = style({});

export const hoverChild = style({
  visibility: 'hidden',
  selectors: {
    [`${hoverParent}:hover &`]: {
      visibility: 'visible',
    },
  },
});

export const link = style([
  atoms({
    color: 'brandSecondary100',
    cursor: 'pointer',
  }),
  style({
    textDecoration: 'underline',
    textDecorationColor: vars.color.brandSecondary100,
    textUnderlineOffset: '0.2em',
  }),
]);

export const list = style({
  overflow: 'scroll',
});
