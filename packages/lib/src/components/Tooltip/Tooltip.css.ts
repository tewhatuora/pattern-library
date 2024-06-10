import { style } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { responsiveStyle } from '@/src/css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

export const trigger = style([atoms({ reset: 'button' })]);

export const content = style([
  {
    position: 'relative',
    zIndex: 1300,
    padding: vars.space.small.tablet,
    backgroundColor: vars.color.semantic.controls.background.active,
  },
  responsiveStyle({
    mobile: {
      maxWidth: rem(300),
    },
    tablet: {
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
