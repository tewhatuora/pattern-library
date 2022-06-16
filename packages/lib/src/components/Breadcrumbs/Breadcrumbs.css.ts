import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';
import { fontFamily } from '../../hooks/typography/typography.css';

export const list = style({
  minWidth: '0',
});

export const crumb = style({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',

  selectors: {
    '&:last-of-type, &:first-of-type': {
      flexShrink: '0',
    },
  },
});

export const ellipsis = style({
  flexShrink: '0',
  color: vars.color.info100,
});

export const hidden = style({
  display: 'none',
});

export const separator = style(
  responsiveStyle({
    mobile: {
      marginLeft: calc.divide(vars.space.xsmall.mobile, 2),
      marginRight: calc.divide(vars.space.xsmall.mobile, 2),
    },
    tablet: {
      marginLeft: vars.space.xsmall.mobile,
      marginRight: vars.space.xsmall.mobile,
    },
  }),
);

const defaultStyles = style([
  fontFamily,
  {
    color: vars.color.primary100,
  },
]);

export const breadcrumbs = styleVariants({
  withBackground: [
    defaultStyles,
    {
      backgroundColor: vars.color.primary5,
    },
    responsiveStyle({
      mobile: {
        paddingLeft: vars.space.small.mobile,
        paddingRight: vars.space.small.mobile,
        paddingTop: vars.space.xsmall.mobile,
        paddingBottom: vars.space.xsmall.mobile,
      },
      tablet: {
        paddingLeft: vars.space.small.tablet,
        paddingRight: vars.space.small.tablet,
        paddingTop: vars.space.xsmall.tablet,
        paddingBottom: vars.space.xsmall.tablet,
      },
    }),
  ],
});
