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
    gridTemplateColumns: `repeat(auto-fill, ${widthVar})`,
    columnGap: vars.space.large.tablet,
  },
]);

export const lessSpace = style({
  columnGap: vars.space.xlarge.mobile,
});

export const hiddenNavs = style({
  position: 'absolute',
  visibility: 'hidden',
  width: 'fit-content',
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
