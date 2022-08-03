import { PropsWithChildren, createContext, useContext } from 'react';
import clsx from 'clsx';

import assert from 'assert';

import { Box, BoxProps } from '../Box/Box';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { BreakpointContext } from '../ThemeProvider/BreakpointContext';
import { Breakpoint } from '../../css/breakpoints';

import * as styles from './Column.css';

export const ColumnStyles = styles;

export const ParentColumnContext = createContext({ columns: 12 });

type ColumnLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type BreakpointColumn = Partial<Record<Breakpoint, ColumnLength>>;

export type ColumnProps = {
  columns: ColumnLength;
  start?: ColumnLength;
  center?: boolean;
  className?: string;
} & BoxProps &
  BreakpointColumn;

/**
 * Column styles
 * Returns CSS classNames for a Column
 * @param params Column style parameters
 * @param {Number} params.columns Amount of columns, e.g. 8
 * @param {Number} params.start Start position for the column. E.g., to center a 6 column element within an 8 column container, use start = 1
 */
export const columnStyles = ({ columns = 12, start = 1 }: { columns: ColumnLength; start?: ColumnLength }) => {
  return clsx(styles.width[columns], styles.start[start]);
};

/**
 * Column component
 * @param props
 * @constructor
 */
export const Column = ({
  children,
  columns = 12,
  center,
  start = 1,
  className,
  wide,
  desktop,
  tablet,
  mobile,
  ...boxProps
}: PropsWithChildren<ColumnProps>) => {
  const parentColumn = useContext(ParentColumnContext);
  const breakpoint = useContext(BreakpointContext);
  const sizesForViewport = { wide, desktop, tablet, mobile };
  const cols = (breakpoint && sizesForViewport?.[breakpoint] ? sizesForViewport?.[breakpoint] : columns) || columns;
  const leftoverColumns = (parentColumn.columns - cols) / 2;

  if (center) {
    assert(
      leftoverColumns % 2 === 0,
      `Cannot center a ${cols} column component within an ${parentColumn?.columns} column container`,
    );
  }

  const startPos = (center ? leftoverColumns + 1 : start) as ColumnLength;
  const classNames = columnStyles({ columns: cols, start: startPos });

  return (
    <ErrorBoundary>
      <ParentColumnContext.Provider value={{ columns: cols }}>
        <Box as="div" className={clsx(classNames, className)} {...boxProps}>
          {children}
        </Box>
      </ParentColumnContext.Provider>
    </ErrorBoundary>
  );
};

Column.displayName = 'Column';
