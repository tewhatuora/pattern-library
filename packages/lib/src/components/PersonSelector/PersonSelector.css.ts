import { style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { BUTTON_HEIGHT_TABLET, button as buttonComponentVariants } from '../Button/Button.css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { rem } from '../../css/helpers';

export const personSelectorVariants = {
  variant: {
    // Show desktop person selector on mobile
    // Hide it visually but still render it so we can still measure if it wraps
    // as we can't tell if it is not in the DOM
    full: responsiveStyle({
      tablet: {
        visibility: 'unset',
      },
    }),
    hidden: responsiveStyle({
      tablet: {
        visibility: 'hidden',
      },
    }),
  },
};

export const personSelector = recipe({
  base: [
    responsiveStyle({
      mobile: {
        // Hide desktop person selector on mobile
        display: 'none',
      },
      tablet: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
      },
    }),
  ],
  variants: personSelectorVariants,
});

export const heading = style([
  responsiveStyle({
    mobile: {
      display: 'none',
    },
    tablet: {
      display: 'block',
      marginBottom: vars.space.xsmall.tablet,
    },
  }),
]);

export const heightSpacer = style([
  responsiveStyle({
    tablet: {
      height: calc.add(BUTTON_HEIGHT_TABLET, rem(4)),
    },
  }),
]);

export const buttonVariants = {
  variant: {
    default: [
      buttonComponentVariants({ variant: 'tertiary' }),
      {
        color: vars.color.semantic.text.copy.dark,
        ':hover': {
          color: vars.color.semantic.text.copy.dark,
        },
      },
    ],
    selected: [
      buttonComponentVariants({ variant: 'primary' }),
      {
        color: vars.color.semantic.controls.background.active,
        ':hover': {
          color: vars.color.semantic.button.primary.background.hover,
        },
      },
    ],
  },
};

export const button = recipe({
  base: style([
    {
      width: 'auto',
      height: calc.add(BUTTON_HEIGHT_TABLET, rem(4)),
      paddingLeft: vars.space.xsmall.tablet,
      paddingRight: vars.space.small.tablet,
      marginLeft: vars.space.xsmall.tablet,
      whiteSpace: 'nowrap',
      borderTopLeftRadius: vars.borderRadius.topLeft.standard,
      borderTopRightRadius: vars.borderRadius.topRight.standard,
      borderBottomRightRadius: vars.borderRadius.bottomRight.standard,
      borderBottomLeftRadius: vars.borderRadius.bottomLeft.standard,
      selectors: {
        '&:first-child': {
          marginLeft: 0,
        },
      },
    },
    responsiveStyle({
      mobile: {
        justifyContent: 'flex-start',
      },
      tablet: {
        maxWidth: 'unset',
      },
    }),
  ]),
  variants: buttonVariants,
});

export const buttonIconVariants = styleVariants({
  default: {
    color: vars.color.semantic.text.copy.dark,

  },
  selected: {
    color: vars.color.semantic.text.copy.light,

  },

});