import clsx from 'clsx';
import type { StyleRule } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import * as styles from './typography.css';

export interface UseTextProps {
  weight?: keyof typeof styles.fontWeight;
  size?: keyof typeof styles.text;
}

// typography.mobile.m.regular.fontSize
// text.medium.mobile.fontSize

export const globalTextStyle = ({
  weight = 'regular',
  size = 'medium',
}: Pick<UseTextProps, 'weight' | 'size'> = {}): StyleRule => ({
  fontFamily: vars.fontFamily,
  fontWeight: vars.textWeight[weight],
  color: vars.color.semantic.text.copy.dark,
  ...responsiveStyle({
    mobile: {
      fontSize: vars.textSize[size].mobile.fontSize,
      lineHeight: vars.textSize[size].mobile.lineHeight,
    },
    tablet: {
      fontSize: vars.textSize[size].tablet.fontSize,
      lineHeight: vars.textSize[size].tablet.lineHeight,
    },
  }),
});

export function useText({ weight = 'regular', size = 'medium' }: UseTextProps) {
  return clsx(styles.fontFamily, styles.fontWeight[weight], styles.text[size]);
}

export type HeadingLevel = keyof typeof styles.heading;
export type HeadingWeight = 'regular' | 'weak';

interface UseHeadingProps {
  weight?: HeadingWeight;
  level: HeadingLevel;
}

export const globalHeadingStyle = ({
  weight = 'regular',
  level,
}: Pick<UseHeadingProps, 'weight' | 'level'>): StyleRule => ({
  fontFamily: vars.fontFamily,
  fontWeight: vars.headingWeight[weight],
  color: vars.color.semantic.text.copy.dark,
  ...responsiveStyle({
    mobile: {
      fontSize: vars.headingLevel[level].mobile.fontSize,
      lineHeight: vars.headingLevel[level].mobile.lineHeight,
    },
    tablet: {
      fontSize: vars.headingLevel[level].tablet.fontSize,
      lineHeight: vars.headingLevel[level].tablet.lineHeight,
    },
  }),
});

export function useHeading({ weight = 'regular', level }: UseHeadingProps) {
  return clsx(styles.fontFamily, styles.headingWeight[weight], styles.heading[level]);
}

export function textSize(size: keyof typeof styles.text) {
  return styles.text[size];
}

export function useWeight(weight: keyof typeof styles.fontWeight) {
  return styles.fontWeight[weight];
}
