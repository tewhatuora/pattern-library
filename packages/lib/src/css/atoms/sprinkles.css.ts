import {
  ConditionalValue,
  RequiredConditionalValue,
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';

import { Breakpoint, breakpointNames, breakpoints } from '../breakpoints';
import { colorProperties, responsiveProperties, unresponsiveProperties } from './atomicProperties';

// Ensure reset has lowest specificity
/* DO NOT MOVE THIS LINE */
import '../reset.css';
/* DO NOT MOVE THIS LINE */

const unresponsiveAtomicProperties = defineProperties({
  properties: unresponsiveProperties,
});

const responsiveAtomicProperties = defineProperties({
  defaultCondition: 'mobile',
  conditions: {
    mobile: {},
    tablet: {
      '@media': `screen and (min-width: ${breakpoints.tablet}px)`,
    },
    desktop: {
      '@media': `screen and (min-width: ${breakpoints.desktop}px)`,
    },
    wide: {
      '@media': `screen and (min-width: ${breakpoints.wide}px)`,
    },
  },
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    borderLeftRadius: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    borderRightRadius: ['borderBottomRightRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    padding: ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    margin: ['marginBottom', 'marginTop', 'marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
  },
});

const selectorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
  },
  defaultCondition: 'base',
  properties: colorProperties,
});

const motionSafeProperties = defineProperties({
  conditions: {
    base: { '@media': '(prefers-reduced-motion: no-preference)' },
  },
  defaultCondition: 'base',
  properties: {
    transitionDuration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
  },
});

export const sprinkles = createSprinkles(
  unresponsiveAtomicProperties,
  responsiveAtomicProperties,
  selectorProperties,
  motionSafeProperties,
);

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveAtomicProperties,
  Value
>;
export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
  typeof responsiveAtomicProperties,
  Value
>;
export type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> &
  Record<(typeof breakpointNames)[0], Value>;

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveAtomicProperties);
export const mapResponsiveValue = createMapValueFn(responsiveAtomicProperties);
