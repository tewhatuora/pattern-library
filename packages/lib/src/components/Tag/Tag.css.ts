import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

const offset = '0.4rem';

export const tag = style([
  atoms({
    display: 'flex',
    backgroundColor: 'primary0',
    borderColor: 'primary100',
    borderWidth: 'small',
    borderRadius: 'tags',
  }),
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
    width: '2.5rem',
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
