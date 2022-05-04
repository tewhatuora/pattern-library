// import { vars } from '../../themes/vars.css';
import { contract } from '../../themes/themeContract.css';

const sizes = {
  full: '100%',
};

const space = {
  ...contract.space,
  0: 0,
} as const;

const boxShadow = contract.shadow;

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
  transition: contract.transition,
} as const;

export type UnresponsiveProperties = keyof typeof unresponsiveProperties;

export const colorProperties = {
  color: contract.color,
  backgroundColor: contract.color,
  borderColor: contract.color,
} as const;

export type ColorProperties = keyof typeof colorProperties;

export const responsiveProperties = {
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex',
  },
  position: ['relative', 'absolute', 'fixed', 'sticky'],
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  borderWidth: contract.borderWidth,
  borderBottomWidth: contract.borderWidth,
  borderLeftWidth: contract.borderWidth,
  borderRightWidth: contract.borderWidth,
  borderTopWidth: contract.borderWidth,
  borderRadius: {
    none: '0px',
    full: '9999px',
    ...contract.borderRadius,
  },
  borderBottomLeftRadius: contract.borderRadius,
  borderBottomRightRadius: contract.borderRadius,
  borderTopLeftRadius: contract.borderRadius,
  borderTopRightRadius: contract.borderRadius,
  paddingTop: space,
  paddingBottom: space,
  paddingRight: space,
  paddingLeft: space,
  marginTop: space,
  marginBottom: space,
  marginRight: space,
  marginLeft: space,
  top: space,
  right: space,
  bottom: space,
  left: space,
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
