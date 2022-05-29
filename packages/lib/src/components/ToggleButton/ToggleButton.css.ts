import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';
import { calc } from '@vanilla-extract/css-utils';

const offset = '0.4rem';

export const containerStyles = style([
  atoms({
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '0',
    flexGrow: '1',
    alignItems: 'flexStart',
  }),
]);
