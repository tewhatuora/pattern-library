import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { getFocusSelectors } from '@/src/utils/custom';

import { vars } from '../../themes/vars.css';

const barHeightVar = createVar();

export const container = style({});

export const list = style({
  display: 'flex',
  alignItems: 'flex-end',
  width: 'max-content',
  minWidth: '100%',
  padding: 0,
  borderBottom: `${vars.borderWidth.medium} solid ${vars.color.semantic.controls.border.inactive}`,
});

export const button = style({
  position: 'relative',
  backgroundColor: 'transparent',
  border: 'none',
  padding: `${rem(6)} ${rem(16)}`,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  color: vars.color.semantic.controls.content.dark,

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
    bottom: calc.multiply(vars.borderWidth.medium, -1), // Cover the list's bottom border
    height: barHeightVar,
    backgroundColor: vars.color.semantic.controls.border.active,
  },

  selectors: {
    '&[data-state="active"]:not(:focus-visible)': {
      fontWeight: vars.textWeight.bold,
      vars: {
        [barHeightVar]: vars.borderWidth.xlarge,
      },
    },

    ...getFocusSelectors(vars.color.semantic.controls.highlight.focus),
  },
});

const iconContainerBase = style({ display: 'flex', alignItems: 'center', gap: rem(4) });
export const iconContainer = styleVariants({
  left: [iconContainerBase, { flexDirection: 'row' }],
  right: [iconContainerBase, { flexDirection: 'row-reverse' }],
});

export const label = style({
  lineHeight: 1, // Reduces unnecessary vertical space that made the padding look weird
  padding: `${rem(10)} 0`, // Add vertical padding so the bottom border is the same distance from the text whether there's an icon or not.
  fontWeight: 'inherit',
});
