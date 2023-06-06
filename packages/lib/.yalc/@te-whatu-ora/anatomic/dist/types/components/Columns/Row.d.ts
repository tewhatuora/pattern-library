import { PropsWithChildren } from 'react';
import { BoxProps } from '../Box/Box';
import { ColumnLength } from './Column';
import { Space } from '../../css/atoms/atoms';
import * as styles from './Row.css';
export declare const RowStyles: typeof styles;
export declare type RowProps<P> = {
    noGutters?: boolean;
    offset?: boolean;
    gutter?: Space;
    columns?: ColumnLength;
    tablet?: ColumnLength;
    desktop?: ColumnLength;
    wide?: ColumnLength;
    className?: string;
} & Omit<BoxProps, 'className'> & P;
/**
 * Row component
 * @param props
 * @constructor
 */
export declare const Row: {
    ({ children, gutter, noGutters, offset, className, tablet, desktop, wide, ...boxProps }: PropsWithChildren<RowProps<unknown>>): JSX.Element;
    displayName: string;
};
