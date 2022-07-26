import { createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

// TODO: Update all hardcoded number pixel values to tokens

export const firstRow = style({
  height: '7.2rem',
});

// TODO: Change how govt logo is implemented and update styles accordingly

export const govtLogoWrapper = style({
  height: '7.2rem',
  width: '26.5rem',
});

export const otherLogosWrapper = style({
  height: '7.2rem',
  gap: vars.space.xxlarge.tablet,
});

// Second Row

export const secondRow = style([
  atoms({
    display: 'flex',
    flexDirection: { mobile: 'column', tablet: 'row' },
    flexWrap: 'wrap',
  }),
  {
    gap: calc.multiply(2, vars.space.large.mobile), // 6.4rem
  },
]);

export const lessSpace = style({
  gap: vars.space.xlarge.mobile,
});

// Third row

export const socialAndImprintWrapper = style([
  atoms({
    display: 'flex',
    flexDirection: { mobile: 'columnReverse', tablet: 'rowReverse' },
    justifyContent: 'spaceBetween',
  }),
  responsiveStyle({
    mobile: { gap: '4.2rem' },
    tablet: { gap: 0 },
  }),
]);

export const social = style({
  gap: '2.2rem', // It's the same for all breakpoints and doesn't match any tokens
});

export const socialIcons = styleVariants({
  light: {
    color: vars.color.neutral25,
  },
  dark: {
    color: vars.color.neutral0,
  },
});

export const imprintItems = style([
  atoms({
    display: 'flex',
  }),
  {},
  responsiveStyle({
    mobile: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
      gap: vars.space.small.tablet,
    },
    tablet: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  }),
]);

const shieldedSiteButtonSizeVar = createVar();

export const shieldedSite = style([
  responsiveStyle({
    mobile: {
      alignSelf: 'flex-start',
      vars: { [shieldedSiteButtonSizeVar]: '4rem' },
    },
    tablet: {
      alignSelf: 'flex-end',
      vars: { [shieldedSiteButtonSizeVar]: '6.4rem' },
    },
  }),
]);

/**
 * The `react-shielded` component has SVG styles set to a size of 32px. Need to override it.
 */
globalStyle(`${shieldedSite} > button > svg`, {
  width: shieldedSiteButtonSizeVar,
  height: shieldedSiteButtonSizeVar,
});
