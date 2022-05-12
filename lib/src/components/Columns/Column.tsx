import * as React from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import * as styles from './Column.css';

type ColumnLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnProps = {
  columns: ColumnLength;
  noGutters?: boolean;
  push?: ColumnLength;
  pull?: ColumnLength;
  center?: boolean;
  children?: React.ReactNode;
};

/**
 * Column component
 * @param props
 * @constructor
 */
export const Column = ({ children, columns = 12, push, pull, center, noGutters, ...boxProps }: ColumnProps) => {
  const optionalClasses = {
    [styles.noGutters]: noGutters,
    [styles.gutter.xsmall]: !noGutters,
    [styles.center]: center,
  };

  if (push && !center) {
    optionalClasses[styles.push[push]] = true;
  }

  if (pull && !center) {
    optionalClasses[styles.pull[pull]] = true;
  }

  return (
    <Box as="div" className={clsx(optionalClasses, styles.width[columns])} {...boxProps}>
      {children}
    </Box>
  );
};

Column.displayName = 'Column';
