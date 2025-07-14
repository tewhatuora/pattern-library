import { createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { rem } from '@/src/css/helpers';
import { mobileContainer, tabletContainer } from '@/src/css/grid';

import { focusSelectorsStyles } from '@/src/utils/custom';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

// export const widthVar = createVar();

const spacing = calc.multiply(vars.space.medium.tablet, 2); // 4rem / 64px
const lessSpacing = calc.multiply(vars.space.medium.tablet, 1.25); // 2.5rem / 40px, for when there's 5 columns

export const footer = recipe({
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

export const footerInner = style([
  responsiveStyle({
    mobile: {
      paddingTop: vars.space.xxlarge.mobile,
      paddingBottom: vars.space.xxlarge.mobile,
      paddingRight: vars.space.large.mobile,
      paddingLeft: vars.space.large.mobile,
      ...mobileContainer,
    },
    desktop: {
      paddingTop: spacing,
      paddingBottom: spacing,
      paddingRight: '0',
      paddingLeft: '0',
      ...tabletContainer,
    },
  }),
]);

export const footerDarkGradient = style({
  background: `${vars.gradient.semantic.structure.background['footer-dark-vertical gradient']}, ${vars.gradient.semantic.structure.background['footer-dark-horizontal gradient']}`,
});

// ##### First row #####

export const logoWrapper = style({
  height: rem(80),
  width: rem(172),
});

export const govtLogoWrapper = style({
  height: rem(80),
  width: rem(272),
});

// ##### Second Row #####

export const secondRow = style([
  atoms({
    display: 'flex',
    flexDirection: { mobile: 'column', desktop: 'row' },
    justifyContent: 'spaceBetween',
    flexWrap: 'wrap',
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
    flexDirection: { mobile: 'column', desktop: 'row' },
    justifyContent: 'spaceBetween',
  }),
]);

export const socialAndImprintChild = style([
  {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
  },
  responsiveStyle({
    mobile: {
      selectors: {
        '&:not(:first-child)': {
          marginTop: rem(42),
        },
      },
    },
    desktop: {
      selectors: {
        '&:not(:first-child)': {
          marginTop: 0,
          marginLeft: rem(42),
        },
      },
    },
  }),
]);

export const socialIcon = style({
  height: '2rem',
  width: '2rem',
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
  atoms({
    display: 'flex',
    flexGrow: 1,
  }),
  responsiveStyle({
    mobile: {
      marginTop: vars.space.large.mobile,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      gap: vars.space.large.mobile,
    },
    desktop: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
  }),
]);

export const imprintItem = style(
  responsiveStyle({
    mobile: {
      selectors: {
        // `flex-direction: column-reverse` so it's :first-child, not :last-child
        [`${imprintItems} > &:not(:first-child)`]: {
          // marginBottom: vars.space.small.tablet,
        },
      },
    },
    desktop: {
      marginRight: vars.space.small.tablet,
      selectors: {
        [`${imprintItems} > &:nth-last-child(2)`]: {
          flex: 1,
          textAlign: 'right',
        },
      },
    },
  }),
);

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

export const imprintItemsWrapper = style([
  atoms({
    display: 'flex',
    flexGrow: 1,
    flexDirection: { mobile: 'column', desktop: 'row' },
    justifyContent: 'flexEnd',
    alignItems: 'center',
  }),
]);

/**
 * The `react-shielded` component has SVG styles set to a size of 32px. Need to override it.
 */
globalStyle(`${shieldedSite} > button > svg`, {
  width: shieldedSiteButtonSizeVar,
  height: shieldedSiteButtonSizeVar,
});

export const imprintChildVariant = recipe({
  defaultVariants: {
    variant: 'light',
  },
  variants: {
    variant: {
      light: {
        selectors: {
          [`${imprintItems} > &:nth-last-child(2)`]: {
            color: vars.color.primary100,
          },
        },
      },
      dark: {
        selectors: {
          [`${imprintItems} > &:nth-last-child(2)`]: {
            color: vars.color.semantic.text.copy.light,
          },
        },
      },
    },
  },
});
