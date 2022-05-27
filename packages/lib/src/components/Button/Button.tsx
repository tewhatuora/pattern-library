import { ElementType, forwardRef, Ref, RefObject } from 'react';
import { useButton } from '@react-aria/button';
import clsx from 'clsx';

import { Text } from '../Text/Text';
import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './Button.css';

type KeysUnder<T, K extends PropertyKey> = T extends object
  ? {
      [P in keyof T]-?: (P extends K ? keyof T[P] : never) | KeysUnder<T[P], K>;
    }[keyof T]
  : never;

type IconVariant = KeysUnder<styles.Variants, 'icon'>;
type ColorVariant = KeysUnder<styles.Variants, 'color'>;

export type ButtonProps = {
  icon?: IconType;
  iconPosition?: IconVariant;
  as?: ElementType;
  className?: string;
  label?: string;
  variant?: ColorVariant;
  onPress?: (e: any) => void;
} & Pick<JSX.IntrinsicElements['button'], 'children' | 'disabled' | 'type' | 'tabIndex'> &
  Pick<BoxProps, 'width' | 'justifyContent'>;

export const ButtonRoot = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement> | null) => {
  const { children, label, as = 'button', type = 'button', className, icon, onPress, ...boxProps } = props;

  const { buttonProps } = useButton(
    {
      ...props,
      elementType: as,
    },
    ref as RefObject<HTMLButtonElement>,
  );

  return (
    <Box
      as={as}
      className={clsx(styles.root, className)}
      ref={ref}
      type={type}
      {...buttonProps}
      {...boxProps}
      aria-label={label}
    >
      {children}
    </Box>
  );
});

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
export const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement> | null) => {
  const {
    children,
    as = 'button',
    type = 'button',
    variant = 'primary',
    label,
    disabled,
    className,
    icon,
    iconPosition = 'right',
    onPress,
    ...boxProps
  } = props;

  return (
    <ButtonRoot
      as={as}
      className={clsx(
        styles.variants({
          color: variant,
          icon: iconPosition,
        }),
        className,
      )}
      ref={ref}
      type={type}
      label={label}
      disabled={disabled}
      onPress={onPress}
      {...boxProps}
    >
      <Text size="medium" weight="bold">
        {children}
      </Text>

      {!!icon && <Icon icon={icon} variant="functionalIcons" />}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';
