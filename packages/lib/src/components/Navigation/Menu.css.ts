import { StyleRule, globalKeyframes, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';
import { atoms } from '../../css/atoms/atoms';
import { tabletContainer, tabletRow } from '../../css/grid';
import { vars } from '../../themes/vars.css';

const navigationMenuContainerBase = style([
  {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: '2',
    top: '0',
    right: '0',
    height: calc.subtract('100vh', calc.add(vars.space.xxlarge.tablet, vars.space.large.tablet)),
    transition: 'width 0.5s cubic-bezier(0.33, 1, 0.68, 1)',
    willChange: 'width',
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
  },
  responsiveStyle({
    desktop: {
      top: '100%',
      right: 'unset',
      height: 'unset',
      overflowY: 'hidden',
      WebkitOverflowScrolling: 'unset',
      transition: 'height 0.5s cubic-bezier(0.33, 1, 0.68, 1)',
      willChange: 'height',
    },
  }),
]);

export const variants = styleVariants({
  light: {
    backgroundColor: vars.color.primary0,
    color: vars.color.primary100,
  },
  dark: [
    {
      color: vars.color.primary0,
    },
    responsiveStyle({
      mobile: {
        backgroundColor: vars.color.primary75,
      },
      desktop: {
        backgroundColor: vars.color.primary100,
      },
    }),
  ],
});

/**
 * Height is set dynamically for mobile
 * Width is set dynamically for desktop
 */
export const navigationMenuContainer = styleVariants({
  default: [
    navigationMenuContainerBase,
    responsiveStyle({
      desktop: {
        width: '100vw',
        left: calc.multiply(-1, vars.space.medium.tablet),
      },
    }),
  ],
  mini: [
    navigationMenuContainerBase,
    {
      width: '100vw',
    },
    responsiveStyle({
      desktop: {
        width: '52.3rem',
        left: '0',
        boxShadow: vars.shadow.primary,
      },
    }),
  ],
});

globalKeyframes('fadeIn', {
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

const navigationMenuBase = style([
  {
    position: 'static',
    width: calc.subtract('100vw', calc.multiply(vars.space.small.mobile, 2)),
    height: '100vh',
    padding: vars.space.small.mobile,
    animation: `0.75s 1 fadeIn cubic-bezier(0.33, 1, 0.68, 1)`,
    willChange: 'opacity',
  },
  responsiveStyle({
    desktop: {
      position: 'absolute',
      bottom: '0',
      paddingLeft: '0',
      paddingRight: '0',
      height: 'unset',
      width: 'unset',
    },
  }),
]);

export const navigationMenu = styleVariants({
  default: [
    navigationMenuBase,
    responsiveStyle({
      desktop: {
        left: '0',
        right: '0',
        width: '100%',
      },
    }),
  ],
  mini: [
    navigationMenuBase,
    responsiveStyle({
      desktop: {
        left: vars.space.medium.tablet,
        right: vars.space.medium.tablet,
        width: 'unset',
      },
    }),
  ],
});

export const subNavHeading = style([
  responsiveStyle({
    mobile: {
      marginBottom: calc.divide(vars.space.medium.mobile, 2),
    },
    desktop: {
      marginBottom: calc.divide(vars.space.small.tablet, 2),
    },
  }),
]);

export const subNavList = style([
  atoms({
    reset: 'ul',
    width: 'full',
  }),
]);

export const backButton = style([
  atoms({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 'xsmall',
  }),
  {
    selectors: {
      '&:focus': {
        outline: `${vars.borderWidth.medium} solid ${vars.color.caution100}`,
      },
    },
  },
]);

export const backButtonText = style([
  atoms({
    textAlign: 'center',
    flexGrow: 1,
    marginRight: 'medium',
  }),
]);

const gridContainerStyles: StyleRule = {
  margin: '0',
};

const gridRowStyles: StyleRule = {
  display: 'flex',
  gridTemplateColumns: 'unset',
  flexDirection: 'column',
};

export const gridContainer = style(gridContainerStyles);
export const gridRow = style(gridRowStyles);

export const resetContainerForTablet = style(
  responsiveStyle({
    mobile: gridContainerStyles,
    tablet: gridContainerStyles,
    desktop: tabletContainer,
  }),
  'resetContainerForTablet',
);
export const resetRowForTablet = style(
  responsiveStyle({
    mobile: gridRowStyles,
    tablet: gridRowStyles,
    desktop: tabletRow(),
  }),
  'resetRowForTablet',
);
