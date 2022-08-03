import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';
import { mobileContainer, tabletContainer } from '../../css/grid';

export const container = style([
  responsiveStyle({
    mobile: mobileContainer,
    tablet: tabletContainer,
  }),
]);
