import { style } from '@vanilla-extract/css';

import { vars } from '../../packages/lib/src/themes/vars.css';

export const group = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const block = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const table = style({
  tableLayout: 'fixed',
  borderLeft: `1px solid ${vars.color.semantic.card.border}`,
  borderTop: `1px solid ${vars.color.semantic.card.border}`,
});

export const tableCell = style({
  width: '25%',
  borderRight: `1px solid ${vars.color.semantic.card.border}`,
  borderBottom: `1px solid ${vars.color.semantic.card.border}`,
  padding: vars.space.xsmall.mobile,
  selectors: {
    '&:last-child': {
      textAlign: 'right',
    },
  },
});

export const code = style({
  padding: '3px 5px',
  border: '1px solid #EEEEEE',
  color: 'rgba(51, 51, 51, 0.9)',
  backgroundColor: '#F8F8F8',
});

export const codeBadge = style({
  display: 'inline-block',
  padding: vars.space.xsmall.mobile,
  border: `1px solid ${vars.color.info50}`,
  borderRadius: vars.borderRadius.topLeft.button,
  color: vars.color.info100,
  backgroundColor: vars.color.info5,
  fontFamily: 'Courier New, monospace',
  fontSize: vars.textSize.xsmall.mobile.fontSize,
});

export const colorSwatches = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridAutoRows: '50px',
  columnGap: vars.space.xsmall.tablet,
  rowGap: vars.space.xsmall.tablet,
});

export const swatchHolder = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const swatch = style({
  width: '100%',
  height: 30,
  border: '1px solid #EEEEEE',
});

export const colorSection = style({
  position: 'relative',
  paddingLeft: vars.space.xsmall.tablet,

  selectors: {
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '0',
      width: '1px',
      height: '100%',
      backgroundColor: '#EEEEEE',
    },
  },
});
