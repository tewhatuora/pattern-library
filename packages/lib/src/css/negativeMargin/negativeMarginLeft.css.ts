import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../responsiveStyle';
import { vars } from '../../themes/vars.css';

const negativeMarginLeft = (spaceValue: string | number) => ({
  ':before': {
    marginLeft: spaceValue ? calc.negate(spaceValue) : 0,
  },
});

export const base = style({
  ':before': { content: '""', display: 'table' },
});

export const mobile = styleVariants({ 0: 0, ...vars.space }, (value) => negativeMarginLeft(value));

export const tablet = styleVariants({ 0: 0, ...vars.space }, (value) =>
  responsiveStyle({
    tablet: negativeMarginLeft(value),
  }),
);

export const desktop = styleVariants({ 0: 0, ...vars.space }, (value) =>
  responsiveStyle({
    desktop: negativeMarginLeft(value),
  }),
);

export const wide = styleVariants({ 0: 0, ...vars.space }, (value) =>
  responsiveStyle({
    wide: negativeMarginLeft(value),
  }),
);
