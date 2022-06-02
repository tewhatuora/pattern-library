import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

const variant = {
  xlarge: responsiveStyle({
    mobile: {
      gap: vars.space.xlarge.mobile,
    },
    tablet: {
      gap: vars.space.xlarge.tablet,
    },
  }),
  large: responsiveStyle({
    mobile: {
      gap: vars.space.large.mobile,
    },
    tablet: {
      gap: vars.space.large.tablet,
    },
  }),
  medium: responsiveStyle({
    mobile: {
      gap: vars.space.medium.mobile,
    },
    tablet: {
      gap: vars.space.medium.tablet,
    },
  }),
  small: responsiveStyle({
    mobile: {
      gap: vars.space.small.mobile,
    },
    tablet: {
      gap: vars.space.small.tablet,
    },
  }),
  xxlarge: responsiveStyle({
    mobile: {
      gap: vars.space.xxlarge.mobile,
    },
    tablet: {
      gap: vars.space.xxlarge.tablet,
    },
  }),
  xsmall: responsiveStyle({
    mobile: {
      gap: vars.space.xsmall.mobile,
    },
    tablet: {
      gap: vars.space.xsmall.tablet,
    },
  }),
};

export const variants = recipe({
  base: style({
    display: 'flex',
  }),
  variants: {
    space: { ...variant },
    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
  },
});
