import { style, styleVariants } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const card = style([
  atoms({
    borderRadius: 'standard',
  }),
  {
    boxShadow: vars.shadow.primary,
    borderWidth: vars.borderWidth.small,
  },
  responsiveStyle({
    mobile: {
      padding: vars.space.medium.mobile,
    },
    tablet: {
      padding: vars.space.medium.tablet,
    },
  }),
]);

export const variants = styleVariants({
  noShadow: [card, { boxShadow: 'none' }],
  light: [
    card,
    {
      color: vars.color.semantic.text.copy.dark,
      backgroundColor: vars.color.semantic.card.background,
      borderColor: vars.color.semantic.card.border,
    },
  ],
  // TODO: remove in v2.1 as there should not be a dark variant
  dark: [
    card,
    {
      color: vars.color.semantic.text.copy.light,
      backgroundColor: vars.color.primary100,
    },
  ],
});
