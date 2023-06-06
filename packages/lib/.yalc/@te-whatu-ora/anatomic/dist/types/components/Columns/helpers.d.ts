import { StyleRule } from '@vanilla-extract/css';
export declare type CSSRule = {
    [key: string]: string;
};
export declare type StyleFunction = (column: number, args?: any) => StyleRule | CSSRule;
/**
 * Array of 12 columns to
 * iterate over for creating
 * column styles.
 */
export declare const columns: number[];
/**
 * Make a style rule for styleVariants
 * by passing in a function to create the style
 * based on arguments/props that are passed
 * @param fn
 * @param args
 */
export declare const makeStyles: (fn: StyleFunction, args?: any) => {
    [x: string]: StyleRule | CSSRule;
};
