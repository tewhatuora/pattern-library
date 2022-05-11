import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

export const columns = style([
  {
    display: 'flex',
    flexDirection: 'column',
  },
  responsiveStyle({
    tablet: {
      flexDirection: 'row',
    },
  }),
]);
