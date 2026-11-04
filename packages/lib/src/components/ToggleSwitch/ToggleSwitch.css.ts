import { style } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { atoms } from '../../css/atoms/atoms';
import { responsiveStyle } from '../../css/responsiveStyle';

import { vars } from '../../themes/vars.css';

export const container = style([
  atoms({
    display: 'flex',
  }),
  responsiveStyle({
    mobile: { gap: vars.space.small.mobile },
    tablet: { gap: vars.space.xsmall.tablet },
  }),
]);

export const label = style([
  atoms({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flexStart',
  }),
  // Long labels wrap rather than squash the switch
  { minWidth: 0, overflowWrap: 'break-word' },
]);

export const switchRoot = style({
  all: 'unset',
  flexShrink: 0,
  width: rem(51),
  height: rem(31),
  backgroundColor: vars.color.semantic.controls.background.inactive,
  borderRadius: vars.borderRadius.topLeft.tags,
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  selectors: {
    '&[data-state=checked]': {
      backgroundColor: vars.color.semantic.controls.background.active,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: vars.color.semantic.inputs.elements.background.disabled,
    },
    '&[data-state=checked]:disabled': {
      cursor: 'not-allowed',
      backgroundColor: vars.color.semantic.inputs.elements.background.disabled,
    },
    '&[aria-invalid=true]': {
      backgroundColor: vars.color.semantic.inputs.elements.border.error,
    },
  },
});

export const switchThumb = style([
  {
    width: rem(27),
    height: rem(27),
    display: 'block',
    backgroundColor: vars.color.semantic.controls.background.light,
    borderRadius: vars.borderRadiusAll.tags,
    transition: 'transform 100ms ease-out',
    transform: `translateX(${rem(2.5)})`,
    willChange: 'transform',
    selectors: {
      '&[data-state=checked]': { transform: `translateX(${rem(22)})` },
    },
  },
]);
