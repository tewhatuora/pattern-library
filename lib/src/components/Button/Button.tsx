import * as React from 'react';

import { ReactNodeNoStrings } from '../../types';
import { Box, BoxProps } from '../Box/Box';
import * as styles from './styles.css';

type BaseProps = {
  suffix?: ReactNodeNoStrings;
  variant?: styles.Variant;
} & Pick<
  JSX.IntrinsicElements['button'],
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'
> &
  Pick<BoxProps, 'width' | 'justifyContent'>;

type WithAnchor = {
  as?: 'a';
} & Pick<JSX.IntrinsicElements['a'], 'href' | 'rel' | 'target'>;

type WithoutAnchor = {
  as?: 'button';
};

export type Props = BaseProps & (WithAnchor | WithoutAnchor);

export const Button = React.forwardRef(
  ({ children, variant = 'primary', ...boxProps }: Props, ref: React.Ref<HTMLButtonElement>) => {
    return (
      <Box
        className={styles.variants({
          variant,
        })}
        ref={ref}
        // Passed-through boxProps.
        // Note: Default values for boxProps need to be
        // assigned after the {...boxProps} spread below
        {...boxProps}
        as={boxProps.as ?? 'button'}
      >
        {children}
      </Box>
    );
  },
);

Button.displayName = 'Button';
