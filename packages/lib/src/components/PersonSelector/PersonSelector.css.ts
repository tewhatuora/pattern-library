import { style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { BUTTON_HEIGHT_TABLET, variants } from '../Button/Button.css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { rem } from '../../css/helpers';

export const personSelector = recipe({
  base: [
    {
      gap: vars.space.xsmall.tablet,
    },
    responsiveStyle({
      mobile: {
        // Hide desktop person selector on mobile
        display: 'none',
      },
      tablet: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    }),
  ],
  variants: {
    variant: {
      // Show desktop person selector on mobile
      // Hide it visually but still render it so we can still measure if it wraps
      // as we can't tell if it is not in the DOM
      full: responsiveStyle({
        tablet: {
          position: 'unset',
          visibility: 'unset',
        },
      }),
      hidden: responsiveStyle({
        tablet: {
          position: 'absolute',
          visibility: 'hidden',
        },
      }),
    },
  },
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
export const buttonVariants = recipe({
  base: style([
    {
      width: 'auto',
      height: calc.add(BUTTON_HEIGHT_TABLET, rem(4)),
      gap: vars.space.xsmall.tablet,
      paddingLeft: vars.space.xsmall.tablet,
      paddingRight: vars.space.small.tablet,
      whiteSpace: 'nowrap',
      borderTopLeftRadius: vars.borderRadius.topLeft.standard,
      borderTopRightRadius: vars.borderRadius.topRight.standard,
      borderBottomRightRadius: vars.borderRadius.bottomRight.standard,
      borderBottomLeftRadius: vars.borderRadius.bottomLeft.standard,
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
  variants: {
    variant: {
      default: [
        variants({ variant: 'tertiary' }),
        {
          color: vars.color.semantic.text.copy.dark,
          ':hover': {
            color: vars.color.semantic.text.copy.dark,
          },
        },
      ],
      selected: [
        variants({ variant: 'primary' }),
        {
          color: vars.color.primary0,
        },
      ],
    },
  },
});

export const buttonIconVariants = styleVariants({
  default: {
    color: vars.color.primary100,
  },
  selected: {
    color: vars.color.primary0,
  },
});
