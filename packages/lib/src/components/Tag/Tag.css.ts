import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';

export const tagStyles = style([
  atoms({
    display: 'flex',
    backgroundColor: 'primary0',
    borderColor: 'primary100',
    borderWidth: 'small',
  }),
  responsiveStyle({
    mobile: {
      paddingTop: vars.space.small.mobile,
      paddingLeft: vars.space.small.mobile,
      paddingBottom: vars.space.small.mobile,
    },
    tablet: {
      width: 'max-content',
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
  },
  responsiveStyle({
    mobile: {},
    tablet: {},
  }),
]);
