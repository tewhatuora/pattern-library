import { PropsWithChildren, Ref, RefObject, forwardRef } from 'react';
import { useButton } from '@react-aria/button';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { ButtonProps } from './Button';

import * as styles from './Button.css';

export type ButtonRootProps = PropsWithChildren<ButtonProps>;

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { role, ...restButtonProps } = buttonProps;

  return (
    <Box {...restButtonProps} {...boxProps} as={as} className={clsx(styles.root, className)} href={href} ref={ref}>
      {children}
    </Box>
  );
});
