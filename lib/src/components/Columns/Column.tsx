import * as React from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import * as styles from './Column.css';

type ColumnLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnProps = {
  noGutters?: boolean;
  columns: ColumnLength;
  children?: React.ReactNode;
};

/**
 * Column component
 * @param props
 * @constructor
 */
export const Column = ({ children, columns = 12, noGutters, ...boxProps }: ColumnProps) => {
  return (
    <Box
      as="div"
      className={clsx(
        {
          [styles.noGutters]: noGutters,
          [styles.gutter.xsmall]: !noGutters,
        },
        styles.width[columns],
      )}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

Column.displayName = 'Column';
