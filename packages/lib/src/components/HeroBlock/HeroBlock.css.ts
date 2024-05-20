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
      paddingBottom: vars.space.xxlarge.mobile,
      paddingLeft: vars.space.medium.mobile,
    },
    tablet: {
      paddingTop: vars.space.xlarge.tablet,
      paddingRight: 0,
      paddingBottom: vars.space.xlarge.tablet,
      paddingLeft: 0,
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

export const headingContainer = style([
  atoms({
    display: 'flex',
  }),
  responsiveStyle({
    mobile: {
      flexDirection: 'column-reverse',
      marginBottom: vars.space.small.mobile,
    },
    tablet: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: vars.space.xsmall.mobile,
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
