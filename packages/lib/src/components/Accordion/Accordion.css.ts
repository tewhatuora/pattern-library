import { createVar, keyframes, style, styleVariants } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

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

export const root = recipe({
  base: {
    borderColor: borderColorVar,
    borderWidth: vars.borderWidth.small,
    borderStyle: 'none',
    color: colorVar,
  },
  variants: {
    divider: {
      none: {},
      top: { borderTopStyle: 'solid' },
      bottom: { borderBottomStyle: 'solid' },
      both: {
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
      },
    },
    variant: {
      light: {
        vars: {
          [colorVar]: vars.color.primary0,
          [borderColorVar]: vars.color.primary0,
        },
      },
      dark: {
        vars: {
          [colorVar]: vars.color.primary100,
          [borderColorVar]: vars.color.primary25,
        },
      },
    },
  },
});

export const header = style({
  margin: 0,
});

export const trigger = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: vars.space.small.mobile,
  cursor: 'pointer',
  color: 'currentColor',

  // Override button styles
  border: 'none',
  backgroundColor: 'transparent',
});

export const icon = style({
  flexShrink: 0,
});

export const headerContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.small.mobile,
});

export const chevron = style({
  width: '1.8rem',
  height: '1.8rem',
  flexShrink: 0,

  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  selectors: {
    '[data-state=open] &': { transform: 'rotate(180deg)' },
  },
});

export const content = style({
  overflow: 'hidden', // Lets the animation cover the content

  selectors: {
    '&[data-state="open"]': {
      // animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
      animation: `${slideDown} 1s cubic-bezier(0.87, 0, 0.13, 1) forwards`,
    },
    '&[data-state="closed"]': {
      // animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
      animation: `${slideUp} 1s cubic-bezier(0.87, 0, 0.13, 1) forwards`,
    },
  },
});

export const contentWrapper = style(
  responsiveStyle({
    mobile: {
      padding: vars.space.xsmall.mobile,
    },
    tablet: {
      padding: vars.space.xsmall.tablet,
    },
  }),
);

export const headingText = style({
  textAlign: 'start',
});
