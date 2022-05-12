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
export const center = style({ marginLeft: 'auto', marginRight: 'auto' });

const getSizeStyle = (cols: number) => ({
  flex: `0 0 ${(cols / 12) * 100}%`,
  outline: '1px solid red',
});

const getPushPullStyle = (cols: number, direction = 'Left') => ({
  [`margin${direction}`]: `${(cols / 12) * 100}%`,
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

export const push = styleVariants({
  '1': getPushPullStyle(1, 'Left'),
  '2': getPushPullStyle(2, 'Left'),
  '3': getPushPullStyle(3, 'Left'),
  '4': getPushPullStyle(4, 'Left'),
  '5': getPushPullStyle(5, 'Left'),
  '6': getPushPullStyle(6, 'Left'),
  '7': getPushPullStyle(7, 'Left'),
  '8': getPushPullStyle(8, 'Left'),
  '9': getPushPullStyle(9, 'Left'),
  '10': getPushPullStyle(10, 'Left'),
  '11': getPushPullStyle(11, 'Left'),
  '12': getPushPullStyle(12, 'Left'),
});

export const pull = styleVariants({
  '1': getPushPullStyle(1, 'Right'),
  '2': getPushPullStyle(2, 'Right'),
  '3': getPushPullStyle(3, 'Right'),
  '4': getPushPullStyle(4, 'Right'),
  '5': getPushPullStyle(5, 'Right'),
  '6': getPushPullStyle(6, 'Right'),
  '7': getPushPullStyle(7, 'Right'),
  '8': getPushPullStyle(8, 'Right'),
  '9': getPushPullStyle(9, 'Right'),
  '10': getPushPullStyle(10, 'Right'),
  '11': getPushPullStyle(11, 'Right'),
  '12': getPushPullStyle(12, 'Right'),
});
