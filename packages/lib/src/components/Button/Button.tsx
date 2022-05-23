import { forwardRef, Ref } from 'react';
import { Text } from '../Text/Text';

import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import * as styles from './Button.css';

export type ButtonProps = {
  icon?: string;
  variant?: styles.Variant;
} & Pick<
  JSX.IntrinsicElements['button'],
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'
> &
  Pick<BoxProps, 'width' | 'justifyContent'>;

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
export const Button = forwardRef(
  (
    { children, variant = 'primary', type = 'button', icon, ...boxProps }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <Box
        as="button"
        className={styles.variants({
          variant,
        })}
        ref={ref}
        type={type}
        // Passed-through boxProps.
        // Note: Default values for boxProps need to be
        // assigned after the {...boxProps} spread below
        {...boxProps}
      >
        <Text size="medium" weight="bold">
          {children}
        </Text>

        {!!icon && <Icon className={styles.buttonIcon} icon={icon} />}
      </Box>
    );
  },
);

Button.displayName = 'Button';
