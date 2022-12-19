import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { rem } from '@/src/css/helpers';

import { responsiveStyle } from '../../css/responsiveStyle';

import { vars } from '../../themes/vars.css';
import { atoms } from '../../css/atoms/atoms';
import type { ListRootProps } from './Root';
/**
 * I used a const instead of a CSS variable because it wasn't working with
 * nested lists. The variable would be overwritten by the nested list and cause
 * issues with dividers.
 */
const listPadding = 40; //vars.space.large.tablet; // Default for Chrome and Firefox

const base = style({
  paddingInlineStart: listPadding, // Override user agent styles

  // Same as dividers
  paddingTop: '0',
  paddingBottom: '0',
  margin: '0',

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

    '& &': {
      paddingTop: vars.space.small.mobile,
      paddingBottom: vars.space.small.mobile,
    },
  },
});

export const list = styleVariants<Record<ListRootProps['type'], ComplexStyleRule>>({
  ul: [
    base,
    {
      listStyleType: 'disc',
    },
  ],
  ol: [
    base,
    {
      listStyleType: 'decimal',
    },
  ],
});

export const noMarkers = style({
  listStyleType: 'none',
  paddingInlineStart: 0,
});

/**
 * I've used a `dividers` class instead of using selectors on the `list` and
 * `item` classes with the `data-variant` selector because it would
 * be significantly more verbose.
 */

export const dividersNoTop = style({
  selectors: {
    [`${base} > &:first-of-type`]: {
      paddingTop: '0',
    },
    [`${base} > &:first-of-type:before`]: {
      content: 'none',
    },
  },
});

export const dividersNoBottom = style({
  selectors: {
    [`${base} > &:last-of-type`]: {
      paddingBottom: '0',
    },
    [`${base} > &:last-of-type:after`]: {
      content: 'none',
    },
  },
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

    [beforeAndAfterOf(`${base}[data-variant="dark"] &`)]: {
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
      transform: `translateY(${rem(1)})`,
    },
    tablet: {
      transform: `translateY(${rem(4)})`,
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

export const linkContent = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const link = style([
  atoms({
    display: 'inlineFlex',
    color: 'primary100',
    alignItems: 'center',
  }),
  {
    gap: calc.divide(vars.space.xsmall.tablet, 4),
    textDecoration: 'none',
    transition: 'color 0.3s ease-out',
    ':hover': {
      color: vars.color.info75,
      fontWeight: vars.textWeight['link-hover&focus'],
      textDecoration: 'underline',
    },
  },
]);

export const linkIcon = style([
  atoms({
    color: 'primary100',
  }),
  {
    marginTop: '.25rem',
    transition: 'color 0.3s ease-out',
    ':hover': {
      color: vars.color.info75,
    },
  },
]);

/**
 * Helper for styles that affect both the ::before and ::after pseudo-elements of an element.
 *
 * @param selector Element to get the ::before and ::after of
 * @returns Selector that selects both ::before and ::after pseudo-elements of the selector
 */
function beforeAndAfterOf(selector: string) {
  return `${selector}::before, ${selector}::after`;
}
