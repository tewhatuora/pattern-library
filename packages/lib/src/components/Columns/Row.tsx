import { PropsWithChildren, useContext, useMemo } from 'react';

import { Box, BoxProps } from '../Box/Box';
import { ParentColumnContext } from './Column';
import { Space } from '../../css/atoms/atoms';
import rowStyles from '../../utils/rowStyles';
import * as styles from './Row.css';

export const RowStyles = styles;

export type RowProps<P> = {
  noGutters?: boolean;
  offset?: boolean;
  gutter?: Space;
  className?: string;
} & Omit<BoxProps, 'className'> &
  P;

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
  ...boxProps
}: PropsWithChildren<RowProps<unknown>>) => {
  const parentCols = useContext(ParentColumnContext);
  const classNames = useMemo(() => {
    return rowStyles({ gutter, noGutters, offset, parentCols: parentCols?.columns, className: className });
  }, [gutter, noGutters, offset, parentCols, className]);

  return (
    <Box as="div" {...boxProps} className={classNames}>
      {children}
    </Box>
  );
};

Row.displayName = 'Row';
