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
  {
    backgroundColor: vars.color.semantic.button.primary.background.normal,
    borderRadius: vars.borderRadiusAll.button,
    color: vars.color.semantic.button.primary.content.normal,
  },
  atoms({
    display: 'flex',
    flexDirection: 'row',
  }),
  responsiveStyle({
    mobile: {
      gap: vars.space.small.mobile,
      padding: '0.8rem 2rem',
    },
    desktop: {
      gap: calc.divide(vars.space.xsmall.tablet, 4),
      paddingTop: vars.space.xsmall.tablet,
      paddingBottom: vars.space.xsmall.tablet,
      paddingLeft: vars.space.small.tablet,
      paddingRight: vars.space.small.tablet,
    },
  }),
]);

export const utilityLink = styleVariants({
  light: [
    utilityLinkBase,
    {
    },
  ],
  dark: [
    utilityLinkBase,
    {

    },
  ],
});
