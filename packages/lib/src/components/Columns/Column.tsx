import { PropsWithChildren, createContext, useContext } from 'react';
import clsx from 'clsx';

import assert from 'assert';

import { Box } from '../Box/Box';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import * as styles from './Column.css';

export const ColumnStyles = styles;

export const ParentColumnContext = createContext({ columns: 12 });

type ColumnLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnProps = {
  columns: ColumnLength;
  start?: ColumnLength;
  center?: boolean;
};

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
export const Column = ({ children, columns = 12, center, start = 1, ...boxProps }: PropsWithChildren<ColumnProps>) => {
  const parentColumn = useContext(ParentColumnContext);
  const startPos = (center ? (parentColumn.columns - columns) / 2 + 1 : start) as ColumnLength;
  const className = columnStyles({ columns, start: startPos });

  if (center) {
    assert(
      startPos % 2 === 0,
      `Cannot center a ${columns} column component within an ${parentColumn?.columns} column container`,
    );
  }

  return (
    <ErrorBoundary>
      <ParentColumnContext.Provider value={{ columns }}>
        <Box as="div" className={className} {...boxProps}>
          {children}
        </Box>
      </ParentColumnContext.Provider>
    </ErrorBoundary>
  );
};

Column.displayName = 'Column';
