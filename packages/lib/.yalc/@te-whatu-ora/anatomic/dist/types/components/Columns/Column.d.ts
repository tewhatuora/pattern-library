import { PropsWithChildren } from 'react';
import { BoxProps } from '../Box/Box';
import { Breakpoint } from '../../css/breakpoints';
import * as styles from './Column.css';
export declare const ColumnStyles: typeof styles;
export declare type ColumnLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare const ParentColumnContext: import("react").Context<{
    columns: ColumnLength;
}>;
declare type BreakpointColumn = Partial<Record<Breakpoint, ColumnLength>>;
export declare type ColumnProps = {
    /** Amount of columns, e.g. 8 */
    columns: ColumnLength;
    /** Start position for the column. E.g., to center a 6 column element within an 8 column container, use start = 1 */
    start?: ColumnLength;
    /** Amount of columns for wide breakpoint */
    wide?: ColumnLength;
    /** Amount of columns for desktop breakpoint */
    desktop?: ColumnLength;
    /** Amount of columns for tablet breakpoint */
    tablet?: ColumnLength;
    /** Amount of columns for mobile breakpoint */
    mobile?: ColumnLength;
    center?: boolean;
    className?: string;
} & BoxProps & BreakpointColumn;
/**
 * Column component
 * @param props
 * @constructor
 */
export declare const Column: {
    ({ children, columns, center, start, className, wide, desktop, tablet, mobile, ...boxProps }: PropsWithChildren<ColumnProps>): JSX.Element;
    displayName: string;
};
export {};
