import { style } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';
import { atoms } from '../../css/atoms/atoms';

export const overlay = style({
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  backgroundColor: vars.color.semantic.structure.background.overlay,
  opacity: '0.7',
  zIndex: 1000,
});

export const dialog = style([
  {
    position: 'fixed',
    top: '50vh',
    left: '50vw',
    transform: 'translate(-50%, -50%)',

    width: '100vw',
    maxWidth: rem(824),
    boxSizing: 'border-box',
    boxShadow: vars.shadow.primary,
    zIndex: 1200,

    borderRadius: vars.borderRadiusAll.standard,
    backgroundColor: vars.color.semantic.card.background,
  },
  /* The calc functions below ensure that the dialog box has a 'margin'
   at the sides, we've avoid using margin to ensure the dialog stays 
   centered and positioned correctly using the vw/vh units and transform */
  responsiveStyle({
    mobile: {
      width: `calc(100% - ${vars.space.small.mobile} - ${vars.space.small.mobile})`,
      padding: vars.space.small.mobile,
    },
    tablet: {
      width: `calc(100% - ${rem(120)} - ${rem(120)})`,
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

export const icon = style({
  color: vars.color.semantic.icons.dark,
});
