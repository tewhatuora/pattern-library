import { style } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const featureTile = style([
  {
    backgroundColor: vars.color.semantic.controls.background.light2,
  },
  responsiveStyle({
    mobile: {
      paddingRight: vars.space.medium.mobile,
      paddingLeft: vars.space.medium.mobile,
    },
    tablet: {
      paddingRight: vars.space.medium.tablet,
      paddingLeft: vars.space.medium.tablet,
    },
  }),
]);

export const feature = style([
  {
    selectors: {
      '&:not(:first-child)': {
        borderTopStyle: 'solid',
        borderTopWidth: vars.borderWidth.small,
        borderTopColor: vars.color.secondary50,
      },
    },
  },
  responsiveStyle({
    mobile: {
      paddingTop: vars.space.xxlarge.mobile,
      paddingBottom: vars.space.xxlarge.mobile,
    },
    tablet: {
      paddingTop: vars.space.large.tablet,
      paddingBottom: vars.space.large.tablet,
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
      marginBottom: vars.space.medium.mobile,
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

export const description = style([
  responsiveStyle({
    mobile: {
      marginBottom: vars.space.small.mobile,
    },
    tablet: {
      marginBottom: vars.space.medium.tablet,
    },
  }),
]);

export const button = style({
  backgroundColor: vars.color.semantic.controls.background.light2,
});
