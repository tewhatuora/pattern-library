import { RowProps } from '../components/Columns/Row';
import { ColumnLength } from '../components/Columns/Column';
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
declare const rowStyles: ({ gutter, noGutters, offset, tablet, desktop, wide, parentCols, className, }: RowProps<{
    parentCols?: ColumnLength | undefined;
}>) => string;
export default rowStyles;
