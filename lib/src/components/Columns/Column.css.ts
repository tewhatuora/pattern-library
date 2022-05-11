import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { Space } from '../../themes/tokenType';

const makeGutterRules = (space: Space) => {
  return style(
    responsiveStyle({
      mobile: {
        paddingLeft: space.mobile,
        paddingRight: space.mobile,
      },
      tablet: {
        paddingLeft: space.tablet,
        paddingRight: space.tablet,
      },
    }),
  );
};

export const gutter = {
  xlarge: makeGutterRules(vars.space.xlarge),
  large: makeGutterRules(vars.space.large),
  medium: makeGutterRules(vars.space.medium),
  small: makeGutterRules(vars.space.small),
  xxlarge: makeGutterRules(vars.space.xxlarge),
  xsmall: makeGutterRules(vars.space.xsmall),
};

export const noGutters = style({ paddingLeft: 0, paddingRight: 0 });

const getSizeStyle = (cols: number) => ({
  flex: `0 0 ${(cols / 12) * 100}%`,
});

export const width = styleVariants({
  '1': getSizeStyle(1),
  '2': getSizeStyle(2),
  '3': getSizeStyle(3),
  '4': getSizeStyle(4),
  '5': getSizeStyle(5),
  '6': getSizeStyle(6),
  '7': getSizeStyle(7),
  '8': getSizeStyle(8),
  '9': getSizeStyle(9),
  '10': getSizeStyle(10),
  '11': getSizeStyle(11),
  '12': getSizeStyle(12),
});
