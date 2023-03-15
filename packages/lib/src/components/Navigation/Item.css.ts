import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { focusColor } from '@/src/utils/custom';

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
    width: 'full',
  }),
  {
    color: 'currentColor',
    textDecoration: 'none',
    selectors: {
      '&:hover': {
        textDecoration: 'none',
        color: 'currentColor',
      },
      '&:focus': {
        outline: `${vars.borderWidth.medium} solid ${focusColor}`,
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
      gap: calc.divide(vars.space.xsmall.tablet, 4),
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
          paddingTop: calc.divide(vars.space.medium.mobile, 2),
          paddingBottom: calc.divide(vars.space.medium.mobile, 2),
        },
        desktop: {
          paddingTop: calc.divide(vars.space.small.tablet, 2),
          paddingBottom: calc.divide(vars.space.small.tablet, 2),
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
