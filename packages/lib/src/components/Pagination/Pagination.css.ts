import { style, styleVariants } from '@vanilla-extract/css';

import { rem } from '@/src/css/helpers';

import { fontFamily } from '@/src/hooks/typography/typography.css';

import { getFocusSelectors } from '@/src/utils/custom';

import { atoms } from '../../css/atoms/atoms';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

const base = style([
  responsiveStyle({
    mobile: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
  }),
]);

export const pages = styleVariants({
  controlled: [base],
  uncontrolled: [
    base,
    responsiveStyle({
      tablet: {
        display: 'none',
      },
    }),
  ],
});

const pageLinksBase = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  }),
]);

export const pageLinks = styleVariants({
  controlled: [pageLinksBase],
  uncontrolled: [
    pageLinksBase,
    responsiveStyle({
      mobile: {
        display: 'none',
      },
      tablet: {
        display: 'flex',
      },
    }),
  ],
});

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

export const pageItem = style([
  atoms({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 'button',
    transitionDuration: '150',
    transitionProperty: 'default',
    transitionTimingFunction: 'inOut',
  }),
  fontFamily,
  {
    width: '100%',
    height: '100%',
    fontSize: vars.textSize.medium.tablet.fontSize,
    selectors: {
      ...getFocusSelectors(vars.color.semantic.button.primary.highlight.focus),
    },
  },
]);

export const buttonContainer = style(
  responsiveStyle({
    mobile: {
      display: 'flex',
      width: rem(120),
      height: vars.space.xxlarge.tablet,
      selectors: {
        '&:last-of-type': {
          justifyContent: 'flex-end',
        },
      },
    },
    tablet: {
      width: rem(130),
    },
  }),
);

export const button = styleVariants({
  primary: [
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
    pageItem,
    {
      color: vars.color.semantic.text.copy.dark,
      border: 'none',
      ':hover': {
        color: vars.color.semantic.text.copy.light,
        backgroundColor: vars.color.semantic.button.primary.background.hover,
      },
    },
  ],
  current: [
    pageItem,
    {
      color: vars.color.semantic.text.copy.light,
      backgroundColor: vars.color.semantic.button.primary.background.normal,
      fontWeight: vars.textWeight.bold,
    },
  ],
});

const dot = {
  width: rem(3),
  height: rem(3),
  borderRadius: '50%',
  backgroundColor: vars.color.semantic.text.copy.dark,
};

export const ellipsis = style([
  dot,
  {
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: rem(-6),
      ...dot,
    },
    ':after': {
      content: '""',
      position: 'absolute',
      top: '0',
      right: rem(-6),
      ...dot,
    },
  },
]);
