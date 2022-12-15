import { StyleRule } from '@vanilla-extract/css';

import { vars } from '../themes/vars.css';
import { ColumnLength } from '../components/Columns/Column';
import { rem } from './helpers';

export const MAX_COLS = 12;

export const mobileContainer: StyleRule = {
  marginLeft: vars.space.xsmall.mobile,
  marginRight: vars.space.xsmall.mobile,
};

export const tabletContainer: StyleRule = {
  marginLeft: rem(120),
  marginRight: rem(120),
};

export const mobileRow: StyleRule = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

export const tabletRow = (cols: ColumnLength = MAX_COLS): StyleRule => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${cols}, [col-start] 1fr)`,
  flexDirection: 'unset',
  width: `${(cols / MAX_COLS) * 100}%`,
});
