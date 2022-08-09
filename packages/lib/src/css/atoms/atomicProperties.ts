import { StyleRule } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { ResponsiveStyle, responsiveStyle } from '../../css/responsiveStyle';

import { Space } from './atoms';
import { Viewport } from '../../themes/tokenType';

const sizes = {
  full: '100%',
};
const space = vars.space;
const boxShadow = vars.shadow;
const borderWidth = vars.borderWidth;
const borderRadiusAll = vars.borderRadiusAll;
const borderRadius = vars.borderRadius;
const borderStyle = ['none', 'solid', 'dashed', 'dotted', 'double'] as const;

export type BoxShadow = keyof typeof boxShadow;

export const unresponsiveProperties = {
  userSelect: ['none'],
  outline: ['none'],
  opacity: [0],
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    dropdownBackdrop: 90,
    dropdown: 100,
    sticky: 200,
    modalBackdrop: 290,
    modal: 300,
    notification: 400,
  },
  cursor: ['default', 'pointer'],
  pointerEvents: ['none'],
  height: sizes,
  width: sizes,
  maxWidth: sizes,
  minWidth: {
    0: '0%',
  },
  transitionProperty: {
    none: 'none',
    all: 'all',
    default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
  },
  transitionTimingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
  },
  transition: vars.transition,
  borderStyle: borderStyle,
  borderBottomStyle: borderStyle,
  borderLeftStyle: borderStyle,
  borderRightStyle: borderStyle,
  borderTopStyle: borderStyle,
} as const;

export type UnresponsiveProperties = keyof typeof unresponsiveProperties;

export const colorProperties = {
  color: vars.color,
  backgroundColor: vars.color,
  borderColor: vars.color,
} as const;

export type ColorProperties = keyof typeof colorProperties;
type ResponsiveSpace = Record<Space, StyleRule>;
type Breakpoint = keyof Viewport;

const spaceNames = Object.keys(space) as Space[];

const responsiveSpace = (property: string) => {
  return spaceNames.reduce((responsive: ResponsiveSpace, name: Space) => {
    const viewports = Object.keys(space[name]) as Breakpoint[];

    const breakpointStyles = viewports.reduce((breakpoints: ResponsiveStyle, current: Breakpoint) => {
      breakpoints[current] = {
        [property]: space[name][current],
      };

      return breakpoints;
    }, {} as ResponsiveStyle);

    responsive[name] = responsiveStyle(breakpointStyles);

    return responsive;
  }, {} as ResponsiveSpace);
};

export const responsiveProperties = {
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    inlineFlex: 'inline-flex',
    flex: 'flex',
    grid: 'grid',
  },
  position: ['relative', 'absolute', 'fixed', 'sticky'],
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  borderWidth: borderWidth,
  borderBottomWidth: borderWidth,
  borderLeftWidth: borderWidth,
  borderRightWidth: borderWidth,
  borderTopWidth: borderWidth,
  borderRadius: {
    none: '0px',
    full: '9999px',
    ...borderRadiusAll,
  },
  borderBottomLeftRadius: borderRadius.bottomLeft,
  borderBottomRightRadius: borderRadius.bottomRight,
  borderTopLeftRadius: borderRadius.topLeft,
  borderTopRightRadius: borderRadius.topRight,
  paddingTop: responsiveSpace('paddingTop'),
  paddingBottom: responsiveSpace('paddingBottom'),
  paddingRight: responsiveSpace('paddingRight'),
  paddingLeft: responsiveSpace('paddingLeft'),
  marginTop: responsiveSpace('marginTop'),
  marginBottom: responsiveSpace('marginBottom'),
  marginRight: responsiveSpace('marginRight'),
  marginLeft: responsiveSpace('marginLeft'),
  top: responsiveSpace('top'),
  right: responsiveSpace('right'),
  bottom: responsiveSpace('bottom'),
  left: responsiveSpace('left'),
  alignItems: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
  },
  justifyContent: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    spaceBetween: 'space-between',
  },
  flexDirection: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse',
  },
  flexWrap: {
    wrap: 'wrap',
    nowrap: 'nowrap',
  },
  flexShrink: [0],
  flexGrow: [0, 1],
  textAlign: ['left', 'center', 'right'],
} as const;

export type ResponsiveProperties = keyof typeof responsiveProperties;
