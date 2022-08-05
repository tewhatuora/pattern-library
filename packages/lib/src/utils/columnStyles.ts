import clsx from 'clsx';

import * as styles from '../components/Columns/Column.css';

import { ColumnLength } from '../components/Columns/Column';

/**
 * Column styles
 * Returns CSS classNames for a Column
 * @param params Column style parameters
 * @param {Number} params.columns Amount of columns, e.g. 8
 * @param {Number} params.start Start position for the column. E.g., to center a 6 column element within an 8 column container, use start = 1
 */
const columnStyles = ({ columns = 12, start = 1 }: { columns: ColumnLength; start?: ColumnLength }) => {
  return clsx(styles.width[columns], styles.start[start]);
};

export default columnStyles;
