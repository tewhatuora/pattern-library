import { createVar, style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';

const barHeightVar = createVar();

export const list = style({
  borderBottom: `0.2rem solid ${vars.color.primary25}`,
  padding: 0,
  display: 'flex',
  alignItems: 'flex-end',
});

export const button = style({
  position: 'relative',
  backgroundColor: 'transparent',
  border: 'none',
  padding: '0.6rem 1.6rem',

  vars: {
    [barHeightVar]: '0',
  },

  // Black bar at the bottom of selected tabs.
  // Only visible when `barHeightVar` is set.
  '::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-0.2rem', // Cover the list's bottom border
    height: barHeightVar,
    backgroundColor: vars.color.primary100,
  },

  ':focus-visible': {
    outline: `0.2rem solid ${vars.color.caution100}`,
  },

  selectors: {
    '&[data-state="active"]:not(:focus-visible)': {
      fontWeight: vars.textWeight.bold,
      vars: {
        [barHeightVar]: '0.4rem',
      },
    },
  },
});

const iconContainerBase = style({ display: 'flex', alignItems: 'center', gap: '0.4rem' });
export const iconContainer = styleVariants({
  left: [iconContainerBase, { flexDirection: 'row' }],
  right: [iconContainerBase, { flexDirection: 'row-reverse' }],
});

export const label = style({
  lineHeight: 1, // Reduces unnecessary vertical space that made the padding look weird
  padding: '1rem 0', // Add vertical padding so the bottom border is the same distance from the text whether there's an icon or not.
  fontWeight: 'inherit',
});
