import { Box } from '../Box/Box';

import * as styles from './Card.css';

export type CardProps = {
  hasShadow?: boolean;
} & Pick<
  JSX.IntrinsicElements['button'],
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'
>;

/**
 * Badge component for static labels
 * @constructor
 */
export const Card = ({ hasShadow = false, children, ...boxProps }: CardProps) => {
  return (
    <Box
      as="div"
      className={styles.variants({
        hasShadow,
      })}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

Card.displayName = 'Card';
