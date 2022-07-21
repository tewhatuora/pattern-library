import { style } from '@vanilla-extract/css';

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
  height: '6.4rem',
  width: '26.5rem',
});

export const otherLogosWrapper = style({
  height: '7.2rem',
  gap: vars.space.xxlarge.tablet,
});

// Second Row

export const secondRow = style({
  gap: calc.multiply(2, vars.space.large.mobile), // 6.4rem
});

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

export const socialIcons = style({
  color: vars.color.neutral25,
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
      marginTop: calc.multiply(-1, vars.space.small.tablet),
    },
  }),
]);

export const imprintItem = style([
  atoms({}),
  {},
  responsiveStyle({
    mobile: {},
    tablet: {
      marginTop: vars.space.small.tablet,
      marginRight: vars.space.xlarge.tablet,
    },
  }),
]);
