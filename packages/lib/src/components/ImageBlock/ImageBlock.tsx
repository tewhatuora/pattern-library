import { Column, ColumnLength } from '../Columns/Column';
import { IconType } from '../Icon/icons';
import * as styles from './ImageBlock.css';

export const ImageBlockStyles = styles;

export type ImageBlockProps = {
  alt: string;
  src?: string | IconType;
  shape: 'square' | 'rectangle';
  rows?: number;
  width: 'full' | 'half' | 'third';
};

// } & (Full | Half | Third);
// type Full = { size: 'full' };
// type Half = { size: 'half'; position: 'left' | 'right' };
// type Third = { size: 'third'; position: 'left' | 'middle' | 'right' };

/**
 * Further content for an input field.
 * @constructor
 */
export const ImageBlock = ({ alt, src, width }: ImageBlockProps) => {
  return (
    <Column columns={columnLengths[width]}>
      <img alt={alt} src={src} />
      {/* Content */}
    </Column>
  );
};

ImageBlock.displayName = 'ImageBlock';

const columnLengths: Record<string, ColumnLength> = {
  full: 12,
  half: 6,
  third: 4,
};
