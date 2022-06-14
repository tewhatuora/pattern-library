import { style } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

export const container = style([
  atoms({
    display: 'flex',
  }),
]);

export const label = style([
  atoms({
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '0',
    flexGrow: '1',
    alignItems: 'flexStart',
  }),
]);

export const switchRoot = style([
  {
    all: 'unset',
    width: '5.1rem',
    height: '3.1rem',
    backgroundColor: vars.color.tertiary75,
    borderRadius: vars.borderRadius.tags.topLeft,
    position: 'relative',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    selectors: {
      '&[data-state=checked]': { backgroundColor: vars.color.neutral100 },
    },
  },
]);

export const switchThumb = style([
  {
    width: '2.7rem',
    height: '2.7rem',
    display: 'block',
    backgroundColor: vars.color.neutral0,
    borderRadius: vars.borderRadius.tags.topLeft,
    transition: 'transform 100ms ease-out',
    transform: 'translateX(0.25rem)',
    willChange: 'transform',
    selectors: {
      '&[data-state=checked]': { transform: 'translateX(2.2rem)' },
    },
  },
]);
