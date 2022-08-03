import { PropsWithChildren, useContext, useMemo } from 'react';
import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import { ColumnLength, ParentColumnContext } from './Column';
import { Space } from '../../css/atoms/atoms';
import { MAX_COLS } from '../../css/grid';

import * as styles from './Row.css';

export const RowStyles = styles;

export type RowProps<P> = {
  noGutters?: boolean;
  offset?: boolean;
  gutter?: Space;
  columns?: ColumnLength;
  tablet?: ColumnLength;
  desktop?: ColumnLength;
  wide?: ColumnLength;
  className?: string;
} & Omit<BoxProps, 'className'> &
  P;

/**
 * Row styles
 * Return CSS classNames for a Row
 * @param params Row style parameters
 * @param {Space} params.gutter Gutter space token name, e.g. 'medium'
 * @param {Boolean} params.noGutters Remove gutters
 * @param {Boolean} params.offset Offset the row into it's parent's gutters
 * @param {Number} params.parentCols Amount of columns the parent Column has
 * @param {String} params.className Additional className
 */
export const rowStyles = ({
  gutter = 'medium',
  noGutters,
  offset,
  tablet = MAX_COLS,
  desktop = MAX_COLS,
  wide = MAX_COLS,
  parentCols = MAX_COLS,
  className,
}: RowProps<{ parentCols?: number }>) => {
  const dynamicClasses = {
    [styles.noGutters]: noGutters,
    [styles.gutter[gutter]]: !noGutters,
    [styles.offset[gutter]]: offset,
  };

  if (parentCols !== MAX_COLS) {
    dynamicClasses[styles.nested[parentCols.toString()]] = true;
  }

  return clsx(
    dynamicClasses,
    styles.responsiveRow({
      tablet,
      desktop,
      wide,
    }),
    className,
  );
};

/**
 * Row component
 * @param props
 * @constructor
 */
export const Row = ({
  children,
  gutter = 'medium',
  noGutters,
  offset,
  className,
  tablet = MAX_COLS,
  desktop = MAX_COLS,
  wide = MAX_COLS,
  ...boxProps
}: PropsWithChildren<RowProps<unknown>>) => {
  const parentCols = useContext(ParentColumnContext);
  const classNames = useMemo(() => {
    return rowStyles({ gutter, noGutters, offset, tablet, desktop, wide, parentCols: parentCols?.columns, className });
  }, [gutter, noGutters, offset, tablet, desktop, wide, parentCols, className]);

  return (
    <Box as="div" {...boxProps} className={classNames}>
      {children}
    </Box>
  );
};

Row.displayName = 'Row';
