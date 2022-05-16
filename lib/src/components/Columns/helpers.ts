import { StyleRule } from '@vanilla-extract/css';

export type CSSRule = { [key: string]: string };
export type StyleFunction = (column: number, args?: any) => StyleRule | CSSRule;

/**
 * Array of 12 columns to
 * iterate over for creating
 * column styles.
 */
export const columns = Array.from(Array(12).keys());

/**
 * Make a style rule for styleVariants
 * by passing in a function to create the style
 * based on arguments/props that are passed
 * @param fn
 * @param args
 */
export const makeStyles = (fn: StyleFunction, args?: any) => {
  return columns.reduce((acc: Record<string, StyleRule | CSSRule>, index: number) => {
    const col = index + 1;
    return {
      ...acc,
      [col.toString()]: fn(col, args),
    };
  }, {});
};
