import { StyleRule, style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { Space } from '../../themes/tokenType';

import { CSSRule, StyleFunction, columns, makeStyles } from './helpers';

const getSizeStyle = (cols: number): CSSRule => ({
  gridColumn: `col-start / span ${cols}`,
});

const getStartStyle = (start: number): CSSRule => ({
  gridColumnStart: start === 1 ? 'auto' : start.toString(),
});

export const width = styleVariants(makeStyles(getSizeStyle));
export const start = styleVariants(makeStyles(getStartStyle));
export const center = styleVariants(makeStyles(getStartStyle));
