import React, { ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import * as styles from './Row.css';
import { ParentColumnContext } from '../../components/Columns/Column';

export type RowProps = {
  children?: ReactNode;
  noGutters?: boolean;
};

/**
 * Columns component
 * @param props
 * @constructor
 */
export const Row = ({ children, noGutters, ...boxProps }: RowProps) => {
  const parentCols = useContext(ParentColumnContext);

  const dynamicClasses = {
    [styles.noGutters]: noGutters,
    [styles.gutter.medium]: !noGutters,
  };

  if (parentCols?.columns) {
    dynamicClasses[styles.nested[parentCols.columns]] = true;
  }

  const classNames = clsx(dynamicClasses, styles.row);

  return (
    <Box as="div" className={classNames} {...boxProps}>
      {children}
    </Box>
  );
};

Row.displayName = 'Row';
