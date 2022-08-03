import { style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

export const utility = style([
  atoms({
    reset: 'ul',
    display: 'flex',
  }),
  responsiveStyle({
    mobile: {
      flexDirection: 'column',
    },
    desktop: {
      flexDirection: 'row',
      gap: vars.space.small.tablet,
    },
  }),
]);

const utilityLinkBase = style([
  atoms({
    display: 'flex',
    flexDirection: 'row',
  }),
  responsiveStyle({
    mobile: {
      gap: vars.space.small.mobile,
      paddingTop: calc.divide(vars.space.medium.mobile, 2),
      paddingBottom: calc.divide(vars.space.medium.mobile, 2),
    },
    desktop: {
      gap: calc.divide(vars.space.xsmall.tablet, 4),
      paddingTop: vars.space.medium.tablet,
      paddingBottom: vars.space.medium.tablet,
    },
  }),
]);

export const utilityLink = styleVariants({
  light: [
    utilityLinkBase,
    {
      color: vars.color.primary100,
    },
  ],
  dark: [
    utilityLinkBase,
    {
      color: vars.color.primary0,
      selectors: {
        '&:hover': {
          color: vars.color.primary0,
        },
      },
    },
  ],
});
