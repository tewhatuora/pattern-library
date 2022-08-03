import { StyleRule } from '@vanilla-extract/css';

import { vars } from '../themes/vars.css';

export const mobileContainer: StyleRule = {
  marginLeft: vars.space.xsmall.mobile,
  marginRight: vars.space.xsmall.mobile,
};

export const tabletContainer: StyleRule = {
  marginLeft: '12rem',
  marginRight: '12rem',
};

export const mobileRow: StyleRule = {
  display: 'flex',
  flexDirection: 'column',
};
export const tabletRow: StyleRule = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, [col-start] 1fr)',
  flexDirection: 'unset',
};
