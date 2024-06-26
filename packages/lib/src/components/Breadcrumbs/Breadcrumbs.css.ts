import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';
import { fontFamily } from '../../hooks/typography/typography.css';

export const list = style([
  responsiveStyle({
    mobile: {
      maxWidth: '100%',
    },
    tablet: {
      maxWidth: '60%',
    },
  }),
]);

export const boldText = style({
  fontWeight: 'bold',
  background: 'red',
});

export const crumb = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  fontWeight: vars.textWeight.regular,

  selectors: {
    '&:last-of-type, &:first-of-type': {
      flexShrink: '0',
    },
    [`${boldText} &`]: {
      fontWeight: 'bold',
    },
  },
});

export const ellipsis = style({
  flexShrink: '0',
  color: vars.color.semantic.text.links.active,
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

export const variants = {
  background: {
    true: [
      {
        backgroundColor: vars.color.semantic.controls.background.light2,
        borderRadius: vars.borderRadiusAll.standard,
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
  },
};

export const breadcrumbs = recipe({
  base: [
    fontFamily,
    {
      color: vars.color.semantic.text.copy.dark,
    },
  ],
  variants,
});
