import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { atoms } from '../../css/atoms/atoms';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const root = style({
  color: 'inherit',
  cursor: 'pointer',
});

export const variants = recipe({
  base: style([
    atoms({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transitionDuration: '150',
      transitionProperty: 'default',
      transitionTimingFunction: 'inOut',
    }),
    {
      width: '100%',
      maxWidth: '39.6rem',
      borderTopLeftRadius: vars.borderRadius.topLeft.button,
      borderTopRightRadius: vars.borderRadius.topRight.button,
      borderBottomRightRadius: vars.borderRadius.bottomRight.button,
      borderBottomLeftRadius: vars.borderRadius.bottomLeft.button,
      selectors: {
        '&[disabled]': {
          cursor: 'not-allowed',
        },
      },
    },
    responsiveStyle({
      mobile: {
        height: vars.space.xxlarge.tablet,
        gap: vars.space.xsmall.mobile,
      },
      tablet: {
        height: calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xsmall.tablet, 4)),
        gap: vars.space.xsmall.tablet,
      },
    }),
  ]),
  variants: {
    icon: {
      right: {
        flexDirection: 'row',
      },
      left: {
        flexDirection: 'row-reverse',
      },
    },
    color: {
      text: style([
        responsiveStyle({
          mobile: {
            height: 'auto',
            gap: calc.divide(vars.space.xsmall.mobile, 2),
            padding: calc.divide(vars.space.xsmall.mobile, 2),
          },
          tablet: {
            height: 'auto',
            gap: calc.multiply(vars.space.xsmall.mobile, 1.25),
            padding: calc.divide(vars.space.xsmall.mobile, 2),
          },
        }),
        {
          display: 'inline-flex',
          width: 'auto',
          color: vars.color.info100,
          borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),
          ':hover': {
            color: vars.color.info75,
            textDecoration: 'underline',
          },
          ':focus': {
            outline: `${vars.borderWidth.medium} solid ${vars.color.secondary50}`,
          },
        },
      ]),
      label: style([
        responsiveStyle({
          mobile: {
            height: 'auto',
            gap: calc.divide(vars.space.xsmall.mobile, 2),
          },
          tablet: {
            height: 'auto',
            gap: calc.multiply(vars.space.xsmall.mobile, 1.25),
          },
        }),
        {
          display: 'inline-flex',
          width: 'auto',
          color: vars.color.info100,
          borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),
          ':hover': {
            color: vars.color.info75,
            textDecoration: 'underline',
          },
          ':focus': {
            outline: `${vars.borderWidth.medium} solid ${vars.color.secondary50}`,
          },
        },
      ]),
      primary: {
        color: vars.color.tertiary0,
        backgroundColor: vars.color.tertiary100,
        ':hover': {
          color: vars.color.tertiary0,
          backgroundColor: vars.color.tertiary75,
        },
        ':focus': {
          color: vars.color.tertiary0,
          backgroundColor: vars.color.tertiary75,
          outline: `${vars.borderWidth.xlarge} solid ${vars.color.secondary50}`,
        },
        ':active': {
          color: vars.color.tertiary0,
          backgroundColor: vars.color.tertiary110,
          outline: 'none',
        },
        selectors: {
          '&[disabled]': {
            color: vars.color.tertiary0,
            backgroundColor: vars.color.tertiary25,
          },
        },
      },
      secondary: {
        color: vars.color.primary0,
        backgroundColor: vars.color.secondary100,
        borderTopLeftRadius: vars.borderRadius.topRight.button,
        borderTopRightRadius: vars.borderRadius.topLeft.button,
        borderBottomRightRadius: vars.borderRadius.bottomLeft.button,
        borderBottomLeftRadius: vars.borderRadius.bottomRight.button,
        ':hover': {
          color: vars.color.primary0,
          backgroundColor: vars.color.secondary75,
        },
        ':focus': {
          color: vars.color.primary0,
          outline: `${vars.borderWidth.xlarge} solid ${vars.color.secondary50}`,
        },
        ':active': {
          color: vars.color.primary0,
          backgroundColor: vars.color.secondary110,
        },
        selectors: {
          '&[disabled]': {
            color: vars.color.primary0,
            backgroundColor: vars.color.secondary25,
          },
        },
      },
      tertiary: {
        color: vars.color.primary100,
        backgroundColor: vars.color.neutral0,
        borderStyle: 'solid',
        borderColor: vars.color.primary100,
        borderWidth: vars.borderWidth.small,
        ':hover': {
          color: vars.color.primary100,
          borderColor: vars.color.primary75,
        },
        ':focus': {
          color: vars.color.primary100,
          borderWidth: '0',
          outline: `${vars.borderWidth.xlarge} solid ${vars.color.secondary50}`,
        },
        ':active': {
          color: vars.color.primary100,
          borderColor: vars.color.primary110,
        },
        selectors: {
          '&[disabled]': {
            color: vars.color.primary25,
            borderColor: vars.color.primary25,
          },
        },
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    icon: 'right',
  },
});

export type Variants = RecipeVariants<typeof variants>;
