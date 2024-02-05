import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { createVar, style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { getFocusSelectors } from '@/src/utils/custom';

import { atoms } from '../../css/atoms/atoms';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const BUTTON_HEIGHT_MOBILE = vars.space.xxlarge.tablet;
export const BUTTON_HEIGHT_TABLET = calc.add(vars.space.xxlarge.tablet, calc.divide(vars.space.xsmall.tablet, 4));

export const root = style({
  color: 'inherit',
  cursor: 'pointer',
});

const gapVar = createVar();

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
      borderTopLeftRadius: vars.borderRadius.topLeft.button,
      borderTopRightRadius: vars.borderRadius.topRight.button,
      borderBottomRightRadius: vars.borderRadius.bottomRight.button,
      borderBottomLeftRadius: vars.borderRadius.bottomLeft.button,
      borderStyle: 'solid',
      borderWidth: vars.borderWidth.small,
      selectors: {
        '&[disabled]': {
          cursor: 'not-allowed',
        },
      },
    },
    responsiveStyle({
      mobile: {
        height: BUTTON_HEIGHT_MOBILE,
        vars: {
          [gapVar]: vars.space.xsmall.mobile,
        },
      },
      tablet: {
        height: BUTTON_HEIGHT_TABLET,
        maxWidth: rem(396),
        vars: {
          [gapVar]: vars.space.xsmall.tablet,
        },
      },
    }),
  ]),
  variants: {
    color: {
      // Used in TextLinkButton and InputPassword
      link: style([
        {
          display: 'inline-flex',
          width: 'auto',
          height: 'auto',
          color: vars.color.semantic.text.links.active,
          borderRadius: calc.divide(vars.borderRadius.topLeft.button, 2),
          ':hover': {
            color: vars.color.semantic.text.links.hover,
            textDecoration: 'underline',
          },
          selectors: {
            ...getFocusSelectors(vars.color.semantic.button['text-link'].highlight.focus),
          },
        },
        responsiveStyle({
          mobile: {
            vars: {
              [gapVar]: calc.divide(vars.space.xsmall.mobile, 2),
            },
          },
          tablet: {
            vars: {
              [gapVar]: calc.multiply(vars.space.xsmall.mobile, 1.25),
            },
          },
        }),
      ]),
      primary: {
        color: vars.color.semantic.button.primary.content.normal,
        backgroundColor: vars.color.semantic.button.primary.background.normal,
        borderColor: vars.color.semantic.button.primary.border.normal,
        ':hover': {
          color: vars.color.semantic.button.primary.content.normal,
          backgroundColor: vars.color.semantic.button.primary.background.hover,
          borderColor: vars.color.semantic.button.primary.border.hover,
        },
        ':focus': {
          color: vars.color.semantic.button.primary.content.normal,
          backgroundColor: vars.color.semantic.button.primary.background.focused,
          borderColor: vars.color.semantic.button.primary.border.focused,
        },
        ':active': {
          color: vars.color.semantic.button.primary.content.normal,
          backgroundColor: vars.color.semantic.button.primary.background.pressed,
          borderColor: vars.color.semantic.button.primary.border.pressed,
          outline: 'none',
        },
        selectors: {
          '&[disabled]': {
            color: vars.color.semantic.button.primary.content.disabled,
            backgroundColor: vars.color.semantic.button.primary.background.disabled,
            borderColor: vars.color.semantic.button.primary.border.disabled,
          },
          ...getFocusSelectors(vars.color.semantic.button.primary.highlight.focus),
        },
      },
      secondary: {
        color: vars.color.semantic.button.secondary.content.normal,
        backgroundColor: vars.color.semantic.button.secondary.background.normal,
        borderColor: vars.color.semantic.button.secondary.border.normal,
        ':hover': {
          color: vars.color.semantic.button.secondary.content.normal,
          backgroundColor: vars.color.semantic.button.secondary.background.hover,
          borderColor: vars.color.semantic.button.secondary.border.hover,
        },
        ':focus': {
          color: vars.color.semantic.button.secondary.content.normal,
          backgroundColor: vars.color.semantic.button.secondary.background.focused,
          borderColor: vars.color.semantic.button.secondary.border.focused,
        },
        ':active': {
          color: vars.color.semantic.button.secondary.content.normal,
          backgroundColor: vars.color.semantic.button.secondary.background.pressed,
          borderColor: vars.color.semantic.button.secondary.border.pressed,
          outline: 'none',
        },
        selectors: {
          '&[disabled]': {
            color: vars.color.semantic.button.secondary.content.disabled,
            backgroundColor: vars.color.semantic.button.secondary.background.disabled,
            borderColor: vars.color.semantic.button.secondary.border.disabled,
          },
          ...getFocusSelectors(vars.color.semantic.button.secondary.highlight.focus),
        },
      },
      tertiary: {
        color: vars.color.semantic.button.tertiary.content.normal,
        backgroundColor: vars.color.semantic.button.tertiary.background.normal,
        borderColor: vars.color.semantic.button.tertiary.border.normal,
        ':hover': {
          color: vars.color.semantic.button.tertiary.content.normal,
          backgroundColor: vars.color.semantic.button.tertiary.background.hover,
          borderColor: vars.color.semantic.button.tertiary.border.hover,
        },
        ':focus': {
          color: vars.color.semantic.button.tertiary.content.normal,
          backgroundColor: vars.color.semantic.button.tertiary.background.focused,
          borderColor: vars.color.semantic.button.tertiary.border.focused,
        },
        ':active': {
          color: vars.color.semantic.button.tertiary.content.normal,
          backgroundColor: vars.color.semantic.button.tertiary.background.pressed,
          borderColor: vars.color.semantic.button.tertiary.border.pressed,
          outline: 'none',
        },
        selectors: {
          '&[disabled]': {
            color: vars.color.semantic.button.tertiary.content.disabled,
            backgroundColor: vars.color.semantic.button.tertiary.background.disabled,
            borderColor: vars.color.semantic.button.tertiary.border.disabled,
          },
          ...getFocusSelectors(vars.color.semantic.button.tertiary.highlight.focus),
        },
      },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export type Variants = RecipeVariants<typeof variants>;

/* ###############################
 * Margins are used instead of flex gap because iOS Safari <14.5 does not support it.
 *
 * This is the most readable solution I thought of. I think this is clearer than using `flex-directon: row-reverse;`
 *  which would require a variant on the ButtonRoot and a variant (or conditional className) on the Icon (because
 *  you have to choose whether the margin is to the left or right).
 */
export const icon = styleVariants({
  left: { marginRight: gapVar },
  right: { marginLeft: gapVar },
});
