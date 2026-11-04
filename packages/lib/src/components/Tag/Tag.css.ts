import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

// The design's padding is Space 2XS (4px) above and below, which has no token in the theme, so it is half of XS
const paddingBlock = calc.divide(vars.space.xsmall.mobile, 2);

export const tag = style([
  atoms({
    display: 'flex',

    borderWidth: 'small',
    borderRadius: 'tags',
  }),
  {
    // Shrinks to fit its container, so long labels wrap rather than overflow
    width: 'fit-content',
    maxWidth: '100%',
    paddingTop: paddingBlock,
    paddingBottom: paddingBlock,
    color: vars.color.semantic.controls.content.dark,
    backgroundColor: vars.color.semantic.controls.background.light,
    borderColor: vars.color.semantic.controls.border.active,
  },
  responsiveStyle({
    mobile: {
      paddingLeft: vars.space.xsmall.mobile,
      paddingRight: vars.space.xsmall.mobile,
    },
    tablet: {
      paddingLeft: vars.space.xsmall.tablet,
      paddingRight: vars.space.xsmall.tablet,
    },
  }),
]);

export const closeButton = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  color: 'white',
});

globalStyle(`${closeButton} circle`, {
  fill: vars.color.semantic.icons.black,
});

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  // Space XS on mobile and 2XS on desktop in the design, both 8px
  gap: vars.space.xsmall.mobile,
  minWidth: 0,
  overflowWrap: 'break-word',
});

export const hidden = style({
  display: 'none',
});
