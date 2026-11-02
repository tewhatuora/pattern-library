import { PropsWithChildren, createContext, useContext } from 'react';
import { clsx } from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { BreakpointContext } from '../ThemeProvider/BreakpointContext';
import { Breakpoint } from '../../css/breakpoints';
import { MAX_COLS } from '../../css/grid';
import columnStyles from '../../utils/columnStyles';

import * as styles from './Column.css';

export const ColumnStyles = styles;

export type ColumnLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const ParentColumnContext = createContext<{ columns: ColumnLength }>({ columns: MAX_COLS });

type BreakpointColumn = Partial<Record<Breakpoint, ColumnLength>>;

export type ColumnProps = {
  /** Width in grid columns (1 to 12) at every breakpoint that has no override below. Relative to the parent `Column` or the 12 column `Row`. */
  columns: ColumnLength;
  /**
   * Grid line the column starts at (1 to 12).
   * @default 1
   */
  start?: ColumnLength;
  /** Width in columns from the wide breakpoint (1280px) up, overriding `columns`. */
  wide?: ColumnLength;
  /** Width in columns from the desktop breakpoint (1024px) up, overriding `columns`. */
  desktop?: ColumnLength;
  /** Width in columns from the tablet breakpoint (768px) up, overriding `columns`. */
  tablet?: ColumnLength;
  /** Width in columns on mobile, overriding `columns`. */
  mobile?: ColumnLength;
  /** Centres the column within its parent, ignoring `start`. Needs the parent's leftover columns to be even, e.g. a 6 column Column in a 12 column Row. */
  center?: boolean;
  className?: string;
} & BoxProps &
  BreakpointColumn;

/**
 * One cell of a 12 column grid. Place inside a `Row`. A Column's own `Row` children are laid out on that Column's grid.
 * The breakpoint props take effect only for the viewport matching that breakpoint, as reported by the theme provider.
 *
 * @example
 * <Container>
 *   <Row>
 *     <Column columns={12} desktop={8}>Main</Column>
 *     <Column columns={12} desktop={4}>Aside</Column>
 *   </Row>
 * </Container>
 */
export const Column = ({
  children,
  columns = MAX_COLS,
  center,
  start = 1,
  className,
  wide,
  desktop,
  tablet,
  mobile,
  ...boxProps
}: PropsWithChildren<ColumnProps>) => {
  const parentColumn = useContext(ParentColumnContext);
  const breakpoint = useContext(BreakpointContext);
  const sizesForViewport = { wide, desktop, tablet, mobile };
  const cols = (breakpoint && sizesForViewport?.[breakpoint] ? sizesForViewport?.[breakpoint] : columns) || columns;
  const leftoverColumns = (parentColumn.columns - cols) / 2;

  const startPos = (center ? leftoverColumns + 1 : start) as ColumnLength;
  const classNames = columnStyles({ columns: cols, start: startPos });

  return (
    <ErrorBoundary>
      <ParentColumnContext.Provider value={{ columns: cols }}>
        <Box as="div" className={clsx(classNames, className)} {...boxProps}>
          {children}
        </Box>
      </ParentColumnContext.Provider>
    </ErrorBoundary>
  );
};

Column.displayName = 'Column';
