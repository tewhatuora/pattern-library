import { StyleRule, style, styleVariants } from '@vanilla-extract/css';

import { Viewport } from '../../themes/tokenType';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { Space } from '../../css/atoms/atoms';

import { makeStyles } from './helpers';
import { mobileRow, tabletRow } from '../../css/grid';

const makeGutterRules = (space: Viewport) =>
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
  mobileRow,
  responsiveStyle({
    tablet: tabletRow,
  }),
]);

const getNestedStyle = (columns: number): StyleRule =>
  responsiveStyle({
    tablet: {
      gridTemplateColumns: `repeat(${columns}, [col-start] 1fr)`,
    },
  });

const getOffsetStyle = (gutter: Space): StyleRule =>
  responsiveStyle({
    mobile: {},
    tablet: {
      marginLeft: `calc(-1 * ${vars.space[gutter].tablet})`,
      marginRight: `calc(-1 * ${vars.space[gutter].tablet})`,
    },
  });

export const nested = styleVariants(makeStyles(getNestedStyle));

const makeOffsetStyles = () => {
  const spaceNames = Object.keys(vars.space) as Space[];

  return spaceNames.reduce((variants: any, space: Space) => {
    return {
      ...variants,
      [space]: getOffsetStyle(space),
    };
  }, {} as Record<Space, StyleRule>);
};

export const offset = styleVariants(makeOffsetStyles());
