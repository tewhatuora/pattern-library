import { createVar, keyframes, style, styleVariants } from '@vanilla-extract/css';

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
  borderColor: borderColorVar,
  borderWidth: vars.borderWidth.small,
  borderStyle: 'none',
  color: colorVar,
});

export const root = styleVariants({
  light: [
    base,
    {
      vars: {
        [colorVar]: vars.color.primary100,
        [borderColorVar]: vars.color.primary0,
      },
    },
  ],
  dark: [
    base,
    {
      vars: {
        [colorVar]: vars.color.primary0,
        [borderColorVar]: vars.color.primary25,
      },
    },
  ],
});

export const item = style({
  selectors: {
    '&:not(:last-child)': {
      borderBottom: `${vars.borderWidth.small} solid ${vars.color.primary25}`,
    },
  },
});

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

export const icon = style({
  flexShrink: 0,
});

export const headerContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.small.mobile,
});

export const chevron = style({
  flexShrink: 0,

  transition: `transform ${animationDuration}`,
  selectors: {
    '[data-state=open] &': { transform: 'rotate(180deg)' },
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
