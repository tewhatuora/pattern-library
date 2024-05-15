import { style, styleVariants } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';
import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

export const heroBlock = style([
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

export const variants = styleVariants({
  withPattern: [
    responsiveStyle({
      mobile: {
        // backgroundImage: `url(${tohu})`,
      },
      tablet: {
        // backgroundImage: `url(${tohu})`,
      },
    }),
  ],
});

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
