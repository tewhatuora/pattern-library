import { createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { rem } from '@/src/css/helpers';

import { focusSelectorsStyles } from '@/src/utils/custom';

import { breakpointQuery, responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

// export const widthVar = createVar();

const spacing = calc.multiply(vars.space.medium.tablet, 2); // 4rem / 64px
const lessSpacing = calc.multiply(vars.space.medium.tablet, 1.25); // 2.5rem / 40px, for when there's 5 columns

export const footer = recipe({
  base: responsiveStyle({
    mobile: {
      paddingTop: vars.space.xlarge.mobile,
      paddingBottom: vars.space.xlarge.mobile,
    },
    desktop: {
      paddingTop: vars.space.xlarge.mobile,
      paddingBottom: vars.space.xlarge.mobile,
    },
  }),
  variants: {
    variant: {
      light: {
        backgroundColor: vars.color.semantic.structure.background['footer-light'],
        color: vars.color.semantic.text.copy.dark,
      },
      dark: {
        backgroundColor: vars.color.semantic.structure.background['footer-dark'],
        color: vars.color.semantic.text.copy.light,
      },
    },
  },
});

export const footerInner = style({
  vars: {
    '--footer-padding': '16px',
  },
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 'calc(100% - calc(var(--footer-padding) * 2))',
  maxWidth: 1200,

  '@media': {
    [breakpointQuery.tablet]: {
      vars: {
        '--footer-padding': '24px',
      },
    },
  },
});

// ##### First row #####
const rowGapLogo = 24;

export const logoWrapper = style({
  marginTop: -rowGapLogo,
});

export const govtLogoWrapper = style({
  width: rem(200),
  height: rem(46),
  marginTop: rowGapLogo,
  marginRight: 40,

  selectors: {
    ...focusSelectorsStyles,
  },
});

export const teWhatuOraLogoWrapper = style([
  responsiveStyle({
    mobile: {
      width: rem(148.72),
      height: rem(24),
      marginTop: rowGapLogo,

      selectors: {
        ...focusSelectorsStyles,
      },
    },
    tablet: {
      width: rem(173.5),
      height: rem(28),
    },
  }),
]);

export const divider = style({
  opacity: 0.3,
});

// ##### Second Row #####

export const secondRow = style([
  atoms({
    display: 'flex',
    flexDirection: { mobile: 'column', desktop: 'row' },
    justifyContent: 'spaceBetween',
  }),
]);

export const secondRowNavigationWrapper = style([
  atoms({
    // display: 'grid',
    display: 'flex',
    width: 'full',
  }),
  responsiveStyle({
    mobile: {
      flexWrap: 'wrap',
    },
    desktop: {
      // gridTemplateColumns: `repeat(auto-fill, ${widthVar})`,
      flexWrap: 'nowrap',
    },
  }),
]);

export const secondRowNavigationChild = style([
  responsiveStyle({
    mobile: {
      flexBasis: '100%',
      maxWidth: 'unset',
      selectors: {
        '&:not(:first-child)': {
          marginTop: vars.space.large.tablet,
        },
      },
    },
    desktop: {
      // As per spec, keeps all columns the same width with a max of 320px
      flexBasis: 320,
      maxWidth: 320,
      selectors: {
        '&:not(:first-child)': {
          marginTop: 0,
          marginLeft: spacing,
        },
      },
    },
  }),
]);

export const lessSpace = style(
  responsiveStyle({
    desktop: {
      selectors: {
        '&:not(:first-child)': {
          marginTop: 0,
          marginLeft: lessSpacing,
        },
      },
    },
  }),
);

export const secondRowChild = style([
  { display: 'flex' },
  responsiveStyle({
    mobile: {
      selectors: {
        '&:not(:first-child)': {
          marginTop: vars.space.large.tablet,
        },
      },
    },
    desktop: {
      selectors: {
        '&:not(:first-child)': {
          marginTop: 0,
          marginLeft: spacing,
        },
      },
    },
  }),
]);

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
    alignItems: { mobile: 'flexStart', desktop: 'center' },
  }),
]);

export const socialAndImprintChild = style(
  responsiveStyle({
    mobile: {
      selectors: {
        // :last-child because the parent has rowReverse, so it's the opposite
        '&:not(:last-child)': {
          marginTop: rem(42),
        },
      },
    },
    desktop: {
      selectors: {
        // :last-child because the parent has rowReverse, so it's the opposite
        '&:not(:last-child)': {
          marginTop: 0,
          marginLeft: rem(42),
        },
      },
    },
  }),
);

export const socialIcon = style({
  selectors: {
    '&:not(:first-child)': {
      marginLeft: rem(22), // It's the same for all breakpoints and doesn't match any tokens
    },
  },
});

export const socialIcons = styleVariants({
  light: {
    color: vars.color.semantic.icons.black,
  },
  dark: {
    color: vars.color.semantic.icons.light,
  },
});

export const legalCopy = style([
  responsiveStyle({
    mobile: {
      order: 1,
    },
    desktop: {
      order: 0,
    },
  }),
]);

export const imprintItems = style([
  {
    marginBottom: calc.multiply(vars.space.small.tablet, -1),
  },
  atoms({
    display: 'flex',
  }),
  responsiveStyle({
    mobile: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
    desktop: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  }),
]);

export const imprintItem = style([
  responsiveStyle({
    mobile: {
      selectors: {
        // `flex-direction: column-reverse` so it's :first-child, not :last-child
        [`${imprintItems} > &:not(:first-child)`]: {
          marginBottom: vars.space.small.tablet,
        },
      },
    },
    desktop: {
      selectors: {
        [`${imprintItems} > &:not(:last-child)`]: {
          marginRight: vars.space.small.tablet,

          // marginBottom is needed because with row-reverse, this selector is not targeting the visually top item.
          // And that top item needs the bottom margin to push away the lower items.
          // It doesn't matter if the bottom item has padding on desktop because there is nothing below it (at
          // least, for now...)
          marginBottom: vars.space.small.tablet,
        },
      },
    },
  }),
]);

export const imprintLink = style({
  borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),

  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
    ...focusSelectorsStyles,
  },
});

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
