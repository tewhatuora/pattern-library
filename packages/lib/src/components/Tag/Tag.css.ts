import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';
import { calc } from '@vanilla-extract/css-utils';

const offset = 0.2;
const offsetSmall = `${offset}rem`;
const offsetLarge = `${offset * 2}rem`;

export const tagStyles = style([
  atoms({
    display: 'flex',
    backgroundColor: 'primary0',
    borderColor: 'primary100',
    borderWidth: 'small',
    borderRadius: 'tags',
  }),
  responsiveStyle({
    mobile: {
      width: 'max-content',
      paddingLeft: calc.subtract(vars.space.xsmall.mobile, offsetSmall),
      paddingRight: calc.subtract(vars.space.xsmall.mobile, offsetSmall),
    },
    tablet: {
      width: 'max-content',
      paddingLeft: calc.subtract(vars.space.xsmall.tablet, offsetSmall),
      paddingRight: calc.subtract(vars.space.xsmall.tablet, offsetSmall),
    },
  }),
]);

export const closeButton = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    // ':hover': {
    //   color: 'white',
    // },
  },
  responsiveStyle({
    mobile: {
      paddingLeft: calc.subtract(vars.space.xsmall.mobile, offsetSmall),
    },
    tablet: {
      paddingLeft: calc.subtract(vars.space.xsmall.tablet, offsetSmall),
    },
  }),
]);

export const iconStyles = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    fill: 'none',
  },
]);

export const hideTag = style({
  display: 'none',
});
