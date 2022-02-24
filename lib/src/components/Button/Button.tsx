import * as React from 'react';

import { Text } from '../Text/Text';

import { ReactNodeNoStrings } from '../../types';
import { Box, BoxProps } from '../Box/Box';
import * as styles from './Button.css';

type ButtonProps = {
  suffix?: ReactNodeNoStrings;
  variant?: styles.Variant;
} & Pick<
  JSX.IntrinsicElements['button'],
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'
> &
  Pick<BoxProps, 'width' | 'justifyContent'>;

export const Button = React.forwardRef(
  ({ children, variant = 'primary', type = 'button', ...boxProps }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
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
        <Text size="standard" weight="bold">
          {children}
        </Text>
      </Box>
    );
  },
);

Button.displayName = 'Button';
