import clsx from 'clsx';

import * as styles from '../components/Columns/Row.css';

import { RowProps } from '../components/Columns/Row';
import { ColumnLength } from '../components/Columns/Column';
import { MAX_COLS } from '../css/grid';

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
const rowStyles = ({
  gutter = 'medium',
  noGutters,
  offset,
  tablet = MAX_COLS,
  desktop,
  wide,
  parentCols,
  className,
}: RowProps<{ parentCols?: ColumnLength }>) => {
  const dynamicClasses = {
    [styles.noGutters]: noGutters,
    [styles.gutter[gutter]]: !noGutters,
    [styles.offset[gutter]]: offset,
  };

  if (parentCols) {
    dynamicClasses[styles.nested[parentCols?.toString()]] = true;
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

export default rowStyles;
