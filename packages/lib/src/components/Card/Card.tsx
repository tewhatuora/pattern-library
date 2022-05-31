import clsx from 'clsx';
import { Box } from '../Box/Box';

import * as styles from './Card.css';

export type CardProps = {
  noShadow?: boolean;
  className?: string;
} & Pick<
  JSX.IntrinsicElements['div'], 'children'
>;

/**
 * Card for building 2D layouts using grids or to contain content.
 * @constructor
 */
export const Card = ({ hasShadow = false, children, className, ...boxProps }: CardProps) => {
  return (
    <Box
      as="div"
      className={clsx({
        [styles.variant.noShadow]: noShadow
      },
        className,
      )}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

Card.displayName = 'Card';
