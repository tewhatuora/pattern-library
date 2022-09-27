import { createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

export const widthVar = createVar();

const spacing = calc.multiply(vars.space.medium.tablet, 2); // 6.4rem / 64px

export const footer = style(
  responsiveStyle({
    mobile: {
      paddingTop: vars.space.xxlarge.mobile,
      paddingBottom: vars.space.xxlarge.mobile,
    },
    desktop: {
      paddingTop: spacing,
      paddingBottom: spacing,
    },
  }),
);

export const footerInner = style([
  responsiveStyle({
    mobile: {
      paddingRight: vars.space.large.mobile,
      paddingLeft: vars.space.large.mobile,
    },
    desktop: {
      paddingRight: '0',
      paddingLeft: '0',
    },
  }),
]);

// ##### First row #####

export const logoWrapper = style({
  height: '8rem',
  width: '17.2rem',
});

export const govtLogoWrapper = style({
  height: '8rem',
  width: '27.2rem',
});

// ##### Second Row #####

export const secondRow = style([
  atoms({
    display: 'flex',
    flexDirection: { mobile: 'column', desktop: 'row' },
    justifyContent: 'spaceBetween',
  }),
  { gap: vars.space.large.tablet },
]);

export const childrenWrapper = style([
  atoms({
    display: 'grid',
    width: 'full',
  }),
  responsiveStyle({
    mobile: {
      rowGap: vars.space.large.tablet,
    },
    desktop: {
      gridTemplateColumns: `repeat(auto-fill, ${widthVar})`,
      columnGap: spacing,
    },
  }),
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
    flexDirection: { mobile: 'columnReverse', desktop: 'rowReverse' },
    justifyContent: 'spaceBetween',
  }),
  responsiveStyle({
    mobile: { gap: '4.2rem' },
    desktop: { gap: 0 },
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
    desktop: {
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
    desktop: {
      alignSelf: 'flex-end',
      vars: {
        [shieldedSiteButtonSizeVar]: calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xsmall.tablet, 2)),
      },
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
