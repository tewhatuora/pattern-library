import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { focusSelectorsStyles, getFocusSelectors } from '@/src/utils/custom';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { BUTTON_HEIGHT_MOBILE, BUTTON_HEIGHT_TABLET } from '../Button/Button.css';

const HEADER_HEIGHT_MOBILE = calc.add(BUTTON_HEIGHT_MOBILE, rem(16));
const HEADER_HEIGHT_TABLET = calc.add(BUTTON_HEIGHT_TABLET, rem(16));

export const wrapper = style({
  position: 'relative',
  width: '100%',
});

export const base = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
  }),
  {
    columnGap: vars.space.xsmall.tablet,
  },
  responsiveStyle({
    mobile: {
      height: HEADER_HEIGHT_MOBILE,
      padding: vars.space.small.mobile,
    },
    tablet: {
      height: HEADER_HEIGHT_TABLET,
      padding: vars.space.small.tablet,
    },
  }),
]);

export const header = styleVariants({
  dark: [
    base,
    {
      // dark header uses gradient
      background: vars.gradient.semantic.structure.background['header-dark'],
      color: vars.color.semantic.text.copy.light,
    },
  ],
  light: [
    base,
    {
      backgroundColor: vars.color.semantic.structure.background['header-light'],
      color: vars.color.semantic.text.copy.dark,
    },
  ],
});

export const logo = style([
  {
    display: 'block',
    borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),

    selectors: {
      ...focusSelectorsStyles,
    },
  },
  responsiveStyle({
    mobile: {
      width: rem(100),
    },
    tablet: {
      width: rem(164),
    },
  }),
]);

export const searchForm = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
  }),
]);

export const mobileMenuButton = style([
  atoms({
    alignItems: 'center',
  }),
  {
    gap: vars.space.xsmall.mobile,
    selectors: {
      ...getFocusSelectors(vars.color.semantic.menu.highlight.focus),
    },
  },
  responsiveStyle({
    mobile: {
      marginRight: vars.space.small.mobile,
    },
    tablet: {
      marginRight: vars.space.medium.tablet,
    },
  }),
]);

export const menuButtonIcon = styleVariants({
  light: [
    {
      width: '1rem',
      height: '1rem',
    },
  ],
  dark: [
    {
      width: '1.5rem',
      height: '1.5rem',
    },
  ],
});

export const menuButtonVariant = styleVariants({
  light: [
    {
      padding: '1.2rem',
      borderRadius: '27px',
      backgroundColor: vars.color.semantic.button.primary.background.normal,
      color: vars.color.semantic.icons.light,
      selectors: {
        '&:hover': {
          color: vars.color.semantic.button.primary.content.hover,
        },
      },
    },
  ],
  dark: [
    {
      selectors: {
        '&:hover': {
          color: vars.color.semantic.button.primary.content.hover,
        },
      },
    },
  ],
});

export const mobileMenuButtonText = style({
  width: rem(50),
});

export const headerLeftMargin = style(
  responsiveStyle({
    mobile: {
      marginLeft: vars.space.small.mobile,
    },
    tablet: {
      marginLeft: vars.space.medium.tablet,
    },
  }),
);
export const headerRightMargin = style(
  responsiveStyle({
    mobile: {
      marginRight: vars.space.small.mobile,
    },
    tablet: {
      marginRight: vars.space.medium.tablet,
    },
  }),
);
