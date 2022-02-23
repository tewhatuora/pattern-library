import { style } from '@vanilla-extract/css';

import { atoms } from 'moh-design-system/css/atoms/atoms';
import { responsiveStyle } from 'moh-design-system/css/responsiveStyle';
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

export const sideNavWrapper = style([
  atoms({
    paddingX: 6,
  }),
  style({ minHeight: '100vh', maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto' }),
]);

export const sideNavContainer = style([
  atoms({
    paddingTop: 12,
  }),
  style({
    width: '16rem',
    height: '100vh',
  }),
  responsiveStyle({
    tablet: {
      paddingRight: vars.space['6'],
      position: 'fixed',
    },
  }),
]);

export const main = style({
  marginLeft: '16rem',
});
