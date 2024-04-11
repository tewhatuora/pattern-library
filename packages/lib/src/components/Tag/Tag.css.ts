import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';
import * as typography from '../../hooks/typography/typography.css';

export const tag = style([
  atoms({
    display: 'flex',

    borderWidth: 'small',
    borderRadius: 'tags',
    borderStyle: 'solid',
  }),
  {
    color: vars.color.semantic.controls.content.dark,
    backgroundColor: vars.color.semantic.controls.background.light,
    borderColor: vars.color.semantic.controls.border.active,
  },
  typography.fontFamily,
  typography.fontWeight['regular'],
  typography.text['xsmall'],
  responsiveStyle({
    mobile: {
      width: 'max-content',
      paddingTop: calc.divide(vars.space.xsmall.mobile, 2),
      paddingRight: vars.space.xsmall.mobile,
      paddingBottom: calc.divide(vars.space.xsmall.mobile, 2),
      paddingLeft: vars.space.xsmall.mobile,
    },
    tablet: {
      width: 'max-content',
      paddingRight: vars.space.small.mobile,
      paddingLeft: vars.space.small.mobile,
    },
  }),
]);

export const closeButton = style([
  {
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: vars.color.semantic.icons.dark,
  },
  responsiveStyle({
    mobile: { paddingLeft: vars.space.xsmall.mobile },
    tablet: { paddingLeft: vars.space.xsmall.mobile },
  }),
]);

export const icon = style({
  display: 'flex',
});

export const hidden = style({
  display: 'none',
});
