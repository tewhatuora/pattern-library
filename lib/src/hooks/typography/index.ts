import clsx from 'clsx';
import type { StyleRule } from '@vanilla-extract/css';

import { contract } from '../../themes/themeContract.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import * as styles from './typography.css';

export interface UseTextProps {
  weight?: keyof typeof styles.fontWeight;
  size?: keyof typeof styles.text;
}

// typography.mobile.m.regular.fontSize
// text.standard.mobile.fontSize

export const globalTextStyle = ({
  weight = 'regular',
  size = 'standard',
}: Pick<UseTextProps, 'weight' | 'size'> = {}): StyleRule => ({
  fontFamily: contract.fontFamily,
  fontWeight: contract.textWeight[weight],
  color: contract.color.primary100,
  ...responsiveStyle({
    mobile: {
      fontSize: contract.textSize[size].mobile.fontSize,
      lineHeight: contract.textSize[size].mobile.lineHeight,
    },
    tablet: {
      fontSize: contract.textSize[size].tablet.fontSize,
      lineHeight: contract.textSize[size].tablet.lineHeight,
    },
  }),
});

export function useText({ weight = 'regular', size = 'standard' }: UseTextProps) {
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
  fontFamily: contract.fontFamily,
  fontWeight: contract.headingWeight[weight],
  color: contract.color.brandPrimary100,
  ...responsiveStyle({
    mobile: {
      fontSize: contract.headingLevel[level].mobile.fontSize,
      lineHeight: contract.headingLevel[level].mobile.lineHeight,
    },
    tablet: {
      fontSize: contract.headingLevel[level].tablet.fontSize,
      lineHeight: contract.headingLevel[level].tablet.lineHeight,
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
