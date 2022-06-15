import { style, styleVariants } from '@vanilla-extract/css';

import { ButtonStyles } from '../Button/Button';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const pages = style([
  responsiveStyle({
    mobile: {
      display: 'flex',
      alignItems: 'center',
    },
    tablet: {
      display: 'none',
    },
  }),
]);

export const pageLinks = style([
  responsiveStyle({
    mobile: {
      display: 'none',
    },
    tablet: {
      display: 'flex',
    },
  }),
]);

export const page = style({
  width: vars.space.xlarge.tablet,
  height: vars.space.xlarge.tablet,
  marginLeft: vars.space.xsmall.mobile,
  selectors: {
    '&:first-child': {
      marginLeft: '0',
    },
  },
});

export const pageItem = style({
  width: '100%',
  height: '100%',
});

export const buttonContainer = style(
  responsiveStyle({
    mobile: {
      display: 'flex',
      width: '12rem',
      height: vars.space.xxlarge.tablet,
      selectors: {
        '&:last-of-type': {
          justifyContent: 'flex-end',
        },
      },
    },
    tablet: {
      width: '18rem',
    },
  }),
);

export const button = styleVariants({
  primary: [
    ButtonStyles.variants({ color: 'primary' }),
    pageItem,
    responsiveStyle({
      mobile: {
        paddingLeft: vars.space.small.tablet,
        paddingRight: vars.space.small.tablet,
        width: 'fit-content',
      },
      tablet: {
        paddingLeft: '0',
        paddingRight: '0',
        width: '100%',
      },
    }),
  ],
  page: [
    ButtonStyles.variants({ color: 'tertiary' }),
    pageItem,
    {
      border: 'none',
      selectors: {
        '&:hover': {
          color: vars.color.primary0,
          backgroundColor: vars.color.secondary100,
        },
      },
    },
  ],
  current: [ButtonStyles.variants({ color: 'primary' }), pageItem],
});

const dot = {
  width: '0.3rem',
  height: '0.3rem',
  borderRadius: '50%',
  backgroundColor: vars.color.primary100,
};

export const ellipsis = style([
  dot,
  {
    position: 'relative',
    selectors: {
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '-0.6rem',
        ...dot,
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '0',
        right: '-0.6rem',
        ...dot,
      },
    },
  },
]);
