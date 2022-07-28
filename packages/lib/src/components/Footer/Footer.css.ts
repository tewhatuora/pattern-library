import { createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

export const widthVar = createVar();

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
    display: 'grid',
    width: 'full',
  }),
  {
    vars: {
      [widthVar]: '320px',
    },
    gridTemplateColumns: `repeat(auto-fill, ${widthVar})`,
    // gridTemplateColumns: 'repeat(auto-fill, minmax(min(10rem, 100%), 1fr))',
    // gridTemplateColumns: 'repeat(auto-fill, min(fit-content, 320px))',
    columnGap: vars.space.large.tablet,
  },
]);

export const secondRowChildren = styleVariants({
  0: {},
  1: { gridTemplateColumns: 'minmax(0, 32rem)' },
  2: { gridTemplateColumns: 'repeat(2, minmax(0, 32rem))' },
  3: { gridTemplateColumns: 'repeat(3, minmax(0, 32rem))' },
  4: { gridTemplateColumns: 'repeat(4, minmax(0, 32rem))' },
  5: { gridTemplateColumns: 'repeat(5, minmax(0, 32rem))' },
});

export const lessSpace = style({
  columnGap: vars.space.xlarge.mobile,
});

export const navigationWrapper = style({
  width: 'fit-content',
  maxWidth: 320,
});

export const hiddenNavs = style({
  maxWidth: 320,
  width: 'fit-content',
  position: 'absolute',
  visibility: 'hidden',
});

export const tempNavigation = style({ width: 'fit-content' });

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
