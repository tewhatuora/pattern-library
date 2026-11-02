import type { JSX } from 'react';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './Badge.css';

export const BadgeStyles = styles;

export type BadgeProps = {
  /**
   * Colour scheme: `positive`, `info`, `neutral`, `caution` or `critical`.
   * @default 'neutral'
   */
  variant?: styles.Variant;
} & Pick<
  JSX.IntrinsicElements['button'],
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'
>;

/**
 * Small static label, e.g. a status. Rendered as a `div`, so it is not interactive even though it accepts click props.
 *
 * @example
 * <Badge variant="positive">Active</Badge>
 */
export const Badge = ({ variant = 'neutral', children, ...boxProps }: BadgeProps) => {
  return (
    <Box
      as="div"
      className={styles.variants({
        variant,
      })}
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
