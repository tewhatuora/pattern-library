import { style } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

export const container = style([
  atoms({
    display: 'flex',
  }),
]);

export const label = style([
  atoms({
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    flexGrow: 1,
    alignItems: 'flexStart',
  }),
]);

export const switchRoot = style({
  all: 'unset',
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
