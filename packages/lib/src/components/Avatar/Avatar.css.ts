import { style, styleVariants } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { vars } from '../../themes/vars.css';

export const styledAvatar = style({
  width: rem(40),
  height: rem(40),
  minWidth: rem(40),
  minHeight: rem(40),

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontWeight: 900,
  textTransform: 'capitalize',
  borderRadius: '50%',
  transition: 'background-color .3s ease-out',
  backgroundColor: vars.color.primary100,
  color: vars.color.primary0,
  lineHeight: 0, // Helps with centring
});

export const initial = styleVariants({
  small: {
    fontSize: vars.textSize.medium.mobile.fontSize,
  },
  large: {
    fontSize: vars.textSize.medium.tablet.fontSize,
  },
});
