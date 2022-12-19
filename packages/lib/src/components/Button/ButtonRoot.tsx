import { PropsWithChildren, Ref, RefObject, forwardRef } from 'react';
import { useButton } from '@react-aria/button';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { ButtonType } from './Button';

import * as styles from './Button.css';

export type ButtonRootProps = PropsWithChildren<ButtonType<Record<string, unknown>>>;

/**
 * Accessible button component without Button UI styles
 */
export const ButtonRoot = forwardRef((props: ButtonRootProps, ref: Ref<HTMLButtonElement> | null) => {
  const { children, as = 'button', type = 'button', disabled, className, href, onPress, ...boxProps } = props;

  const { buttonProps } = useButton(
    {
      type,
      onPress,
      isDisabled: disabled,
      elementType: as,
    },
    ref as RefObject<HTMLButtonElement>,
  );

  return (
    <Box
      {...buttonProps}
      {...boxProps}
      as={as}
      className={clsx(styles.root, className)}
      href={href}
      ref={ref}
      type={type}
    >
      {children}
    </Box>
  );
});
