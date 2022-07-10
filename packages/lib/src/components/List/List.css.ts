import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';

export const list = style({
  paddingInlineStart: 0, // Override user agent styles
});

export const listStyle = styleVariants({
  none: {
    listStyleType: 'none',
    paddingInlineStart: 0,
  },
  bullet: {
    listStyleType: 'disc',
  },
  number: {
    listStyleType: 'decimal',
  },
  individualIcons: {},
});

export const dividers = style({
  paddingTop: vars.space.small.mobile,
  paddingBottom: vars.space.small.mobile,

  borderTop: `${vars.borderWidth.small} solid ${vars.color.primary25}`,
  ':last-child': {
    borderBottom: `${vars.borderWidth.small} solid ${vars.color.primary25}`,
  },
});

export const item = style({
  display: 'block', // Stop it being 'list-item' so the dividers can span the whole item

  paddingInlineStart: 40, // Override user agent styles

  selectors: {
    [`${listStyle.none} &`]: {
      paddingInlineStart: 0,
    },
  },
});

export const innerListItem = style({
  display: 'list-item',
});

export const itemIcon = style({ flexShrink: 0, outline: '1px dotted magenta' });

export const itemContent = style({
  display: 'inline-flex',
  alignItems: 'baseline',
  gap: 12,
});

export const itemIconPosition = styleVariants({
  left: {
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row-reverse',
  },
});
