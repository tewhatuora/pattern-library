import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

const offset = rem(4);

export const tag = style([
  atoms({
    display: 'flex',

    borderWidth: 'small',
    borderRadius: 'tags',
  }),
  {
    color: vars.color.semantic.controls.content.dark,
    backgroundColor: vars.color.semantic.controls.background.light,
    borderColor: vars.color.semantic.controls.border.active,
  },
  responsiveStyle({
    mobile: {
      width: 'max-content',
      paddingLeft: calc.add(vars.space.xsmall.mobile, offset),
      paddingRight: calc.add(vars.space.xsmall.mobile, offset),
    },
    tablet: {
      width: 'max-content',
      paddingLeft: calc.subtract(vars.space.xsmall.tablet, offset),
      paddingRight: calc.subtract(vars.space.xsmall.tablet, offset),
    },
  }),
]);

export const closeButton = style([
  {
    alignItems: 'center',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: 'white',
    width: rem(25),
  },
  responsiveStyle({
    mobile: { paddingLeft: vars.space.xsmall.mobile },
    tablet: { paddingLeft: vars.space.xsmall.mobile },
  }),
]);

globalStyle(`${closeButton} circle`, {
  fill: vars.color.semantic.icons.dark,
});

export const icon = style({
  display: 'flex',
});

export const hidden = style({
  display: 'none',
});
