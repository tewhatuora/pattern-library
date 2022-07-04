import { PropsWithChildren, useContext, useMemo } from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { ParentColumnContext } from './Column';
import { Space } from '../../css/atoms/atoms';

import * as styles from './Row.css';

export const RowStyles = styles;

export type RowProps<P> = {
  noGutters?: boolean;
  offset?: boolean;
  gutter?: Space;
} & P;

/**
 * Row styles
 * Return CSS classNames for a Row
 * @param {Space} gutter Gutter space token name, e.g. 'medium'
 * @param {Boolean} noGutters Remove gutters
 * @param {Boolean} offset Offset the row into it's parent's gutters
 * @param {Number} parentCols Amount of columns the parent Column has
 */
export const rowStyles = ({ gutter = 'medium', noGutters, offset, parentCols }: RowProps<{ parentCols?: number }>) => {
  const dynamicClasses = {
    [styles.noGutters]: noGutters,
    [styles.gutter[gutter]]: !noGutters,
    [styles.offset[gutter]]: offset,
  };

  if (parentCols) {
    dynamicClasses[styles.nested[parentCols?.toString()]] = true;
  }

  return clsx(dynamicClasses, styles.row);
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
  ...boxProps
}: PropsWithChildren<RowProps<unknown>>) => {
  const parentCols = useContext(ParentColumnContext);
  const classNames = useMemo(() => {
    return rowStyles({ gutter, noGutters, offset, parentCols: parentCols?.columns });
  }, [gutter, noGutters, offset, parentCols]);

  return (
    <Box as="div" className={classNames} {...boxProps}>
      {children}
    </Box>
  );
};

Row.displayName = 'Row';
