import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';

export const navListItem = style([
  atoms({
    flexShrink: 0,
  }),
  responsiveStyle({
    mobile: {},
    desktop: {
      position: 'relative',
      marginRight: vars.space.medium.mobile,
    },
  }),
]);

export const subNavListItem = style([
  atoms({
    reset: 'li',
  }),
]);

const navListItemLinkBase = style([
  atoms({
    position: 'relative',
    display: 'flex',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
  }),
  {
    width: '100%',
    color: 'currentColor',
    textDecoration: 'none',
    selectors: {
      '&:hover': {
        textDecoration: 'none',
        color: 'currentColor',
      },
      '&:focus': {
        outline: `${vars.borderWidth.medium} solid ${vars.color.caution100}`,
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        backgroundColor: 'transparent',
      },
      '&:visited': {
        color: 'currentColor',
      },
    },
  },
  responsiveStyle({
    mobile: {
      paddingTop: calc.divide(vars.space.medium.mobile, 2),
      paddingBottom: calc.divide(vars.space.medium.mobile, 2),
      selectors: {
        '&:after': {
          left: calc.multiply(-1, vars.space.small.mobile),
          top: calc.divide(vars.space.medium.mobile, 2),
          bottom: calc.divide(vars.space.medium.mobile, 2),
          width: calc.divide(vars.space.xsmall.mobile, 2),
        },
      },
    },
    desktop: {
      gap: '0.4rem',
      paddingTop: vars.space.medium.tablet,
      paddingBottom: vars.space.medium.tablet,
      selectors: {
        '&:after': {
          left: '0',
          top: 'unset',
          bottom: '0',
          width: '0',
          height: vars.space.xsmall.mobile,
          transition: 'background-color 0.5s cubic-bezier(0.33, 1, 0.68, 1), width 0.5s cubic-bezier(0.33, 1, 0.68, 1)',
        },
        '&:hover:after': {
          backgroundColor: 'currentColor',
          width: '100%',
        },
      },
    },
  }),
]);

export const navListItemLink = styleVariants({
  default: [navListItemLinkBase, {}],
  subnav: [
    navListItemLinkBase,
    style([
      responsiveStyle({
        mobile: {
          paddingTop: vars.space.medium.mobile,
          paddingBottom: vars.space.medium.mobile,
        },
        desktop: {
          paddingTop: vars.space.small.tablet,
          paddingBottom: vars.space.small.tablet,
          selectors: {
            '&:hover': {
              textDecoration: 'underline',
            },
            '&:after': {
              display: 'none',
            },
          },
        },
      }),
    ]),
  ],
});

export const chevron = style({
  transform: 'rotate(0deg)',
  transition: 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)',

  selectors: {
    [`${navListItem}:hover &`]: {
      transform: 'rotate(180deg)',
    },
  },
});
