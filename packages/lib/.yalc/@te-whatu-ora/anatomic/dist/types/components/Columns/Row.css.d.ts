import { StyleRule } from '@vanilla-extract/css';
import { ColumnLength } from './Column';
export declare const gutter: {
    xlarge: string;
    large: string;
    medium: string;
    small: string;
    xxlarge: string;
    xsmall: string;
};
export declare const noGutters: string;
export declare const responsiveRow: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    tablet: Record<ColumnLength, StyleRule>;
    desktop: Record<ColumnLength, StyleRule>;
    wide: Record<ColumnLength, StyleRule>;
}>;
export declare const nested: Record<string | number, string>;
export declare const offset: Record<string | number | symbol, string>;
