import { createVar, keyframes, style, styleVariants } from '@vanilla-extract/css';

import { calc } from '@vanilla-extract/css-utils';

import { recipe } from '@vanilla-extract/recipes';

import { focusSelectorsStyles } from '@/src/utils/custom';

import { responsiveStyle } from '../../css/responsiveStyle';

import { vars } from '../../themes/vars.css';

const animationDuration = '300ms';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const colorVar = createVar();
const borderColorVar = createVar();

const base = style({
  color: colorVar,
});

export const root = styleVariants({
  light: [
    base,
    {
      vars: {
        [colorVar]: vars.color.semantic.text.copy.dark,
        [borderColorVar]: vars.color.semantic.structure.divider.dark,
      },
    },
  ],
  dark: [
    base,
    {
      vars: {
        [colorVar]: vars.color.semantic.text.copy.light,
        [borderColorVar]: vars.color.semantic.structure.divider.light,
      },
    },
  ],
});

export const item = style([
  responsiveStyle({
    mobile: {
      borderWidth: vars.borderWidth.small,
      borderStyle: 'solid',
      borderColor: vars.color.semantic.card.border,
      borderRadius: vars.borderRadiusAll.standard,
      selectors: {
        '& + &': {
          marginTop: vars.space.small.mobile,
        },
      },
    },
    tablet: {
      selectors: {
        '& + &': {
          marginTop: vars.space.small.tablet,
        },
      },
    },
  }),
]);

export const header = style({
  margin: 0,
});

export const trigger = style([
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'currentColor',

    // Override button styles
    border: 'none',
    backgroundColor: 'transparent',
    borderRadius: calc.divide(vars.borderRadius.topLeft.standard, 2),

    selectors: {
      ...focusSelectorsStyles,
    },
  },
  responsiveStyle({
    mobile: {
      padding: vars.space.small.mobile,
    },
    tablet: {
      padding: vars.space.small.tablet,
    },
  }),
]);

export const icon = recipe({
  base: {
    marginRight: vars.space.small.mobile,
    flexShrink: 0,
  },
  variants: {
    variant: {
      light: {
        color: vars.color.semantic.icons.dark,
      },
      dark: {
        color: vars.color.semantic.icons.light,
      },
    },
  },
});

export const headerContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const chevron = recipe({
  base: {
    flexShrink: 0,

    transition: `transform ${animationDuration}`,
    selectors: {
      '[data-state=open] &': { transform: 'rotate(180deg)' },
    },
  },
  variants: {
    variant: {
      light: {
        color: vars.color.semantic.icons.dark,
      },
      dark: {
        color: vars.color.semantic.icons.light,
      },
    },
  },
});

export const content = style({
  overflow: 'hidden', // Lets the animation cover the content

  selectors: {
    '&[data-state="open"]': {
      animation: `${slideDown} ${animationDuration}`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} ${animationDuration} forwards`,
    },
  },
});

export const contentWrapper = style(
  responsiveStyle({
    mobile: {
      padding: vars.space.small.mobile,
    },
    tablet: {
      padding: vars.space.small.tablet,
    },
  }),
);
