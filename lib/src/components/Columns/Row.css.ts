import { style, styleVariants } from '@vanilla-extract/css';

import { Space } from '../../themes/tokenType';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { CSSRule, makeStyles } from './helpers';

const makeGutterRules = (space: Space) =>
  style(
    responsiveStyle({
      mobile: {
        gap: space.mobile,
      },
      tablet: {
        gap: space.tablet,
      },
    }),
  );

export const gutter = {
  xlarge: makeGutterRules(vars.space.xlarge),
  large: makeGutterRules(vars.space.large),
  medium: makeGutterRules(vars.space.medium),
  small: makeGutterRules(vars.space.small),
  xxlarge: makeGutterRules(vars.space.xxlarge),
  xsmall: makeGutterRules(vars.space.xsmall),
};

export const noGutters = style({
  gap: 0,
});

export const row = style([
  responsiveStyle({
    mobile: {
      display: 'flex',
      flexDirection: 'column',
    },
    tablet: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, [col-start] 1fr)',
      flexDirection: 'unset',
    },
  }),
]);

const getNestedStyle = (columns: number): CSSRule =>
  responsiveStyle({
    tablet: {
      gridTemplateColumns: `repeat(${columns}, [col-start] 1fr)`,
    },
  });

export const nested = styleVariants(makeStyles(getNestedStyle));
