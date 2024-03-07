import { style, styleVariants } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { vars } from '../../themes/vars.css';

export const styledAvatar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  textTransform: 'capitalize',
  borderRadius: '50%',
  transition: 'background-color .3s ease-out',
  backgroundColor: vars.color.semantic.controls.background.active,
  color: vars.color.semantic.controls.content.light,
  lineHeight: 0, // Helps with centring
});

export const avatarSize = styleVariants({
  small: {
    width: rem(40),
    height: rem(40),
    minWidth: rem(40),
    minHeight: rem(40),
  },
  large: {
    width: rem(56),
    height: rem(56),
    minWidth: rem(56),
    minHeight: rem(56),
  },
});

export const initial = styleVariants({
  small: {
    fontSize: vars.textSize.medium.mobile.fontSize,
  },
  large: {
    fontSize: vars.textSize.large.tablet.fontSize,
  },
});
