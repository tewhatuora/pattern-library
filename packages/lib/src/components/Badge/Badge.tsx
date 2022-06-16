import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './Badge.css';

export const BadgeStyles = styles;

export type BadgeProps = {
  variant: styles.Variant;
} & Pick<
  JSX.IntrinsicElements['button'],
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'
>;

/**
 * Badge component for static labels
 * @constructor
 */
export const Badge = ({ variant = 'neutral', children, ...boxProps }: BadgeProps) => {
  return (
    <Box
      as="div"
      className={styles.variants({
        variant,
      })}
      role="status"
      // Passed-through boxProps.
      // Note: Default values for boxProps need to be
      // assigned after the {...boxProps} spread below
      {...boxProps}
    >
      <Text size="xsmall" weight="bold">
        {children}
      </Text>
    </Box>
  );
};

Badge.displayName = 'Badge';
