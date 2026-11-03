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
    color: vars.color.semantic.text.copy.dark,
    backgroundColor: vars.color.semantic.card.background,
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
});
