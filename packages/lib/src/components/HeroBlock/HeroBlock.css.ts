import { createVar, globalStyle, style } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const heroBlock = style([
  {
    position: 'relative',
    zIndex: 2,
  },
  responsiveStyle({
    mobile: {
      paddingTop: vars.space.xxlarge.mobile,
      paddingRight: vars.space.medium.mobile,
      paddingLeft: vars.space.medium.mobile,
      paddingBottom: vars.space.medium.mobile,
    },
    tablet: {
      paddingTop: vars.space.xlarge.tablet,
      paddingBottom: 0, // vars.space.xlarge.mobile,
      paddingRight: 0,
      paddingLeft: 0,
    },
  }),
]);

export const heroBoxBackground = style([
  {
    backgroundColor: vars.color.semantic.controls.background.light2,
  },
]);

export const heroBlockNoChildren = style([
  responsiveStyle({
    mobile: {
      paddingBottom: vars.space.xxlarge.mobile,
    },
    tablet: {
      paddingBottom: vars.space.xlarge.tablet,
    },
  }),
]);

export const patternContainer = style({
  overflow: 'hidden',
  position: 'absolute',
  right: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: '100%',
  height: '100%',
  color: vars.color.primary100,
});

globalStyle(`${patternContainer} > svg`, {
  flex: 1,
});

export const gradientStop1 = createVar();
export const gradientStop2 = createVar();
export const gradientStop3 = createVar();
export const gradientStop4 = createVar();
export const mobileBg = createVar();

export const patternGradient = style([
  {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    vars: {
      [gradientStop1]: `color-mix(in srgb, ${vars.color.primary50} 90%, transparent)`,
      [gradientStop2]: `color-mix(in srgb, ${vars.color.primary50} 70%, transparent)`,
      [gradientStop3]: `color-mix(in srgb, ${vars.color.primary50} 10%, transparent)`,
      [gradientStop4]: `color-mix(in srgb, ${vars.color.primary50} 0%, transparent)`,
      [mobileBg]: `color-mix(in srgb, ${vars.color.primary50} 94%, transparent)`,
    },
  },
  responsiveStyle({
    mobile: {
      background: `${mobileBg}`,
    },
    tablet: {
      background: `linear-gradient(90deg, ${vars.color.primary50} 0%, ${gradientStop1} 70%, ${gradientStop2} 80%, ${gradientStop3} 90%, ${gradientStop4} 100%)`,
    },
  }),
]);

export const paleBlueGradientContainer = style({
  position: 'absolute',
  right: 0,
  top: '0%',
  width: '100%',
  height: '100%',
});

export const paleBlueGradient = style({
  position: 'absolute',
  inset: 0,
  backgroundBlendMode: 'color-burn',
  background: `${vars.gradient.mesh['pale aqua mesh'][0]},
               ${vars.gradient.mesh['pale aqua mesh'][1]}`,
});

export const headingContainer = style([
  atoms({
    display: 'flex',
  }),
  responsiveStyle({
    mobile: {
      flexDirection: 'column-reverse',
      marginBottom: 0,
    },
    tablet: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 0,
    },
  }),
]);

export const badge = style([
  responsiveStyle({
    mobile: {
      marginBottom: vars.space.small.mobile,
    },
    tablet: {
      marginLeft: vars.space.xsmall.tablet,
      marginBottom: 0,
    },
  }),
]);

export const childrenContainer = style([
  {
    // border: '1px solid red',
  },
  responsiveStyle({
    mobile: {
      paddingRight: vars.space.medium.mobile,
      paddingLeft: vars.space.medium.mobile,
      paddingBottom: vars.space.xxlarge.mobile,
    },
    tablet: {
      paddingRight: 0,
      paddingLeft: 0,
      paddingBottom: vars.space.xlarge.tablet,
    },
  }),
]);

export const shadow = style({
  boxShadow: vars.shadow.primary,
});

export const separator = style([
  responsiveStyle({
    mobile: {
      height: '2px',
      backgroundColor: vars.color.semantic.structure.divider.dark,
    },
    tablet: {
      height: '1px',
      backgroundColor: 'transparent',
    },
  }),
]);

export const sticky = style({
  position: 'sticky',
  top: 0,
  width: '100%',
  backgroundColor: vars.color.semantic.controls.background.light2,
});

export const children = style([
  responsiveStyle({
    mobile: {
      paddingTop: vars.space.medium.mobile,
    },
    tablet: {
      paddingTop: vars.space.xlarge.mobile,
    },
  }),
]);
