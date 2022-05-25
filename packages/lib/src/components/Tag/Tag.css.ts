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
    alignItems: 'center',
    justifyContent: 'spaceBetween',
  }),
  responsiveStyle({
    mobile: {
      width: 'max-content',
      paddingLeft: calc.subtract(vars.space.xsmall.mobile, offsetLarge),
      paddingRight: calc.subtract(vars.space.xsmall.mobile, offsetLarge),
    },
    tablet: {
      width: 'max-content',
      paddingLeft: calc.subtract(vars.space.xsmall.tablet, offsetLarge),
      paddingRight: calc.subtract(vars.space.xsmall.tablet, offsetLarge),
    },
  }),
]);

export const closeButton = style([
  {
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  responsiveStyle({
    mobile: { paddingLeft: vars.space.xsmall.mobile },
    tablet: { paddingLeft: vars.space.xsmall.mobile },
  }),
]);

export const iconStyles = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
  },
]);

export const hideTag = style({
  display: 'none',
});
