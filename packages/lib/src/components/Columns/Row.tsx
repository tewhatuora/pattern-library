import { PropsWithChildren, useContext, useMemo } from 'react';

import { Box, BoxProps } from '../Box/Box';
import { ColumnLength, ParentColumnContext } from './Column';
import { Space } from '../../css/atoms/atoms';
import rowStyles from '../../utils/rowStyles';

import * as styles from './Row.css';

export const RowStyles = styles;

export type RowProps<P> = {
  /** Removes the gap between columns. Overrides `gutter`. */
  noGutters?: boolean;
  /** Pulls the row out into its parent's gutters from tablet up, so nested content lines up with the outer edge. Sized by `gutter`. */
  offset?: boolean;
  /**
   * Space token for the gap between columns.
   * @default 'medium'
   */
  gutter?: Space;
  /** Not used by `Row`. Set the width on the `Column` instead. */
  columns?: ColumnLength;
  /**
   * Number of grid columns from the tablet breakpoint (768px) up.
   * @default 12
   */
  tablet?: ColumnLength;
  /** Number of grid columns from the desktop breakpoint (1024px) up. Inherits `tablet` when omitted. */
  desktop?: ColumnLength;
  /** Number of grid columns from the wide breakpoint (1280px) up. Inherits the smaller breakpoint when omitted. */
  wide?: ColumnLength;
  className?: string;
} & Omit<BoxProps, 'className'> &
  P;

/**
 * Grid row that holds `Column` components. Stacks on mobile, then uses a 12 column grid from tablet up.
 * A Row inside a `Column` uses that Column's width as its column count.
 *
 * @example
 * <Row gutter="large">
 *   <Column columns={6}>Left</Column>
 *   <Column columns={6}>Right</Column>
 * </Row>
 */
export const Row = ({
  children,
  gutter = 'medium',
  noGutters,
  offset,
  className,
  tablet,
  desktop,
  wide,
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
