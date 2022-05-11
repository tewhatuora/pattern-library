import { ReactNode } from 'react';
import * as React from 'react';

import { Box } from '../Box/Box';
import * as styles from './Columns.css';

export type ColumnsProps = {
  children?: ReactNode;
};

/**
 * Columns component
 * @param props
 * @constructor
 */
export const Columns = ({ children, ...boxProps }: ColumnsProps) => {
  return (
    <Box as="div" className={styles.columns} {...boxProps}>
      {children}
    </Box>
  );
};

Columns.displayName = 'Columns';
