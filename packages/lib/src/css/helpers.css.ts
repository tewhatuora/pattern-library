import omit from 'lodash/omit';
import { StyleRule, styleVariants } from '@vanilla-extract/css';

import { ResponsiveStyle, responsiveStyle } from './responsiveStyle';
import { responsiveProperties } from './atoms/atomicProperties';
import { Breakpoint, breakpointNames } from './breakpoints';

const display = omit(responsiveProperties.display, 'none');

type DisplayOption = keyof typeof display;
type ResponsiveHelper = Record<DisplayOption, StyleRule>;

const displayOptions = Object.keys(display) as DisplayOption[];

/**
 * Convert camelCase display value into
 * CSS kebab-case display value. e.g. inlineBlock = inline-block
 * @param {String} property CSS display property value
 */
const convertCase = (property: string): string =>
  property.replace(/[A-Z]/, (letter: string, offset: string) => (offset ? '-' : '') + letter.toLowerCase());

/**
 * Create responsive style with display rule
 * for specified breakpoints, and `display: none`
 * for the rest of the breakpoints.
 * @param {(keyof ResponsiveStyle)[]} showFor Array of breakpoint names. e.g ['mobile', 'tablet']
 * @param {DisplayOption} display Camel-case name of CSS display value. e.g. 'inlineBlock'
 */
const responsiveRules = (showFor: (keyof ResponsiveStyle)[], display: DisplayOption): StyleRule =>
  responsiveStyle(
    breakpointNames.reduce((css, breakpoint: Breakpoint) => {
      const show = showFor.includes(breakpoint);
      return {
        ...css,
        [breakpoint]: {
          display: show ? convertCase(display) : 'none',
        },
      };
    }, {} as const),
  );

/**
 * Make a styleVariant, keyed by breakpoint
 * names, for each CSS display property value
 * @param {(keyof ResponsiveStyle)[]} showFor Array of breakpoint names. e.g ['mobile', 'tablet']
 */
const makeResponsiveDisplayStyles = (showFor: (keyof ResponsiveStyle)[]) =>
  displayOptions.reduce((acc, display: DisplayOption) => {
    return {
      ...acc,
      [display]: responsiveRules(showFor, display),
    };
  }, {} as ResponsiveHelper);

export const mobileOnly = styleVariants(makeResponsiveDisplayStyles(['mobile']));
export const tabletOnly = styleVariants(makeResponsiveDisplayStyles(['tablet']));
export const desktopOnly = styleVariants(makeResponsiveDisplayStyles(['desktop']));
export const wideOnly = styleVariants(makeResponsiveDisplayStyles(['wide']));

export const upToTablet = styleVariants(makeResponsiveDisplayStyles(['mobile', 'tablet']));
export const upToDesktop = styleVariants(makeResponsiveDisplayStyles(['mobile', 'tablet', 'desktop']));

export const tabletUp = styleVariants(makeResponsiveDisplayStyles(['tablet', 'desktop', 'wide']));
export const desktopUp = styleVariants(makeResponsiveDisplayStyles(['desktop', 'wide']));
