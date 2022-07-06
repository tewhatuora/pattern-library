import { style, styleVariants } from '@vanilla-extract/css';

export const list = style({});

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
