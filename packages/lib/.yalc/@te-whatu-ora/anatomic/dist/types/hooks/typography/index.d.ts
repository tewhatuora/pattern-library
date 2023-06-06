import type { StyleRule } from '@vanilla-extract/css';
import * as styles from './typography.css';
export interface UseTextProps {
    weight?: keyof typeof styles.fontWeight;
    size?: keyof typeof styles.text;
}
export declare const globalTextStyle: ({ weight, size, }?: Pick<UseTextProps, 'weight' | 'size'>) => StyleRule;
export declare function useText({ weight, size }: UseTextProps): string;
export declare type HeadingLevel = keyof typeof styles.heading;
export declare type HeadingWeight = 'regular' | 'weak';
interface UseHeadingProps {
    weight?: HeadingWeight;
    level: HeadingLevel;
}
export declare const globalHeadingStyle: ({ weight, level, }: Pick<UseHeadingProps, 'weight' | 'level'>) => StyleRule;
export declare function useHeading({ weight, level }: UseHeadingProps): string;
export declare function textSize(size: keyof typeof styles.text): string;
export declare function useWeight(weight: keyof typeof styles.fontWeight): string;
export {};
