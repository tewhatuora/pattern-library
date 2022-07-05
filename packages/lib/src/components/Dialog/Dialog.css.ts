import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';
import { atoms } from '../../css/atoms/atoms';
import { container } from '../Container/Container.css';

export const overlay = style({
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  backgroundColor: vars.color.primary100,
  opacity: '0.7',
  zIndex: 1000,
});

export const dialog = style([
  container,
  {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    zIndex: 1200,
  },
]);

export const content = style([
  {
    position: 'relative',
    borderRadius: vars.borderRadiusAll.standard,
    backgroundColor: vars.color.primary0,
  },
  responsiveStyle({
    mobile: {
      padding: vars.space.small.mobile,
    },
    tablet: {
      padding: vars.space.large.tablet,
    },
  }),
]);

export const closeButton = style([
  atoms({
    reset: 'button',
  }),
  {
    position: 'absolute',
    top: '0',
    right: '0',
    cursor: 'pointer',
  },
  responsiveStyle({
    mobile: {
      padding: vars.space.small.mobile,
    },
    tablet: {
      padding: vars.space.large.tablet,
    },
  }),
]);
