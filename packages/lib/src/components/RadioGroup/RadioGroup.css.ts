import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

const margin = '2rem';

const variant = {
  default: atoms({
    color: 'primary100',
    borderColor: 'primary100',
  }),
  disabled: atoms({
    color: 'primary50',
    borderColor: 'primary50',
  }),
  error: atoms({
    color: 'error100',
    borderColor: 'error100',
  }),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
      alignItems: 'flexStart',
    }),
    responsiveStyle({
      mobile: {
        marginBottom: margin,
      },
      tablet: {
        marginBottom: margin,
      },
    }),
  ]),
  variants: {
    variant,
  },
});

export type Variants = RecipeVariants<typeof variants>;

export const styledItem = style([
  {
    all: 'unset',
    display: 'flex',
    borderStyle: 'solid',
    borderWidth: vars.borderWidth.small,
    width: '2.4rem',
    height: '2.4rem',
    borderRadius: '100%',
    selectors: {
      '&:focus': { borderColor: vars.color.caution100 },
    },
  },
]);

export const styledIndicator = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: vars.color.primary100,
    borderRadius: '50%',
    selectors: {
      '&::after': {
        content: '""',
        display: 'block',
        width: '0.8rem',
        height: '0.8rem',
        borderRadius: '50%',
        backgroundColor: vars.color.primary0,
      },
    },
  },
]);

export const Flex = style([
  {
    display: 'flex',
  },
]);

export const radioText = style([
  {
    // color: vars.color.primary100,
    marginLeft: vars.space.xsmall.tablet,
    display: 'flex',
    flexDirection: 'column',
  },
]);

export const headingWithLabel = style([{}]);

export const offsetButton = style({
  marginTop: '0.4rem',
});

export const disabled = style([
  {
    background: vars.color.primary50,
  },
]);

export const errorState = style([{ background: vars.color.error100 }]);
