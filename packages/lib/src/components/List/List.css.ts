import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '@/src/css/responsiveStyle';

import { vars } from '../../themes/vars.css';

/**
 * I used a const instead of a CSS variable because it wasn't working with
 * nested lists. The variable would be overwritten by the nested list and cause
 * issues with dividers.
 */
const listPadding = 40; // Default for Chrome and Firefox

export const list = style({
  paddingInlineStart: listPadding, // Override user agent styles

  // Same as dividers
  paddingTop: vars.space.small.mobile,
  paddingBottom: vars.space.small.mobile,

  selectors: {
    /**
     * I needed to use a data attribute because the dividers style is applied to
     * the children, not the parent of the list, but I need a way to target
     * the parent if the parent has enabled dividers. I thought about using
     * sibling selectors but it would break down if a nested list was the first
     * child.
     */
    [`[data-dividers="true"] > &[data-dividers="true"]`]: {
      paddingTop: 0,
      paddingBottom: 0,
    },

    '&[data-variant="dark"]': {
      color: vars.color.primary0,
    },
  },
});

export const noMarkers = style({
  listStyleType: 'none',
  paddingInlineStart: 0,
});

export const dividers = style({
  position: 'relative',

  paddingTop: vars.space.small.mobile,
  paddingBottom: vars.space.small.mobile,

  selectors: {
    /** Shared styles for ::before and ::after. */
    [beforeAndAfterOf('&')]: {
      content: '',
      position: 'absolute',

      left: -listPadding,
      right: 0,

      height: vars.borderWidth.small,
      backgroundColor: vars.color.primary25,
    },

    '&::before': {
      top: 0,
    },
    '&::after': {
      // Overlap the `::before` of the next item. If there is no next item, it
      // acts as the bottom border.
      bottom: calc.multiply(vars.borderWidth.small, -1),
    },

    /**
     * With `listStyle.none`, the `paddingInlineStart` is removed, so the
     * dividers need to have `left: 0` instead of accounting for the padding.
     */
    [beforeAndAfterOf(`${noMarkers} > &`)]: {
      left: 0,
    },

    [beforeAndAfterOf(`${list}[data-variant="dark"] &`)]: {
      backgroundColor: vars.color.primary0,
    },
  },
});

export const itemIcon = style([
  {
    width: listPadding,
    flexShrink: 0,
  },
  // Make the icon line up with the text
  responsiveStyle({
    mobile: {
      transform: 'translateY(0.1rem)',
    },
    tablet: {
      transform: 'translateY(0.4rem)',
    },
  }),
]);

export const itemContent = style({
  display: 'inline-flex',
  alignItems: 'baseline', // Works more consistently than 'flex-start' for aligning the icon
});

export const itemIconPosition = styleVariants({
  left: {
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row-reverse',
  },
});

/**
 * Helper for styles that affect both the ::before and ::after pseudo-elements of an element.
 *
 * @param selector Element to get the ::before and ::after of
 * @returns Selector that selects both ::before and ::after pseudo-elements of the selector
 */
function beforeAndAfterOf(selector: string) {
  return `${selector}::before, ${selector}::after`;
}
