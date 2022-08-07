import { createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

export const widthVar = createVar();

// ##### First row #####

export const govtLogoWrapper = style({
  height: '7.2rem',
  width: '26.5rem',
});

export const extraLogosWrapper = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
  }),
  {
    height: '7.2rem',
    gap: vars.space.xxlarge.tablet,
  },
]);

// ##### Second Row #####

export const secondRow = style([
  atoms({
    display: 'flex',
    flexDirection: { mobile: 'column', tablet: 'row' },
    justifyContent: 'spaceBetween',
  }),
  { gap: vars.space.large.tablet },
]);

export const childrenWrapper = style([
  atoms({
    display: 'grid',
    width: 'full',
  }),
  {
    gridTemplateColumns: `repeat(auto-fill, ${widthVar})`,
    columnGap: calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xsmall.tablet, 2)), // 6.4rem/64px
    rowGap: vars.space.large.tablet,
  },
]);

export const lessSpace = style({
  columnGap: vars.space.large.tablet, // 4rem/40px
});

export const hiddenNavs = style({
  position: 'absolute',
  visibility: 'hidden',
  width: 'fit-content',
});

export const tempNavigation = style({ width: 'fit-content' });

// ##### Third row #####

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
      vars: { [shieldedSiteButtonSizeVar]: vars.space.xlarge.mobile },
    },
    tablet: {
      alignSelf: 'flex-end',
      vars: { [shieldedSiteButtonSizeVar]: calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xsmall.tablet, 2)) },
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
