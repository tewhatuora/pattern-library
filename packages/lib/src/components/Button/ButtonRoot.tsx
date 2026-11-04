import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes, RefObject, forwardRef } from 'react';
import { useButton } from '@react-aria/button';
import { clsx } from 'clsx';

import { Box } from '../Box/Box';
import { ButtonProps } from './Button';

import * as styles from './Button.css';

export type ButtonRootProps = PropsWithChildren<ButtonProps>;

// Typed explicitly so the declaration file names ButtonRootProps instead of inlining it, which would reference
// react-aria (where @react-aria/interactions re-exports PressEvent from), a package consumers may not resolve

/**
 * Button behaviour (press handling, disabled state, keyboard) without Button's visual styles.
 * Use it for custom-styled controls such as icon-only buttons; it takes the same props as `Button`.
 * Without visible text, pass an `aria-label`.
 *
 * @example
 * <ButtonRoot aria-label="Open menu" onPress={() => setOpen(true)}>
 *   <Icon icon="menu" />
 * </ButtonRoot>
 */
export const ButtonRoot: ForwardRefExoticComponent<ButtonRootProps & RefAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  ButtonRootProps
>((props, ref) => {
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
