import { createContext, useContext } from 'react';
import clsx from 'clsx';

import assert from 'assert';

import { Box } from '../Box/Box';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import * as styles from './Column.css';

export const ParentColumnContext = createContext({ columns: 12 });

type ColumnLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnProps = {
  columns: ColumnLength;
  start?: ColumnLength;
  center?: boolean;
  children?: React.ReactNode;
};

/**
 * Column component
 * @param props
 * @constructor
 */
export const Column = ({ children, columns = 12, center, start = 1, ...boxProps }: ColumnProps) => {
  const parentColumn = useContext(ParentColumnContext);
  const startPos = center ? (parentColumn.columns - columns) / 2 + 1 : start;

  if (center) {
    assert(
      startPos % 2 === 0,
      `Cannot center a ${columns} column component within an ${parentColumn?.columns} column container`,
    );
  }

  return (
    <ErrorBoundary>
      <ParentColumnContext.Provider value={{ columns }}>
        <Box as="div" className={clsx(styles.width[columns], styles.start[startPos])} {...boxProps}>
          {children}
        </Box>
      </ParentColumnContext.Provider>
    </ErrorBoundary>
  );
};

Column.displayName = 'Column';
