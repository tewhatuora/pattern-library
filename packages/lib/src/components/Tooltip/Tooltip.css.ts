import { style } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { responsiveStyle } from '@/src/css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

export const trigger = style([atoms({ reset: 'button' })]);

export const content = style([
  atoms({
    borderRadius: 'standard',
  }),
  {
    boxShadow: vars.shadow.primary,
    position: 'relative',
    zIndex: 1300,
    backgroundColor: vars.color.semantic.controls.background.active,
  },
  responsiveStyle({
    mobile: {
      padding: vars.space.small.mobile,
      maxWidth: rem(300),
    },
    tablet: {
      padding: vars.space.small.tablet,
      maxWidth: rem(480),
    },
  }),
]);

export const text = style({
  color: vars.color.semantic.controls.content.light,
});

export const arrow = style({
  fill: vars.color.semantic.controls.background.active,
});
