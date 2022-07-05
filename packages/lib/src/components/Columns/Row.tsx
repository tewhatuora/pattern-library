import { PropsWithChildren, useContext, useMemo } from 'react';
import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import { ParentColumnContext } from './Column';
import { Space } from '../../css/atoms/atoms';

import * as styles from './Row.css';

export const RowStyles = styles;

export type RowProps = {
  noGutters?: boolean;
  offset?: boolean;
  gutter?: Space;
} & BoxProps;

/**
 * Row component
 * @param props
 * @constructor
 */
export const Row = ({ children, gutter = 'medium', noGutters, offset, ...boxProps }: PropsWithChildren<RowProps>) => {
  const parentCols = useContext(ParentColumnContext);

  const classNames = useMemo(() => {
    const dynamicClasses = {
      [styles.noGutters]: noGutters,
      [styles.gutter[gutter]]: !noGutters,
      [styles.nested[parentCols.columns]]: !!parentCols?.columns,
      [styles.offset[gutter]]: offset,
    };

    return clsx(dynamicClasses, styles.row);
  }, [parentCols, noGutters, offset, gutter]);

  return (
    <Box as="div" className={classNames} {...boxProps}>
      {children}
    </Box>
  );
};

Row.displayName = 'Row';
